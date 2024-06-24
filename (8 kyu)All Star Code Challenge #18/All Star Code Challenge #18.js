function strCount(str, letter){
    let arrNew = str.slice(0,str.length)
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (arrNew[i] === letter){
            counter++;
        }
    }
    return counter
}


console.log(strCount('Hello', 'l'))