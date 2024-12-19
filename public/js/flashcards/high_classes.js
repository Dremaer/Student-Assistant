document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the main purpose of the `is` operator in Kotlin?",
            answer: "To check if a variable is of a specific type."
        },
        {
            question: "How do you declare a subclass in Kotlin?",
            answer: "class Subclass : Superclass()"
        },
        {
            question: "Which keyword makes a Kotlin class inheritable?",
            answer: "open"
        },
        {
            question: "What is the difference between `as` and `as?` in Kotlin?",
            answer: "`as` casts and throws an exception on failure, while `as?` returns null on failure."
        },
        {
            question: "Which function can be used to convert a Kotlin class to a human-readable string?",
            answer: "toString()"
        },
        {
            question: "What does the `open` keyword in Kotlin do?",
            answer: "Allows a class or member to be overridden."
        },
        {
            question: "How can you safely cast a variable to a specific type in Kotlin?",
            answer: "Using the `as?` operator."
        },
        {
            question: "What is the purpose of overriding the `equals` method in Kotlin?",
            answer: "To define structural equality for an object."
        },
        {
            question: "What does the `protected` keyword do in Kotlin?",
            answer: "Allows access within the class and its subclasses."
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