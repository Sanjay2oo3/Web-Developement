let users = ["Sanjay", "Rahul ", "Siddhe", "Het", "Mithun" ,"Jay", "Harshal"]

function isUserPresent(name){

    if(users.includes(name)){
        console.log(`Yes, ${name} is valid user`)
    }else
    {
        console.log(`No, ${name} is valid user`)
    }

}

isUserPresent("Mithun");

isUserPresent("Someone");