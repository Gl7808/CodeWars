function removeExclamationMarks(s) {
    return [...s].filter((value) => value !== '!').join('')
}

console.log(removeExclamationMarks("!!!Hello World! !!"))