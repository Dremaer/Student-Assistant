document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the correct way to define a read-only variable in Kotlin?",
            answer: "val timeInSeconds = 15"
        },
        {
            question: "Which function is used to read input from the standard input in Kotlin?",
            answer: "readLine()"
        },
        {
            question: "How can you create an array in Kotlin initialized with specific elements?",
            answer: "val arr = arrayOf(1, 2, 3)"
        },
        {
            question: "Which Kotlin operator checks if two objects are the same instance?",
            answer: "==="
        },
        {
            question: "How do you represent a multi-line string in Kotlin?",
            answer: "Using triple double quotes (`\"\"\"`)"
        },
        {
            question: "What is the type of the following Kotlin variable?\n\nval x = 10L",
            answer: "Long"
        },
        {
            question: "What does the `toInt()` function in Kotlin do?",
            answer: "Converts a string or other types to an integer"
        },
        {
            question: "Which function checks if two arrays contain the same content in Kotlin?",
            answer: "contentEquals()"
        },
        {
            question: "Which escape sequence is used to insert a new line in a Kotlin string?",
            answer: "\\n"
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