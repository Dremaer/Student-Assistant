document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a Greedy Algorithm?",
            answer: "A Greedy Algorithm makes the best choice at each step with the hope of finding the global optimum."
        },
        {
            question: "Why is a proof needed for greedy algorithms?",
            answer: "Greedy algorithms do not guarantee correctness, so a proof is required to ensure the solution is optimal."
        },
        {
            question: "What are the key components of a greedy algorithm?",
            answer: "1. Candidate set (C): All possible choices.\n2. Solution set (S): Current choices that form the solution.\n3. Feasibility function: Determines if adding a candidate keeps the solution valid.\n4. Selection function: Picks the best candidate."
        },
        {
            question: "What is the general structure of a greedy algorithm?",
            answer: "1. Start with an empty solution.\n2. Iteratively add the best candidate to the solution while it remains feasible.\n3. Stop when the solution is complete."
        },
        {
            question: "What is the strategy for solving the meeting room scheduling problem?",
            answer: "Choose meetings that end the earliest to maximize the number of non-overlapping meetings."
        },
        {
            question: "What is the time complexity of the meeting room scheduling problem using the greedy approach?",
            answer: "O(n log n) due to the need to sort meetings by their end times."
        },
        {
            question: "What is the Egyptian Fraction problem?",
            answer: "Represent a fraction \( p/q \) as a sum of distinct unit fractions (fractions with numerator 1)."
        },
        {
            question: "What is the key idea in the greedy solution for the Egyptian Fraction problem?",
            answer: "Find the largest unit fraction less than or equal to \( p/q \), subtract it, and repeat until the remainder is zero."
        },
        {
            question: "What is an example of the Egyptian Fraction problem solution?",
            answer: "For \( 5/6 \):\n1. Find \( 1/2 \), subtract to get \( 1/3 \).\n2. Subtract \( 1/3 \) to get 0. Final solution: \( 5/6 = 1/2 + 1/3 \)."
        },
        {
            question: "What is the key difference between the two approaches to solving the Egyptian Fraction problem?",
            answer: "The first approach iterates incrementally to find the unit fraction, while the second approach uses the ceiling function to directly find the next unit fraction."
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