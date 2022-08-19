function countingSort(arr) {
    let size = arr.length < 101 ? arr.length : 100
    let res = new Array(size).fill(0)
    arr.map(x => res[x]++)
    return res
}