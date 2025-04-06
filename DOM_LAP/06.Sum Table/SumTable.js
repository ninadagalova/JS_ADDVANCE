function sumTable() {
   let result = document.getElementById('sum') ;
   let col = document.querySelectorAll('table tr');
   let index = 0;
   let sum = 0;

   for (const el of col) {
    index++;
    if(index%2 ==0){
      sum += Number(el.textContent);
    }
    
   }
  
   result.textContent = sum;

}