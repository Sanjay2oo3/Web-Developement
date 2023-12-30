const map = new Map();

function adduser(name, age, email){
    const userinfo = {age, email}
    map.set(name,userinfo)
}

function Updateuser(name, age, email){
    if(map.has(name)){
        const userinfo = map.get(name)
        userinfo.age=age
        userinfo.email=email
    }
}

function deleteuser(name){
    map.delete(name)
}

adduser('sanjay',20, 'itssanjaychoudhary423@gmail.com')
adduser('rahul',18, 'rahul@gmail.com')
console.log(map)

Updateuser('sanjay', 21, 'itssanjaytemp@gmail.com')
console.log(map)

deleteuser('rahul')
console.log(map)
