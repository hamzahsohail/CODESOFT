let buttons = document.getElementsByClassName("btn");
let display = document.getElementById("calculatorDisplay");

let clickCount = 0;

let inputLog = [];

function backspace() {
  inputLog.pop();

  if (inputLog.length == 0) {
    display.innerHTML = "0";
  } else {
    display.innerHTML = inputLog.join("");
  }
}

Array.from(buttons).forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      clickCount = 0;
      inputLog.length = 0;
      display.innerHTML = "0";
    } else if (e.target.innerHTML == "=") {
      if (inputLog.length == 0) {
        display.innerHTML = "0";
      } else {
        display.innerHTML = eval(inputLog.join(""));
        clickCount = 0;
        inputLog.length = 0;
      }
    } else {
      clickCount++;

      if (e.target.innerHTML == "÷") {
        inputLog.push("/");
      } else if (e.target.innerHTML == "×") {
        inputLog.push("*");
      } else if (e.target.innerHTML == "−") {
        inputLog.push("-");
      } else if (e.target.innerHTML == "+") {
        inputLog.push("+");
      } else if (e.target.innerHTML == "•") {
        inputLog.push(".");
      } else if (e.target.innerHTML == "%") {
        if (inputLog.length == 0) {
          inputLog.push("0");
        } else {
          inputLog.push("/");
          inputLog.push("100");
        }
      } else {
        inputLog.push(e.target.innerHTML);
      }
      display.innerHTML = inputLog.join("");
    }
  });
});

document.addEventListener("keyup", (event) => {
  if (event.key == "Backspace") {
    backspace()
  }
});