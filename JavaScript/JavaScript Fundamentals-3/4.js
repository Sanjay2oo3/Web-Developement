function check(obj, prop){
    return obj.hasOwnProperty(prop)
}

const car ={ 
    make:'Honda',
    model:'Verna', 
    year: 2020
}

console.log(check(car, 'model'))
console.log(check(car, 'name'))

