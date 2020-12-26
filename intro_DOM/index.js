// var cajas = document.getElementsByTagName('div')
// for (let i = 0; i < cajas.length; i++) {
//     cajas[i].innerHTML = i + 1
//     cajas[i].style.fontSize = "32px"
// }

//Crear nodos

var anchor = document.createElement('a')
var contenido = document.createTextNode('Hola mundo')
anchor.appendChild(contenido)
anchor.setAttribute('class', 'caja')
anchor.setAttribute('href', '#')
anchor.style.textDecoration = "none"
var contenedor = document.getElementById('contenedor')
contenedor.appendChild(anchor)