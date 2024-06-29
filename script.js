function appendToScreen(value) {
    const currentScreen = document.getElementById('currentOperationScreen');
    currentScreen.textContent += value ;
}

function calculate() {
    const currentExpression = document.getElementById('currentOperationScreen').textContent;
    try {
        const result = eval(currentExpression); 
        document.getElementById('currentOperationScreen').textContent = result;
    } catch (error) {
        document.getElementById('currentOperationScreen').textContent = 'Error';
    }
}

function calculatePercentage() {
    const currentInput = parseFloat(document.getElementById('currentOperationScreen').textContent);
    const result = currentInput / 100;
    document.getElementById('currentOperationScreen').textContent = result;
}

function clearInput() {
    document.getElementById('currentOperationScreen').textContent = '';
}
