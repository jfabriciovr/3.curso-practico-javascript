
calcularModa([1,2,4,5,3,3,3,2,1,3]);

function calcularModa(lista1){

    console.log("Elementos: " + lista1);
    //Creamos un OBJETO que guadará las veces que se repite cada número
    const lista1Count = {};

    lista1.map( 
        function(elemento){
            // Si el elemento ya existe, aumentar el contador
        if(lista1Count[elemento]){ 
            lista1Count[elemento] += 1;
        }
        //si no existe el elemento todavía lo marca que ya existe para la siguiente iteración
        else{
            lista1Count[elemento] = 1;
        }
        
        }

    );
    console.log("Las veces que se repite cada elemento es (objeto):" );
    console.log(lista1Count);

    // ORDENAR UN ARRAY DE ARRAYS
    //"object.entries" es para crear un array de los elementos del objeto lista1Count 
    //y "sort" para ordenarlo de menor a mayor dependiendo de las veces que se repite cada elemento
    const lista1Array = Object.entries(lista1Count).sort(
        //función anónima que recorre el array lista1Count
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]; // El [1] se refiere a la segunda propiedad de cada elemento del objeto que es el que dice cuantas veces se repite el elemento
            /*
            que es lo mismo que :
            if(valorAcumulado > nuevoValor) return 1; //número positivo
            if(valorAcumulado == nuevoValor) return 0;
            if(valorAcumulado < nuevoValor) return -1; //número negativo
            */
        }
    );
    console.log("Elementos ordenados de menor a mayor según la veces que se repite (Array de arrays):");
    console.log(lista1Array);

    //la moda es el último elemento del array "lista1Array"
    const moda = lista1Array[lista1Array.length - 1];

    //para imprimir en consola la moda 
    console.log ("La moda es: " + moda[0] + " que se repite " + moda[1] + " veces");
}