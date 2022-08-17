


function changeValue(inputValue) {

    const inputField = document.getElementById(inputValue);
    const givenValueString = inputField.value;
    if (isNaN(inputField.value)) {
        alert('please provide valid number');
        return 0;
    }
    inputField.value = '';
   
    const givenValue = parseFloat(givenValueString);
    const makeDouble = Math.pow(givenValue, 2);
    return makeDouble;
    // return (makeDouble, makeTriple);
}


function makeTripleValue(inputValue) {

    const inputField = document.getElementById(inputValue);

    const givenValueString = inputField.value;
    
    if (isNaN(inputField.value)) {
        alert('please provide valid number');
        return 0;
    }
    inputField.value = '';
   
    const givenValue = parseFloat(givenValueString);
    const makeTriple = Math.pow(givenValue, 3);
    return makeTriple;
}



function setTextfieldValue(textValue, newValue) {
    const textField = document.getElementById(textValue);
    textField.innerText = newValue;
}


