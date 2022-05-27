// Задание 5
function renderTableRows(rows) {
    // return `<tr>${rows.map(row => `<td>${rows}</td>`).join("")}</tr>`;
    let html = rows.map(row => {
        return `<td>${row[0]}</td><td>${row[1]}</td>`;
    });
    return "<tr>" + html.join("") + "</tr>";
}

const data = [
    ["Bitcoin", 40468],
    ["Ethereum", 3005],
    ["Solana", 106],
    ["Tether", 1]
];
console.log(renderTableRows(data));