function solve() {
  let text = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if(currentCase === "Camel Case"){
    
     let arr = text.split(' ');
     let concat = arr[0].toLowerCase();
     for(let i =1; i< arr.length; i++){
      
        concat+=arr[i][0].toUpperCase()+ arr[i].substring(1).toLowerCase();
     }

    result.textContent = concat;

  }else if(currentCase === "Pascal Case"){
    
    let arr = text.split(' ');
    let concat = '';
    for(let i = 0; i< arr.length; i++){
     
       concat+=arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }

    result.textContent = concat;

  }else{
    result.textContent = "Error!";
  }
}