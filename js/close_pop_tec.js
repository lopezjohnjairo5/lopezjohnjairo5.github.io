import {popTecnologies, closePopTecnologies} from './exports.js';

popTecnologies.addEventListener('click', (e) => {
	
	if (e.target.tagName === 'A' && e.target.id === 'close_pop_tecnologies') {
		console.log("cerrando");
		popTecnologies.style.display = 'none';
	}
});
