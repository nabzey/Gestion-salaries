import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import mysql from 'mysql2/promise';
import { execSync } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Démarrage du seed...');

  // 1. Suppression de l'entreprise de démonstration si elle existe
  const existing = await prisma.entreprises.findUnique({ 
    where: { dbName: 'tenant_demo' } 
  });
  
  if (existing) {
    console.log('🗑️ Suppression de l\'ancienne entreprise de démonstration...');
    await prisma.users.deleteMany({ where: { entrepriseId: existing.id } });
    await prisma.entreprises.delete({ where: { id: existing.id } });
    
    // Supprimer la base de données tenant correspondante
    const connection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'zeynab',
      password: 'Diamniadio14@'
    });
    await connection.query(`DROP DATABASE IF EXISTS \`tenant_demo\``);
    await connection.end();
    console.log('✅ Ancienne entreprise et base tenant supprimées.');
  }

  // 2. Création du SUPER_ADMIN (non rattaché à une entreprise)
  console.log('👤 Création du Super Admin...');
  const hashedPasswordSuperAdmin = await bcrypt.hash('superadmin123', 10);
  
  // Vérifier si le super admin existe déjà
  const existingSuperAdmin = await prisma.users.findUnique({
    where: { email: 'superadmin@example.com' }
  });

  let superAdmin;
  if (existingSuperAdmin) {
    console.log('ℹ️ Super Admin existe déjà.');
    superAdmin = existingSuperAdmin;
  } else {
    superAdmin = await prisma.users.create({
      data: {
        email: 'superadmin@example.com',
        password: hashedPasswordSuperAdmin,
        role: 'SUPER_ADMIN',
        nom: 'Super Admin',
        entrepriseId: null,
      },
    });
    console.log('✅ Super Admin créé avec succès!');
  }

  // 3. Création d'une entreprise de démonstration avec dbName
  console.log('🏢 Création de l\'entreprise de démonstration...');
  const entreprise = await prisma.entreprises.create({
    data: {
      nom: 'Entreprise Démo',
      logo: null,
      adresse: 'Dakar, Sénégal',
      paiement: 'XOF',
      dbName: 'tenant_demo',
    },
  });
  console.log(`✅ Entreprise créée avec ID: ${entreprise.id}`);

  // 4. Création de la base de données tenant correspondante
  console.log('🗄️ Création de la base de données tenant...');
  const dbName = entreprise.dbName!;
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'zeynab',
    password: 'Diamniadio14@'
  });
  
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  await connection.end();
  console.log(`✅ Base de données tenant créée: ${dbName}`);

  // 5. Application des migrations Prisma sur la base tenant
  console.log('🔧 Application des migrations sur la base tenant...');
const tenantUrl = `mysql://zeynab:Diamniadio14%40@127.0.0.1:3306/${dbName}`;
  
  try {
    process.env.TENANT_DATABASE_URL = tenantUrl;
    execSync(
      `npx prisma db push --schema=prisma/tenant-schema.prisma --accept-data-loss`,
      { stdio: 'inherit' }
    );
    console.log('✅ Migrations appliquées sur la base tenant');
  } catch (err) {
    console.error('❌ Erreur lors de l\'application des migrations:', err);
    throw err;
  }

  // 6. Création d'un ADMIN rattaché à l'entreprise
  console.log('👤 Création de l\'Admin...');
  const hashedPasswordAdmin = await bcrypt.hash('admin123', 10);
  const admin = await prisma.users.create({
    data: {
      email: 'admin@demo.com',
      password: hashedPasswordAdmin,
      role: 'ADMIN',
      nom: 'Admin Démo',
      entrepriseId: entreprise.id,
    },
  });
  console.log('✅ Admin créé avec succès!');

  // 7. Création d'un CAISSIER rattaché à l'entreprise
  console.log('👤 Création du Caissier...');
  const hashedPasswordCaissier = await bcrypt.hash('caissier123', 10);
  const caissier = await prisma.users.create({
    data: {
      email: 'caissier@demo.com',
      password: hashedPasswordCaissier,
      role: 'CAISSIER',
      nom: 'Caissier Démo',
      entrepriseId: entreprise.id,
    },
  });
  console.log('✅ Caissier créé avec succès!');

  // 8. Résumé
  console.log('\n✅ ═══════════════════════════════════════════════');
  console.log('✅ SEED TERMINÉ AVEC SUCCÈS !');
  console.log('✅ ═══════════════════════════════════════════════');
  console.log('\n📊 Comptes créés:');
  console.log('─────────────────────────────────────────────────');
  console.log(`🔑 Super Admin: superadmin@example.com / superadmin123`);
  console.log(`🔑 Admin: admin@demo.com / admin123`);
  console.log(`🔑 Caissier: caissier@demo.com / caissier123`);
  console.log('─────────────────────────────────────────────────');
  console.log(`🏢 Entreprise: ${entreprise.nom} (ID: ${entreprise.id})`);
  console.log(`🗄️ Base tenant: ${dbName}`);
  console.log('═══════════════════════════════════════════════\n');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });