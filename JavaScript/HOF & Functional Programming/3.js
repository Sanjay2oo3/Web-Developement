const items = {
    laptop : 1000,
    iphone : 499,
    airpods : 299,
    magsafe : 69
}

const exchangePriceIND = 80;

const INDPrice = Object.entries(items).map(([item, priceUSD])=>{

    const price  = exchangePriceIND * priceUSD;
    return [item , price]
})

console.log(INDPrice)