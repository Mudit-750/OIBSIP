

const display =  document.getElementById('display')

function appendToDisplay(input){
    display.value+= input

}

function clearDisplay(){
    display.value= ''
}

function calculate(){
    try{

        display.value =  eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }

}

function backspace(){
    let back = display.value
    back = back.slice(0,-1)
    display.value = back
      
}