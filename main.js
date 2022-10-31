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
  let checkboxGroup1Score = 0;
  let checkboxGroup2Score = 0;
  let checkboxGroup1FailScore = 0;
  let checkboxGroup2FailScore = 0;
  let maxPoints = 10;
  let p = document.querySelector("#correctAnswers");
  let allRadioAnswers = document.querySelectorAll(".radio-button");
  let checkboxGroup1 = document.querySelectorAll(".checkbox-group-1");
  let checkboxGroup2 = document.querySelectorAll(".checkbox-group-2");

  allRadioAnswers.forEach((input) => {
    if (input.checked && input.value === "correct") {
      totalScore++;
      input.parentNode.parentNode.style.background = "darkgreen";
    } else if (input.checked && input.value !== "correct") {
      input.parentNode.parentNode.style.background = "darkred";
    }
  });

  checkboxGroup1.forEach((input) => {
    if (input.checked && input.value === "correct") {
      checkboxGroup1Score++;
      console.log("Checkbox 1 Score: " + checkboxGroup1Score);
      if (checkboxGroup1Score === 3) {
        totalScore++;
        input.parentNode.parentNode.style.background = "darkgreen";
      } else {
        input.parentNode.parentNode.style.background = "darkred";
      }
    } else if (input.checked && input.value !== "correct") {
      checkboxGroup1FailScore++;
      console.log("Checkbox 1 Fail Score: " + checkboxGroup1FailScore);
      input.parentNode.parentNode.style.background = "darkred";
    }
  });
  checkboxGroup2.forEach((input) => {
    if (input.checked && input.value === "correct") {
      checkboxGroup2Score++;
      console.log("Checkbox 2 Score: " + checkboxGroup2Score);
      if (checkboxGroup2Score === 2) {
        totalScore++;
        input.parentNode.parentNode.style.background = "darkgreen";
      } else {
        input.parentNode.parentNode.style.background = "darkred";
      }
    } else if (input.checked && input.value !== "correct") {
      checkboxGroup2FailScore++;
      console.log("Checkbox 2 Fail Score: " + checkboxGroup2FailScore);
      input.parentNode.parentNode.style.background = "darkred";
    }
  });

  if (checkboxGroup1FailScore > 0) {
    totalScore--;
  }
  if (checkboxGroup2FailScore > 0) {
    totalScore--;
  }

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
