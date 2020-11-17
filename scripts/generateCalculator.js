const signs = ['(', ')', '%', 'AC', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+']

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
    const btn = document.createElement('div');
    btn.className = 'btn';
    btn.textContent = signs[i];
    grid.appendChild(btn);
}
document.body.appendChild(grid)