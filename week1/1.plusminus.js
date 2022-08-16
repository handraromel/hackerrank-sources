function plusMinus(arr) {
    // Write your code here
   var arrayLength = arr.length;
   var negativeNumbers = function() {
       return arr.filter(function(value) {
            return value < 0
        })
   }
   
   var positiveNumbers = function() {
       return arr.filter(function(value) {
           return value > 0
       })
   }
   
   var zeroes = function() {
       return arr.filter(function(value) {
           return value == 0
       })
   }
   
   var negativeLength = negativeNumbers().length
   var positiveLength = positiveNumbers().length
   var zeroesLength = zeroes().length
   
   console.log(positiveLength/arrayLength)
   console.log(negativeLength/arrayLength)
   console.log(zeroesLength/arrayLength)

}