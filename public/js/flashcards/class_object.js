document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the purpose of the `init` block in Kotlin?",
            answer: "To initialize complex properties that cannot be initialized directly."
        },
        {
            question: "Which keyword is used to declare a read-only property in Kotlin?",
            answer: "val"
        },
        {
            question: "How do you handle nullable types in Kotlin?",
            answer: "By using the `?` operator for nullable types."
        },
        {
            question: "What happens when you access a property marked with `lateinit` before initializing it?",
            answer: "It throws an UninitializedPropertyAccessException."
        },
        {
            question: "What is the correct way to define a primary constructor in Kotlin?",
            answer: "class Person(val firstName: String, val lastName: String)"
        },
        {
            question: "What is the purpose of the `companion object` in Kotlin?",
            answer: "To declare a shared object for a class, accessible without creating an instance."
        },
        {
            question: "What does the Elvis operator (`?:`) do in Kotlin?",
            answer: "Returns the left-hand value if it's not null; otherwise, returns the right-hand value."
        },
        {
            question: "How do you define a class with a secondary constructor in Kotlin?",
            answer: "By using `constructor` as a keyword."
        },
        {
            question: "What is a singleton object in Kotlin?",
            answer: "An object with a single instance that is created using the `object` keyword."
        },
        {
            question: "What does the `by lazy` keyword do in Kotlin?",
            answer: "Declares a property that is initialized when accessed for the first time."
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