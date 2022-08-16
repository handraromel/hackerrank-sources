function miniMaxSum(arr) {
    // Write your code here
    var sum = 0;
    var maxVal
    var minVal
    var finalArr = []
    
    var iterateThrough = function(array) {
            for(var i = 0; i < array.length; i += 1) {
            sum += array[i]
        }
    }
    
    var allEqual = a => a.every(e => e === arr[0])
        
    if (allEqual(arr)) {
        minVal = arr[0]
        maxVal = arr[4]
        finalArr = arr.slice(1, -1)
    } else {
        minVal = Math.min(...arr)
        var removeSmallest = function() {
          return arr.filter(e => e != minVal)        
        }
        
        var afterRemove = removeSmallest()
        
        var finishedState = function() {
            maxVal = Math.max(...afterRemove)
            return afterRemove.filter(e => e != maxVal)
        }
        
        finalArr = finishedState()   
    }
    
    iterateThrough(finalArr)
    
    var minSum = sum + minVal
    var maxSum = sum + maxVal
    
    console.log(minSum, maxSum)
}