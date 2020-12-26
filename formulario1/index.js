//(function () {
var formulario = document.getElementById('formulario')
var nombre = formulario.nombre
var correo = formulario.correo
var sexo = formulario.sexo
var terminos = formulario.terminos
var error = document.getElementById('error')

function validarNombre(e) {
    if (nombre.value == '' || nombre.value == null) {
        error.style.display = 'block'
        error.innerHTML += '<li>Por favor completa campo nombre</li>'
        e.preventDefault()
    }
    else {
        error.style.display = 'none'
    }
}
function validarCorreo(e) {
    if (correo.value == '' || correo.value == null) {
        error.style.display = 'block'
        error.innerHTML += '<li>Por favor completa correo</li>'
        e.preventDefault()
    }
    else {
        error.style.display = 'none'
    }
}
function validarSexo(e) {
    if (sexo.value == '' || sexo.value == null) {
        error.style.display = 'block'
        error.innerHTML += '<li>Por favor completa sexo</li>'
        e.preventDefault()
    }
    else {
        error.style.display = 'none'
    }
}
function validarTerminos(e) {
    if (!terminos.checked) {
        error.style.display = 'block'
        error.innerHTML += '<li>Por favor acepta términos</li>'
        e.preventDefault()
    }
    else {
        error.style.display = 'none'
    }

}
function validarFormulario(e) {
    validarNombre(e)
    validarCorreo(e)
    validarSexo(e)
    validarTerminos(e)
    setTimeout(() => {
        error.innerHTML = ''
        error.style.display = 'none'
    }, 2000)
}
formulario.addEventListener('submit', validarFormulario)

//})