function reversestr(){
        
    let input = "This is Sanjay Choudhary doing assignment HOF and Functional Programming in PW Skills"
    let reversestr = input.split("").reverse().join("");;
    console.log(reversestr)
}

setTimeout(reversestr, 2000)