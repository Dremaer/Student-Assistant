document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the purpose of the strcpy() function in C?", answer: "To copy one string into another" },
        { 
            question: "What will the strlen() function return for the following code?\n\nchar str[10] = \"Hello\";\nprintf(\"%d\", strlen(str));", 
            answer: "5" 
        },
        { 
            question: "What is the result of the following code?\n\nchar from[10] = \"KING\", to[10] = \"\";\nstrcpy(to, from);\nstrcat(to, \"DOM\");\nprintf(\"%s\", to);", 
            answer: "KINGDOM" 
        },
        { question: "What does the strcmp() function do?", answer: "Compares two strings and returns 0 if they are equal" },
        { question: "How is a 2D array declared in C?", answer: "int arr[2][3];" },
        { question: "How is a 2D array accessed?", answer: "By using two indices arr[1][2]" },
        { 
            question: "What is the output of the following code?\n\nint count[2][3] = {10, 20, 30, 40, 50, 60};\nprintf(\"%d\", count[1][2]);", 
            answer: "60" 
        },
        { 
            question: "What does the following code print?\n\nchar str[10] = \"C Language\";\nprintf(\"%s\", str);", 
            answer: "C Language" 
        },
        { question: "What is the key characteristic of a 2D character array?", answer: "It is a collection of single-dimensional character arrays" },
        { 
            question: "What happens when a string input exceeds the array size in gets()?", 
            answer: "It causes undefined behavior (buffer overflow)" 
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
        window.location.href = '/flashcards/flash_c'; 
    });
    
    updateUI(currentCard);    
});