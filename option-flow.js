import data from './data.json' assert { type: 'json' };


let options = document.querySelectorAll('.option-circle');
let option1 = options[0];
let option2 = options[1];
let option3 = options[2];
let option4 = options[3];

function updateOptions() {
    let key = this.firstElementChild.textContent;
    // check if key exists in Json, if not perform nothing
    if(key in data) {
        console.log(data[key]['inner-circle']['p1']);
    }
    else {
        throw Error(`option ${key} does not have any further categories!`)
        return;
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

option1.addEventListener('click', updateOptions);
option2.addEventListener('click', updateOptions);
option3.addEventListener('click', updateOptions);
option4.addEventListener('click', updateOptions);
