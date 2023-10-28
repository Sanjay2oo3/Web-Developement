const arr = [1, 2, 999, 56, "Mithum", 1234, "PW"];

for (let index = 0; index < arr.length; index++) {

    if(typeof(arr[index])=="string"){
        console.log("Found the First String: "+ arr[index]);
        break;
    }
    
}