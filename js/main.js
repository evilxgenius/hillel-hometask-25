// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

(() => {
    const root = document.querySelector('#root');
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    let counter = 1;

    for(let r = 0; r < 10; r++) {
        const row = document.createElement('tr');

        for(let c = 0; c < 10; c++) {
            const cell = document.createElement('td');

            cell.textContent = counter++;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    root.appendChild(table);
})();