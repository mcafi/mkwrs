import { console_type, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function init_snes() {
  const snes = await prisma.console.create({
    data: {
      id: "super_nintendo",
      name: "Super Nintendo Entertainment System",
      slug: "snes",
      release_year: 1990,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Super_Nintendo_Entertainment_System_logo.svg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Super_Nintendo_Entertainment_System_logo.svg",
      type: console_type.HOME,
    },
  });

  const smk = await prisma.game.create({
    data: {
      id: "super_mario_kart",
      title: "Super Mario Kart",
      slug: "smk",
      release_year: 1992,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/4/4a/Super_Mario_Kart_Box_Art.jpg",
      console: {
        connect: { id: snes.id },
      },
    },
  });
}
