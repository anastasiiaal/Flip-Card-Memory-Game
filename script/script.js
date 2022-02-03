// main screen

const restartBtn = document.getElementById('restart-btn'); //ok
const pairsLeft = document.getElementById('pairs-left'); //ok
// const progress = document.getElementById('progress');
// const progressBar = document.getElementById('progress-bar');
const timer = document.getElementById('timer-text'); //ok

// modal start

const overlayStart = document.getElementById('overlay-start'); //ok
const modalWindowStart = document.getElementById('modal-start'); //ok
const startGameBtn = document.getElementById('start-btn'); //ok
const modalStartText = document.getElementById('modal-start__text');

// modal window (main)

const overlay = document.getElementById('overlay'); //ok
const modalWindow = document.getElementById('modal'); //ok
const startGame = document.getElementById('start-game');
const newScore = document.getElementById('new-score');
const bestScore = document.querySelectorAll('li');
const newGameBtn = document.getElementById('new-btn'); //ok




// __________fruit images array creation -> imgList[];

const imgList = [
    {
        name: '1',
        image: 'img/fruit1.png'
    },
    {
        name: '2',
        image: 'img/fruit2.png'
    },
    {
        name: '3',
        image: 'img/fruit3.png'
    },
    // {
    //     name: '4',
    //     image: 'img/fruit4.png'
    // },
    // {
    //     name: '5',
    //     image: 'img/fruit5.png'
    // },
    // {
    //     name: '6',
    //     image: 'img/fruit6.png'
    // },
    // {
    //     name: '7',
    //     image: 'img/fruit7.png'
    // },
    // {
    //     name: '8',
    //     image: 'img/fruit8.png'
    // },
    // {
    //     name: '9',
    //     image: 'img/fruit9.png'
    // },
    // {
    //     name: '10',
    //     image: 'img/fruit10.png'
    // },
    // {
    //     name: '11',
    //     image: 'img/fruit11.png'
    // },
    // {
    //     name: '12',
    //     image: 'img/fruit12.png'
    // },
    // {
    //     name: '13',
    //     image: 'img/fruit13.png'
    // },
    // {
    //     name: '14',
    //     image: 'img/fruit14.png'
    // },
    // {
    //     name: '15',
    //     image: 'img/fruit15.png'
    // },
    // {
    //     name: '16',
    //     image: 'img/fruit16.png'
    // },
    // {
    //     name: '17',
    //     image: 'img/fruit17.png'
    // },
    // {
    //     name: '18',
    //     image: 'img/fruit18.png'
    // },
    {
        name: '1',
        image: 'img/fruit1.png'
    },
    {
        name: '2',
        image: 'img/fruit2.png'
    },
    {
        name: '3',
        image: 'img/fruit3.png'
    },
    // {
    //     name: '4',
    //     image: 'img/fruit4.png'
    // },
    // {
    //     name: '5',
    //     image: 'img/fruit5.png'
    // },
    // {
    //     name: '6',
    //     image: 'img/fruit6.png'
    // },
    // {
    //     name: '7',
    //     image: 'img/fruit7.png'
    // },
    // {
    //     name: '8',
    //     image: 'img/fruit8.png'
    // },
    // {
    //     name: '9',
    //     image: 'img/fruit9.png'
    // },
    // {
    //     name: '10',
    //     image: 'img/fruit10.png'
    // },
    // {
    //     name: '11',
    //     image: 'img/fruit11.png'
    // },
    // {
    //     name: '12',
    //     image: 'img/fruit12.png'
    // },
    // {
    //     name: '13',
    //     image: 'img/fruit13.png'
    // },
    // {
    //     name: '14',
    //     image: 'img/fruit14.png'
    // },
    // {
    //     name: '15',
    //     image: 'img/fruit15.png'
    // },
    // {
    //     name: '16',
    //     image: 'img/fruit16.png'
    // },
    // {
    //     name: '17',
    //     image: 'img/fruit17.png'
    // },
    // {
    //     name: '18',
    //     image: 'img/fruit18.png'
    // },
];





// __________creation of cards on the board -> cardArray[];

const cardArray = [];

function addCard () {
    
    // creation of the wrapper
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");

    // getting a parent div of the wrapper 
    const parentDiv = document.getElementById("the-container");
    
    for(let i=0; i < imgList.length; i++) {
        
        const card = document.createElement("div");
        card.classList.add("card");
        
        cardWrapper.appendChild(card);
        
        cardArray.push(card);
    };
    
    // insert the wrapper into parent div
    parentDiv.appendChild(cardWrapper);
    
};

addCard();






// __________progress bar 

