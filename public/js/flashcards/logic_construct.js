document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the correct way to define a function in Kotlin?",
            answer: "fun circleArea(radius: Double): Double"
        },
        {
            question: "How do you declare a read-only variable in Kotlin?",
            answer: "val radius = 10"
        },
        {
            question: "Which keyword is used for conditional expressions in Kotlin?",
            answer: "if"
        },
        {
            question: "What is the result of the following range expression?\n\nval range = 1..5\nprintln(3 in range)",
            answer: "true"
        },
        {
            question: "What is the correct way to use `when` in Kotlin for multiple conditions?",
            answer: "when (n) { 1 -> ..., 2 -> ... }"
        },
        {
            question: "How do you import all functions from the `kotlin.math` package?",
            answer: "import kotlin.math.*"
        },
        {
            question: "Which loop ensures the body is executed at least once in Kotlin?",
            answer: "do-while"
        },
        {
            question: "How do you define a function with a default parameter value in Kotlin?",
            answer: "fun readInt(radix: Int = 10)"
        },
        {
            question: "What does the `step` keyword do in a Kotlin range?",
            answer: "Sets the increment value for the range"
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