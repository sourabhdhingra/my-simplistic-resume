import data from './data.json' assert { type: 'json' };


let optionStack = ['index'];
let options = document.querySelectorAll('.option-circle');
let option1 = options[0];
let option2 = options[1];
let option3 = options[2];
let option4 = options[3];
let goBackDisc = document.querySelector('.outer-circle');

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

option1.addEventListener('click', updateOptionsHandler);
option2.addEventListener('click', updateOptionsHandler);
option3.addEventListener('click', updateOptionsHandler);
option4.addEventListener('click', updateOptionsHandler);
goBackDisc.addEventListener('click', goBackHandler);
