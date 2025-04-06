function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let row = document.querySelectorAll('tbody tr');
   function onClick() {
      
      let input =document.querySelector('#searchField').value.toLowerCase();

      for (let element of row) {
         if(element.textContent.toLowerCase().includes(input)){
            element.setAttribute('class','select');
         }else{
            element.removeAttribute('class');
         }
      }

   }
}