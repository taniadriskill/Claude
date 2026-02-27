// States and their capitals
const statesData = [
    { state: 'Alabama', capital: 'Montgomery' },
    { state: 'Alaska', capital: 'Juneau' },
    { state: 'Arizona', capital: 'Phoenix' },
    { state: 'Arkansas', capital: 'Little Rock' },
    { state: 'California', capital: 'Sacramento' },
    { state: 'Colorado', capital: 'Denver' },
    { state: 'Connecticut', capital: 'Hartford' },
    { state: 'Delaware', capital: 'Dover' },
    { state: 'Florida', capital: 'Tallahassee' },
    { state: 'Georgia', capital: 'Atlanta' },
    { state: 'Hawaii', capital: 'Honolulu' },
    { state: 'Idaho', capital: 'Boise' },
    { state: 'Illinois', capital: 'Springfield' },
    { state: 'Indiana', capital: 'Indianapolis' },
    { state: 'Iowa', capital: 'Des Moines' },
    { state: 'Kansas', capital: 'Topeka' },
    { state: 'Kentucky', capital: 'Frankfort' },
    { state: 'Louisiana', capital: 'Baton Rouge' },
    { state: 'Maine', capital: 'Augusta' },
    { state: 'Maryland', capital: 'Annapolis' },
    { state: 'Massachusetts', capital: 'Boston' },
    { state: 'Michigan', capital: 'Lansing' },
    { state: 'Minnesota', capital: 'Saint Paul' },
    { state: 'Mississippi', capital: 'Jackson' },
    { state: 'Missouri', capital: 'Jefferson City' },
    { state: 'Montana', capital: 'Helena' },
    { state: 'Nebraska', capital: 'Lincoln' },
    { state: 'Nevada', capital: 'Carson City' },
    { state: 'New Hampshire', capital: 'Concord' },
    { state: 'New Jersey', capital: 'Trenton' },
    { state: 'New Mexico', capital: 'Santa Fe' },
    { state: 'New York', capital: 'Albany' },
    { state: 'North Carolina', capital: 'Raleigh' },
    { state: 'North Dakota', capital: 'Bismarck' },
    { state: 'Ohio', capital: 'Columbus' },
    { state: 'Oklahoma', capital: 'Oklahoma City' },
    { state: 'Oregon', capital: 'Salem' },
    { state: 'Pennsylvania', capital: 'Harrisburg' },
    { state: 'Rhode Island', capital: 'Providence' },
    { state: 'South Carolina', capital: 'Columbia' },
    { state: 'South Dakota', capital: 'Pierre' },
    { state: 'Tennessee', capital: 'Nashville' },
    { state: 'Texas', capital: 'Austin' },
    { state: 'Utah', capital: 'Salt Lake City' },
    { state: 'Vermont', capital: 'Montpelier' },
    { state: 'Virginia', capital: 'Richmond' },
    { state: 'Washington', capital: 'Olympia' },
    { state: 'West Virginia', capital: 'Charleston' },
    { state: 'Wisconsin', capital: 'Madison' },
    { state: 'Wyoming', capital: 'Cheyenne' }
];

let currentIndex = 0;
let isFlipped = false;

// DOM Elements
const flipCard = document.getElementById('flipCard');
const stateDisplay = document.getElementById('stateDisplay');
const capitalDisplay = document.getElementById('capitalDisplay');
const flipBtn = document.getElementById('flipBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');
const total = document.getElementById('total');

// Initialize
function init() {
    total.textContent = statesData.length;
    displayCurrent();
}

// Display current state and capital
function displayCurrent() {
    const current = statesData[currentIndex];
    stateDisplay.textContent = current.state;
    capitalDisplay.textContent = current.capital;
    counter.textContent = currentIndex + 1;
    isFlipped = false;
    flipCard.classList.remove('flipped');
}

// Flip the card
flipBtn.addEventListener('click', () => {
    isFlipped = !isFlipped;
    flipCard.classList.toggle('flipped');
});

// Show next state
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % statesData.length;
    displayCurrent();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        flipBtn.click();
    } else if (e.code === 'ArrowRight') {
        nextBtn.click();
    }
});

// Initialize on page load
init();
