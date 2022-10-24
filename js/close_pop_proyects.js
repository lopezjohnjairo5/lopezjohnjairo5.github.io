import {popProyects, closePopProyects} from './exports.js';

popProyects.addEventListener('click', (e) => {
	
	if (e.target.tagName === 'A' && e.target.id === 'close_pop_proyects') {
		console.log("cerrando");
	    popProyects.style.display = 'none';

	}
});
