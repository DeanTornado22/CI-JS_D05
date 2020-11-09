function distanceToNearestVoewl(somestring) {
  var vowelArray = ["a", "e", "u", "o", "i"];
  var result = [];
  for (let i = 0; i < somestring.length; i++) {
    let distanceArray = [];
    for (let j = 0; j < somestring.length; j++) {
      if (vowelArray.includes(somestring[i])) {
        result.push(0);
        break;
      } else {
        if (vowelArray.includes(somestring[j])) {
          distanceArray.push(Math.abs(i - j));
        }
      }
    }
    let mindistance = Math.min(...distanceArray);
    if (mindistance != Infinity) {
      result.push(mindistance);
    }
  }
  return result;
}

console.log(distanceToNearestVoewl("aaaaa"));
console.log(distanceToNearestVoewl("babbb"));
console.log(distanceToNearestVoewl("abcdabcd"));
console.log(distanceToNearestVoewl("shopper"));
console.log(distanceToNearestVoewl("useoiaaaaabbbcueoia"));
