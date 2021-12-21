// definisco la funzione del creare le box
function createBox(boxContainer, number, maxLenght) {
    // codice per la creazione dei div
    const boxHtml = document.createElement('div');
    boxHtml.className = 'ms_box';
    boxContainer.append(boxHtml);
    
    let result = 0;
    // click delle singole box
    boxHtml.addEventListener('click', function() {
        // codice bombe + alert e refresh della pagina
        if (array.includes(number)) {
            this.classList.add('ms_color-bomb');
            this.classList.remove('ms_color');

            //conteggio delle box giuste che si visualizza a fine partita  
            result = document.querySelectorAll('.ms_color').length;
            alert(`GAME OVER - RISULTATO: ${result}`);
            location.reload();
        }
        // codice box giuste 
        else {
            this.classList.add('ms_color');
            result++;
            if (result === maxLenght - 16) {
                alert(`HAI VINTO! - RISULTATO: ${result}`);
                location.reload();
            }
        }
    })
}


// funzione per definire dimensioni griglia
function boxNumber(maxNum){
    for (let i = 1; i <= maxNum; i++) {
        const newBox = createBox(containerHtml, i, maxNum);
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




