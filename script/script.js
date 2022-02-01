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
    {
        name: '4',
        image: 'img/fruit4.png'
    },
    {
        name: '5',
        image: 'img/fruit5.png'
    },
    {
        name: '6',
        image: 'img/fruit6.png'
    },
    {
        name: '7',
        image: 'img/fruit7.png'
    },
    {
        name: '8',
        image: 'img/fruit8.png'
    },
    {
        name: '9',
        image: 'img/fruit9.png'
    },
    {
        name: '10',
        image: 'img/fruit10.png'
    },
    {
        name: '11',
        image: 'img/fruit11.png'
    },
    {
        name: '12',
        image: 'img/fruit12.png'
    },
    {
        name: '13',
        image: 'img/fruit13.png'
    },
    {
        name: '14',
        image: 'img/fruit14.png'
    },
    {
        name: '15',
        image: 'img/fruit15.png'
    },
    {
        name: '16',
        image: 'img/fruit16.png'
    },
    {
        name: '17',
        image: 'img/fruit17.png'
    },
    {
        name: '18',
        image: 'img/fruit18.png'
    },
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
    {
        name: '4',
        image: 'img/fruit4.png'
    },
    {
        name: '5',
        image: 'img/fruit5.png'
    },
    {
        name: '6',
        image: 'img/fruit6.png'
    },
    {
        name: '7',
        image: 'img/fruit7.png'
    },
    {
        name: '8',
        image: 'img/fruit8.png'
    },
    {
        name: '9',
        image: 'img/fruit9.png'
    },
    {
        name: '10',
        image: 'img/fruit10.png'
    },
    {
        name: '11',
        image: 'img/fruit11.png'
    },
    {
        name: '12',
        image: 'img/fruit12.png'
    },
    {
        name: '13',
        image: 'img/fruit13.png'
    },
    {
        name: '14',
        image: 'img/fruit14.png'
    },
    {
        name: '15',
        image: 'img/fruit15.png'
    },
    {
        name: '16',
        image: 'img/fruit16.png'
    },
    {
        name: '17',
        image: 'img/fruit17.png'
    },
    {
        name: '18',
        image: 'img/fruit18.png'
    },
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





// __________restart game

restartBtn.addEventListener('click', () => {
    window.location.reload();
});






// __________function that checks if the number key from the imgList[] array has been taken (to avoid repetition)

let imgTaken = [];

const randomNumberFromArray = (imgList) => {
    if (imgTaken.length === 0) {
        for (let i=0; i<imgList.length; i++) imgTaken.push(i);
    };

    let randomValue = Math.floor(Math.random() * imgTaken.length);

    let indexFromAllImages = imgTaken[randomValue];

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
                console.log(selectedImgNumbers);
                if(selectedImgNumbers[0] === selectedImgNumbers[1]) {
                    checker = true;
                    selectedImgNumbers = [];
                } else {
                    checker = false;
                    selectedImgNumbers = [];
                };
            }; 
        };

        // verification if 2 cards flipped && img==img
        if(flippedCards.length === 2) {
            if (!checker) {
                setTimeout(function() {
                    flipCard(flippedCards[0], randomImg.image);
                    flipCard(flippedCards[1], randomImg.image);
                    flippedCards = [];
                }, 300);
            } else {
                flippedCards = [];
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

