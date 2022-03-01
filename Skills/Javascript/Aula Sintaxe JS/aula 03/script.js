// Arrays ou vetores
// é como uma caixa com outra caixa dentro para guardar valores
// declaração de array
/*let array = ['string', 1, true];
console.log(array);*/

//Pode ter vários tipos de elementos dentro do array

let array = ['string', 1, true, ['array1'], ['array2'],['array3'],["array4"]];
//console.log(array[0]);

//forEach

//array.forEach(function(item, index){console.log(item, index)});

//push add elementos
/*
array.push('olá');
console.log(array);

//pop apaga último elemento
array.pop()
console.log(array);

//shift apaga primeiro elemento
array.shift();
console.log(array);
//unshift add um item no inicio do array
array.unshift(14);
console.log();*/
//indexof mostra o indice de um elemento
//console.log(array.indexOf(true));

//array.splice(0, 3)
//console.log(array);

/*let novoArray = array.slice(0, 3);
console.log(novoArray);*/

let object = {string:'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno = 'objeto interno'}};
console.log(object);