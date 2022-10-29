function conta() {
    var inicio = window.document.getElementById('iniciotxt')
    var fim = window.document.getElementById('fimtxt')
    var Passo = window.document.getElementById('passotxt')
    var res = window.document.getElementById('res')

    if (inicio.value.length === 0 || fim.value.length === 0 || Passo.value.length === 0) {
        res.innerHTML = `Preencha todos os dados!`
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(Passo.value)

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} <br>`
            }
        } else {
            for (var c = i; c >= f; c -= p) { 
                res.innerHTML = `${c} <br>`
            }
        }
        res.innerHTML += `\u{1F3C1}`  
    }
}


