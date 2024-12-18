document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the primary advantage of using a sparse matrix representation?",
            answer: "Saves memory by only storing non-zero elements"
        },
        {
            question: "Which of the following is a valid operation on sparse matrices?",
            answer: "Creation, addition, multiplication, transpose"
        },
        {
            question: "In the row-major order of a multidimensional array, how is the address of an element calculated?",
            answer: "α + i × u2 × u3 + j × u3 + k"
        },
        {
            question: "Which data structure is used to store a sparse matrix in an efficient manner?",
            answer: "Triplet format (row, col, value)"
        },
        {
            question: "What is the time complexity of the Fast Transpose algorithm for sparse matrices?",
            answer: "O(terms + columns)"
        },
        {
            question: "Which of the following describes a diagonal matrix?",
            answer: "Only elements on the main diagonal are non-zero"
        },
        {
            question: "How is a lower triangular matrix stored in memory using a row-major scheme?",
            answer: "Only non-zero elements are stored with calculated indices"
        },
        {
            question: "What operation is commonly used to optimize the transpose of a sparse matrix?",
            answer: "Calculating row size and row start arrays"
        },
        {
            question: "What is a key difference between struct and class in C++?",
            answer: "struct defaults to public members, class defaults to private"
        },
        {
            question: "What does the following formula calculate in a multidimensional array? A[i1][i2]...[in] = α + i1 × (u2 × u3 × ... × un) + i2 × (u3 × ... × un) + ... + in",
            answer: "Element address in memory"
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