const regularExpressions = {
    pibMatch: /([А-Яа-яёЁЇїІіЄєҐґ]) ([А-Яа-яёЁЇїІіЄєҐґ]{0,1})\.([А-Яа-яёЁЇїІіЄєҐґ]{0,1})\./,
    variant: /(^[1-9]{1,2}$)/,
    groupMatch: /(^[А-Яа-яёЁЇїІіЄєҐґ]{2})\-([0-9]{2})\b/,
    facultyMatch: /^[А-Яа-яёЁЇїІіЄєҐґ]{3,4}$/,
    birthDayDateMatch: /([0-3]\d\.\d[0-2]\.\d{4})\b/,
}

const N = 9;

const submitBtn = document.getElementById("submitBtn");
const values = ['pib','variant','group', 'faculty', 'birthDate'];
const colors = ['green', 'red', 'yellow', 'blue', 'black', 'white']
let pibValue;
let variantValue;
let groupValue;
let facultyValue;
let birthdayDateValue;
let inputValues;

const sentDataDiv = document.getElementById("sentData");
sentDataDiv.style.display = 'none';

let validationResult = {
    pibValid: false,
    variantValid: false,
    groupValid: false,
    facultyValid: false,
    birthDateValid: false
}



submitBtn.addEventListener('click', () => submit());
generateSquareOfNumber();
const numberWithVariant = document.getElementById(N);
numberWithVariant.addEventListener('pointerover', () => randomizeElementColors(numberWithVariant))
numberWithVariant.addEventListener('click', () => changeColorFromInput())
numberWithVariant.addEventListener('dblclick', () => changeColorsOfSquares())

function submit() {
    event.preventDefault();
    updateValue();
    validateValues();
    updateValidationFormValues();
    if (!isAnyInputValueInvalid()) {
        sentDataDiv.style.display = 'block';
        fillInSentValues();
    } else {
        sentDataDiv.style.display = 'none';
    }
}

function updateValue() {
    pibValue = document.getElementById("pib").value;
    variantValue = document.getElementById("variant").value;
    groupValue = document.getElementById("group").value;
    facultyValue = document.getElementById("faculty").value;
    birthdayDateValue = document.getElementById("birthDate").value;
    inputValues = [pibValue, variantValue, groupValue, facultyValue, birthdayDateValue];
}

function validateValues() {
    validationResult = {
        pibValid: regularExpressions.pibMatch.test(pibValue),
        variantValid: regularExpressions.variant.test(variantValue),
        groupValid: regularExpressions.groupMatch.test(groupValue),
        facultyValid: regularExpressions.facultyMatch.test(facultyValue),
        birthDateValid: regularExpressions.birthDayDateMatch.test(birthdayDateValue)
    }
}

function updateValidationFormValues() {
    let entries = Object.entries(validationResult);
    for (const entry of entries) {
        updateValidationFormValue(entry);
    }
}

function updateValidationFormValue(valueToHighlight) {
    const id = valueToHighlight[0].split('Valid')[0];
    const isValid = valueToHighlight[1];
    const element = document.getElementById(id);
    if (!isValid) {
        element.style.border = "2px solid red"
    } else {
        element.style.border = "1px solid black"
    }
}

function isAnyInputValueInvalid() {
    let validResults = Object.entries(validationResult);
    console.log(validResults);
    for (const validResult of validResults) {
        if (validResult[1] === false) {
            return true;
        }
    }
    return false;
}

function fillInSentValues() {
    console.log(values);
    console.log(inputValues);
    for (let i = 0; i < values.length ; i++) {
        let sentId = "sent-" + values[i];
        const element = document.getElementById(sentId);
        element.innerText = inputValues[i];
    }
}

function generateSquareOfNumber() {
    const element = document.getElementById("square");
    for (let i = 1; i <= 36 ; i++) {
        element.innerHTML += generateSquareElement(i);
    }
}

function generateSquareElement(number){
    return `<div id="${number}" class="square_element">${number}</div>`
}

function randomizeElementColors(el) {
    const randomTextColor = getRandomColor();
    const randomBackgroundColor = getRandomColorExcept(randomTextColor);

    setTextColor(el, randomTextColor);
    setBackgroundColor(el, randomBackgroundColor);
}

function getRandomColorExcept(except) {
    let color = getRandomColor();
    return color === except ? getRandomColorExcept(except) : color;
}

function getRandomColor() {
    return colors[getRandomInt(colors.length)]
}

function getRandomInt(maxValue)
{
    return Math.floor(Math.random() * maxValue);
}

function setTextColor(el, color) {
    if (el !== undefined) {
        el.style.color = color;
    }
}

function setBackgroundColor(el, color) {
    if (el !== undefined) {
        el.style.backgroundColor = color;
    }
}

function changeColorFromInput() {
    document.getElementById(N).style.backgroundColor = document.getElementById("colorInput").value;
}

function changeColorsOfSquares() {
    const elements = getElements();
    console.log(elements)
    for (const element of elements) {
        randomizeElementColors(element);
    }
}

function getElements() {
    const elements = [];
    for (let i = N, j = 0; i < 36; i += 12, j++) {
        elements[j] = document.getElementById(i.toString())
    }
    return elements;
}
