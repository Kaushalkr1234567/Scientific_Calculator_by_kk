let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML == 'sin') {
            string = Math.sin(eval(string)).toString();
            input.value = string;
        } else if (e.target.innerHTML == 'cos') {
            string = Math.cos(eval(string)).toString();
            input.value = string;
        } else if (e.target.innerHTML == 'tan') {
            string = Math.tan(eval(string)).toString();
            input.value = string;
        } else if (e.target.innerHTML == 'sqrt') {
            string = Math.sqrt(eval(string)).toString();
            input.value = string;
        } else if (e.target.innerHTML == 'x^2') {
            string = Math.pow(eval(string), 2).toString();
            input.value = string;
        } else if (e.target.innerHTML == 'x^3') {
            string = Math.pow(eval(string), 3).toString();
            input.value = string;
        } else if (e.target.innerHTML == 'x^y') {
            let values = string.split('^');
            string = Math.pow(eval(values[0]), eval(values[1])).toString();
            input.value = string;
        } else if (e.target.innerHTML == 'log') {
            string = Math.log10(eval(string)).toString();
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})