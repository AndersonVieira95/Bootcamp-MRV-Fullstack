
function compareNumeros(num1, num2){
    if(!num1 || !num2){
        return 'Digite dois números, por favor.'
    }
   
    const primeiraFrase = criePrimeiraFrase(num1, num2);
    const segundaFrase = crieSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`

}

function criePrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !==num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function crieSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
const compara10 = soma > 10;
const compara20 = soma > 20;

if(compara10){
    resultado10 = 'maior';
}
if(compara20){
    resultado20 = 'maior';
}

return `Sua soma é ${resultado10} que 10 e ${resultado20} que 20.  `
}

console.log(compareNumeros(, 10));

