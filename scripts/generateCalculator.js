const signs = [
    ['(', ')', '%', 'AC'], 
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    [0, '.', '=', '+']
]

// const body = document.querySelector('body');

const container = document.createElement('main');
container.className = 'container';

const section = document.createElement('div');
section.className = 'section';

const columns = document.createElement('div');
columns.className = 'columns is-centered';

const card = document.createElement('div');
card.className = 'card column is-one-fifth is-mobile';

const control = document.createElement('div');
control.className = 'control';

const input = document.createElement('input');
input.className = 'input has-text-right'
input.type = 'text';
input.readOnly = true;
// input.placeholder = '0';

control.appendChild(input);
card.appendChild(control);

const isCentered = document.createElement('div');
isCentered.className = 'is-centered';

for (let i = 0; i < signs.length; i++) {
    const div = document.createElement('div')
    div.className = 'p-1';
    for (let j = 0; j < signs[i].length; j++) {
        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = signs[i][j];
        div.appendChild(button);
    }
    isCentered.appendChild(div);
}

card.appendChild(isCentered)
columns.appendChild(card);
section.appendChild(columns);
container.appendChild(section);
document.body.appendChild(container);
