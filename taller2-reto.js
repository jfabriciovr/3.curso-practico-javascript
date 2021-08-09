//En este reto opté por la opción más simple de lograr el objetivo
//y contempla la posibilidad de un cupón no válido

function onClickButtonPriceDiscount(){
    //captura el elemento HTML que tiene el id="InputPrice"
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; //guarda el valor del input

    //captura el elemento HTML que tiene el id="InputCoupon"
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value; //guarda el valor del input

    let descuento;
    switch(couponValue){
        case "cup1": descuento = 15; break;
        case "cup2": descuento = 25; break;
        case "cup3": descuento = 30; break;
        default: alert("El cupón " + couponValue + " no es válido"); descuento=0; break;
    };

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    const resultP = document.getElementById("ResultP");
    
    if(descuento == 0)
        resultP.innerText = "No se aplicó descuento, el precio es: " + precioConDescuento;
    else    
        resultP.innerText = "Cupón Aplicado del " + descuento + "% ! El precio con descuento es: " + precioConDescuento;
   
}

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}