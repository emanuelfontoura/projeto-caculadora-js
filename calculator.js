function calculator(){
    const calculatorKeys = document.querySelectorAll('.calculatorKeys > .numbers, .calculatorKeys > .operators, .calculatorKeys > .decimal')

    const calculatorDisplay = document.querySelector('.calculatorDisplay')

    if(calculatorKeys){

        // FUNÇÃO ADICIONAR ELEMENTO AO DISPLAY
        function clickKey(event){
            const regexFirstNumber = /^[0-9.]$/
            const regexOperator = /^[\+\-X\/]$/
            if (calculatorDisplay.innerText == '0'){
                if (regexFirstNumber.test(event.currentTarget.innerText)){ // VERIFICA SE O PRIMEIRO ELEMENTO DIGITADO É UM NÚMERO DE 0 A 9 OU UM PONTO "."
                    if (event.currentTarget.innerText == "."){
                        calculatorDisplay.innerText = "0."
                    }else{
                        calculatorDisplay.innerText = event.currentTarget.innerText
                    }
                }
            }else{
                if (!(regexOperator.test(event.currentTarget.innerText) == numberPrevious)){
                    calculatorDisplay.innerText += event.currentTarget.innerText
                }
            }
            
            var numberPrevious = regexOperator.test(event.currentTarget.innerText)
        }

        calculatorKeys.forEach((key) => {
            key.addEventListener('click', clickKey)
        })


        // FUNÇÃO MOSTRAR RESULTADO 
        function calculatorResult(){
            calculatorDisplay.innerText = eval(calculatorDisplay.innerText.replace("X", "*"))
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