function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if(hora >= 0 && hora < 12){
        // Foto Manha
        img.src = 'img/Manha.jpg'
        // Fundo
        document.body.style.background = '#d6bfa3'
        msg.innerHTML = `Agora são ${hora} horas!`
    
    }else if(hora >= 12 && hora <= 18){
        // Foto Tarde
        img.src = 'img/Tarde.jpg'
        // Fundo
        document.body.style.background = '#ff955c'
        msg.innerHTML = `Agora são ${hora} horas!`
    
    }else{
        // Foto Noite
        img.src = 'img/Noite.jpg'
        // Fundo
        document.body.style.background = '#415780'
        msg.innerHTML = `Agora são ${hora} horas!`
    }

}