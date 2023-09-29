/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        // Define your custom class here
        "material-icons": {
          css: {
            ".material-icons": {
              fontSize: "10px", // Change the color to your preference
            },
          },
        },
      },
    },
  },
  plugins: [],
};
