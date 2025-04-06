function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let bestRestaurantResult = document.querySelector('#bestRestaurant > p');
   let workersResult = document.querySelector('#workers > p');

   function onClick () {
      let input = document.querySelector('#inputs > textarea');
      

      let arr = JSON.parse(input.value);

      let resturants = {};

      arr.forEach(element => {
         let tokens = element.split(' - ');
         let name = tokens[0];
         let workersArr = tokens[1].split(', ');

         let workerr=[];

         for (let worker of workersArr) {
            let workerToken = worker.split(' ');
            let salary = Number(workerToken[1]);
            workerr.push({name: workerToken[0], salary});
            
         }

         if(resturants[name]){
            workerr = workerr.concat(resturants[name].workerr);
         }
         workerr.sort((wor1,wor2) => wor2.salary - wor1.salary);

         let bestSalary = workerr[0].salary;

         let averageSalary = workerr.reduce((sum,wor) => sum +wor.salary,0)/workerr.length;

         resturants[name] = {
            workerr,
            averageSalary,
            bestSalary
         }
      });

      let bestRestaurantSalary = 0;
      let bestResturant = undefined;

      for (let name in resturants) {
         if(resturants[name].averageSalary > bestRestaurantSalary){
            bestResturant = {
               name,
               workerr: resturants[name].workerr,
               bestSalary: resturants[name].bestSalary,
               averageSalary: resturants[name].averageSalary,
            }
            bestRestaurantSalary = resturants[name].averageSalary;
         }
         
      }
      bestRestaurantResult.textContent = `Name: ${bestResturant.name} Average Salary: ${bestResturant.averageSalary.toFixed(2)} Best Salary: ${bestResturant.bestSalary.toFixed(2)}`;
      
      let result = [];

      bestResturant.workerr.forEach(worker => {
         result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });

      workersResult.textContent = result.join(' ');
   }
}