// main screen

const restartBtn = document.getElementById('restart-btn'); //ok
const clickCounter = document.getElementById('click-counter'); //ok
const pairsLeft = document.getElementById('pairs-left'); //ok
const timer = document.getElementById('timer-text'); //ok
const timerProgress = document.getElementById('timer-progress'); // ok

// modal start

const overlayStart = document.getElementById('overlay-start'); //ok
const modalWindowStart = document.getElementById('modal-start'); //ok
const startGameBtn = document.getElementById('start-btn'); //ok

// modal window (main)

const overlay = document.getElementById('overlay'); //ok
const modalWindow = document.getElementById('modal'); //ok
const newScore = document.getElementById('new-score'); // ok
const newScoreTime = document.getElementById('new-score-time'); // ok
const nuOfClicks = document.getElementById('new-score-span'); // ok
// const bestScore = document.querySelectorAll('li');
const newGameBtn = document.getElementById('new-btn'); //ok



// __________fruit images array creation -> imgList[]

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





// __________creation of cards on the board -> cardArray[]

const cardArray = [];

function addCard () {
    
    // creation of the wrapper
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");

    // getting a parent div of the wrapper to insert into
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





// __________progress bar -> progressBarStart()

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
            } else if (!modalWindow.classList.contains('hidden')) {
                clearInterval(id);
            } else {
                width++;
                progressBar.style.width = width + "%";
            };
        };
    };
};





// __________restart game button action

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
};


// calling the previous function

overlay.addEventListener('click', closeModal);
newGameBtn.addEventListener('click', closeModal);






// __________function closing the starting modal window -> closeModalStart()

let timerFunction;
let timerToDb;

const closeModalStart = () => {
    modalWindowStart.classList.add('hidden');
    overlayStart.classList.add('hidden');
    
    // call for the function to start the progress bar
    progressBarStart();
 
    // function to start the timer
    const departMinutes = 4;
    let timeCounter = departMinutes * 60;
    
    timerFunction = setInterval(() => {
        let mins = parseInt(timeCounter / 60, 10);
        let seconds = parseInt(timeCounter % 60, 10);

        mins = mins < 10 ? "0" + mins : mins;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timer.innerText = `${mins}:${seconds}`;
        timeCounter = timeCounter <= 0 ? 0 : timeCounter - 1;
    }, 1000);

    // function to start a stopwatch (timerProgress) : the data to be sent in DB, hidden from user -> countDown()
    let secondLeft = 0;
    let minuteLeft = 0; 
    
    function countDown() {
        let minu;
        let seco;
        stopI = setInterval(() => {
            secondLeft++;
            if (secondLeft === 59) {
                minuteLeft++;
                secondLeft = 0;
            };
            secondLeft < 10 ? (seco = `0${secondLeft}`) : (seco = `${secondLeft}`);
            minuteLeft < 10 ? (minu = `0${minuteLeft}`) : (minu = `${minuteLeft}`);
            timerProgress.innerHTML = `00:${minu}:${seco}`;
            timerToDb = '00:' + minu + ':' + seco;
        }, 1000);
    };

    countDown();

    // setting a timeout to call for the modal window with "Time is up"
    setTimeout(function() {
        if(modalWindow.classList.contains('hidden')) {
            modalApparition();
            newScore.innerHTML = "Sorry, the time is up! Try again";
        };
    }, 242000);
};   


// calling the previous function

overlayStart.addEventListener('click', closeModalStart);
startGameBtn.addEventListener('click', closeModalStart);





// __________function that checks if the number key from the imgList[] array has been taken (to avoid repetition of the keys of images) -> randomNumberFromArray(imgList)

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





// __________function to flip the card -> flipCard(c, img)

const flipCard = (c, img) => {
    c.classList.toggle('active-card');

    if(!c.classList.contains('active-card')) {
        c.style.background = '#E9C46A';
    } else {
        c.style.background = 'center / contain no-repeat url(' + img + '), #fff';
    };
};





// __________flip a card on a click : all the actions to perform during the game itself

let flippedCards = [];
let selectedImgNumbers = [];
let checker;

let pairCounter = 0;
let clicksCounter = 0;

cardArray.forEach( (card) => {

    const randomImg = randomNumberFromArray(imgList);

    card.addEventListener('click', () => {

        // counts the n?? of clicks to win the game
        clicksCounter++;
        clickCounter.innerHTML = clicksCounter + ' click(s)';

        // on click -> flip a card to show the img
        flipCard(card, randomImg.image);

        // pushing a clicked card to a temporary array
        flippedCards.push(card);

        // verification if the images in a pair are the same (by pushing the "names" of both) + clearing the array containing them afterwards to stock and compare the next pair of cards
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
                    // card.click(function(event){
                    //     event.stopPropagation();
                    // });
                    flipCard(flippedCards[0], randomImg.image);
                    flipCard(flippedCards[1], randomImg.image);
                    flippedCards = [];
                }, 200);
            } else {
                flippedCards = [];
                pairCounter++;
                pairsLeft.innerHTML = pairCounter;

                if(pairCounter === 18) {
                    // call the modal once the game is over
                    modalApparition();
                    // insert n?? of clicks into the table of the modal
                    nuOfClicks.innerHTML = '(in ' + clicksCounter + ' clicks)';
                    // stop interval once the game is over
                    clearInterval(timerFunction);
                    clearInterval(stopI);
                    newScoreTime.innerHTML = timerToDb;
                };
            };
        };
    });
});