let arr = [10,20,30,40,50,60,70,80,90,100]

function doubleArr(val, callback){
    const newArr = val.map((x)=>x*2)
    callback(newArr);
}

function callback(newArr){
    console.log(newArr);
}

doubleArr(arr,callback);
