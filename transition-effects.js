let optionsCollapsed = true; // default state

function toggleOptions() {
    if (optionsCollapsed) {
        document.querySelector('.option-1').style.animation = "smooth-show-option-1 0.2s ease-in 1s forwards";
        document.querySelector('.option-2').style.animation = "smooth-show-option-2 0.2s ease-in 1s forwards";
        document.querySelector('.option-3').style.animation = "smooth-show-option-3 0.2s ease-in 1s forwards";
        document.querySelector('.option-4').style.animation = "smooth-show-option-4 0.2s ease-in 1s forwards";
        changeInnerDiscContent("Choose one!", "")
        document.querySelectorAll(".line").forEach(element => {
            element.style.visibility = "visible";
        });
        optionsCollapsed = false;
    }
    else {
        document.querySelector('.option-1').style.animation = "smooth-show-option-1 0.2s ease-in 1s backwards";
        document.querySelector('.option-2').style.animation = "smooth-show-option-2 0.2s ease-in 1s backwards";
        document.querySelector('.option-3').style.animation = "smooth-show-option-3 0.2s ease-in 1s backwards";
        document.querySelector('.option-4').style.animation = "smooth-show-option-4 0.2s ease-in 1s backwards";
        changeInnerDiscContent("Welcome!", "Click here to know more!")
        document.querySelectorAll(".line").forEach(element => {
            element.style.visibility = "hidden";
        });
        optionsCollapsed = true;
    }
}

function changeInnerDiscContent(p1, p2) {
    const innerCircleElements = document.querySelector('.inner-circle').children;
    innerCircleElements[1].innerHTML = p1;
    innerCircleElements[2].innerHTML = p2;
}


