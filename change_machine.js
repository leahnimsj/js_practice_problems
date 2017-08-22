(function () {
  let amount = 72;

  let twenties = Math.floor(amount / 20);
  let twentyAmount = amount % 20;

  let tens = Math.floor(twentyAmount / 10);
  let tenAmount = twentyAmount % 10;

  let fives = Math.floor(tenAmount / 5);

  let ones = tenAmount % 5;

  let change =[twenties, tens, fives, ones]
  // let twentiesArray = twenties.split("")


  // console.log(twenties);
  // console.log(twentyAmount);
  // console.log(tens);
  // console.log(tenAmount);
  // console.log(fives);
  // console.log(ones);
  console.log(change);
  // console.log(twentiesArray);





})()
