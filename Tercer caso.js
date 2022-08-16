function check(str) {
    const value = str.split("").reverse().join("");

    return value === str ? "El Valor " +str+ " es un palíndromo" : "El Valor " +str+ " presentado no es un palíndromo";
}
console.log(check("ana"));
console.log(check("anna"));
console.log(check("otto"));
console.log(check("sebas"));

