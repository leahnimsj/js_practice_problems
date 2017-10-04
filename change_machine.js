(function () {


  function changeMachine(amount){
    let twenties = Math.floor(amount / 20);
    let twentyAmount = amount % 20;
  
    let tens = Math.floor(twentyAmount / 10);
    let tenAmount = twentyAmount % 10;
  
    let fives = Math.floor(tenAmount / 5);
  
    let ones = tenAmount % 5;
  
    let change =[twenties, tens, fives, ones]
    // let twentiesArray = twenties.split("")
  
    return change
  
  
  

  }


  module.exports = changeMachine;


})()
