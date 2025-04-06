function deleteByEmail() {

    let email = document.getElementsByName("email")[0].value;
    let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");

    for (const element of secondColumn) {
          
        if(element.textContent == email){
            let row = element.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = "Deleted.";
            return;
        }
        document.getElementById('result').textContent = "Not found.";
    }
   

    
}