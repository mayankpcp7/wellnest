tailwind.config = {
  theme: {
    extend: {
       screens: {
        "xsm": "350px",
        "xs": '400px',
         'xxs': '560px'
        },
      colors: {
        "light-pastel-purple": "#A18EE8",
        "light-brown": "#FFB685",
        brown: "#E2803E",
        "rich-black": "#1E2031",
        "tea-green": "#C5FCC3",
        sky: "#AEEFF4",
        green: "#4CDFB2",
        "light-cream": "#FFF8F3",
        purple: "#A18EE8",
        grey: "#4D4A49",
        "off-black": "#0E0F13",
        "light-black": "#2F2F2F",
        "light-grey": "#E9E9E9",
        skin: "#FCF4EC",
        'platinum': '#E5E5E5',
        'dark-grey': '#56575A',
      },
      fontSize: {
        'custom-3xl': '32px',
        "custom-4xl": "40px",
        "custom-md": "19px",
        "custom-5xl": "50px",
        "6xl": "64px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      lineHeight: {
        120: "120%",
        150: "150%",
        118: "118%",
        180: "180%",
      },
      boxShadow: {
        "nav-button": "2px 2px 0px 0px #000000",
         button: "2px 2px 0px 0px #000000",
        coachImg: "0px 36.25px 25.89px 0px #040B1426",
        graymeet: "0px 10px 20px 0px #d0d0d0",
        'button-shadow': '2px 2px 0px 0px black',
        'button-hover-shadow': '-2px -2px 0px 0px black',
      },
      screen: {
        xs: "500px",
      },
    },
  },
};
