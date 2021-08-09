
// lista desordenada
calcularMediana([4000000,200,100,500]);

// FUNCION PRINCIPAL
function calcularMediana(lista1){

    console.log("Elementos desordenados: " + lista1);
    //ordena la lista:
    lista1.sort(function(a,b){return a-b;});
    console.log("Elementos ordenados: " + lista1);
    
    //divide entre dos la longitud de la lista y guarda sólo el valor entero sin decimales:
    const mitadLista1 = parseInt(lista1.length / 2); 

    let mediana;
    //necesitamos determinar si es par o no la longitud de la lista.
    //si es par, se toman los dos elementos centrales y la mediana es el promedio de los dos
    if (esPar(lista1.length)){
        //necesitamos dos elementos para sacar el promedio
        const elemento1 = lista1[mitadLista1]; //elemento 500
        const elemento2 = lista1[mitadLista1 - 1]; //elemento 200
        //calcula el promedio
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        // mediana
        mediana = promedioElemento1y2;
        
    }
    //si es impar, la mediana es la mitad de Lista1
    else{
        mediana = lista1[mitadLista1]; //se asigna a mediana el elemento que está a la mitad de la lista
    }

    console.log("La mediana es: " + mediana);
    return mediana;
}


// Funciones llamadas dentro de la función principal 

function esPar(numerito){
    if(numerito % 2 === 0){ //calcular el residuo o "módulo"
    console.log("la lista es par");
        return true;
    }
    else{
        console.log("la lista es impar");
        return false;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( //método que suma todos los elementos del array
        function (valorAcumulado = 0, nuevoElemento){ //valorAcumulado =0 es el valor inicial
            return valorAcumulado + nuevoElemento; //al sumar los dos argumentos le estamos diciendo a la función que sumará todos los elementos del array, aquí podríamos usar multimplicación o resta
        }
    );
    const promedioLista = sumaLista / lista.length; //calcula el promedio
    return promedioLista;
}