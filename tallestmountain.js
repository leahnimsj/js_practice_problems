(function() {

  function findTallestMountain(mountainArray) {

    mountainArray.sort(function(a,b){
      return b - a;
    })

    return mountainArray[0];

  }

  module.exports = findTallestMountain;

  // console.log(tallestMountain)

})()



  // below is my oringial work - above is turning it into a function

  // let mountains = [400, 200, 100, 300, 500];


  // mountains.sort(function(a,b) {
    // console.log("a is: " + a);
    // console.log("b is: " + b);
    // console.log("a - b is: " + (a - b));
    // return a - b;
  // })

  // console.log(mountains[mountains.length - 1])
  // console.log(Math.max(...mountains))
