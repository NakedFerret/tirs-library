import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

export async function load({ params }: PageServerLoad) {
  const prisma = new PrismaClient();

  const page = await prisma.page.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!page) {
    throw error(404, "Page is missing");
  }

  return {
    page,
  };
}
