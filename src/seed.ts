import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const user: User = {
  id: '593d5806-1b5c-4a0b-83c6-aec32edd2096',
  name: 'john',
  email: 'john@gmail.com',
  password: '$2b$10$3LyYm.LNRUC78LldZfrkxOHVZaqwbse3.imQXNC9ACY2s9RyP0sC6',
  role: 'USER',
  createdAt: new Date(),
  updatedAt: new Date(),
};

async function main() {
  await prisma.user.create({
    data: user,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Seed completed');
  });
