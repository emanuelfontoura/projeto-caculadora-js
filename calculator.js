function calculator(){
    const calculatorKeys = document.querySelectorAll('.calculatorKeys > .numbers, .calculatorKeys > .operators')

    const calculatorDisplay = document.querySelector('.calculatorDisplay')

    if(calculatorKeys){

        // FUNÇÃO ADICIONAR ELEMENTO AO DISPLAY
        function clickKey(event){
            const regexFirstNumber = /^[0-9.]$/
            const regexOperator = /^[\+\-\/X\.]$/

            if (calculatorDisplay.innerText == '0'){
                if (regexFirstNumber.test(event.currentTarget.innerText)){ // VERIFICA SE O PRIMEIRO ELEMENTO DIGITADO É UM NÚMERO DE 0 A 9 OU UM PONTO "."
                    calculatorDisplay.innerText = event.currentTarget.innerText
                }
            }else{
                if (regexOperator.test(calculatorDisplay.innerText.slice(-1)) && regexOperator.test(event.currentTarget.innerText)){
                    return
                }else{
                    calculatorDisplay.innerText += event.currentTarget.innerText
                }
            }
            
        }

        calculatorKeys.forEach((key) => {
            key.addEventListener('click', clickKey)
        })

        // FUNÇÃO ADICIONAR "."
        function addDecimal(event){
            const displayTextCopy = calculatorDisplay.innerText
          
            if (calculatorDisplay.innerText.slice(-1) == '' || /[+\-/*]/.test(calculatorDisplay.innerText.slice(-1))){
                calculatorDisplay.innerText += "0."
            }else if (calculatorDisplay.innerText == "0"){
                calculatorDisplay.innerText = "0."
            }else if (/\..*?\./.test(calculatorDisplay.innerText) || /\.{2,}/.test(calculatorDisplay.innerText)){
                return
            }else{
                calculatorDisplay.innerText += "."
            }
        }

        const decimal = document.querySelector('.calculatorKeys > .decimal')
        decimal.addEventListener('click', addDecimal)

        // FUNÇÃO MOSTRAR RESULTADO 
        function calculatorResult(){
            calculatorDisplay.innerText = eval(calculatorDisplay.innerText.replace(/X/g, "*"))
        }

        const equalButton = document.querySelector('.equal')
        equalButton.addEventListener('click', calculatorResult)

        // FUNÇÃO LIMPAR TUDO
        function clearAllDisplay(){
            calculatorDisplay.innerText = '0'
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


    }

}

calculator()