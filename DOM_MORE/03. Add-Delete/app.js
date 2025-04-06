function addItem() {
    let input = document.getElementById('newItemText').value;
    let ul = document.getElementById('items');

    if(input.length === 0) return;
    let listItem = document.createElement("li");
    listItem.textContent = input;
    ul.appendChild(listItem);

    let remove = document.createElement("a");
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    listItem.appendChild(remove);

    remove.href = "#";
    remove.addEventListener("click", deleteItem);


    function deleteItem(){
        listItem.remove();
    }

    
}