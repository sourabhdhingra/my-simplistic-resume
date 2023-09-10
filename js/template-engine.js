import data from '../data.json' assert { type: 'json' };

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
    let mainConent = document.getElementById("parent");
    let htmlText = JSON.stringify(replacePageKeys(pageKey, mainConent.innerHTML));
    mainConent.innerHTML = eval('`'+htmlText+'`');
}


export {loadContent}
