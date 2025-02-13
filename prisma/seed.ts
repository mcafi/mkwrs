import { console_type, PrismaClient } from "@prisma/client";
import { init_snes } from "./data/snes";
import { init_n64 } from "./data/n64";

const prisma = new PrismaClient();

async function main() {
  await Promise.all([init_snes(), init_n64()]);

  /*
  const gba = await prisma.console.create({
    data: {
      name: "GameBoy Advance",
      slug: "gba",
      release_year: 2001,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/GameBoy_Advance_logo.svg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/GameBoy_Advance_logo.svg",
      type: console_type.HANDHELD,
    },
  });
  const gc = await prisma.console.create({
    data: {
      name: "Nintendo GameCube",
      slug: "gc",
      release_year: 2001,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/GameCube_logo.svg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/GameCube_logo.svg",
      type: console_type.HOME,
    },
  });
  const ds = await prisma.console.create({
    data: {
      name: "Nintendo DS",
      slug: "ds",
      release_year: 2004,
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nintendo_DS_logo.svg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nintendo_DS_logo.svg",
      type: console_type.HANDHELD,
    },
  });
  const wii = await prisma.console.create({
    data: {
      name: "Nintendo Wii",
      slug: "wii",
      release_year: 2006,
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Wii_logo.svg",
      photo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Wii_logo.svg",
      type: console_type.HOME,
    },
  });
  const n3ds = await prisma.console.create({
    data: {
      name: "Nintendo 3DS",
      slug: "3ds",
      release_year: 2011,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nintendo_3DS_logo.svg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nintendo_3DS_logo.svg",
      type: console_type.HANDHELD,
    },
  });
  const wiiU = await prisma.console.create({
    data: {
      name: "Nintendo Wii U",
      slug: "wiiu",
      release_year: 2012,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Wii_U_logo.svg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Wii_U_logo.svg",
      type: console_type.HOME,
    },
  });
  const nSwitch = await prisma.console.create({
    data: {
      name: "Nintendo Switch",
      slug: "switch",
      release_year: 2017,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Nintendo_Switch_logo.svg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Nintendo_Switch_logo.svg",
      type: console_type.HYBRID,
    },
  });
  */
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
