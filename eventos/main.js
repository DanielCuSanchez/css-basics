
function agregar() {
    var contenedor = document.getElementById('contenedor')
    var caja = document.createElement('div')
    caja.className = "caja"
    contenedor.appendChild(caja)
    console.log("Entro")
}

var btn = document.getElementById('btn-caja')
btn.addEventListener('click', agregar)
btn.addEventListener('click', function () { alert("si") })

