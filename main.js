let darkMode = document.querySelector("input[name='darkMode']");

// If darkMode exsists do this please
if(darkMode){
    darkMode.addEventListener("change" , e => {
        if(darkMode.checked){
            document.body.style.background = "#202124";
            document.body.style.color = "white";
        }else{
            document.body.style.background = "white";
            document.body.style.color = "black";
        }
    })
}

function correctAnswers(){
    let totalScore = 0;
    let maxPoints = 13;
    let p = document.querySelector("#correctAnswers");
    let allRadioAnswers = document.querySelectorAll(".radio-button");
    let allCheckboxAnswers = document.querySelectorAll(".checkbox-button");

    allRadioAnswers.forEach(input => {
        if(input.checked && input.value === "correct"){
            totalScore++;
            input.parentNode.firstElementChild.style.color = "green";
        }
        else if(input.checked && input.value !== "correct"){
            input.parentNode.firstElementChild.style.color = "red";
        }
    });

    allCheckboxAnswers.forEach(input => {
        if(input.checked && input.value === "correct"){
            totalScore++;
            input.parentNode.firstElementChild.style.color = "green";
        }
        else if(input.checked && input.value !== "correct"){
            totalScore--;
            input.parentNode.firstElementChild.style.color = "red";
        }
    })

    if(totalScore > maxPoints * 0.75){
        p.style.color = "green";
        p.innerText = `You got ${totalScore}/${maxPoints}. You did really really good!`;
    }else if(totalScore > maxPoints * .5){
        p.style.color = "orange";
        p.innerText = `You got ${totalScore}/${maxPoints}. You did alright!`;
    }else{
        p.style.color = "red";
        p.innerText = `You got ${totalScore}/${maxPoints}. You failed.`;
    }

    console.log(totalScore);
    return totalScore;
}

document.querySelector("#submitBtn").addEventListener("click" , correctAnswers);
