// generate random pin;

function getPin() {
  const pinOutput = Math.random() * 10000;
  const pinValue = (pinOutput + "").split(".")[0];

  if (pinValue.length === 4) {
    return pinValue;
  } else {
    return getPin();
  }
}

//display generated value

function generatePin() {
  const finalOutput = document.getElementById("pin-output");
  finalOutput.value = getPin();
}

const digit = document.getElementById("calc-container");
digit.addEventListener("click", function (event) {
  const pinTyped = event.target.innerText;
  const pinDisplay = document.getElementById("calc");

  if (isNaN(pinTyped)) {
    //clear
    if (pinTyped === "c") {
      pinDisplay.value = "";
    }
    if (pinTyped === "B") {
      pinDisplay.value = pinDisplay.value.slice(0, -1);
    }
  } else {
    pinDisplay.value += pinTyped;
  }
});

// submit option button

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
  let pinMatch = document.getElementById("pin-output").value;
  let inputMatch = document.getElementById("calc").value;

  // checking both value whether its matched or didn't matched

  if (pinMatch === "" && inputMatch === "") {
    correctIncorrect("block", "none", "none");
  } else if (pinMatch === inputMatch) {
    correctIncorrect("none", "block", "none");
  } else {
    correctIncorrect("none", "none", "block");
  }
});

// display correct or incorrect notifications

function correctIncorrect(empty, correct, incorrect) {
  document.getElementById("notify-empty").style.display = empty;
  document.getElementById("notify-success").style.display = correct;
  document.getElementById("notify-error").style.display = incorrect;
}
