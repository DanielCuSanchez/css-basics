var btn_inciar = document.getElementById('iniciar')
var btn_detener = document.getElementById('detener')
var reloj = document.getElementById('reloj')

btn_inciar.addEventListener('click', function () {
    var contador = 0
    var initInterval = setInterval(function () {
        reloj.innerHTML = contador
        contador++
    }, 1000)
    btn_detener.addEventListener('click', function () {
        clearInterval(initInterval)
        setTimeout(() => {
            reloj.innerHTML = ''
        }, 3000)
    })
})

