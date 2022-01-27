// main screen

const restartBtn = document.getElementById('restart-btn');
const pairsLeft = document.getElementById('pairs-left');
const progressBar = document.getElementById('progress-bar');
const timer = document.getElementById('timer-text');

// modal window

const overlay = document.getElementById('overlay');
const modalWindow = document.getElementById('modal');
const newGame = document.getElementById('new-game');
const newScore = document.getElementById('new-score');
const bestScore = document.querySelectorAll('li');
const newGameBtn = document.getElementById('new-btn');

// fruit images
// https://www.codegrepper.com/code-examples/javascript/array+of+images+javascript

let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './img/fruit1.png';

imgArray[1] = new Image();
imgArray[1].src = './img/fruit2.png';

imgArray[2] = new Image();
imgArray[2].src = './img/fruit3.png';

imgArray[3] = new Image();
imgArray[3].src = './img/fruit4.png';

imgArray[4] = new Image();
imgArray[4].src = './img/fruit5.png';

imgArray[5] = new Image();
imgArray[5].src = './img/fruit6.png';

imgArray[6] = new Image();
imgArray[6].src = './img/fruit7.png';

imgArray[7] = new Image();
imgArray[7].src = './img/fruit8.png';

imgArray[8] = new Image();
imgArray[8].src = './img/fruit9.png';

imgArray[9] = new Image();
imgArray[9].src = './img/fruit10.png';

imgArray[10] = new Image();
imgArray[10].src = './img/fruit11.png';

imgArray[11] = new Image();
imgArray[11].src = './img/fruit12.png';

imgArray[12] = new Image();
imgArray[12].src = './img/fruit13.png';

imgArray[13] = new Image();
imgArray[13].src = './img/fruit14.png';

imgArray[14] = new Image();
imgArray[14].src = './img/fruit15.png';

imgArray[15] = new Image();
imgArray[15].src = './img/fruit16.png';

imgArray[16] = new Image();
imgArray[16].src = './img/fruit17.png';

imgArray[17] = new Image();
imgArray[17].src = './img/fruit18.png';



// creation of cards


const cardArray = [];

function addCard () {
    
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    const parentDiv = document.getElementById("the-container");
    
    for(i=0; i<36; i++) {
        
        const card = document.createElement("div");
        card.classList.add("card");
        
        cardWrapper.appendChild(card);
        
        cardArray.push(card);
    }
    
    //console.log(cardArray);
    
    parentDiv.appendChild(cardWrapper);
    
}

addCard();


// 

cardArray.forEach((e,id) => {
    const image = './img/fruit' + (id+1) + '.png';
    
    e.addEventListener('click', () => {
        e.classList.toggle('active-card');
        if(e.classList.contains('active-card')) {
            e.style.background = 'center / contain no-repeat url(' + image + '), #fff';
        } else {
            e.style.background = '#E9C46A';
        };
    });
});
























