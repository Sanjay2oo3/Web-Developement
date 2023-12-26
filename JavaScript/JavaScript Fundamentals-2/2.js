function calculateTotalCartValue(){

    let sum=0;

    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i]; 
    }

    console.log(`The total cart value is ${sum}`)
}


calculateTotalCartValue(125,50,90)