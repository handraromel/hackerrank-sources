function divisibleSumPairs(n, k, ar) {
    var count = 0;
    // Write your code here
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++) {
            if((i < j) && (((ar[i]) + ar[j]) % k) == 0){
                count++
            }
        }
    }
    
    return count;
}