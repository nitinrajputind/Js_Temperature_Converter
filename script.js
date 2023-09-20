let celciusInput = document.querySelector("#celcius > input");
let fahreheitInput = document.querySelector("#fahreheit > input");
let kelvinInput = document.querySelector("#Kelvin > input");

console.log(celciusInput)


let btn = document.querySelector(".button button");

function roundNumber(number){
    return Math.round(number*100)/100;
}

// Celcuis to fahrenheit and kelvin

celciusInput.addEventListener("input", function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5))+32
    let kTemp = cTemp + 273.15

    fahreheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

// fahrenheit to Celcuis  and kelvin
fahreheitInput.addEventListener("input", function(){
    let fTemp = parseFloat(fahreheitInput.value)
    let cTemp = (fTemp - 32)* (5/9)
    let kTemp = (fTemp - 32)* (5/9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

// kelvin to fahrenheit and Celcuis

kelvinInput.addEventListener("input", function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15)* (9/5) + 32

    celciusInput.value = roundNumber(cTemp)
    fahreheitInput.value = roundNumber(fTemp)
})

btn.addEventListener("click", () =>{
    celciusInput.value = ""
    fahreheitInput.value = ""
    kelvinInput.value = ""
})

