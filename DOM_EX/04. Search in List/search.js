function search() {
   let result = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;
   let list = Array.from( document.querySelectorAll('#towns li'));
   let match = 0;


   for (const element of list) {
      
      if(element.textContent.toLowerCase().includes(searchText.toLowerCase())){
         match++;
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
      }else{
         element.style.textDecoration = '';
         element.style.fontWeight = '';

      }
   }
   result.textContent = `${match} matches found`
   
}
