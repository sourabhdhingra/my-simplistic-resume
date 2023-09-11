import { loadContent } from "./template-engine.js";
import { toggleOptions } from './transition-effects.js';
import { updateOptionsHandler, goBackHandler } from "./option-flow.js";
import { switchThemeHandler } from "./theme-switcher.js";


window.onload = loadContent();
document.querySelector('.inner-circle').addEventListener('click', toggleOptions);

let options = document.querySelectorAll('.option-circle');
let option1 = options[0];
let option2 = options[1];
let option3 = options[2];
let option4 = options[3];
let goBackDisc = document.querySelector('.outer-circle');
let themeSwitcher = document.querySelector('#theme-switcher');

option1.addEventListener('click', updateOptionsHandler);
option2.addEventListener('click', updateOptionsHandler);
option3.addEventListener('click', updateOptionsHandler);
option4.addEventListener('click', updateOptionsHandler);
goBackDisc.addEventListener('click', goBackHandler);
themeSwitcher.addEventListener('change', switchThemeHandler);