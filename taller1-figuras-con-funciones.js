console.log("Figuras Geométricas usando funciones");
//Cuadrado
function perimetroCuadrado (lado){
    return lado * 4;
}


function areaCuadrado (lado){
    return lado * lado;
}

//Triángulo
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura)/2;
}

function alturaTriangulo(a, b, base){
    if(a == b){
        //return Math.sqrt((a*a) - ((base/2)*(base/2)));
        // a*a también se puede expresar como a**2
        return Math.sqrt(Math.pow(a,2) - Math.pow(base/2,2));
    }
    else{
        console.error("los lados a y b no son iguales");
        return "el triángulo no es isósceles";
    }
    /*
    if(a != b) console.error("los lados a y b no son iguales")
    else ...
    */

}

//Círculo

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio){
    return (radio * radio) * PI;
}

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
   //procedimiento para obtener el valor de lo que se introdujo por el usuario
    const input = document.getElementById("InputCuadrado"); //guarda en input toda la instrucción HTML donde está el id InputCuadrado
    const value = input.value; //guarda en una variable el valor de lo que introdujo el usuario
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area);
}
function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputTrianguloBase");
    const base = input3.value;
    const altura = alturaTriangulo(lado1, lado2, base);
    alert("La altura es de: " + altura);
}