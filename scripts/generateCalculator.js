// const signs = ['Inv', 'x!', '(', ')', '%', 'AC', 'sin', 'ln', 7, 8, 9, '/', 'cos', 'log', 4, 5, 6, '*', 'tan', '√', 1, 2, 3, '-', '$', '€', 0, '.', '=', '+']

const signs = [{
        display: 'Inv',
        type: 'function'
    },
    {
        display: 'x!',
        type: 'function'
    },
    {
        display: '(',
        type: 'operand'
    },
    {
        display: ')',
        type: 'operand'
    },
    {
        display: '%',
        type: 'function'
    },
    {
        display: 'DEL',
        type: 'function'
    },
    {
        display: 'sin',
        type: 'function'
    },
    {
        display: 'ln',
        type: 'function'
    },
    {
        display: '7',
        type: 'number'
    },
    {
        display: '8',
        type: 'number'
    },
    {
        display: '9',
        type: 'number'
    },
    {
        display: '/',
        type: 'operand'
    },
    {
        display: 'cos',
        type: 'function'
    },
    {
        display: 'log',
        type: 'function'
    },
    {
        display: '4',
        type: 'number'
    },
    {
        display: '5',
        type: 'number'
    },
    {
        display: '6',
        type: 'number'
    },
    {
        display: 'x',
        type: 'operand'
    },
    {
        display: 'tan',
        type: 'function'
    },
    {
        display: '√',
        type: 'function'
    },
    {
        display: '1',
        type: 'number'
    },
    {
        display: '2',
        type: 'number'
    },
    {
        display: '3',
        type: 'number'
    },
    {
        display: '-',
        type: 'operand'
    },
    {
        display: '$',
        type: 'function'
    },
    {
        display: '€',
        type: 'function'
    },
    {
        display: '0',
        type: 'number'
    },
    {
        display: '.',
        type: 'dot'
    },
    {
        display: '=',
        type: 'equal'
    },
    {
        display: '+',
        type: 'operand'
    }
]

const grid = document.createElement('section');
grid.className = 'grid';

const para = document.createElement('div');
para.className = 'para';

const p = document.createElement('p');
p.className = 'p';
p.textContent = '0';

const p2 = document.createElement('p');
p2.className = 'p2';
p2.textContent = '0'

para.appendChild(p2);
para.appendChild(p);
grid.appendChild(para);

for (let i = 0; i < signs.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = signs[i].display;
    grid.appendChild(btn);
}
document.body.appendChild(grid)

let paragraphe = document.querySelector('.p');
paragraphe.scrollLeft += paragraphe.scrollWidth;