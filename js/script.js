// definisco la funzione del creare le box
function createBox(boxContainer) {
    const boxHtml = document.createElement('div');
    boxHtml.className = 'ms_box';

    boxContainer.append(boxHtml);

    boxHtml.addEventListener('click', function() { 
        this.classList.add('ms_color');
    })
    
}


// funzione per definire dimensioni griglia
function boxNumber(maxNum){
    for (let i = 0; i < maxNum; i++) {
        const newBox = createBox(containerHtml);
    }

    // per utilizzare una funzione che sfrutti lo stesso numero dedicato ai box, inserisco la funzione 
    // dentro l'altra
    bombNum(maxNum);
}

// funzione per la generazione di numeri random
function randomNumber(min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min; 
    return result;
}

// funzione per generare tot numeri a seconda nel numero dei box in griglia
let array = [];

function bombNum (max) {

    array = [];
    
    while (array.length < 16) {
        let number = randomNumber(1, max);
        if (!array.includes(number)) {
            array.push(number);
        }
    }

    console.log(array);

}

// --------------------------------------------------------------------------

// definisco l'output del div container
let containerHtml = document.querySelector('.ms_box-container');

// definisco gli output dei button
const button1 = document.getElementById('ms_button1');
const button2 = document.getElementById('ms_button2');
const button3 = document.getElementById('ms_button3');

// button per definire griglia 10x10
button1.addEventListener('click', function () {
    containerHtml.innerHTML='';
    boxNumber(100);
    containerHtml.classList.remove('ms_container-2');
    containerHtml.classList.remove('ms_container-3');
    containerHtml.classList.add('ms_container-1');
})

// button per definire griglia 9x9
button2.addEventListener('click', function () {
    containerHtml.innerHTML='';
    boxNumber(81);
    containerHtml.classList.remove('ms_container-1');
    containerHtml.classList.remove('ms_container-3');
    containerHtml.classList.add('ms_container-2');
})

// button per definire griglia 7x7
button3.addEventListener('click', function () {
    containerHtml.innerHTML='';
    boxNumber(49);
    containerHtml.classList.remove('ms_container-1');
    containerHtml.classList.remove('ms_container-2');
    containerHtml.classList.add('ms_container-3');
})




