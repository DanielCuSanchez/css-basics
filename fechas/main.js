var parrafo = document.getElementById('fecha')

var intervalo = setInterval(imprimirFecha, 1000)
var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
function imprimirFecha() {
    var fecha = new Date()
    var dia = dias[fecha.getDay()]
    var hora = fecha.getHours()
    var minutos = fecha.getMinutes()
    var segundos = fecha.getSeconds()
    var tiempo = `${dia} ${hora}:${minutos}:${segundos}`

    parrafo.innerHTML = tiempo
}