document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the main purpose of the `use` function in Kotlin?",
            answer: "To close resources automatically when the block is exited."
        },
        {
            question: "Which class in Kotlin is used for reading bytes from a file?",
            answer: "FileInputStream"
        },
        {
            question: "What does the `filter` function do in Kotlin collections?",
            answer: "Returns a new collection containing elements that satisfy a given condition."
        },
        {
            question: "What is the purpose of `sortedSetOf` in Kotlin?",
            answer: "Creates a set with elements sorted naturally or by a custom comparator."
        },
        {
            question: "Which function is used to iterate over each element and index in a list?",
            answer: "forEachIndexed"
        },
        {
            question: "What does the following code do?\n\nval arr = arrayOf(0, 1, 4, 9, 16, 25)\nprintln(arr.slice(2..4))",
            answer: "Prints elements at indices 2, 3, and 4."
        },
        {
            question: "What is the main difference between `map` and `flatMap` in Kotlin?",
            answer: "`map` applies a transformation function to each element, while `flatMap` transforms and flattens nested collections."
        },
        {
            question: "What is the output of the following code?\n\nval map = mapOf(1 to \"I\", 5 to \"V\")\nprintln(map.keys)",
            answer: "[1, 5]"
        },
        {
            question: "What does the `reduce` function do in Kotlin?",
            answer: "Combines all elements of a collection into a single value by applying a lambda function."
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