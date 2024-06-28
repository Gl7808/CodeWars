function mostLikely(prob1,prob2){
    let probs1 = prob1.split(":")
    let probs2 = prob2.split(":")
    let r = [probs1[0] / probs1[1], probs2[0] / probs2[1]]
    return r[0] < r[1] ? false : true;
}

console.log(mostLikely('1:2', '1:1'))