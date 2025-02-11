import { console_type, course_status, PrismaClient } from "@prisma/client";
import { connect } from "http2";

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

  const course_mushroom = await prisma.course.create({
    data: {
      name: "Mushroom",
      slug: "mushroom",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
      course_status: course_status.AVAILABLE,
      game: {
        connect: { id: mk64.id },
      },
    }
  })

  const course_flower = await prisma.course.create({
    data: {
      name: "Flower",
      slug: "flower",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
      course_status: course_status.AVAILABLE,
      game: {
        connect: { id: mk64.id },
      },
    }
  })

  const course_star = await prisma.course.create({
    data: {
      name: "Star",
      slug: "star",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
      course_status: course_status.AVAILABLE,
      game: {
        connect: { id: mk64.id },
      },
    }
  })

  const course_special = await prisma.course.create({
    data: {
      name: "Special",
      slug: "special",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
      course_status: course_status.UNLOCKABLE,
      game: {
        connect: { id: mk64.id },
      },
    }
  })

  // aggiungi tutte le piste di Mario Kart 64
  await prisma.track.createMany({
    data: [
      {
        id: "n64_luigi_raceway",
        name: "Luigi Raceway",
        photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
        lap_count: 3,
        course_id: course_mushroom.id,
      }
    ]
  })
}
