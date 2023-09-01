let dis = '';
let input = '';

function clr() {
    input = '';
    dis = '';
    update();
}

function display(value) {
    if (value === 'del') {
        input = input.slice(0, -1); 
    } else {
        input += value;
    }
    dis = input;
    update();
}

function fsin() {
    input = Math.sin(parseFloat(input));
    dis = input;
    update();
}

function fcos() {
    input = Math.cos(parseFloat(input));
    dis = input;
    update();
}

function ftan() {
    input = Math.tan(parseFloat(input));
    dis = input;
    update();
}

function result() {
    try {
        dis = eval(input);
    } catch (error) {
        dis = 'Error';
    }
    input = dis.toString();
    update();
}

function froot() {
    input = Math.sqrt(parseFloat(input));
    dis = input;
    update();
}

function fln() {
    input = Math.log(parseFloat(input));
    dis = input;
    update();
}

function fexp() {
    input = Math.exp(parseFloat(input));
    dis = input;
    update();
}

function update() {
    document.getElementById('display').innerText = dis;
}