function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano || fAno.value < 1900) {
        window.alert('[ERRO] Algo deu errado verifique seus dados novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var sex = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        // Parte do Homem
        if (fsex[0].checked) {
            sex = 'Homen'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/criancaH.jpg')
            }
            else if (idade <= 20) {
                img.setAttribute('src', 'img/adolecenteH.jpg')
            }
            else if (idade <= 30) {
                img.setAttribute('src', 'img/adultoH.jpg')
            }
            else {
                img.setAttribute('src', 'img/idosoH.jpg')
            }
            // Parte da Mulher
        } else {
            sex = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/criancaM.jpg')
            }
            else if (idade <= 20) {
                img.setAttribute('src', 'img/adolecenteM.jpg')
            }
            else if (idade <= 30) {
                img.setAttribute('src', 'img/adultoM.jpg')
            }
            else {
                img.setAttribute('src', 'img/idosoM.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${sex} com ${idade} anos de idade`
        res.appendChild(img)
    }

}