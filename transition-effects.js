let optionsCollapsed = true; // default state

function toggleOptions() {

    let innerCircle = document.getElementsByClassName('inner-circle')[0].getElementsByTagName('p');


    function changeInnerDiscContent(innerCircle, p1, p2) {
        innerCircle[0].textContent = p1;
        innerCircle[1].textContent = p2;
    }

    if (optionsCollapsed) {
        document.querySelector('.option-1').style.animation = "smooth-show-option-1 0.2s ease-in 1s forwards";
        document.querySelector('.option-2').style.animation = "smooth-show-option-2 0.2s ease-in 1s forwards";
        document.querySelector('.option-3').style.animation = "smooth-show-option-3 0.2s ease-in 1s forwards";
        document.querySelector('.option-4').style.animation = "smooth-show-option-4 0.2s ease-in 1s forwards";
        changeInnerDiscContent(innerCircle, "Choose one!", "");
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
        changeInnerDiscContent(innerCircle, "Welcome!", "Click here to know more!");
        document.querySelectorAll(".line").forEach(element => {
            element.style.visibility = "hidden";
        });
        optionsCollapsed = true;
    }
}


