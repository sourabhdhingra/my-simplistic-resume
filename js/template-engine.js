import { populateData, data } from './fetch-data.js';

/*
Function to render template based upon the page key passed
on click of any option correponding JS function would be called
with the appropriate page key Example - on clicking About Me
pageKey would be aboutMe
*/





function replacePageKeys(pageKey='index', content) {
    if(pageKey == '' || pageKey == 'index') {
        return content.replace(/{}/g, 'data.index')
    }
    return content.replace(/{}/g, 'data.' + pageKey);
}

function loadContent(pageKey='index') {
    populateData().then( () => {
        let mainConent = document.getElementById("parent");
        let htmlText = replacePageKeys(pageKey, mainConent.innerHTML);
        mainConent.innerHTML = eval('`' + htmlText + '`');
        setUserTheme();
    });
    
}

function setUserTheme() {
    const value = localStorage.getItem("theme-switcher");
    if(value === 'checked') {
        document.getElementById("theme-switcher").checked = true;
        document.querySelector('#theme').setAttribute('href', 'css/colorful.css');
    }
    else {
        document.getElementById("theme-switcher").checked = false;
        document.querySelector('#theme').setAttribute('href', 'css/light.css');
    }
}


export {loadContent}
