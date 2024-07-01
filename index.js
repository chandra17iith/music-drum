const button = document.querySelectorAll("button");
button.forEach((b) => {
    b.addEventListener("click", function (e) {
        console.log(e);
        if (this.innerHTML === "w") {
            let audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        }
        else if (this.innerHTML === "a") {
            let audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        }
        else if (this.innerHTML === "s") {
            let audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        }
        else if (this.innerHTML === "d") {
            let audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        }
        else if (this.innerHTML === "j") {
            let audio = new Audio("sounds/snare.mp3");
            audio.play();
        }
        else if (this.innerHTML === "k") {
            let audio = new Audio("sounds/crash.mp3");
            audio.play();
        }
        else if (this.innerHTML === "l") {
            let audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
        
    })
})
document.addEventListener("keydown",function(e){
    if (e.key==="w") {
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if (e.key === "a") {
        let audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if (e.key === "s") {
        let audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if (e.key === "d") {
        let audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if (e.key=== "j") {
        let audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if (e.key === "k") {
        let audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if (e.key === "l") {
        let audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }  
})