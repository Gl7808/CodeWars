function nothingSpecial(str) {
    if (typeof str!='string') return "Not a string!";
    return str.replace(/[^a-z0-9\s]/gi,"");
}
