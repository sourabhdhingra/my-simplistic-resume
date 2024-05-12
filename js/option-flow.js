import { populateData, data } from './fetch-data.js';


let optionStack = ['index'];


function updateOptionsHandler(event) {
    let key = this.firstElementChild.textContent;
    console.log(`updateOptionsHandler: before page stack = ${optionStack}`);
    try{
        updateOptions(key);
        optionStack.push(key);

    }
    catch(error) {
        throw error;
    }
    finally {
        console.log(`updateOptionsHandler: after page stack = ${optionStack}`);
    }
}

function updateOptions(key) {
    // check if key exists in Json, if not perform nothing
    if(key in data) {
        console.log(`key ${data[key]['inner-circle']['p1']} value= ${data[key]['inner-circle']['p1']}`);
    }
    else {
        throw Error(`option ${key} does not have any further categories!`)
    }
    let parentDiv = document.getElementById('parent');
    // update inner circle p1
    parentDiv.getElementsByClassName('inner-circle')[0]
    .getElementsByTagName('p')[0]
    .textContent = data[key]['inner-circle']['p1'];

    // update inner circle p2
    parentDiv.getElementsByClassName('inner-circle')[0]
    .getElementsByTagName('p')[1]
    .textContent = data[key]['inner-circle']['p2'];

    // update option-1
    parentDiv.getElementsByClassName('option-1')[0]
    .getElementsByTagName('p')[0]
    .textContent = data[key]['option-circles']['option-circle-1']['p'];

    // update option-2
    parentDiv.getElementsByClassName('option-2')[0]
    .getElementsByTagName('p')[0]
    .textContent = data[key]['option-circles']['option-circle-2']['p'];

    // update option-3
    parentDiv.getElementsByClassName('option-3')[0]
    .getElementsByTagName('p')[0]
    .textContent = data[key]['option-circles']['option-circle-3']['p'];

    // update option-4
    parentDiv.getElementsByClassName('option-4')[0]
    .getElementsByTagName('p')[0]
    .textContent = data[key]['option-circles']['option-circle-4']['p'];
    
}

function goBackHandler() {
    console.log(`goBackHandler: before page stack = ${optionStack}`);
    try {
        if(optionStack.length > 1) {
            console.log('inside goBackHandler');
            let key = optionStack.pop();
            console.log(`removed ${key}`);
            updateOptions(optionStack[optionStack.length-1]);
        }
        else {
            throw Error('Nothing to go back!');
        }
    } catch(error) {
        throw error;
    }
    finally {
        console.log(`goBackHandler: after page stack = ${optionStack}`);
    }

}

export {updateOptionsHandler, goBackHandler}
