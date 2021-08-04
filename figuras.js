console.log("Figuras Geométricas");

//cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Lados del cuadraro miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

//Triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriángulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm "
);
console.log("La altura del triángulo es de: " + alturaTriángulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriángulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//círculo
console.group("Círculo");

//Radio
const radioCirculo = 4;

//Diámetro
const diametroCirculo = radioCirculo * 2;

// PI
const PI = Math.PI;


//Circunferencia
const perimetroCirculo = diametroCirculo * PI;


console.groupEnd();