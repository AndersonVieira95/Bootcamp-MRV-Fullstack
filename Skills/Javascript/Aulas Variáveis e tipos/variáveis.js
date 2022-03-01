var a = 1;
var b = 2;

if(a == 1){
    var a = 11; // scope global
    let b = 22; // só tem scope dentro do if

    console.log(a);
    console.log(b);
}


console.log(a);
console.log(b);

let numberOne; // let deve ser declarado antes
numberOne = 1;

console.log(numberOne + 2);

var firstName = 'João';
var lastName = 'Souza';
if(firstName === 'João'){
    let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    //let lastName = 'Silva';
    lastName = 'Silva'
    console.log(firstName, lastName);
 
}

console.log(firstName, lastName);
