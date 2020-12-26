
var formulario = document.getElementById('form')
var nombre = formulario.nombre
var sexo = formulario.sexo
var terminos = formulario.terminos
function validar(e) {
    // Validar nombre
    e.preventDefault()
    if (nombre.value.length > 3) {
        console.log(nombre.value)
        alert('Maximo de caracteres')
    } else if (nombre.value === '') {
        alert('Nombre campo requerido')
    }
    if (!sexo[0].checked && !sexo[1].checked) {
        alert('Selecciona un sexo')
    }
    if (!terminos.checked) {
        alert('Acepta los terminos')
    }
}

formulario.addEventListener('submit', validar)