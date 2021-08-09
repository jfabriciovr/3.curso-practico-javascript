/*

// VERSION 1. Usando valores fijos y sin funciones

const lista1 = [
    100,
    200,
    300,
    500
];

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++){
    sumaLista1 += lista1[i];
}

const promedio = sumaLista1/lista1.length;

console.log("El array de elementos es " + lista1);
console.log("La suma de los elementos es " + sumaLista1);
console.log("El promedio es: " + promedio);


*/


/*

// VERSION 2. usando funciones

function calcularMediaAritmetica(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }

    console.log("La suma de los elementos es " + sumaLista);
    const promedioLista = sumaLista / lista.length;
    console.log("El promedio es: " + promedioLista);
    
    return promedioLista;
}

calcularMediaAritmetica([100,200,300,500]);

*/

// VERSION 3. sustituir el ciclo for por el método REDUCE

function calcularMediaAritmetica(lista){
    
    console.log("los elementos son: " + lista);

    const sumaLista = lista.reduce( //método que suma todos los elementos del array
        function (valorAcumulado = 0, nuevoElemento){ //valorAcumulado =0 es el valor inicial
            return valorAcumulado + nuevoElemento; //al sumar los dos argumentos le estamos diciendo a la función que sumará todos los elementos del array, aquí podríamos usar multimplicación o resta
        }
    );
    console.log("la suma de los elementos es: " + sumaLista);
    const promedioLista = sumaLista / lista.length; //calcula el promedio
    console.log("El promedio es: " + promedioLista);
    return promedioLista;
}

calcularMediaAritmetica([100,200,300,500]);
