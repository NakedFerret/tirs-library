import { dev } from "$app/environment";
import type { PageServerLoad } from './$types';
import { PrismaClient } from "@prisma/client";

export async function load() {
  const prisma = new PrismaClient();

  return {
    pages: await prisma.page.findMany({
      take: 20,
    })
  };
}
