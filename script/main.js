// main screen

const restartBtn = document.getElementById('restart-btn'); //ok
const pairsLeft = document.getElementById('pairs-left');
const progressBar = document.getElementById('progress-bar');
const timer = document.getElementById('timer-text');

// modal window

const overlay = document.getElementById('overlay'); //ok
const modalWindow = document.getElementById('modal'); //ok
const startGame = document.getElementById('start-game');
const newScore = document.getElementById('new-score');
const bestScore = document.querySelectorAll('li');
const newGameBtn = document.getElementById('new-btn'); //ok


// restart game

restartBtn.addEventListener('click', () => {
    window.location.reload();
});


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

/*_______good version__________________________________
cardArray.forEach(el => {

    const randomImg = randomNumberFromArray(allImages);
    
    el.addEventListener('click', () => {

        el.classList.toggle('active-card');
        if(el.classList.contains('active-card')) {
            el.style.background = 'center / contain no-repeat url(' + randomImg.src + '), #fff';
        } else {
            el.style.background = '#E9C46A';
        };

    });

}); 
___________________________________________________*/

let isEqual = [];

cardArray.forEach(el => {

    const randomImg = randomNumberFromArray(allImages);
    
    el.addEventListener('click', () => {

        checkIfPair(randomImg.src);

        el.classList.toggle('active-card');
        if(el.classList.contains('active-card')) {
            
            el.style.background = 'center / contain no-repeat url(' + randomImg.src + '), #fff';
        } else {
            el.style.background = '#E9C46A';
        };

    });

}); 


// function verifying if 2 images are equal or not

const checkIfPair = (e) => {

    isEqual.push(e);

    if(isEqual.length === 2) {
        console.log(isEqual);

        let checker = ;

        if (isEqual[0] === isEqual[1]) {
            console.log("it matched!");
            isEqual = [];
            checker = true;
        } else {
            isEqual = [];
            checker = false;
        }
    }
}





    // isEqual.push(randomImg.src);
    // console.log(isEqual);





// function to make the modal appear -> modalApparition()

const modalApparition = () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


// function closing the modal window -> closeModal()

const closeModal = () => {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
    window.location.reload();
}

overlay.addEventListener('click', closeModal);
newGameBtn.addEventListener('click', closeModal);







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


