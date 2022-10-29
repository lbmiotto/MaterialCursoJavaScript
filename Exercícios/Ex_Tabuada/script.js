function calculo() {
    var n = document.getElementById('numerotxt')
    var tab = document.getElementById('tab')

    if (n.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        var numero = Number(n.value)
        var x = 1
        tab.innerHTML = ''
        
        while (x <= 10) {
            var op = document.createElement("option")
            op.text = `${numero} x ${x} = ${numero * x}`
            op.value = `tab${x}`
            tab.appendChild(op)
            x++
        }
    }
}