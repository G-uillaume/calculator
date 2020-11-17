function safeEval(str) {
    return Math.round(Function('return ' + str)()*1000000000) / 1000000000
}

const btn = document.querySelectorAll('.btn');

for (let i of btn) {
    i.addEventListener('click', () => {
        if (p.textContent == 0 && p2.textContent == 0) {
            p.textContent = '';
            p2.textContent = '';
        }
        if (i.textContent != 'AC' && i.textContent != '=') {
            if (i.textContent == '%') {
                p.textContent = String(Number(p.textContent) / 100);
                p2.textContent = String(Number(p2.textContent) / 100);
            } else {
                p.textContent += String(i.textContent);
                p2.textContent += ' ' + String(i.textContent);
            }
        }
        else if (i.textContent == 'AC') {
            p.textContent = '0';
            p2.textContent = '0';
        } else {
            p.textContent = safeEval(String(p.textContent))
            p2.textContent += ' = ' + safeEval(String(p.textContent))
        }
    })
}