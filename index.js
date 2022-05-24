let arrOfNumbers = document.querySelectorAll('.number')
let resultWindow = document.querySelector('.result')
let buttonsContainer = document.querySelector('.buttons-wrapper')
let operators = document.querySelectorAll('.sign');
let number = '';
let sign = '';
let canPutSign = true;
let strOfNumberBeforeSign = ''

function createStrBeforeCount (number) {
    strOfNumberBeforeSign = strOfNumberBeforeSign + number;
    return strOfNumberBeforeSign
}

function convertStrToSign (eventTarget) {
   if (canPutSign) {
       number = ''
       sign = eventTarget.innerHTML
       createStrBeforeCount(' '+ sign + ' ');
       canPutSign = false
   }
}
function getNumValue(eventTarget) {
    number = eventTarget.target.innerHTML
    canPutSign = true
}

buttonsContainer.addEventListener('click', function (e) {
    if(e.target.closest( '.number')) {
        getNumValue(e);
    }

    if(e.target.closest('.sign')) {
        convertStrToSign(e.target)
    }
    resultWindow.innerHTML = createStrBeforeCount(number);
})



