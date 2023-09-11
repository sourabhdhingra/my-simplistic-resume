let optionsCollapsed = true; // default state

function toggleOptions(event) {

    if (optionsCollapsed) {
        document.querySelector('.option-1').style.animation = "smooth-show-option-1 0.2s ease-in 1s forwards";
        document.querySelector('.option-2').style.animation = "smooth-show-option-2 0.2s ease-in 1s forwards";
        document.querySelector('.option-3').style.animation = "smooth-show-option-3 0.2s ease-in 1s forwards";
        document.querySelector('.option-4').style.animation = "smooth-show-option-4 0.2s ease-in 1s forwards";
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
        document.querySelectorAll(".line").forEach(element => {
            element.style.visibility = "hidden";
        });
        optionsCollapsed = true;
    }
    event.stopPropagation();
}

export {toggleOptions}
