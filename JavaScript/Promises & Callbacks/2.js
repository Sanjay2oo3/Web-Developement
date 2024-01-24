function manipulateString(str, logString){
    let newStr = str.toUpperCase();
    logString(newStr)
}

function logString(newStr){
    console.log(`The manipulated string is : ${newStr}`)
}
manipulateString('hello world!', logString)