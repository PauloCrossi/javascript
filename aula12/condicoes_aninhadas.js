/*primeiro jeito de fazer*/
/*&& é sinal de identidade-conjução  */
/*var idade = 15
if (idade <16 /*primeiro condição) {
    console.log('Não vota')

} else {
     if(idade >= 16 && idade <18 /*segunda condição){
    console.log('Voto opcional')
    } else{
        console.log('Voto obrigatorio')
    }
} */

/*segundo jeito de fazer */
/* ||é sinal de identidade-disjunção */
var idade = 65
console.log(`Você tem ${idade} anos.`)
if (idade <16 /*primeiro condição*/) {
    console.log('Não vota')

} else if(idade < 18  || idade > 65 /*segunda condição*/){
    console.log('Voto opcional')
    } else{
        console.log('Voto obrigatorio')
    }
