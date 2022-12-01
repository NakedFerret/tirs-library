import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const NUM_OF_TEST_AUTHORS = 10;

async function main() {

  for (let authorCount = 1; authorCount <= NUM_OF_TEST_AUTHORS; authorCount++) {
    await prisma.author.create({
      data: { 
        handle: faker.lorem.words(5),
        pages: {
          createMany: {
            data: [
              { content: faker.lorem.paragraphs(10, '\n\n') },
              { content: faker.lorem.paragraphs(10, '\n\n') },
              { content: faker.lorem.paragraphs(10, '\n\n') },
              { content: faker.lorem.paragraphs(10, '\n\n') },
              { content: faker.lorem.paragraphs(10, '\n\n') },
            ]
          }
        }
      }
    });  
    console.log(`Created ${authorCount} of ${NUM_OF_TEST_AUTHORS} authors with 5 posts each`);
  }
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });