function sumMix(x){
    let res = 0;
    for (let i = 0; i < x.length; i++){
        res = res + Number(x[i]);
    }
    return res;
}

console.log(sumMix([9, 3, '7','3']))