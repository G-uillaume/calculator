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

for (let btn of buttons) {
    btn.addEventListener('click', () => {
        if (p.textContent == 0) {
            p.textContent = '';
            p2.textContent = '';
        }
        if (btn.textContent != 'AC' && btn.textContent != '=' && btn.textContent != 'Inv' && btn.textContent != 'x!' && btn.textContent != 'sin' && btn.textContent != 'ln' && btn.textContent != 'cos' && btn.textContent != 'log' && btn.textContent != 'tan' && btn.textContent != '√' && btn.textContent != '€' && btn.textContent != '$') {
            if (btn.textContent == '.') {
                if (!noDoubleDots) {
                    noDoubleDots = true;
                    p.textContent += '.';
                    p2.textContent += '.';
                }
            } else if (btn.textContent == '%') {
                p2.textContent += ' % ' + safeEval(String(p.textContent)) / 100;
                p.textContent = safeEval(String(p.textContent)) / 100;
                if (Number.isInteger(Number(p.textContent))) {
                    noDoubleDots = false;
                } else {
                    noDoubleDots = true;
                }
            } else if (btn.textContent == '+') {
                p.textContent += '+';
                p2.textContent += ' + ';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (btn.textContent == '-') {
                p.textContent += '-';
                p2.textContent += ' - ';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (btn.textContent == '(') {
                p.textContent += '(';
                p2.textContent += '(';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (btn.textContent == ')') {
                p.textContent += ')';
                p2.textContent += ')';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (btn.textContent == 'x') {
                p.textContent += '*';
                p2.textContent += ' * ';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (btn.textContent == '/') {
                p.textContent += '/';
                p2.textContent += ' / ';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else {
                p.textContent += String(btn.textContent)
                p2.textContent += String(btn.textContent);
            }
        } // NOUVELLES TOUCHES A VERIFIER
        else if (btn.textContent == 'Inv') {
            p.textContent = inv(safeEval(String(p.textContent)));
            p2.textContent += ' Inv ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (btn.textContent == 'x!') {
            p.textContent = factorial(safeEval(String(p.textContent)));
            p2.textContent += ' ! ' + p.textContent;
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (btn.textContent == 'sin') {
            p.textContent = Math.round(Math.sin(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' sin ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (btn.textContent == 'ln') {
            p.textContent = Math.round(Math.log(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' ln ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (btn.textContent == 'cos') {
            p.textContent = Math.round(Math.cos(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' cos ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (btn.textContent == 'log') {
            p.textContent = log(safeEval(String(p.textContent)));
            p2.textContent += ' log ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (btn.textContent == 'tan') {
            p.textContent = Math.round(Math.tan(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' tan ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (btn.textContent == '√') {
            p.textContent = Math.round(Math.sqrt(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' √ ' + p.textContent;
            // PROBLEME DE POINT !!!
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } 
        else if (btn.textContent == '€') {
            p.textContent = dollarToEuro(safeEval(String(p.textContent)));
            p2.textContent += p.textContent;
        }
        else if (btn.textContent == '$') {
            p.textContent = euroToDollar(safeEval(String(p.textContent)));
            p2.textContent += p.textContent;
        }
        else if (btn.textContent == 'AC') {
            p.textContent = '0';
            p2.textContent = '0';
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            noDoubleDots = false;
        } else {
            p.textContent = safeEval(String(p.textContent));
            for (let i of buttons) {
                if (i.textContent == 'AC') {
                    i.disabled = false;
                    console.log(i)
                } else {
                    i.disabled = true;
                    console.log(i)
                }
            }
        }
    })
}

document.body.addEventListener('keypress', (e) => {
    if (p.textContent == 0) {
            p.textContent = '';
            p2.textContent = '';
        }
        if (e.key != 'a' && e.key != 'Enter' && e.key != 'i' && e.key != 'x' && e.key != 's' && e.key != 'l' && e.key != 'c' && e.key != 'L' && e.key != 't' && e.key != 'v' && e.key != '€' && e.key != '$') {
            if (e.key == '.') {
                if (!noDoubleDots) {
                    noDoubleDots = true;
                    p.textContent += '.';
                    p2.textContent += '.';
                }
            } else if (e.key == '%') {
                p2.textContent += ' % ' + safeEval(String(p.textContent)) / 100;
                p.textContent = safeEval(String(p.textContent)) / 100;
                if (Number.isInteger(Number(p.textContent))) {
                    noDoubleDots = false;
                } else {
                    noDoubleDots = true;
                }
            } else if (e.key == '+') {
                p.textContent += '+';
                p2.textContent += ' + ';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (e.key == '-') {
                p.textContent += '-';
                p2.textContent += ' - ';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (e.key == '(') {
                p.textContent += '(';
                p2.textContent += '(';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (e.key == ')') {
                p.textContent += ')';
                p2.textContent += ')';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (e.key == '*') {
                p.textContent += '*';
                p2.textContent += ' * ';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (e.key == '/') {
                p.textContent += '/';
                p2.textContent += ' / ';
                if (!noDoubleDots) {
                    noDoubleDots = true;
                }
                noDoubleDots = false;
            } else if (e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' || e.key == '0') {
                p.textContent += String(e.key)
                p2.textContent += String(e.key);
            }
            else {
                p.textContent += '';
                p2.textContent+= '';
            }
        } // NOUVELLES TOUCHES A VERIFIER
        else if (e.key == 'i') {
            p.textContent = inv(safeEval(String(p.textContent)));
            p2.textContent += ' Inv ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (e.key == 'x') {
            p.textContent = factorial(safeEval(String(p.textContent)));
            p2.textContent += ' ! ' + p.textContent;
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (e.key == 's') {
            p.textContent = Math.round(Math.sin(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' sin ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (e.key == 'l') {
            p.textContent = Math.round(Math.log(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' ln ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (e.key == 'c') {
            p.textContent = Math.round(Math.cos(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' cos ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (e.key == 'L') {
            p.textContent = log(safeEval(String(p.textContent)));
            p2.textContent += ' log ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (e.key == 't') {
            p.textContent = Math.round(Math.tan(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' tan ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } else if (e.key == 'v') {
            p.textContent = Math.round(Math.sqrt(safeEval(String(p.textContent))) * arrondi) / arrondi;
            p2.textContent += ' √ ' + p.textContent;
            if (Number.isInteger(Number(p.textContent))) {
                noDoubleDots = false;
            } else {
                noDoubleDots = true;
            }
        } 
        else if (e.key == '€') {
            p.textContent = dollarToEuro(safeEval(String(p.textContent)));
            p2.textContent += p.textContent;
        }
        else if (e.key == '$') {
            p.textContent = euroToDollar(safeEval(String(p.textContent)));
            p2.textContent += p.textContent;
        }
        else if (e.key == 'a') {
            p.textContent = '0';
            p2.textContent = '0';
            if (!noDoubleDots) {
                noDoubleDots = true;
            }
            noDoubleDots = false;
        } else if (e.key == 'Enter') {
            p.textContent = safeEval(String(p.textContent));
        }
})


