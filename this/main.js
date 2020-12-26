var cajas = document.getElementsByClassName('caja')

for (let i = 0; i < cajas.length; i++) {
    cajas[i].addEventListener('click', cambiaColor)
}

function cambiaColor() {
    this.classList.toggle('bg-dark')
    console.log("Entro")
}