function decodeMorse(stringMorse) {
  morseToDots = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-.-.--": "!",
    "   ": " ",
    "..--..": "?",
    ".-.-.-": ".",
    ".----.": '"',
    "---...": ":",
    "--..--": ", ",
    " ": "",
  };
  var morseArray = stringMorse.split(" ");
  var resultMorse = "";
  for (let i = 0; i < morseArray.length; i++) {
    if (morseToDots[morseArray[i]] != undefined) {
      resultMorse += morseToDots[morseArray[i]];
    } else {
      resultMorse += " ";
    }
  }
  return resultMorse;
}

console.log(decodeMorse(".... . .-.. .--.  -- .  -.-.--"));
console.log(decodeMorse("-.-. .... .- .-.. .-.. . -. --. ."));
