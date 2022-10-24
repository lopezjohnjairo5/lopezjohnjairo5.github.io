/*
#pop_proyects
#btns_proyects_galery
*/

function change_img_galery_proyect(idViewElement){
	/*
	funcion encargada de cambiar la imagen de la galeria proyects
	*/

	let imgs_proy_gal = document.getElementsByClassName('imgs_proy_gal');
	console.log(imgs_proy_gal);
	for (var i = 0; i < imgs_proy_gal.length; i++) {	
		if (!imgs_proy_gal[i].classList.contains('hidden') && imgs_proy_gal[i].id !== idViewElement) {
			imgs_proy_gal[i].classList.add('hidden');
		} else if (imgs_proy_gal[i].id === idViewElement){
			imgs_proy_gal[i].classList.remove('hidden');
		}
	}
}


function change_background_color_btn(idBtnElement){
	/*
	funcion encargada de cambiar el color de fondo del
	btn de la galeria proyects
	*/
	let selector_img_proyects_galery = document.getElementsByClassName('selector_img_proyects_galery');
	for (var i = 0; i < selector_img_proyects_galery.length; i++) {
		if (idBtnElement !== selector_img_proyects_galery[i].id) {
			selector_img_proyects_galery[i].style.background = 'white';
		} else {
			selector_img_proyects_galery[i].style.background = '#fca311';
		}
	}
}


let btns_galery_proyect = document.getElementById('pop_proyects');

btns_galery_proyect.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON' && e.target.classList.contains('selector_img_proyects_galery')) {
		change_img_galery_proyect(e.target.id.split('btn_')[1]);
		change_background_color_btn(e.target.id);
	}

});