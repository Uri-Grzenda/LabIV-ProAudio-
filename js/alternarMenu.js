getElementById("linksNav");
getElementById("awesomeEquis");
getElementById("awesomeBarras");

function mostrarMenu(){
  linksNav.style.right = "0%";
  linksNav.style.transition = "0.5s";
  awesomeEquis.style.display = "block";
  awesomeBarras.style.display = "none";
}
function esconderMenu(){
  linksNav.style.right = "-100%";
  linksNav.style.transition = "1s";
  awesomeEquis.style.display = "none";
  awesomeBarras.style.display = "block";
}
