function carregar() {
    var msg = document.querySelector('div.msg')
    var img = document.querySelector('img.img')
    var data = new Date()
    //var hora = data.getHours()

    //Para testar os horarios direfentes:
    var hora = 19

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'assents/Manha.png'
        document.body.style.background = "#58c6fe"

    } else if (hora >= 12 && hora <= 18) {
        img.src = 'assents/Tarde.png'
        document.body.style.background = '#df6f43'

    } else {
        img.src = 'assents/Noite.png'
        document.body.style.background = '#15253e'

    }
}