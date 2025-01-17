import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "1em": "1em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
