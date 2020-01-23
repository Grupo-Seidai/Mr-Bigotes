function ver() {
    document.getElementById('prod').style.display="block";
}

function ocultar() {
    document.getElementById('prod').style.display="none";
}

document.getElementById("b_menu").addEventListener("click",function(){
  
  document.getElementById("menu_oculto").classList.toggle("mostrar");
});
