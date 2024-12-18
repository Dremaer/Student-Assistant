document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is an array in C?", answer: "A group of similar data types stored under one name in continuous memory" },
        { question: "How is an array initialized in C?", answer: "by declaring its size without values, by assigning values during declaration, by setting values after its declaration" },
        { question: "What happens if you access an array index out of bounds?", answer: "Segmentation fault or unpredictable behavior" },
        { question: "What is a string in C?", answer: "A collection of characters ending with \\0 (NULL)" },
        { question: "What function can input a string in C?", answer: "gets()" },
        { question: "What happens if the input string exceeds the size of the array in gets()?", answer: "It causes undefined behavior (buffer overflow)" },
        { question: "What is the starting index of an array in C?", answer: "0" },
        { question: "How are strings stored in C?", answer: "As a character array ending with '\\0'" },
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