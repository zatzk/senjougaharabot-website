module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundImage: {
        'hero': 
          "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0)), url('/images/sjimg.jpg')"
      },
      fontFamily: {
        'body': ['"Source Sans 3"']
      }
      
    },
	},
	plugins: [],
};
