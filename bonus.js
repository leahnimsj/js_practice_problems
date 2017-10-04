(function(){

    function bonusCalc(mealTotal){
        return Math.ceil(mealTotal * 0.2)
    }

    module.exports = bonusCalc;

})()