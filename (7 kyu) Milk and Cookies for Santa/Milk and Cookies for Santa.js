function timeForMilkAndCookies(date){
   let month = date.getMonth();
   let day = date.getDate();
   return (month === 11 && day === 24) ? true : false;
}

console.log(timeForMilkAndCookies(new Date(3000, 11, 24)))