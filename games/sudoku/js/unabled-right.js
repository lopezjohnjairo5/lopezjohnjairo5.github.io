window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
  } 

  document.addEventListener("keydown", (e)=>{
    e.preventDefault();
    if(window.event.keyCode == 123 || window.event.keyCode == "123" || window.event.keyCode == 116 || window.event.keyCode == "116"){
        location.reload();
    } else if(window.event.keyCode == 16){
        alert("Juego creado por: JO}{N")
    }
  })