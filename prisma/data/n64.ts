import { console_type, course_status, PrismaClient } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient();

export async function init_n64() {
  const n64 = await prisma.console.create({
    data: {
      id: "nintendo_64",
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
      id: "mario_kart_64",
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
      id: "mk64_course_mushroom",
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
      id: "mk64_course_flower",
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
      id: "mk64_course_star",
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
      id: "mk64_course_special",
      name: "Special",
      slug: "special",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
      course_status: course_status.UNLOCKABLE,
      game: {
        connect: { id: mk64.id },
      },
    }
  })

await prisma.track.createMany({
  data: [
      {
          id: "mk64_luigi_raceway",
          name: "Luigi Raceway",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_mushroom.id,
      },
      {
          id: "mk64_moo_moo_farm",
          name: "Moo Moo Farm",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_mushroom.id,
      },
      {
          id: "mk64_koopa_troopa_beach",
          name: "Koopa Troopa Beach",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_mushroom.id,
      },
      {
          id: "mk64_kalimari_desert",
          name: "Kalimari Desert",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_mushroom.id,
      },
      {
          id: "mk64_toads_turnpike",
          name: "Toad's Turnpike",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_flower.id,
      },
      {
          id: "mk64_frappe_snowland",
          name: "Frappe Snowland",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_flower.id,
      },
      {
          id: "mk64_choco_mountain",
          name: "Choco Mountain",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_flower.id,
      },
      {
          id: "mk64_mario_raceway",
          name: "Mario Raceway",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_flower.id,
      },
      {
          id: "mk64_wario_stadium",
          name: "Wario Stadium",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_star.id,
      },
      {
          id: "mk64_sherbet_land",
          name: "Sherbet Land",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_star.id,
      },
      {
          id: "mk64_royal_raceway",
          name: "Royal Raceway",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_star.id,
      },
      {
          id: "mk64_bowser_castle",
          name: "Bowser's Castle",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_star.id,
      },
      {
          id: "mk64_dks_jungle_parkway",
          name: "D.K.'s Jungle Parkway",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_special.id,
      },
      {
          id: "mk64_yoshi_valley",
          name: "Yoshi Valley",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_special.id,
      },
      {
          id: "mk64_banshee_boardwalk",
          name: "Banshee Boardwalk",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_special.id,
      },
      {
          id: "mk64_rainbow_road",
          name: "Rainbow Road",
          photo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Mario_Kart_64_Box_Art.jpg",
          lap_count: 3,
          course_id: course_special.id,
      },
  ],
});
}
