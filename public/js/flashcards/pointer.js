document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is a pointer in C?", answer: "A variable that stores a memory address" },
        { question: "What does the & operator do in C?", answer: "Returns the address of a variable" },
        { question: "How many bytes does a pointer variable typically occupy on a 32-bit system?", answer: "4 bytes" },
        { question: "What does the * operator do when used with a pointer?", answer: "Dereferences a pointer to access the value at the memory address" },
        { question: "Which statement is TRUE about arrays and pointers?", answer: "The array name points to the first element of the array" },
        { question: "What happens when you increment a pointer variable?", answer: "It points to the next memory address of its data type" },
        { question: "What is passed to a function when you pass an array as an argument?", answer: "The starting address of the array" },
        { question: "What is the difference between call by value and call by reference?", answer: "Call by value passes a copy of the variable, call by reference passes the memory address" },
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
        window.location.href = '/flashcards/flash_c'; 
    });
    
    updateUI(currentCard);    
});