import { loadContent } from "./template-engine.js";
import { toggleOptions } from './transition-effects.js';
import { updateOptionsHandler, goBackHandler } from "./option-flow.js";
import { switchThemeHandler } from "./theme-switcher.js";


window.onload = loadContent();

let themeSwitcher = document.querySelector('#theme-switcher');
themeSwitcher.addEventListener('change', switchThemeHandler);


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('inner-circle')) {
        toggleOptions(event);
    }
    if (event.target.classList.contains('option-circle')) {
        let options = document.querySelectorAll('.option-circle');
        let option1 = options[0];
        let option2 = options[1];
        let option3 = options[2];
        let option4 = options[3];
        option1.addEventListener('click', updateOptionsHandler);
        option2.addEventListener('click', updateOptionsHandler);
        option3.addEventListener('click', updateOptionsHandler);
        option4.addEventListener('click', updateOptionsHandler);
    }
    if (event.target.classList.contains('outer-circle')) {
        let goBackDisc = document.querySelector('.outer-circle');
        goBackDisc.addEventListener('click', goBackHandler);
    }
});
