import type { PageServerLoad } from './$types';
import { PrismaClient } from "@prisma/client";


export async function load({ params }: PageServerLoad) {
  const prisma = new PrismaClient();

  return {
    page: await prisma.page.findFirst({
      where: {
        id: parseInt(params.id),
      }
    })
  };
}
