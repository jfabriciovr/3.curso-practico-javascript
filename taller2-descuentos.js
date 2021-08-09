/*
fórmula: (precioInicial * (100 - descuento))/100
*/


/* 
// Versión 1. Cálculo básico e impresión en consola usando un objeto con las variables


const precioOriginal = 100;
const descuento = 15;
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) /100

console.log({

    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento

});

*/
/*
//Versión2. Usando una función

const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
*/

//Versión 3. Escribiendo HTML desde JavaScript

const precioOriginal = 100;
const descuento = 15;

//array de objetos 
const coupons = [
    {
        name: "cup1",
        discount: 15
    },
    {
        name: "cup2",
        discount: 25
    },
    {
        name: "cup3",
        discount: 30
    }
];

function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    //captura el elemento HTML que tiene el id="InputPrice"
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; //guarda el valor del input

    //captura el elemento HTML que tiene el id="InputCoupon"
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value; //guarda el valor del input
    
    const isCouponValueValid = function (coupon){ //regresa la propiedad de nombre del cupón seleccionado
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    
    if(!userCoupon) alert("El cupón " + couponValue + " no es válido");
    else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es: " + precioConDescuento;
    }



    
    
    
}



