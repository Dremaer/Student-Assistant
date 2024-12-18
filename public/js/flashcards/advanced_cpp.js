document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a key advantage of object-oriented decomposition in software development?",
            answer: "Enhances software flexibility and reusability"
        },
        {
            question: "Which of the following is a fundamental data type in C++?",
            answer: "Float"
        },
        {
            question: "In the context of system development life cycle, what does 'verification' involve?",
            answer: "Ensuring correctness through proofs and testing"
        },
        {
            question: "What is the main goal of encapsulation in C++?",
            answer: "Hide internal implementation details"
        },
        {
            question: "Which algorithm operates by dividing the search range in half repeatedly until the target is found?",
            answer: "Binary Search"
        },
        {
            question: "What is the time complexity of Selection Sort in the worst case?",
            answer: "O(n^2)"
        },
        {
            question: "Which of the following is not a feature of abstract data types (ADT)?",
            answer: "Dependency on hardware implementation"
        },
        {
            question: "What is the purpose of the swap function in the selection sort algorithm?",
            answer: "Exchanges two elements in the array"
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