(function functionName() {
  let startingPopulation = 200;

  let birthRate = 0.1;

  let numberOfWeeks = 5;

  // let newPopulation = ((startingPopulation * birthRate) * numberOfWeeks) + startingPopulation

  function newPopulation() {
    for (var i = 0; i < numberOfWeeks; i++) {
      startingPopulation = startingPopulation + (startingPopulation * birthRate)
    }
    return parseInt(startingPopulation)
  }

  //
  // let text = "There will be " + newPopulation + " Cherokee Hares after " + numberOfWeeks + " weeks."

  // console.log(startingPopulation);
  // console.log(birthRate);
  // console.log(numberOfWeeks);
  // console.log(newPopulation);
  console.log("There will be " + newPopulation() + " Cherokee Hares after " + numberOfWeeks + " weeks.");


})()
