document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a companion object in Kotlin?",
            answer: "A singleton object associated with a class."
        },
        {
            question: "How do you define an extension function for a class in Kotlin?",
            answer: "Using the `fun` keyword outside the class."
        },
        {
            question: "What is the purpose of the Elvis operator (`?:`) in Kotlin?",
            answer: "To provide a default value if the left-hand side is null."
        },
        {
            question: "Which of the following correctly defines a higher-order function in Kotlin?",
            answer: "A function that takes another function as a parameter or returns one."
        },
        {
            question: "How can you define an extension property in Kotlin?",
            answer: "Using a getter function outside the class."
        },
        {
            question: "What is a nullable receiver in Kotlin?",
            answer: "An extension function that can handle null receiver objects."
        },
        {
            question: "How do you define a lambda function in Kotlin?",
            answer: "Using `{}` brackets with optional parameters and an arrow (`->`)."
        },
        {
            question: "What is the purpose of `by lazy` in Kotlin?",
            answer: "To defer property initialization until first access."
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