var i = 0;
function progressBarStart() {
    if (i == 0) {
        i = 1;
        var progressBar = document.getElementById("progress-bar");
        var width = 1;
        var id = setInterval(frame, 2435);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                progressBar.style.width = width + "%";
            };
        };
    };
};






// __________restart game

restartBtn.addEventListener('click', () => {
    window.location.reload();
});






// __________function to make the modal appear -> modalApparition()

const modalApparition = () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};





// __________function closing the main modal window -> closeModal()

const closeModal = () => {
    window.location.reload();
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal);
newGameBtn.addEventListener('click', closeModal);






// __________function closing the starting modal window -> closeModalStart()

const closeModalStart = () => {
    modalWindowStart.classList.add('hidden');
    overlayStart.classList.add('hidden');

    progressBarStart();

    // function timer
    const departMinutes = 4;
    let timeCounter = departMinutes * 60;

    setInterval(() => {
        let mins = parseInt(timeCounter / 60, 10);
        let seconds = parseInt(timeCounter % 60, 10);

        mins = mins < 10 ? "0" + mins : mins;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timer.innerText = `${mins}:${seconds}`;
        timeCounter = timeCounter <= 0 ? 0 : timeCounter - 1;
    }, 1000);

    setTimeout(function() {
        if(modalWindow.classList.contains('hidden')) {
            modalApparition();
            newScore.innerHTML = "Sorry, your time is up!";
        }
    }, 242000);
};

overlayStart.addEventListener('click', closeModalStart);
startGameBtn.addEventListener('click', closeModalStart);





// __________function that checks if the number key from the imgList[] array has been taken (to avoid repetition)

let imgTaken = [];

const randomNumberFromArray = (imgList) => {

    if (imgTaken.length === 0) {
        // inserting all possible indexes of images into an array
        for (let i=0; i<imgList.length; i++) imgTaken.push(i);
    };

    // generating the random index
    let randomValue = Math.floor(Math.random() * imgTaken.length);

    let indexFromAllImages = imgTaken[randomValue];

    // removing the used index from the array to avoid repetition of an index
    imgTaken.splice(randomValue, 1);

    return imgList[indexFromAllImages];
};





// __________function to flip the card -> flipCard(c);

const flipCard = (c, img) => {
    c.classList.toggle('active-card');

    if(!c.classList.contains('active-card')) {
        c.style.background = '#E9C46A';
    } else {
        c.style.background = 'center / contain no-repeat url(' + img + '), #fff';
    };
};





// __________flip a card on a click

let flippedCards = [];
let selectedImgNumbers = [];
let checker;

let pairCounter = 0;

cardArray.forEach( (card) => {

    const randomImg = randomNumberFromArray(imgList);

    card.addEventListener('click', () => {

        // on click -> flip a card to show the img
        flipCard(card, randomImg.image);

        // pushing a clicked card to a temporary array
        flippedCards.push(card);

        // verification if images are the same
        if(selectedImgNumbers.length !== 2) {
            selectedImgNumbers.push(randomImg.name);
            
            if (selectedImgNumbers.length === 2) {
                checker = '';
                // console.log(selectedImgNumbers);
                if(selectedImgNumbers[0] === selectedImgNumbers[1]) {
                    checker = true;
                    selectedImgNumbers = [];
                } else {
                    checker = false;
                    selectedImgNumbers = [];
                };
            }; 
        };

        // verification if 2 cards flipped && img===img
        if(flippedCards.length === 2) {
            if (!checker) {
                setTimeout(function() {
                    flipCard(flippedCards[0], randomImg.image);
                    flipCard(flippedCards[1], randomImg.image);
                    flippedCards = [];
                }, 200);
            } else {
                flippedCards = [];
                pairCounter++;
                pairsLeft.innerHTML = pairCounter;

                if(pairCounter === 3) {
                    modalApparition();
                };
            };
        };
    });
});












































// // function verifying if 2 images are equal or not

// let checker;
// let chosenCardsNumbers = [];

// const checkIfPair = (e) => {
//     if(chosenCardsNumbers.length !== 2) {
//         chosenCardsNumbers.push(e);

//         if(chosenCardsNumbers === 2) {
//             checker = '';

//             if(chosenCardsNumbers[0] === chosenCardsNumbers[1]) {
//                 checker = true;
//             } else {
//                 checker = false;
//             }

//             console.log(checker);
//         }
//     }
// }


// // automatically flipping card back after a delay
        // if(flippedCards.length === 2) {
            

        //     setTimeout(function() {
        //         flipCard(flippedCards[0], randomImg.image);
        //         flipCard(flippedCards[1], randomImg.image);
        //         flippedCards = [];
        //     }, 300);

        // }

