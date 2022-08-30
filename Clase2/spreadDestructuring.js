const products = {
    modelo: "Iphone 12",
    espacio: "128GB",
    valor: 160.000
}

const {modelo} = products

console.log(modelo) // "Iphone 12"

const productsExtend = {
    ...products,
    color: "Negro"
}

console.log(productsExtend)


