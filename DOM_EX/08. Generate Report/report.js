function generateReport() {
    const html = {
        checkboxes: document.querySelectorAll("input[type = 'checkbox']"),
        row: document.getElementsByTagName("tr"),
        output: document.getElementById('output'),
    };

    const selected = Array.from(html.checkboxes)
    .map((checkbox, index) => [checkbox, index])
    .filter(([checkbox]) => checkbox.checked)
    .map(([checkbox, index]) => [checkbox.name, index]);

    const rowData = Array.from(html.row)
    .slice(1)
    .map(row => Array.from(row.children).map(cell => cell.textContent));

    html.output.value = JSON.stringify(
        rowData.map(row => 
            selected.reduce((acc, [colName, colIndex]) =>{
                acc[colName] = row[colIndex];
                return acc;
            }, {})
        ),
        null,
        2
    );
}