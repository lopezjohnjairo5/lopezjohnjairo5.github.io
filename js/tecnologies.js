import {popTecnologies} from './exports.js';

function openPopDescription (title, img, description, level) {
  /*
  function openPopDescription
  - encargada de mostrar la informacion 
  correspondiente a la tarjeta de habilidades/tecnologias
  presionada.
	
  */
  let content = '';

  content =  `<a id="close_pop_tecnologies">X</a>`;
  content +=  `<div class="proyects_elements" id="description_pop_tecnologies">`;
  content += `<img src="${img}" alt="${title} logo">`;
  content += `<br>`;
  content += `<br>`;
  content += `<h2>${title.toUpperCase()}</h2>`;
  content += `<br>`;
  content += `<p>${description}</p>`;
  content += `<br>`;
  content += `<span><b>Nivel actual:</b> ${level}</span>`;
  content += `</div>`;

  popTecnologies.innerHTML = ''; 
  popTecnologies.innerHTML += content;
  popTecnologies.style.display = 'flex';
}


const tecnologiesCards = document.getElementById('tecnologies_content');

tecnologiesCards.addEventListener ('click', (e) => {
  //vars
  let idElementPress;
  let descriptionElement = '';
  let knowledgeLevel = '';
  let validate1 = '';
  let validate2 = '';
  let continuePop = '';
  let img = '';

  console.log(e.target.tagName);
  if(e.target.tagName === 'IMG' || e.target.tagName === 'H4'){
    // si le dimos click a una imagen o a un encabezado entonces trabajamos con el elemento padre, es decir el div
  	idElementPress = e.target.parentNode.id;
  } else if(e.target.tagName === 'DIV') {
  	// en caso contrario le dimos click al div
  	idElementPress = e.target.id;
  }

  switch (idElementPress) {
  	
  	case "html":
  	  descriptionElement = 'HTML5 es un lenguaje de etiquetas, utilizado para la estructuración y la presentación de contenido en los sitios web.';
  	  knowledgeLevel = 'Alto';
  	  img = './imgs/html.png';
  	  break;
  	
  	case "css":
  	  descriptionElement = 'Es un lenguaje basado en reglas cuyo proposito principal es establecer estilos(colores, tamaños, posiciones, fuentes, etc...) a los diferentes grupos de elementos que conforman un documento web';
  	  knowledgeLevel = 'Alto';
  	  img = './imgs/css.png';
  	  break;
  	
  	case "js":
  	  descriptionElement = 'Es un lenguaje de programación interpretado que funciona de forma nativa en los navegadores aunque actualmente es un lenguaje que podria considerarse como multiproposito ya que no solamente es utilizado para el entorno web';
  	  knowledgeLevel = 'Medio - Alto';
  	  img = './imgs/js.png';
  	  break;
    
    case "php":
  	  descriptionElement = 'Es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo de páginas y/o aplicaciones para el entorno web';
  	  knowledgeLevel = 'Medio - Alto';
  	  img = './imgs/php.png';
  	  break;

  	case "python":
  	  descriptionElement = 'Es un lenguaje de programación de facil aprendizaje, potente y de propósito general lo cual quiere decir que con python es posible crear programas para diferentes ambitos y plataformas (windows, web, linux, android, videojuegos, machine learning, IA, etc...)';
  	  knowledgeLevel = 'Medio - Alto';
  	  img = './imgs/python.png';
  	  break;

  	case "blender":
  	  descriptionElement = 'Es un programa informático multiplataforma, creado para realizar modelos 3D, iluminación, renderizado y animaciones, las cuales pueden ser posteriormente utilizadas para cine, tv y videojuegos';
  	  knowledgeLevel = 'Medio';
  	  img = './imgs/blender.png'
  	  break;

  	case "godot":
  	  descriptionElement = 'Es un software / motor de videojuegos 2d y 3d, mediante el cual es posible crear videojuegos y/o aplicaciones para distintas plataformas (windows, linux, android, web, entre otras)';
  	  knowledgeLevel = 'Medio';
  	  img = './imgs/godot.png'
  	  break;

  	case "visual":
  	  descriptionElement = 'Es un entorno de desarrollo integrado (IDE) que cuenta con una gran cantidad de funcionalidades que permiten a los programadores escribir codigo de calidad e integrar multiples herramientas de terceros';
  	  knowledgeLevel = 'Medio - Alto';
  	  img = './imgs/visual_studio_code.png';
  	  break;

  	case "sublime":
   	  descriptionElement = 'Es un editor de texto pensado para programadores y diseñado con la finalidad de escribir codigo con la menor sin distracciones';
  	  knowledgeLevel = 'Alto';
  	  img = './imgs/sublime.png';
  	  break;

  	case "ubuntu":
   	  descriptionElement = 'Sistema operativo de distribución libre y gratuita, creado por Mark Shuttleworth y distribuido por la empresa Canonical.';
  	  knowledgeLevel = 'Medio - Alto';
  	  img = './imgs/ubuntu.png';
  	  break;

  	case "windows":
  	  descriptionElement = 'Sistema operativo insignia de la empresa Microsoft. Actualmente se considera el sistema operativo estándar para las computadoras domésticas y de negocios.';
  	  knowledgeLevel = 'Alto';
  	  img = './imgs/windows.png';
  	  break;
  	  
  	default:
  	  break;
  }

  validate1 = descriptionElement !== "" && descriptionElement !== null && descriptionElement !== NaN;
  validate2 = knowledgeLevel !== "" && knowledgeLevel !== null && knowledgeLevel !== NaN;
  continuePop = validate1 && validate2;

  if (continuePop) {
  	openPopDescription(idElementPress, img, descriptionElement, knowledgeLevel);
  }
  
});