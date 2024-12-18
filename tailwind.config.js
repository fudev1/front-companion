/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        skin: 'var(--button-radius)',
      },
      colors: {
          skin: {
            primary: 'var(--primary-color)',
            secondary: 'var(--secondary-color)',
            accent: 'var(--accent)',
            bg: 'var(--bg)',
          }
      },
    },
    // colors: {
      //   skin: {
      //     primary: 'var(--primary)',
      //     secondary: 'var(--secondary)',
      //     accent: 'var(--accent)',
      //     bg: 'var(--bg)',
      //   }
    // }
  },
  plugins: [

  ],

}

