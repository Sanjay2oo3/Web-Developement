class Temperature{
    constructor(){
        this.celsuis = 0;
        this.fahrenheit = 32;
    }

   get getCelsuis(){
       return this.celsuis;
    }
   get getFahrenheit(){
        return this.fahrenheit;
    }


    set setCelsuis(value){

        if(typeof value === "number"){
            this.celsuis = value;
            this.fahrenheit = (value*(9/5)+32);
        }

    }
    
    set setFahrenheit(value){
        if(typeof value === "number"){
            this.fahrenheit = value;
            this.celsuis = (value-32)*(5/9);
        }
    }
}

const temperature = new Temperature();


console.log(`Intial Celsuis: ${temperature.celsuis}°C`)
console.log(`Intial Fahrenheit: ${temperature.fahrenheit}°F`)

temperature.setCelsuis = 25;

console.log(`Celsuis: ${temperature.celsuis}°C`)
console.log(`Fahrenheit: ${temperature.fahrenheit}°F`)

temperature.setFahrenheit = 68;

console.log(`Celsuis: ${temperature.celsuis}°C`)
console.log(`Fahrenheit: ${temperature.fahrenheit}°F`)

