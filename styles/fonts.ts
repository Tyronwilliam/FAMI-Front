import localFont from "next/font/local";

/* -------------------------------------------------
   1️⃣  MULARSLIM — toutes variantes
-------------------------------------------------- */
export const mularSlim = localFont({
  src: [
    {
      path: "./MULARSLIM-THIN.otf",
      weight: "100",
      style: "normal",
    },

    {
      path: "./MULARSLIM-REGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./MULARSLIM-ITALIC.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./MULARSLIM-MEDIUM.otf",
      weight: "500",
      style: "normal",
    },

    {
      path: "./MULARSLIM-BOLD.otf",
      weight: "700",
      style: "normal",
    },

    {
      path: "./MULARSLIM-BLACK.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mularSlim",
  display: "swap",
});

/* -------------------------------------------------
   2️⃣  SANSSERIFBOOKFLF — Regular + Italic
-------------------------------------------------- */
export const sansSerifBook = localFont({
  src: [
    {
      path: "./SANSSERIFBOOKFLF.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sansSerifBook",
  display: "swap",
});

/* -------------------------------------------------
   3️⃣  BIG NOODLE TITLING — Regular + Oblique
-------------------------------------------------- */
export const bigNoodle = localFont({
  src: [
    {
      path: "./BIG_NOODLE_TITLING.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./BIG_NOODLE_TITLING_OBLIQUE.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-bigNoodle",
  display: "swap",
});
