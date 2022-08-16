function breakingRecords(scores) {
    // Write your code here
    var mostPoint = scores[0];
    var leastPoint = scores[0];
    
    var incMost = 0;
    var incLeast = 0;
    
    for (var point of scores) {
        if (mostPoint < point) {
            mostPoint = point;
            incMost++
        } else if (point < leastPoint ) {
            leastPoint = point;
            incLeast++;
        }
    }
    
    return [incMost, incLeast];
}