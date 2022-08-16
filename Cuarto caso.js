var torreA = 1;
var torreB = 2;
var torreC = 3;
//n = # discos
var n = 5;

torreHanoi(n, torreA, torreB, torreC);

function torreHanoi(n, inicio, destino ,medio)
{
    if (n == 1)
    console.log("Se mueve el disco " + n +" desde la torre " + inicio + " a la torre " + destino);
    else {
        torreHanoi(n-1, inicio, medio, destino);
            console.log("Se mueve el disco " + n +" desde la torre " + inicio + " a la torre " + destino);
        torreHanoi(n-1,medio,destino,inicio);
    }
}