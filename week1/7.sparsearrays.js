function matchingStrings(strings, queries) {
    // Write your code here
    var result=[];
    let counts={};
    
    for (const str of strings) 
    counts[str] = counts[str] ? counts[str] + 1 : 1;
    
    for(var i=0;i<queries.length;i++)
    if(counts.hasOwnProperty(queries[i]))
        result.push(counts[queries[i]]);
    else
        result.push(0);
    
    return result;
}