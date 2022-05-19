// Cristiano
// ICS2O-Unit5-08-HTML
// May 12 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-08-HTML/sw.js", {
    scope: "/ICS2O-Unit5-08-HTML/",
  })
}

/**
 * Divides the first integer by the second integer.
 */
function onButtonClick() {
  const originalIntegerOne = parseInt(document.getElementById("integerOne").value)
  const originalIntegerTwo = parseInt(document.getElementById("integerTwo").value)
  var integerTwo = parseInt(document.getElementById("integerTwo").value)
  var integerOne
  let count
  var answer

  if (originalIntegerOne < 0) {
    integerOne = 0
  } else {
    integerOne = originalIntegerOne
  }
  if (integerOne != 0 && integerTwo > 0) {
    for (count = 0; integerOne >= integerTwo; count++) {
      // Calculation for + integers divided by + integers
      integerOne = integerOne - integerTwo
    }
    answer = count + "r" + integerOne
    document.getElementById("answer").innerHTML = "<h5>The result of " + originalIntegerOne + " ÷ " + originalIntegerTwo + " is " + answer + "</h5>"
  } else if (integerOne != 0 && integerTwo < 0) {
    for (count = 0; integerOne >= -integerTwo; count++) {
      // Calculation for + integers divided by - integers
      integerOne = integerOne - -integerTwo
    }
    answer = -count + "r" + -integerOne
    document.getElementById("answer").innerHTML = "<h5>The result of " + originalIntegerOne + " ÷ " + originalIntegerTwo + " is " + answer + "</h5>"
  } else {
    document.getElementById("answer").innerHTML = "<h5>The result of " + originalIntegerOne + " ÷ " + originalIntegerTwo + " is undefined</h5>"
  }
}
