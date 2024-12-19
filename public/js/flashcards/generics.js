document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the primary purpose of a sealed class in Kotlin?",
            answer: "To restrict inheritance to the same file."
        },
        {
            question: "What is the main feature of an interface in Kotlin?",
            answer: "It allows multiple inheritance for implementing classes."
        },
        {
            question: "Which keyword is used to define a type parameter in a generic class in Kotlin?",
            answer: "< T >"
        },
        {
            question: "What is the purpose of the `is` keyword in Kotlin?",
            answer: "To check if a variable is of a certain type."
        },
        {
            question: "What happens when two interfaces have the same method and are implemented by the same class?",
            answer: "The class must override the method."
        },
        {
            question: "What is the difference between `abstract` and `sealed` classes in Kotlin?",
            answer: "`abstract` allows inheritance from any file, while `sealed` restricts inheritance to the same file."
        },
        {
            question: "What is the main feature of a generic class in Kotlin?",
            answer: "It uses type parameters to allow operations on different types."
        },
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