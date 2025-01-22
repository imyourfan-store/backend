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
  await prisma.user.upsert({
    where: { id: user.id },
    update: {},
    create: {
      ...user,
      Cart: {
        create: {},
      },
    },
  });

  await prisma.category.upsert({
    where: { name: 'Ramen Coreano' },
    update: {},
    create: {
      name: 'Ramen Coreano',
    },
  });
  await prisma.category.upsert({
    where: { name: 'BTS' },
    update: {},
    create: {
      name: 'BTS',
    },
  });
  await prisma.category.upsert({
    where: { name: 'Libros Coreanos' },
    update: {},
    create: {
      name: 'Libros Coreanos',
    },
  });

  await prisma.product.upsert({
    where: { slug: 'bowl-fideos-katsuo-udon-noodle-x-235gr' },
    update: {},
    create: {
      name: 'Bowl Fideos Katsuo Udon Noodle x 235gr',
      description:
        'Bolw de fideos extra anchos están hechos por una familia de artesanos en Corea utilizando harina de trigo integral orgánica. Se fabrican con un método tradicional de enrollar y cortar, en lugar de métodos de extrusión más industrializados.',
      slug: 'bowl-fideos-katsuo-udon-noodle-x-235gr',
      price: 28000,
      stock: 100,
      productImgs: [
        'https://oppastorecolombia.com/wp-content/uploads/2024/10/Photoroom_20241015_034530-e1729159362895.png',
        'https://oppastorecolombia.com/wp-content/uploads/2024/10/Photoroom_20241015_034530-e1729159362895.png',
      ],
      Categories: {
        connect: {
          name: 'Ramen Coreano',
        },
      },
    },
  });
  await prisma.product.upsert({
    where: { slug: 'family-pack-shin-picante-x-4-und' },
    update: {},
    create: {
      name: 'FamilyPack Shin – Picante x 4 Und',
      description:
        'Ramen Tradicional Coreano (Shin Ramyun), elaborado con carne de vacuno, salsa Shoyu, setas shitake, jengibre, puerro, zanahoria, y pimienta. /nDisfruta del Ramen más vendido del Mundo!',
      slug: 'family-pack-shin-picante-x-4-und',
      price: 59000,
      stock: 100,
      productImgs: [
        'https://oppastorecolombia.com/wp-content/uploads/2020/05/Shin-Ramyun-Ramen-Fideos-Picante-Coreano-4-Paquetes-20190913093317.8700520015-600x600.jpg',
        'https://oppastorecolombia.com/wp-content/uploads/2020/05/Shin-Ramyun-Ramen-Fideos-Picante-Coreano-4-Paquetes-20190913093317.8700520015-600x600.jpg',
      ],
      Categories: {
        connect: {
          name: 'Ramen Coreano',
        },
      },
    },
  });
  await prisma.product.upsert({
    where: { slug: 'multipack-ramen-buldak-cream-carbonara-spicy-x-5und' },
    update: {},
    create: {
      name: 'Multipack Ramen Buldak Cream Carbonara Spicy x 5und',
      description:
        'Ramen Coreano Buldak Cream Carbonara Spicy x 5und. Disfruta de la mejor combinación de la crema carbonara con el picante del Buldak.',
      slug: 'multipack-ramen-buldak-cream-carbonara-spicy-x-5und',
      price: 75000,
      stock: 100,
      productImgs: [
        'https://oppastorecolombia.com/wp-content/uploads/2025/01/IMG_6265.jpeg',
        'https://oppastorecolombia.com/wp-content/uploads/2025/01/IMG_6265.jpeg',
      ],
      Categories: {
        connect: {
          name: 'Ramen Coreano',
        },
      },
    },
  });

  await prisma.product.upsert({
    where: { slug: 'bts-mattel-j-hope-idol-original-muneco' },
    update: {},
    create: {
      name: 'BTS Mattel J-Hope Idol Original Muñeco',
      description: 'Muñeco de colección de J-Hope de BTS. Producto original de Mattel. Producto nuevo y sellado.',
      slug: 'bts-mattel-j-hope-idol-original-muneco',
      price: 100000,
      stock: 100,
      productImgs: [
        'https://oppastorecolombia.com/wp-content/uploads/2023/08/IMG_5417.jpg',
        'https://oppastorecolombia.com/wp-content/uploads/2023/08/IMG_5417.jpg',
      ],
      Categories: {
        connect: {
          name: 'BTS',
        },
      },
    },
  });
  await prisma.product.upsert({
    where: { slug: 'bts-mattel-jung-kook-idol-original-muneco' },
    update: {},
    create: {
      name: 'BTS Mattel Jung Kook Idol Original Muñeco',
      description: 'Muñeco de colección de Jung Kook de BTS. Producto original de Mattel. Producto nuevo y sellado.',
      slug: 'bts-mattel-jung-kook-idol-original-muneco',
      price: 100000,
      stock: 100,
      productImgs: [
        'https://oppastorecolombia.com/wp-content/uploads/2023/08/IMG_5416.jpg',
        'https://oppastorecolombia.com/wp-content/uploads/2023/08/IMG_5416.jpg',
      ],
      Categories: {
        connect: {
          name: 'BTS',
        },
      },
    },
  });

  await prisma.product.upsert({
    where: { slug: 'curso-de-coreano-pdf' },
    update: {},
    create: {
      name: 'Curso de Coreano PDF',
      description: 'Curso de Coreano en PDF. Aprende coreano desde cero con este curso en PDF.',
      slug: 'curso-de-coreano-pdf',
      price: 45000,
      stock: 100,
      productImgs: [
        'https://oppastorecolombia.com/wp-content/uploads/2020/09/3.png',
        'https://oppastorecolombia.com/wp-content/uploads/2020/09/3.png',
      ],
      Categories: {
        connect: {
          name: 'Libros Coreanos',
        },
      },
    },
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
