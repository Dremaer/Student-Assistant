document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is a function in C programming?", answer: "A block of code that performs a specific task" },
        { question: "What is the role of the main() function in a C program?", answer: "To serve as the program's entry point" },
        { question: "What is a local variable?", answer: "A variable declared inside a function and only accessible there" },
        { question: "Which keyword is used to return a value from a function?", answer: "return" },
        { question: "What is a recursive function?", answer: "A function that calls itself" },
        { question: "What does the return statement do in C?", answer: "It passes a value back to the calling function" },
        { question: "What is the purpose of a function prototype in C?", answer: "To declare the function before it is called" },
        { question: "How can you ensure a function returns a float value?", answer: "Declare the function with float return type" }
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
        window.location.href = '/flashcards/flash_Discrete_Math';
    });
    
    updateUI(currentCard);    
});