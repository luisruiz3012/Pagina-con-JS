let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function () {
    let desplazaminetoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazaminetoActual) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazaminetoActual;
})

//Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function() {
    enlacesHeader.classList.toggle("menudos");
})