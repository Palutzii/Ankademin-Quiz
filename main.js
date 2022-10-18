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
    let maxPoints = 10;
    let p = document.querySelector("#correctAnswers");
    let allAnswers = document.querySelectorAll(".answer-button");

    allAnswers.forEach(q => {
        if(q.checked && q.value === "correct"){
            totalScore++;
            q.style.color = "green";
            console.log(q);
        }else{
            q.style.color = "red";
        }
    });

    if(totalScore > maxPoints * 0.75){
        p.style.color = "green";
        p.innerText = `You got ${totalScore}/10. You did really really good!`;
    }else if(totalScore > maxPoints * .5){
        p.style.color = "orange";
        p.innerText = `You got ${totalScore}/10. You did alright!`;
    }else{
        p.style.color = "red";
        p.innerText = `You got ${totalScore}/10. You failed.`;
    }

    console.log(totalScore);
    return totalScore;
}

document.querySelector("#submitBtn").addEventListener("click" , correctAnswers);
