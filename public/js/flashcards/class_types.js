document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the main feature of an `enum` class in Kotlin?",
            answer: "It represents a collection of related constants."
        },
        {
            question: "How do you define a method in an `enum` class?",
            answer: "Directly within the class body."
        },
        {
            question: "Which method is automatically provided by all `enum` classes?",
            answer: "`values()` and `valueOf()`"
        },
        {
            question: "What does the following code output?\n\nenum class Direction { NORTH, SOUTH, WEST, EAST }\nprintln(Direction.NORTH.ordinal)",
            answer: "0"
        },
        {
            question: "What is a `data` class in Kotlin?",
            answer: "A class that automatically generates equals, hashCode, and toString methods."
        },
        {
            question: "Which function in a `data` class allows copying an object with some properties modified?",
            answer: "`copy()`"
        },
        {
            question: "What is the purpose of `UByte` in Kotlin?",
            answer: "To represent an unsigned 8-bit integer."
        },
        {
            question: "How can you define a `Pair` in Kotlin?",
            answer: "`val pair = Pair(1, \"two\")`"
        },
        {
            question: "What does the `toUByte()` function in Kotlin do?",
            answer: "Converts a signed integer to an unsigned byte."
        }
    ];       
                
    
    let currentCard = 0;
    
    // DOM Elements
    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const prevButton = document.getElementById('prev-card');
    const nextButton = document.getElementById('next-card');
    const cardNumberElement = document.getElementById('card-number');
    const endScreenElement = document.getElementById('flashcardEnd');
    const resetButton = document.getElementById('reset-flashcards');
    const homeButton = document.getElementById('back-home');
    const navigationElement = document.querySelector('.navigation');
    
    // Function to update the UI for the current card or end screen
    function updateUI(index) {
        const isEndScreen = index >= flashcards.length;
    
        // Toggle visibility based on whether it's the end screen
        flashcardElement.style.display = isEndScreen ? 'none' : 'block';
        navigationElement.style.display = isEndScreen ? 'none' : 'flex';
        endScreenElement.style.display = isEndScreen ? 'block' : 'none';
    
        if (isEndScreen) {
            endScreenElement.querySelector('.end-message').textContent =
                "🎉 You've completed the flashcards! 🎉";
        } else {
            const card = flashcards[index];
            questionElement.textContent = card.question;
            answerElement.textContent = card.answer;
            flashcardElement.classList.remove('is-flipped');
            cardNumberElement.textContent = `${index + 1} / ${flashcards.length}`;
        }
    }
    
    // Event Listeners
    flashcardElement.addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });
    
    prevButton.addEventListener('click', () => {
        if (currentCard > 0) {
            currentCard--;
            updateUI(currentCard);
        }
    });
    
    nextButton.addEventListener('click', () => {
        currentCard++;
        updateUI(currentCard);
    });
    
    resetButton.addEventListener('click', () => {
        currentCard = 0;
        updateUI(currentCard);
    });
    
    homeButton.addEventListener('click', () => {
        window.location.href = '/flashcards/flash_oop'; 
    });
    
    updateUI(currentCard);    
});