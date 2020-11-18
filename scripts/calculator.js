const arrondi = 1000
function safeEval(str) {
    return Math.round(Function('return ' + str)() * arrondi) / arrondi
}
const inv = x => Math.round((1 / x) * arrondi) / arrondi;
const factorial = a => {
    // Function returning the factorial of a number entered in parameter, if this number is not an integer, it is rounded.

    a = Math.round(a);
    if (a === 0) {
        return 1;
    }
    
    let n = a;
    for (let i = 1; i < n - 1; i++) {
        a += a * i;
    }
    return(a);
}
const log = x => Math.round((Math.log(x) / Math.log(10)) * arrondi) / arrondi;
const euroToDollar = x => Math.round((x * 1.19) * arrondi) / arrondi;
const dollarToEuro = x => Math.round((x * 0.84) * arrondi) / arrondi;

/*----------------------------------------------------*/

const buttons = document.querySelectorAll('.btn');
const history = []
let noDoubleDots = false;
let result = false;

/*----------------------------------------------------*/

const calc = (input) => {
    if (p.textContent == 0) {
        p.textContent = '';
    }
    if (input != 'DEL' && input != '=' && input != 'Inv' && input != 'x!' && input != 'sin' && input != 'ln' && input != 'cos' && input != 'log' && input != 'tan' && input != '√' && input != '€' && input != '$') {
        if (input == '.') {
            if (!noDoubleDots) {
                noDoubleDots = true;
                p.textContent += '.';
            }
        } else if (input == '%') {
            p.textContent = safeEval(String(p.textContent)) / 100;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (input == '+') {
            p.textContent += '+';
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            noDoubleDots = false;
        } else if (input == '-') {
            p.textContent += '-';
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            noDoubleDots = false;
        } else if (input == '(') {
            p.textContent += '(';
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            noDoubleDots = false;
        } else if (input == ')') {
            p.textContent += ')';
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            noDoubleDots = false;
        } else if (input == 'x') {
            p.textContent += '*';
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            noDoubleDots = false;
        } else if (input == '/') {
            p.textContent += '/';
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            noDoubleDots = false;
        } else {
            p.textContent += String(input)
        }
    } // NOUVELLES TOUCHES A VERIFIER
    else if (input == 'Inv') {
        p.textContent = inv(safeEval(String(p.textContent)));
        if (Number.isInteger(Number(p.textContent))) {
            noDoubleDots = false;
        } else {
            noDoubleDots = true;
        }
    } else if (input == 'x!') {
        p.textContent = factorial(safeEval(String(p.textContent)));
        if (!noDoubleDots) {
            noDoubleDots = true;
        }
        if (Number.isInteger(Number(p.textContent))) {
            noDoubleDots = false;
        } else {
            noDoubleDots = true;
        }
    } else if (input == 'sin') {
        p.textContent = Math.round(Math.sin(safeEval(String(p.textContent))) * arrondi) / arrondi;
        if (Number.isInteger(Number(p.textContent))) {
            noDoubleDots = false;
        } else {
            noDoubleDots = true;
        }
    } else if (input == 'ln') {
        p.textContent = Math.round(Math.log(safeEval(String(p.textContent))) * arrondi) / arrondi;
        if (Number.isInteger(Number(p.textContent))) {
            noDoubleDots = false;
        } else {
            noDoubleDots = true;
        }
    } else if (input == 'cos') {
        p.textContent = Math.round(Math.cos(safeEval(String(p.textContent))) * arrondi) / arrondi;
        if (Number.isInteger(Number(p.textContent))) {
            noDoubleDots = false;
        } else {
            noDoubleDots = true;
        }
    } else if (input == 'log') {
        p.textContent = log(safeEval(String(p.textContent)));
        if (Number.isInteger(Number(p.textContent))) {
            noDoubleDots = false;
        } else {
            noDoubleDots = true;
        }
    } else if (input == 'tan') {
        p.textContent = Math.round(Math.tan(safeEval(String(p.textContent))) * arrondi) / arrondi;
        if (Number.isInteger(Number(p.textContent))) {
            noDoubleDots = false;
        } else {
            noDoubleDots = true;
        }
    } else if (input == '√') {
        p.textContent = Math.round(Math.sqrt(safeEval(String(p.textContent))) * arrondi) / arrondi;
        if (Number.isInteger(Number(p.textContent))) {
            noDoubleDots = false;
        } else {
            noDoubleDots = true;
        }
    } 
    else if (input == '€') {
        p.textContent = dollarToEuro(safeEval(String(p.textContent)));
    }
    else if (input == '$') {
        p.textContent = euroToDollar(safeEval(String(p.textContent)));
    }
    else if (input == 'DEL') {
        p.textContent = '0';
        if (!noDoubleDots) {
            noDoubleDots = true;
        }
        noDoubleDots = false;
    } else {
        history.push(p.textContent + '=' + safeEval(String(p.textContent)));
        p.textContent = safeEval(String(p.textContent));
        if (history.length > 3) {
            history.shift();
        }
        p2.textContent = history.join(', ');
    }
}

for (let btn of buttons) {
    btn.addEventListener('click', () => calc(btn.textContent))
}
window.addEventListener('keyup', (e) => {
    if (signs.find(f => f.display == e.key)) {
        calc(e.key)
    } else {
        const conversion = {
            'Backspace': 'DEL',
            'Enter': '=',
            '_': '-',
            '*': 'x',
            'I': 'Inv',
            'X': 'x!',
            'S': 'sin',
            'N': 'ln',
            'C': 'cos',
            'L': 'log',
            'T': 'tan',
            'V': '√',
        }
        if (conversion[e.key] !== undefined) {
            calc(conversion[e.key])
        }
    }
})