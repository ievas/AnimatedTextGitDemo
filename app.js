let letters = document.querySelectorAll("h1");


    
    for(let letter of letters){
        letter.addEventListener("mouseover", function(){
            letter.classList.toggle("bigger");
        })
    }

