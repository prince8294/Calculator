let AllButtan = document.querySelectorAll(".Buttan");
let Alloutput = document.querySelector(".output");

let expression = '';

AllButtan.forEach((Buttan) => {
    Buttan.addEventListener("click", () => {
        let value = Buttan.value;
        if (value === "=") {
            Alloutput.innerText = eval(expression);
        } else if(value === "C"){
            expression = ''; // Clear the expression
            Alloutput.innerText = ''; // Clear the output display
        } else {
            expression += value;
            Alloutput.innerText = expression;
        }
    });
});
