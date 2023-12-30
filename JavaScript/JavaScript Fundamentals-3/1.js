const car ={ 
    make:'Honda',
    model:'Verna', 
    year: 2020
}

function displayProperties(car){
    for(let iterator in car){
        console.log(`${iterator} :${car[iterator]} `)
    }
}

displayProperties(car)