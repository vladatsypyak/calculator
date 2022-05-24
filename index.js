let arrOfNumbers = document.querySelectorAll('.number')
let resultWindow = document.querySelector('.result')
let buttonsContainer = document.querySelector('.buttons-wrapper')
let operators = document.querySelectorAll('.sign');
let number = '';
let sign = '';
let strOfNumberBeforeSign = ''

function createStrBeforeCount (number) {

    strOfNumberBeforeSign = strOfNumberBeforeSign + number;
    console.log(strOfNumberBeforeSign)
    return strOfNumberBeforeSign
}

function convertStrToSign (eventTarget) {
    if (eventTarget.innerHTML === '+') {
        number = ''
        createStrBeforeCount('+');
    }
}




buttonsContainer.addEventListener('click', function (e) {
    if(e.target.closest( '.number')) {
        console.log('----' + e.target.innerHTML)
         number = e.target.innerHTML
    }

    if(e.target.closest('.sign')) {
        convertStrToSign(e.target)
    }
    resultWindow.innerHTML = createStrBeforeCount(number);
})



