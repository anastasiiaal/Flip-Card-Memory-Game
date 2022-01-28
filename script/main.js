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



// fruit images array creation -> allImages[];

let imgArray = new Array();

for (let i=0; i<18; i++) {
    imgArray[i] = new Image();
    imgArray[i].src = './img/fruit' + (i+1) + '.png';
}

let imgArray2 = new Array();

for (let i=0; i<18; i++) {
    imgArray2[i] = new Image();
    imgArray2[i].src = './img/fruit' + (i+1) + '.png';
}

let allImages = imgArray.concat(imgArray2);





// creation of cards -> cardArray[];


const cardArray = [];

function addCard () {
    
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    const parentDiv = document.getElementById("the-container");
    
    for(let i=0; i<36; i++) {
        
        const card = document.createElement("div");
        card.classList.add("card");
        
        cardWrapper.appendChild(card);
        
        cardArray.push(card);
    }
    
    parentDiv.appendChild(cardWrapper);
    
}

addCard();




// function that checks if the number key from the allImages[] array has been taken (to avoid repetition)

let imgTaken = [];

const randomNumberFromArray = (allImages) => {
    if (imgTaken.length === 0) {
        for (let i=0; i<allImages.length; i++) imgTaken.push(i);
    }

    let randomValueIndex = Math.floor(Math.random() * imgTaken.length);

    let indexFromAllImages = imgTaken[randomValueIndex];

    imgTaken.splice(randomValueIndex, 1);

    return allImages[indexFromAllImages];
};




// function that generates non-repeating images on the back of the cards (thx to the previous function)

cardArray.forEach(e => {

    const randomImg = randomNumberFromArray(allImages);
    
    e.addEventListener('click', () => {

        console.log(randomImg);

        e.classList.toggle('active-card');
        if(e.classList.contains('active-card')) {
            e.style.background = 'center / contain no-repeat url(' + randomImg.src + '), #fff';
        } else {
            e.style.background = '#E9C46A';
        };

    });

});

















/* OLD NO USE */


// // function to change card style on click: no random

// cardArray.forEach((e,id) => {

//     const image = './img/fruit' + (id+1) + '.png';
    
//     e.addEventListener('click', () => {

//         e.classList.toggle('active-card');
//         if(e.classList.contains('active-card')) {
//             e.style.background = 'center / contain no-repeat url(' + image + '), #fff';
//         } else {
//             e.style.background = '#E9C46A';
//         };

//     });

// });


