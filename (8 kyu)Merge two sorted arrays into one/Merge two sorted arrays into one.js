
let array1 = [1,2,3,4,5];
let array2 = [2,10,6,12,11];

function mergeArrays(arr1, arr2) {
    let merge = arr1.concat(arr2);
    merge.sort((a, b) => a -b);
    let uniqueArr =  merge.filter((item, index) => merge.indexOf(item) === index);
    return uniqueArr;
}


console.log(mergeArrays(array1,array2))
