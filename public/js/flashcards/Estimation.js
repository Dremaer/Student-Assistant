document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the definition of a set in mathematical terms?",
            answer: "A collection of distinct objects, considered as an object in its own right."
        },
        {
            question: "What does it mean for a set to be finite?",
            answer: "A set is finite if it contains a limited number of elements."
        },
        {
            question: "What is the principle of inclusion-exclusion in set theory?",
            answer: "It is used to calculate the size of the union of overlapping sets by subtracting the overlap."
        },
        {
            question: "What is a Cartesian product of two sets A and B?",
            answer: "It is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B."
        },
        {
            question: "How is a subset defined?",
            answer: "A set A is a subset of B if every element of A is also an element of B."
        },
        {
            question: "What is a proper subset?",
            answer: "A subset A of B is proper if A is not equal to B."
        },
        {
            question: "What is the empty set and its significance?",
            answer: "The empty set contains no elements and is a subset of every set."
        },
        {
            question: "What is the power set of a set A?",
            answer: "It is the set of all subsets of A, including the empty set and A itself."
        },
        {
            question: "What is a universal set in the context of set theory?",
            answer: "It is a set that contains all the objects under consideration."
        },
        {
            question: "What is the difference between a union and an intersection of sets?",
            answer: "Union combines all elements from both sets, while intersection includes only common elements."
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