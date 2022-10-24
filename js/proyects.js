import {popProyects} from './exports.js';

function openPopDescription (title, yearC, description, tecnologiesUsed, img) {
  /*
  function openPopDescription
  - encargada de mostrar la informacion 
  correspondiente a la tarjeta de habilidades/tecnologias
  presionada.
	
  */
  let content = '';
  let imgPath = './imgs/proyects/';
  let altInfo = '';
  let countBtn = 0;
  let visibilityElement = '';

  content =  `<a id="close_pop_proyects">X</a>`;
  content += `<div class="proyects_elements" id="description_pop_proyects">`;
  content += `<div class="proyects_galery">`;
  img.forEach((item,index) => {
    altInfo = item.split('.');
    if (index !== 0) {
      visibilityElement = 'hidden';
    }
    content += `<img id="img_proy_gal_${index}" class="imgs_proy_gal ${visibilityElement}" src="${imgPath + item}" alt="${altInfo[0]} logo">`;
    countBtn += 1;
  });

  content += `<div id="btns_proyects_galery">`;
  for (var i = 0; i < countBtn; i++) {
    content += `<button id="btn_img_proy_gal_${i}" class="selector_img_proyects_galery"></button>`;
  }
  content += `</div>`;

  content += `</div>`;
  content += `<br>`;
  content += `<br>`;
  content += `<h2>${title.toUpperCase()}</h2>`;
  content += `<br>`;
  content += `<p>${description}</p>`;
  content += `<br>`;
  content += `<span><b>Tecnologias:</b> ${tecnologiesUsed}</span>`;
  content += `<br>`;
  content += `<span><b>Año de Creación:</b> ${yearC}</span>`;
  content += `</div>`;

  popProyects.innerHTML = ''; 
  popProyects.innerHTML += content;
  popProyects.style.display = 'flex';

}


const tecnologiesCards = document.getElementById('content_proyects');

tecnologiesCards.addEventListener ('click', (e) => {
  //vars
  let idElementPress;
  let descriptionElement = '';
  let usedTecnologies = '';
  let validate1 = '';
  let validate2 = '';
  let continuePop = '';
  let img = [];
  let titleProyect = '';
  let yearCreation = '';

  console.log(e.target.tagName);
  if (e.target.tagName === 'H4' || e.target.tagName === 'P'){
    // si le dimos click a una imagen o a un encabezado entonces trabajamos con el elemento padre, es decir el div
  	idElementPress = e.target.parentNode.parentNode.id;
  } else if (e.target.tagName === 'IMG'){
    idElementPress = e.target.parentNode.id;
  } else if (e.target.tagName === 'DIV') {
  	// en caso contrario le dimos click al div
  	idElementPress = e.target.id;
    if (idElementPress === "" || idElementPress === null) {
      idElementPress = e.target.parentNode.id;
    }
  }

  switch (idElementPress) {

  	case "3dPrintSkull":
  	  descriptionElement = 'Modelado de craneo para impresión 3D.';
  	  usedTecnologies = 'Blender 2.8';
  	  img = ['craneo_1.png','craneo_2.png','craneo_3.png'];
  	  titleProyect = 'Modelo Craneo 3D.';
      yearCreation = '2019';
      break;

    case "3dPrintKeyChains":
      descriptionElement = 'Modelado de llaveros de redes sociales para impresión 3D.';
      usedTecnologies = 'Blender 2.8';
      img = ['sociales_1.png','sociales_2.png'];
      titleProyect = 'Modelo Craneo 3D.';
      yearCreation = '2019';
      break;

    case "3dPrintCrash":
      descriptionElement = 'Modelado de personaje crash del popular Videojuego crash bandicoot para impresión 3D.';
      usedTecnologies = 'Blender 2.8';
      img = ['crash_1.png','crash_b2.png','crash_a3.png'];
      titleProyect = 'Modelo Crash Bandicoot 3D.';
      yearCreation = '2018';
      break;      
  	 
    case "3dTioGrandpa":
      descriptionElement = 'Modelado de personaje tio 3dTioGrandpa de la popular serie de tv del mismo nombre.';
      usedTecnologies = 'Blender 2.8';
      img = ['tio_grandpa_1.png','tio_grandpa_2.png','tio_grandpa_3.png'];
      titleProyect = 'Modelo Tio Grandpa 3D.';
      yearCreation = '2018';
      break;      
    
  	case "tecnisystems":
  	  descriptionElement = 'Creación de plataforma interna para la empresa Tecnisystems. funciones:<ol><li>Generación de reportes de mantenimiento</li><li>Sistema de busqueda mediante codigos QR</li><li>Captura de firmas para validación de informe de mantenimiento.</li><li>Entre otros.</li></ol>';
  	  usedTecnologies = 'Html5 - Css3 - Js - Php';
  	  img = ['tecnisystemsWeb.png'];
  	  titleProyect = 'Plataforma Tecnisystems.';
      yearCreation = '2021 - 2022';
      break;
  	
  	case "medycoWeb":
  	  descriptionElement = 'Creación de la primera versión de la página web para la empresa MedycoIPS.';
  	  usedTecnologies = 'Html5 - Css3 - Js';
  	  img = ['medycoipsweb.png'];
  	  titleProyect = 'Página Web MedycoIPS.';
      yearCreation = '2016';
      break;
    
    case "medycoCommercial":
  	  descriptionElement = 'Video / comercial publicitario animado para la empresa MedycoIPS. <a href="https://www.youtube.com/watch?v=bD_UuGdWJN4" target="_blank">Ver video</a>';
  	  usedTecnologies = 'Adobe photoshop - Adobe flash';
  	  img = ['medycoips_comercial.png'];
  	  titleProyect = 'Comercial MedycoIPS.';
      yearCreation = '2016';
      break;

  	case "templateRestaurants":
  	  descriptionElement = 'Template destinado para restaurantes. Incluye: <ol><li>Sección menú</li><li>Botón whatsapp</li><li>Panel de administración</li><li>Entre otros</li></ol>';
  	  usedTecnologies = 'Html5 - Css3 - Js - Php';
  	  img = ['template_restaurantes.png'];
  	  titleProyect = 'Plantilla Restaurantes.';
      yearCreation = '2021';
      break;

  	case "terrorGame":
  	  descriptionElement = 'Videojuego de terror en tercera persona, destinado a entornos windows / linux.';
  	  usedTecnologies = 'Godot engine - GDScript';
  	  img = ['blender.png'];
  	  titleProyect = 'Juego Terror (EN PROCESO).';
      yearCreation = '2022 - 2023';
      break;

  	case "sudokusGenerator":
  	  descriptionElement = 'Programa generador de sudokus. Desarrollado en python 3.6 para cliente independiente.';
  	  usedTecnologies = 'Python 3.6';
  	  img = ['generador_sudokus.png'];
  	  titleProyect = 'Generador de Sudokus';
      yearCreation = '2020';
      break;    

    case "creasisMediaWeb":
      descriptionElement = 'Página web principal de la empresa CreasisMedia.';
      usedTecnologies = 'Html5 - Css3 - Js';
      img = ['creasismediaweb1.png'];
      titleProyect = 'Página web Creasis Media';
      yearCreation = '2016';
      break;
  	  
  	default:
  	  break;
  }

  validate1 = descriptionElement !== "" && descriptionElement !== null && descriptionElement !== NaN;
  validate2 = usedTecnologies !== "" && usedTecnologies !== null && usedTecnologies !== NaN;
  continuePop = validate1 && validate2;

  if (continuePop) {
  	openPopDescription(titleProyect, yearCreation, descriptionElement, usedTecnologies, img);
  }
  
});