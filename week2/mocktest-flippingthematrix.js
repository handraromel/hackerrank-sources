function flippingMatrix(matrix) {
    // Write your code here
    let lengthM = matrix.length -1;
    let halfM = matrix.length/2;
    let finalArr = []
    for(var i = 0 ; i < halfM; i++ ){
        for (var j =0; j < halfM; j++){
            let a1 = matrix[i][j];
            let a2 = matrix[i][lengthM-j]
            let a3 = matrix[lengthM-i][j]
            let a4 = matrix[lengthM-i][lengthM-j]
            finalArr.push([a1,a2,a3,a4])
        }
    }
    let sum = 0;
    let result = finalArr.map((e)=>{
        let a = Math.max(...e)
        sum += a
    })
    return sum
}