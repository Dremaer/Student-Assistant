document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the definition of a set in mathematics?",
            answer: "A set is a collection of distinct elements without any particular order."
        },
        {
            question: "What is the difference between a subset and a proper subset?",
            answer: "A subset includes all elements of another set, while a proper subset includes some but not all elements."
        },
        {
            question: "What is the cardinality of a set?",
            answer: "The cardinality of a set is the number of elements it contains."
        },
        {
            question: "What is the empty set?",
            answer: "The empty set, denoted as {}, contains no elements and has a cardinality of 0."
        },
        {
            question: "What is the power set of a set A?",
            answer: "The power set of A, denoted as P(A), is the set of all subsets of A."
        },
        {
            question: "What is the union of two sets A and B?",
            answer: "The union, denoted A ∪ B, is the set of elements that are in A, B, or both."
        },
        {
            question: "What is the intersection of two sets A and B?",
            answer: "The intersection, denoted A ∩ B, is the set of elements that are in both A and B."
        },
        {
            question: "What is the complement of a set A?",
            answer: "The complement of A is the set of elements not in A but within a universal set U."
        },
        {
            question: "State De Morgan's Laws for sets.",
            answer: "1. (A ∪ B)' = A' ∩ B'\n2. (A ∩ B)' = A' ∪ B'"
        },
        {
            question: "What is the Cartesian product of sets X and Y?",
            answer: "The Cartesian product, denoted X × Y, is the set of ordered pairs (x, y) where x ∈ X and y ∈ Y."
        },
        {
            question: "How is the equality of two sets A and B proven?",
            answer: "A and B are equal if every element of A is in B and every element of B is in A."
        },
        {
            question: "What is Russell's Paradox?",
            answer: "Russell's Paradox arises when considering the set of all sets that do not contain themselves."
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