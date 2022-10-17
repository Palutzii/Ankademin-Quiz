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
    
    if(document.querySelector("#locationFalse").checked){
        totalScore++;
    };

    if(document.querySelector("#appleFalse").checked){
        totalScore++;
    };

    if(document.querySelector("#bananaTrue").checked){
        totalScore++;
    };

    if(document.querySelector("#earthFalse").checked){
        totalScore++;
    };

    if(document.querySelector("#colorFalse").checked){
        totalScore++;
    };

    if(document.querySelector("#planetFalse").checked){
        totalScore++;
    };

    if(document.querySelector("#muskFalse").checked){
        totalScore++;
    };

    if(document.querySelector("#moonTrue").checked){
        totalScore++;
    };

    if(document.querySelector("#waterFalse").checked){
        totalScore++;
    };

    if(document.querySelector("#languageTrue").checked){
        totalScore++;
    };

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
