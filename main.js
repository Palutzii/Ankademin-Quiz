let allQuestionWrappers = document.querySelectorAll(".question-wrapper");
let darkMode = document.querySelector("input[name='darkMode']");
let darkModeLabel = document.querySelector("#modeLabel");

// If darkMode exsists, change background color,text color, button color and border color.
if (darkMode) {
  darkMode.addEventListener("change", (e) => {
    if (darkMode.checked) {
      document.body.style.background = "#202124";
      document.body.style.color = "#fff";
      document.querySelector("#submitBtn").style.background = "#fff";
      document.querySelector("#submitBtn").style.color = "#000";
      darkModeLabel.innerHTML = "Light Mode &#127774;";
      allQuestionWrappers.forEach((i) => {
        i.style.borderColor = "#fff";
      });
    } else {
      document.body.style.background = "#fff";
      document.body.style.color = "#000";
      document.querySelector("#submitBtn").style.background = "#202124";
      document.querySelector("#submitBtn").style.color = "#fff";
      darkModeLabel.innerHTML = "Dark Mode &#127769;";
      allQuestionWrappers.forEach((i) => {
        i.style.borderColor = "#202124";
      });
    }
  });
}

function correctAnswers() {
  let totalScore = 0;
  let maxPoints = 13;
  let p = document.querySelector("#correctAnswers");
  let allRadioAnswers = document.querySelectorAll(".radio-button");
  let allCheckboxAnswers = document.querySelectorAll(".checkbox-button");

  allRadioAnswers.forEach((input) => {
    if (input.checked && input.value === "correct") {
      totalScore++;
      input.parentNode.parentNode.style.background = "darkgreen";
    } else if (input.checked && input.value !== "correct") {
      input.parentNode.parentNode.style.background = "darkred";
    }
  });

  allCheckboxAnswers.forEach((input) => {
    if (input.checked && input.value === "correct") {
      totalScore++;
      input.parentNode.parentNode.style.background = "darkgreen";
    } else if (input.checked && input.value !== "correct") {
      totalScore--;
      input.parentNode.parentNode.style.background = "red";
    }
  });

  if (totalScore > maxPoints * 0.75) {
    p.style.color = "green";
    p.innerText = `You got ${totalScore}/${maxPoints}. You did really really good!`;
  } else if (totalScore > maxPoints * 0.5) {
    p.style.color = "orange";
    p.innerText = `You got ${totalScore}/${maxPoints}. You did alright!`;
  } else {
    p.style.color = "red";
    p.innerText = `You got ${totalScore}/${maxPoints}. You failed.`;
  }

  console.log(totalScore);
  return totalScore;
}

document.querySelector("#submitBtn").addEventListener("click", correctAnswers);
