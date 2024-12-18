document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What does the term 'inheritance' in C++ represent?",
            answer: "Expressing a subtype relationship between abstract data types"
        },
        {
            question: "Which of the following best describes the IS-A relationship?",
            answer: "A relationship where one type is a specialized form of another"
        },
        {
            question: "In C++, what happens to private members of a base class during inheritance?",
            answer: "They are not inherited"
        },
        {
            question: "Which of the following correctly demonstrates public inheritance in C++?",
            answer: "class Derived : public Base { };"
        },
        {
            question: "What is the main advantage of postfix notation?",
            answer: "It simplifies the use of parentheses"
        },
        {
            question: "Which algorithm converts infix notation to postfix notation?",
            answer: "Use of parentheses, operator precedence, and then removing parentheses"
        },
        {
            question: "In the expression A+B*C, which operation is performed first according to operator precedence?",
            answer: "Multiplication"
        },
        {
            question: "What is a deque (double-ended queue)?",
            answer: "A queue that supports insertion at both ends"
        },
        {
            question: "What is the purpose of the Top() function in a Stack?",
            answer: "It retrieves the top element without removing it"
        },
        {
            question: "What condition indicates that a queue implemented with an array is empty?",
            answer: "front == rear"
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