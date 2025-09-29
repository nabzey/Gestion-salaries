import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import mysql from 'mysql2/promise';

const prisma = new PrismaClient();

async function main() {
  // Suppression si l'entreprise existe déjà (et les users liés)
  const existing = await prisma.entreprises.findUnique({ where: { dbName: 'tenant_1' } });
  if (existing) {
    await prisma.users.deleteMany({ where: { entrepriseId: existing.id } });
    await prisma.entreprises.delete({ where: { id: existing.id } });
    console.log('Ancienne entreprise et utilisateurs liés supprimés.');
  }

  // Création d'une entreprise avec dbName
  const entreprise = await prisma.entreprises.create({
    data: {
      nom: 'Entreprise Démo',
      logo: null,
      adresse: 'Dakar',
      paiement: 'XOF',
      dbName: 'tenant_1',
    },
  });

  // Création de la base de données tenant correspondante
  const dbName = entreprise.dbName;
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'zeynab', // adapte selon ton .env
    password: 'Diamniadio14@'
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  await connection.end();

  // Appliquer les migrations Prisma sur la base tenant nouvellement créée
  const { execSync } = require('child_process');
  const tenantUrl = `mysql://zeynab:Diamniadio14@127.0.0.1:3306/${dbName}`;
  try {
    execSync(`npx prisma migrate deploy --schema=prisma/tenant-schema.prisma --url="${tenantUrl}"`, { stdio: 'inherit' });
    console.log('Migration Prisma appliquée sur la base tenant:', dbName);
  } catch (err) {
    console.error('Erreur lors de la migration Prisma sur la base tenant:', err);
  }

  // Création d'un super admin (non rattaché à une entreprise)
  const hashedPassword = await bcrypt.hash('superadmin123', 10);
  const superAdmin = await prisma.users.create({
    data: {
      email: 'superadmin@example.com',
      password: hashedPassword,
      role: 'SUPER_ADMIN',
      nom: 'Super Admin',
      entrepriseId: null,
    },
  });

  // Création d'un admin rattaché à l'entreprise
  const hashedAdmin = await bcrypt.hash('admin123', 10);
  const admin = await prisma.users.create({
    data: {
      email: 'admin@example.com',
      password: hashedAdmin,
      role: 'ADMIN',
      nom: 'Admin Demo',
      entrepriseId: entreprise.id,
    },
  });

  console.log('Entreprise, base tenant, Super Admin et Admin créés !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
