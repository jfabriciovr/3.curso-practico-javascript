// FUNCIONES helpers
        function esPar(numerito){
            //método 1
            /* 
            if(numerito % 2 === 0) return true; // es par
            else return false; // es impar
            */

        //método 2 más corto
        return (numerito % 2 === 0); //retornará un número entero (true) o 0 (false)
        }

        function calcularMediaAritmetica(lista){ //recibe un array
            const sumaLista = lista.reduce( //método que suma todos los elementos del array
                function (valorAcumulado = 0, nuevoElemento){ //valorAcumulado =0 es el valor inicial
                    return valorAcumulado + nuevoElemento; //al sumar los dos argumentos le estamos diciendo a la función que sumará todos los elementos del array, aquí podríamos usar multimplicación o resta
                }
            );
            const promedioLista = sumaLista / lista.length; //calcula el promedio
            return promedioLista;
        }
//Calculadora de Medianas
function medianaSalarios(lista){ //recibe un array

    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    }else{//si es impar
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//MEDIANA GENERAL
    //creamos un array con los puros salarios
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);
    //Ordenamos el array
const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB) { //función anónima, los argumentos pueden llamarse como sea
        return salaryA - salaryB;
    }
);
const medianaGenralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

        /* uso de splice
        const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10];
        const EJEMPLO = arrayEjemplo.splice(5,2);//avanza al indice 5 y apartir de ahi guarda los siguientes 2 elementos [6,7]
        // EJEMPLO después del splice = [6,7]
        */
const spliceStart = (salariosColSorted.length * 90)/100; //que inicie en el 90% para que quede el top 10%
const spliceCount = salariosColSorted.length - spliceStart; // el top 10%

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log(
    {
    medianaGenralCol,
    medianaTop10Col
    }
);