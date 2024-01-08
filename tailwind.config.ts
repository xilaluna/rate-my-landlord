import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  plugins: [require("daisyui")],
} satisfies Config;
