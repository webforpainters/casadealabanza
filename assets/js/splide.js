var splide = new Splide( '.splide', {
  type   : 'loop',
  padding: '0rem',
  height: "25rem",
  breakpoints: {
    640: {
      height: "25rem",
    },
    768: {
      height: "20rem",
    },
    1024: {
      height: "15rem",
    },
  }
} );

splide.mount();