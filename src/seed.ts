import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('superadmin123', 10);

  const superAdmin = await prisma.users.create({
    data: {
      email: 'superadmin2@example.com',
      password: hashedPassword,
      role: 'SUPER_ADMIN',
      nom: 'Super Admin',
      entrepriseId: null,
    },
  });

  console.log('Super Admin créé:', superAdmin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
