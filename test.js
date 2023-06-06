function convertToWords() {
  var number = document.getElementById("numberInput").value;

  if (isNaN(number)) {
    document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
  } else {
    var words = numberToWords(number);
    document.getElementById("result").innerHTML = "In words: " + words;
  }
}

function numberToWords(number) {
  // Define arrays for number words
  var units = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  var tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  // Convert the number to words
  if (number < 20) {
    return units[number];
  } else if (number < 100) {
    var digit1 = Math.floor(number / 10);
    var digit2 = number % 10;
    return tens[digit1] + " " + units[digit2];
  } else {
    var digit1 = Math.floor(number / 100);
    var digit2 = Math.floor((number % 100) / 10);
    var digit3 = number % 10;
    return units[digit1] + " hundred " + tens[digit2] + " " + units[digit3];
  }
}