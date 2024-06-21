function rentalCarCost(d) {
    let discount = 0;
    if (d >= 3 && d < 7) {
        discount = 20;
    } else if (d >= 7) {
        discount = 50;
    } else {
        discount = 0;
    }
    return d * 40 - discount;
}

console.log(rentalCarCost(7))