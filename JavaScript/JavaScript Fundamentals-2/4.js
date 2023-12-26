const products = [

    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 }, 
    { name: "Laptop Bag", price: 20000 }, 
    { name: "Watch", price: 20000 }, 
    { name: "Mobile Charger", price: 1500 }, 
];

const HLP =(product)=>{

    let maxProduct = { name: "", price: 0 };
    let minProduct = { name: "", price: Number.MAX_VALUE };

    for(let p of product){
        if(p.price>maxProduct.price){
             maxProduct = p;
        }else
        if(p.price<minProduct.price){
            minProduct = p;
        }
    }

    console.log(`The Product with maximum amount is ${maxProduct.name} which is priced at Rs.${maxProduct.price}`)
    console.log(`The Product with maximum amount is ${minProduct.name} which is priced at Rs.${minProduct.price}`)

};

HLP(products)