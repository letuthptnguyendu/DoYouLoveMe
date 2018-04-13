// "100px" => 100
function getPx(stringValue) {
    return Number(stringValue.slice(0, stringValue.length - 2));
}

function runBtn(event) {
    var neverBtn = document.getElementById('noBtn');
    //change position
    if (window.getComputedStyle(neverBtn).getPropertyValue('position') != 'absolute') {
        neverBtn.style.position = 'absolute';
    }

    //get width and height
    var neverBtnWidth = getPx(window.getComputedStyle(neverBtn).getPropertyValue('width'));
    var neverBtnHeight = getPx(window.getComputedStyle(neverBtn).getPropertyValue('height'));

    //give values
    var topPosition;
    var leftPosition;
    do {
        topPosition = Math.random() * innerHeight - neverBtnHeight; 
        topPosition =  topPosition > 0 ? topPosition : 0;
    } while (event.clientX >= topPosition &&  event.clientX <= topPosition + neverBtnHeight );

    do {
        leftPosition = Math.random() * innerWidth  - neverBtnWidth;
        leftPosition =  leftPosition > 0 ? leftPosition : 0;
    } while (event.clientX >= leftPosition &&  event.clientX <= leftPosition + neverBtnHeight );

    //to reality
    neverBtn.style.top = String(Math.floor(topPosition)) + 'px';
    neverBtn.style.left = String(Math.floor(leftPosition)) + 'px';
}

function yes() {
    window.alert("yah! I love me too <3");
}