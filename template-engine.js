import data from './data.json' assert { type: 'json' };

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

let mainConent = document.getElementById("index");
let htmlText = JSON.stringify(replacePageKeys('', mainConent.innerHTML));
mainConent.innerHTML = eval('`'+htmlText+'`');

// function renderTemplate(pageKey='index') {
//     let mainConent = document.getElementById("main");
//     let htmlText = replacePageKeys(pageKey, mainConent.innerHTML);
//     mainConent.innerHTML = eval('`'+htmlText+'`');
// }

// var teststring1 = "<b>${}['inner-circle'].p1}</b>";
// var teststring2 = "<b>${}['inner-circle'].p2}</b>";
// var teststring3 = "<b>${}['inner-circle'].p1}</b> <b>${}['inner-circle'].p2}</b>";
// var teststring4 = "{}  {}  {}"

// alert(replacePageKeys('index', teststring1));
// alert(replacePageKeys('index', teststring2));
// alert(replacePageKeys('index', teststring3));
// alert(replacePageKeys('index', teststring4));

// document.getElementById("experiment").innerHTML = JSON.stringify(data.index['inner-circle'].p2);