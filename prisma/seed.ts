import { PrismaClient } from "@prisma/client";
import Chance from "chance";

const prisma = new PrismaClient();

const NUM_OF_TEST_AUTHORS = 10;

async function main() {
  const chance = new Chance();
  for (let authorCount = 1; authorCount <= NUM_OF_TEST_AUTHORS; authorCount++) {
    await prisma.author.create({
      data: {
        handle: chance.twitter(),
        pages: {
          createMany: {
            data: [
              {
                title: chance.sentence(),
                content: chance.n(chance.paragraph, 5),
              },
              {
                title: chance.sentence(),
                content: chance.n(chance.paragraph, 5),
              },
              {
                title: chance.sentence(),
                content: chance.n(chance.paragraph, 5),
              },
              {
                title: chance.sentence(),
                content: chance.n(chance.paragraph, 5),
              },
              {
                title: chance.sentence(),
                content: chance.n(chance.paragraph, 5),
              },
            ],
          },
        },
      },
    });
    console.log(
      `Created ${authorCount} of ${NUM_OF_TEST_AUTHORS} authors with 5 posts each`
    );
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
