document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a singly linked list?",
            answer: "A list where each node points to the next node in sequence."
        },
        {
            question: "What is the primary advantage of using a linked list over an array?",
            answer: "Easier insertion and deletion without shifting elements."
        },
        {
            question: "In a doubly linked list, what does each node contain?",
            answer: "Two pointers: one pointing to the next node and one to the previous node."
        },
        {
            question: "How is a circular linked list different from a singly linked list?",
            answer: "The last node points back to the first node."
        },
        {
            question: "What is the time complexity of inserting a node at the head of a linked list?",
            answer: "O(1)"
        },
        {
            question: "In a linked list, what does the 'head' pointer indicate?",
            answer: "The first node in the list."
        },
        {
            question: "Which operation does not typically apply to a singly linked list?",
            answer: "Reverse traversal"
        },
        {
            question: "What is the purpose of a dummy (header) node in a linked list?",
            answer: "To simplify edge case handling, like empty lists."
        },
        {
            question: "How do you detect a cycle in a linked list?",
            answer: "Using a fast and slow pointer technique."
        },
        {
            question: "What is the defining feature of a circular doubly linked list?",
            answer: "Each node points to both the next and previous nodes, and the last node links back to the first."
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