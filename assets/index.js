// variáveis
const randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.getElementById('btnTry');
const btnReset = document.getElementById('btnReset');
let xTentativas = 1;

function handleClick(event){
    event.preventDefault(); // não faça o padrão
    
    const inputNumber = document.querySelector('#inputNumber');

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add('hide');
        screen2.classList.remove('hide');

        screen2.querySelector('h2').innerText = `Você acertou em ${xTentativas} tentativas.`;
        //document.querySelector('.screen2 h2').innerText = `Você acertou em ${xTentativas} tentativas.`;
    }
    inputNumber.value = '';
    xTentativas++;
}
function handleResetClick(){
    screen1.classList.remove('hide');
    screen2.classList.add('hide');
}
function keyPress(e){
    if (e.key === 'Enter'){
        handleResetClick();
    }
}

btnTry.addEventListener('click', handleClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', keyPress);