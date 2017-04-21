var screen =  document.querySelector("#js-screen");
var firstNumber =  document.querySelector("#js-screen").value;
var numberButtons = document.querySelectorAll(".js-number");
var operatorsButtons = document.querySelectorAll(".js-operator");
var  waitingForSecondNumber = false;
var secondNumber = 0;
var calculate = document.querySelector(".js-result");
var operator;

function calculateValue() {
  screen.value = eval(firstNumber +  operator + secondNumber);
}
calculate.addEventListener("click", calculateValue);

function numberClicked() {
      if(screen.value == "0"){
         screen.value = event.target.value;
      }

      if(waitingForSecondNumber) {
          secondNumber += event.target.value;
          screen.value += event.target.value;
      } else {
        screen.value += event.target.value;
      }
}

function operatorClicked() {

      waitingForSecondNumber = true;
      firstNumber = screen.value;
      screen.value += event.target.value;
      operator = event.target.value;
      if(operator === "AC") {
        screen.value = 0;
        firstNumber = 0;
        waitingForSecondNumber = false;
        secondNumber = 0;
      }
}

for( var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", numberClicked)
}

for( var t = 0; t < operatorsButtons.length; t++ ) {
   operatorsButtons[t].addEventListener("click", operatorClicked)
}






console.log("ekranas", firstNumber);
