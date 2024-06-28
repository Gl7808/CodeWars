let countSheep = function (num){
    let res = ''
   for(let i = 1; i < num+1; i++){
       res += i + ' sheep...'
   }
   return res
}

console.log(countSheep(3))