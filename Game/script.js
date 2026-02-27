// Game State
let currentChapterId = 1;
let gameHistory = [];

// Initialize the game
function initGame() {
    displayChapter(currentChapterId);
}

// Display a chapter
function displayChapter(chapterId) {
    const chapter = storyData.chapters.find(c => c.id === chapterId);

    if (!chapter) {
        console.error("Chapter not found:", chapterId);
        return;
    }

    // Update current chapter
    currentChapterId = chapterId;
    gameHistory.push(chapterId);

    // Update header
    document.getElementById('gameTitle').textContent = storyData.title;
    document.getElementById('chapterCounter').textContent = `Chapter ${chapterId}`;

    // Display story text
    const storyTextEl = document.getElementById('storyText');
    storyTextEl.innerHTML = '';

    // Split text into paragraphs for better readability
    const paragraphs = chapter.text.split('. ');
    let fullText = '';
    paragraphs.forEach((para, index) => {
        fullText += para + (index < paragraphs.length - 1 ? '. ' : '');
    });

    const storyParagraph = document.createElement('p');
    storyParagraph.textContent = chapter.text;
    storyTextEl.appendChild(storyParagraph);

    // Display choices
    const choicesContainer = document.getElementById('choicesContainer');
    choicesContainer.innerHTML = '';

    chapter.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.onclick = () => {
            chooseOption(choice.nextId);
        };
        choicesContainer.appendChild(button);
    });

    // Update game status
    const gameStatus = document.getElementById('gameStatus');
    if (chapter.isEnding) {
        gameStatus.innerHTML = '<div class="ending-message">🏁 Story Complete!</div>';
        if (chapter.isGameEnd) {
            choicesContainer.innerHTML = '';
            const restartButton = document.createElement('button');
            restartButton.className = 'choice-btn';
            restartButton.textContent = 'Play Again';
            restartButton.onclick = () => {
                restartGame();
            };
            choicesContainer.appendChild(restartButton);
        }
    } else {
        gameStatus.textContent = `Choices made: ${gameHistory.length - 1}`;
    }

    // Scroll to top
    document.querySelector('.story-area').scrollTop = 0;
}

// Choose an option
function chooseOption(nextId) {
    displayChapter(nextId);
}

// Restart the game
function restartGame() {
    currentChapterId = 1;
    gameHistory = [];
    displayChapter(1);
}

// Initialize game on load
document.addEventListener('DOMContentLoaded', initGame);
