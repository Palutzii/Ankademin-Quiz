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


