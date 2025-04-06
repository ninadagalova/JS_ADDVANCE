function addItem() {
    let menuAdd = document.getElementById('items');
    let input = document.getElementById('newItemText');

    let newAdd = document.createElement('li');
    newAdd.textContent = input.value;
    newAdd.value = input.value;
    menuAdd.appendChild(newAdd);

    document.getElementById('newItemText').value = '';
}