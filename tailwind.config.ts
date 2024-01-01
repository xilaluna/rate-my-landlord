import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
} satisfies Config;
