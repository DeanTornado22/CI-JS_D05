function getFrame(width, heigth, character) {
  if (width < 3) {
    return "invalid";
  }
  if (heigth < 3) {
    return "invalid";
  }
  var result = Array(heigth)
    .fill(character)
    .map(() => Array(width).fill(character));
  for (let i = 0; i < heigth; i++) {
    for (let j = 0; j < width; j++) {
      if (i >= 1 && i < heigth - 1) {
        if (j >= 1 && j < width - 1) {
          result[i][j] = " ";
        }
      }
    }
    result[i] = result[i].join("");
  }
  return result;
}

console.log(getFrame(4, 5, "#"));
console.log(getFrame(10, 3, "#"));
