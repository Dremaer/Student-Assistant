document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the main characteristic of a stack data structure?",
            answer: "Last-In-First-Out (LIFO)"
        },
        {
            question: "In a stack, which operation is used to add an element?",
            answer: "Push"
        },
        {
            question: "What happens when a Pop operation is performed on an empty stack?",
            answer: "Throws a \"stack underflow\" exception"
        },
        {
            question: "What is the main feature of a queue?",
            answer: "First-In-First-Out (FIFO)"
        },
        {
            question: "In a queue, where is the new element inserted?",
            answer: "At the rear"
        },
        {
            question: "What is a circular queue?",
            answer: "A queue where the end connects back to the start"
        },
        {
            question: "What condition signifies that a circular queue is full?",
            answer: "(rear + 1) % capacity == front"
        },
        {
            question: "Which operation is used to remove an element from a queue?",
            answer: "Dequeue"
        },
        {
            question: "In a stack, what does the Top operation do?",
            answer: "Returns the topmost element without removing it"
        },
        {
            question: "What is a potential issue with a linear queue implemented using arrays?",
            answer: "Memory underutilization due to shifting of elements"
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
        window.location.href = '/flashcards/flash_data'; 
    });
    
    updateUI(currentCard);    
});