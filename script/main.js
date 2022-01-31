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





// fruit images array creation -> imgList[];

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




// creation of cards -> cardArray[];


const cardArray = [];

function addCard () {
    
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    const parentDiv = document.getElementById("the-container");
    
    for(let i=0; i < imgList.length; i++) {
        
        const card = document.createElement("div");
        card.classList.add("card");
        // card.setAttribute('data-id',i);
        
        cardWrapper.appendChild(card);
        
        cardArray.push(card);
    };
    
    parentDiv.appendChild(cardWrapper);
    
};

addCard();


// function that checks if the number key from the imgList[] array has been taken (to avoid repetition)

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


// function to flip the card

// const flipCard = (e) => {
//     e.classList.toggle('active-card');
//         if(e.classList.contains('active-card')) {
//             e.style.background = 'center / contain no-repeat url(' + randomImg.image + '), #fff';
//         } else {
//             e.style.background = '#E9C46A';
//         };
// }



// function that generates non-repeating images on the back of the cards (thx to the previous function)

let chosenCards = [];
let flippedCards = [];
let compter = 0;
let clicked = null;

cardArray.forEach(el => {

    const randomImg = randomNumberFromArray(imgList);
    
    el.addEventListener('click', () => {

        compter++;
        if(compter < 2) {
            clicked = el;
        }

        console.log(clicked);

        el.classList.toggle('active-card');
        if(el.classList.contains('active-card')) {
            el.style.background = 'center / contain no-repeat url(' + randomImg.image + '), #fff';
        } else {
            el.style.background = '#E9C46A';
        };

        checkIfPair(randomImg.name);

        if(compter.length == 2) {
            if(checker == false) {

                el.style.background = '#E9C46A';
                el.classList.toggle('active-card');

                clicked.style.background = '#E9C46A';
                clicked.classList.toggle('active-card');

                compter = 0;
            } 
        }
        

        console.log(checker);
    });

}); 



// function toggling a card

const turnCard = (e) => {
    e.classList.toggle('active-card');
    if(el.classList.contains('active-card')) {
        el.style.background = 'center / contain no-repeat url(' + randomImg.image + '), #fff';
    } else {
        el.style.background = '#E9C46A';
    };
};



// function verifying if 2 images are equal or not

let checker;


const checkIfPair = (e) => {

    if(chosenCards.length != 2) {

        chosenCards.push(e);
    
        if(chosenCards.length === 2) {

            console.log(chosenCards);
            
            checker = '';
            
            if (chosenCards[0] === chosenCards[1]) {
                // console.log("it matched!");
                checker = true;
                // chosenCards = [];
            } else {
                checker = false;
                // chosenCards = [];
            };

            setter();
        };
    };
};


// setTimeout(() => {console.log("it matched!")}, 800);

const setter = () => {
    setTimeout(() => {

    if(checker === false) {
        console.log('no match');
    } else {
        console.log('match');
    }

    chosenCards = [];

    }, 800);
}



// setInterval( () => {
//     if(checker === false) {
        
//         chosenCards[0].classList.toggle("active-card");
//         chosenCards[1].classList.toggle("active-card");
//         console.log(chosenCards);
        
//         // chosenCards = [];
//         }
// },200);






// chosenCards.push(randomImg.src);
// console.log(chosenCards);






// function to make the modal appear -> modalApparition()

const modalApparition = () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};


// function closing the modal window -> closeModal()

const closeModal = () => {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
    window.location.reload();
};

overlay.addEventListener('click', closeModal);
newGameBtn.addEventListener('click', closeModal);











/* OLD NO USE */





/* -------------- old code START

// fruit images array creation -> allImages[];

let imgArray = new Array();

for (let i=1; i<19; i++) {
    imgArray[i] = new Image();
    imgArray[i].src = './img/fruit' + i + '.png';
}

let imgArray2 = new Array();

for (let i=1; i<19; i++) {
    imgArray2[i] = new Image();
    imgArray2[i].src = './img/fruit' + i + '.png';
}

let allImages = imgArray.concat(imgArray2);
-------------- old code END */




/*// function that generates non-repeating images on the back of the cards (thx to the previous function)

_______good version__________________________________
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


