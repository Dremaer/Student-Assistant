document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a hash table?",
            answer: "A hash table is a data structure where elements are stored at positions determined by a hash function for efficient access, insertion, and deletion."
        },
        {
            question: "What is the average time complexity for searching, inserting, and deleting in a hash table?",
            answer: "The average time complexity is O(1) for all these operations."
        },
        {
            question: "What is a hash function?",
            answer: "A hash function maps keys to indices in a hash table, typically of the form \( h(x) = (ax + b) \mod p \), where \( p \) is a prime number."
        },
        {
            question: "What is a collision in a hash table?",
            answer: "A collision occurs when two keys are mapped to the same index in the hash table."
        },
        {
            question: "What is the difference between chaining and open addressing in resolving collisions?",
            answer: "Chaining stores all elements that hash to the same index in a linked list, while open addressing finds alternative positions using methods like linear or quadratic probing."
        },
        {
            question: "What is the primary disadvantage of linear probing for collision resolution?",
            answer: "Linear probing can cause clustering, where elements cluster together, reducing efficiency."
        },
        {
            question: "What is double hashing?",
            answer: "Double hashing uses a secondary hash function to resolve collisions by providing a different step size for probing."
        },
        {
            question: "What is the load factor (α) in a hash table?",
            answer: "The load factor is the ratio of the number of stored elements (n) to the size of the hash table (m): \( \alpha = n / m \)."
        },
        {
            question: "What is the effect of increasing the load factor \( \alpha \)?",
            answer: "As \( \alpha \) increases, the likelihood of collisions and average search time also increases."
        },
        {
            question: "What is the purpose of resizing a hash table?",
            answer: "Resizing, typically doubling the size, reduces the load factor and improves efficiency by redistributing the elements."
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