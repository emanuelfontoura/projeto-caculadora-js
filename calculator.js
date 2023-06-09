var operationMemory = ""
const calculatorKeys = document.querySelectorAll('.calculatorKeys > .numbers, .calculatorKeys > .operators')
const calculatorDisplay = document.querySelector('.calculatorDisplay')
const currentOperationDisplay = document.querySelector('.currentOperationDisplay')
const regexFirstNumber = /^[0-9.]$/
const regexOperatorAndDecimal = /^[\+\-\/X\.]$/
const regexOperator = /[+\-X/]/
const regexSubtract = /-/

function calculator(){

    if(calculatorKeys){

        // FUNÇÃO ADICIONAR ELEMENTO AO DISPLAY
        function clickKey(event){
            

            if (calculatorDisplay.innerText == '0'){
                if (regexFirstNumber.test(event.currentTarget.innerText)){ // VERIFICA SE O PRIMEIRO ELEMENTO DIGITADO É UM NÚMERO DE 0 A 9 OU UM PONTO "."
                    calculatorDisplay.innerText = event.currentTarget.innerText
                }
            }else if (regexOperator.test(event.currentTarget.innerText)){
                operationMemory += calculatorDisplay.innerText + event.currentTarget.innerText
                calculatorDisplay.innerText = "0"
                currentOperationDisplay.innerText = operationMemory
            }else if (calculatorDisplay.innerText.length <= 20 && currentOperationDisplay.innerText.length + calculatorDisplay.innerText.length <= 38){
                calculatorDisplay.innerText += event.currentTarget.innerText
            }
        }
        

        calculatorKeys.forEach((key) => {
            key.addEventListener('click', clickKey)
        })

        // FUNÇÃO ADICIONAR "."
        function addDecimal(event){
          
            if (calculatorDisplay.innerText.slice(-1) == '' || /[+\-/*]/.test(calculatorDisplay.innerText.slice(-1))){
                calculatorDisplay.innerText += "0."
            }else if (calculatorDisplay.innerText == "0"){
                calculatorDisplay.innerText = "0."
            }else if (calculatorDisplay.innerText.includes('.')){
                return
            }else{
                calculatorDisplay.innerText += "."
            }
        }

        const decimal = document.querySelector('.calculatorKeys > .decimal')
        decimal.addEventListener('click', addDecimal)

        // FUNÇÃO MOSTRAR RESULTADO 
        function calculatorResult(){
            operationMemory += calculatorDisplay.innerText
            operationMemory = operationMemory.replace('--', '+')
            calculatorDisplay.innerText = eval(operationMemory.replace(/X/g, "*"))
            operationMemory = ""
            currentOperationDisplay.innerText = "0"
        }

        const equalButton = document.querySelector('.equal')
        equalButton.addEventListener('click', calculatorResult)

        // FUNÇÃO LIMPAR TUDO
        function clearAllDisplay(){
            calculatorDisplay.innerText = '0'
            operationMemory = ""
            currentOperationDisplay.innerText = "0"
        }

        const clearAllButton = document.querySelector('.clearAll')
        clearAllButton.addEventListener('click', clearAllDisplay)

        //FUNÇÃO APAGAR NÚMERO ANTERIOR
        function clearPreviousDisplay(){
            const regexOneNumber = /^\d$/
            if (regexOneNumber.test(calculatorDisplay.innerText)){
                calculatorDisplay.innerText = "0"
            }else{
                calculatorDisplay.innerText = calculatorDisplay.innerText.substring(0, calculatorDisplay.innerText.length-1)
            }
        }

        const clearPrevious = document.querySelector('.clearPrevious')
        clearPrevious.addEventListener('click', clearPreviousDisplay)


        // FUNÇÃO INVERTER O SINAL DO VALOR
        function invert(){
            calculatorDisplay.innerText = +calculatorDisplay.innerText * (-1)
        }
    
        const buttonInvert = document.querySelector('.invert')
        buttonInvert.addEventListener('click', invert)
    }

}

calculator()