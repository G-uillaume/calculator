function safeEval(str) {
    return Function('return ' + str)()
}

let a;

const button = document.querySelectorAll('button')

for (let i of button) {
    i.addEventListener('click', () => {
        if (i.textContent != 'AC' && i.textContent != '=') {
            input.value += String(i.textContent);
        } else if (i.textContent == 'AC') {
            input.value = '';
        } else {
            input.value = safeEval(String(input.value))
        }
    })
}