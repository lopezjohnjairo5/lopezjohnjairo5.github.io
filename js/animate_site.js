// Get the size of the device & window screen
//var screenWidth = screen.width;
//var windowWidth = window.innerWidth;

//console.log(screenWidth);
//console.log(windowWidth);

window.sr = ScrollReveal();

//if (screenWidth > 700 && windowWidth > 700) {
  sr.reveal('.animate_nav', {
    duration: 2500,
    origin: 'bottom',
    distance: '-100px'
  });

  sr.reveal('.animate_wave', {
    duration: 3000,
	delay: 500,
	origin: 'left',
	distance: '-100%',
	opacity: 1,
	easing: 'cubic-bezier(0.5, 0, 0, 1)'
  });

  sr.reveal('.animate_logo', {
	duration: 2500,
	delay: 500,
	rotate: {
	  x: 0,
	  y: 180
	}
  });

  sr.reveal('.animate_habilities', {
    duration: 2500,
    delay: 500,
    origin: 'left',
    distance: '-100px'
  });

  sr.reveal('.animate_proyects', {
    duration: 2500,
    delay: 500,
    origin: 'right',
    distance: '-100px'
  });

  sr.reveal('.animate_contact', {
    duration: 2500,
	delay: 500,
	origin: 'top',
	distance: '-100px'
  });

//}
/*
// esta promise, es en caso de que se agreguen nuevos elementos a futuro de manera dinamica (tal vez con bd), 
// de esta manera los nuevos elementos serán reconocidos
loadMore('.animate_habilities').then(function () {
    ScrollReveal().sync();
});

loadMore('.animate_proyects').then(function () {
    ScrollReveal().sync();
});
*/