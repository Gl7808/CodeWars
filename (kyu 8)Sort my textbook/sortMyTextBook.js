function sorter(textbooks) {

    return textbooks.sort((a,b) => a.toUpperCase() > b.toUpperCase() ? 1 : -1);
}


console.log(sorter(['Algebra', 'Geometry', 'english', 'history']))