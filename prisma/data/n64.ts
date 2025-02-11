import { console_type, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function init_n64() {
  const n64 = await prisma.console.create({
    data: {
      name: "Nintendo 64",
      slug: "n64",
      release_year: 1996,
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Nintendo_64_Logo.svg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Nintendo_64_Logo.svg",
      type: console_type.HOME,
    },
  });

  const mk64 = await prisma.game.create({
    data: {
      title: "Mario Kart 64",
      slug: "mk64",
      release_year: 1996,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
      console: {
        connect: { id: n64.id },
      },
    },
  });
}
