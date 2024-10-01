//Ex1
function comprobarNumeros(a, b) {
    if (a > b) {
        alert("El nombre mes gran es " + a);
    }
    alert("El nombre mes gran es " + b);
}

//let resultado = comprobarNumeros(4, 5);
//console.log(resultado);

//Ex2
function suma1a100() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    //return suma;
    alert(suma);
}

//Ex3
function PedraPaper() {
    let result = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i%5 === 0) {
            result += "Tisores ";
        } else if (i % 3 === 0) {
            result += "Pedra ";
        } else if (i % 5 === 0) {
            result += "Paper ";
        } else {
            result += i + " ";
        }
    }
    alert(result);
}

//console.log(PedraPaper());

//Ex4
function esParell(num) {
    if (num%2 === 0) {
        alert("True");
    } else
        return("False");
}

//Ex5
function revertirCadena(cadena) {
   
    var separar = cadena.split("");

    var invertir = separar.reverse();
   
    var unir = invertir.join("");
   
    alert(unir);
}

//console.log(revertirCadena("hola"));

//Ex5

function revertirCadena(cadena) {
    alert(cadena.split("").reverse().join(""));
}

//console.log(revertirCadena("hola")); // Output: "aloh"

// Ex6
function factorial(n) {
    let res = 1;
    for (let i = n; i > 1; i--) {
        res *=i;
        
        alert(res);
    }
    
}

// Ex7
function filtrarPositius(array) {
    let result = []; // Creem un nou array
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result.push(array[i]); // Afegim nombres positius
        }
    }
   alert(result); // Retornem l'array de nombres positius
}

