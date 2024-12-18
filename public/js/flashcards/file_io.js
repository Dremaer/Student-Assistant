document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is a stream in C?", answer: "A sequence of bytes flowing between a program and a file" },
        { question: "Which function is used to open a file in C?", answer: "fopen()" },
        { question: "What does the fopen() function return if it fails to open a file?", answer: "NULL" },
        { question: "Which of the following is a valid mode for fopen()?", answer: "\"w+\"" },
        { question: "What is the purpose of the fclose() function?", answer: "To close a file and free associated resources" },
        { question: "What does the fgetc() function do?", answer: "Reads a single character from a file" },
        { question: "What is the correct function to write a string to a file?", answer: "fputs()" },
        { question: "What happens when fseek() is used with SEEK_SET?", answer: "The file pointer moves to the beginning of the file" },
        { question: "What is the difference between text and binary file modes in C?", answer: "Text files use ASCII format; binary files store raw data" },
        { question: "What does the fread() function do?", answer: "Reads data from a file into a buffer" },
        { question: "What function is used to determine the end of a file?", answer: "feof()" },
        { question: "What does the ftell() function return?", answer: "The current position of the file pointer" },
        { question: "Which function renames a file in C?", answer: "rename()" },
        { question: "How do you delete a file in C?", answer: "Using remove()" },
        { question: "What happens if fwrite() writes fewer objects than requested?", answer: "It returns the number of objects successfully written" }
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