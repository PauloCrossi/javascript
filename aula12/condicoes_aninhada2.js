/*
var hora = 17
console.log(`agora são exatamente ${hora} horas.`)

if(hora < 12 /*primeira condição ){
    console.log('Bom Dia!')
} else if (hora <= 17 /*segunda condição ){
    console.log('Boa Tarde!')
} else{
    console.log('Boa Noite!')
}*/

/*condição - aninhiada com horas atual */
var  horas = new Date ()
var hora = horas.getHours ()
console.log(`Agora são exatamente ${hora} horas.`)
if(horas < 12 ){
    console.log('Bom Dia!')
} else if(hora <=17){
    console.log("Boa Tarde!")
} else{
    console.log('Boa noite!')
}