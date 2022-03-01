function calculadora (){
    const operacao =Number(prompt('Escolha a operação:\n 1 - Soma (+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão real(/)\n 5 - Divisão inteira(%)\n 6 - potenciação(**)'));
}

let n1 = Number(prompt('Insira o primeiro valor:'));
let n1 = Number(prompt('Insira o segundo valor:'));
let resultado;

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n1} é igual a ${resultado}} `)
}
function subtração(){
    resultado = n1 - n2;
    alert(`${n1} - ${n1} é igual a ${resultado}} `)
}
function multiplicação(){
    resultado = n1 * n2;
    alert(`${n1} * ${n1} é igual a ${resultado}} `)
}
function divisãoReal(){
    resultado = n1 / n2;
    alert(`${n1} / ${n1} é igual a ${resultado}} `)
}
function divisãoInteira(){
    resultado = n1 % n2;
    alert(`O resto da divisão entre${n1} e ${n1} é igual a ${resultado}} `)
}
function potenciação(){
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n1} é igual a ${resultado}} `)
}

function novaOperação(){
    let opcao = prompt('Deseja realizar uma nova operação?\n 1 = Sim\n 2-Não')
} 

if (operacao == 1){
    soma ();
}else if (operacao == 2){
    subtração ();
}else if (operacao == 3){
    multiplicação ();
}else if (operacao == 4){
    divisãoReal ();
}else if (operacao == 5){
    divisãoInteira ();
}else{
    potenciação()
}

calculadora();
