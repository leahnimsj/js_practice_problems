(function functionName() {
 
  function newPopulation(startingPopulation, birthRate, numberOfWeeks ) {
    for (var i = 0; i < numberOfWeeks; i++) {
      startingPopulation = startingPopulation + (startingPopulation * birthRate)    
    }
    return "There will be " + parseInt(startingPopulation) + " amount of hares in " + numberOfWeeks + " weeks."
  }

  module.exports = newPopulation;

})()
