import data from './data.json' assert { type: 'json' };


let option1 = document.querySelector('.option-1');
option1.addEventListener('click', function() {
    let key = this.firstElementChild.textContent;
    console.log(data[key]['inner-circle']['p1']);
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
    
});