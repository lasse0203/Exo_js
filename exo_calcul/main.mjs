const buttons = document.querySelectorAll("button");
const display = document.querySelector("span");
let currentExpression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    if (buttonText === "=") {
      currentExpression = eval(currentExpression);
      display.textContent = currentExpression;
      currentExpression = "";
    } else if (buttonText === "AC") {
      display.textContent = "";
      currentExpression = "";
    } else {
      currentExpression += buttonText;
      display.textContent = currentExpression;
    }
  });
});
