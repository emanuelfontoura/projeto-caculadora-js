function calculator(){
    const calculatorKeys = document.querySelectorAll('.calculatorKeys > .numbers, .calculatorKeys > .operators, .calculatorKeys > .decimal')

    const calculatorDisplay = document.querySelector('.calculatorDisplay')

    if(calculatorKeys){

        // FUNÇÃO ADICIONAR ELEMENTO AO DISPLAY
        function clickKey(event){
            if (calculatorDisplay.innerText == '0'){
                calculatorDisplay.innerText = event.currentTarget.innerText
            }else{
                calculatorDisplay.innerText += event.currentTarget.innerText
            }
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

    }

}

calculator()