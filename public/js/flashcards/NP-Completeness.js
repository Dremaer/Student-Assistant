document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the P class in computational complexity?",
            answer: "P is the class of problems that can be solved in polynomial time."
        },
        {
            question: "What is the NP class in computational complexity?",
            answer: "NP is the class of problems where a given solution can be verified in polynomial time."
        },
        {
            question: "What does it mean for a problem to be NP-Complete?",
            answer: "A problem is NP-Complete if it is in NP and every problem in NP can be reduced to it in polynomial time."
        },
        {
            question: "What is the significance of the P vs NP question?",
            answer: "It asks whether every problem in NP can also be solved in polynomial time, i.e., if P = NP."
        },
        {
            question: "What is an example of an NP-Complete problem?",
            answer: "The SAT (Satisfiability) problem is a classic example of an NP-Complete problem."
        },
        {
            question: "What is polynomial-time reduction?",
            answer: "It is a transformation of one problem into another in polynomial time to show that solving the second problem also solves the first."
        },
        {
            question: "What is the Travelling Salesman Problem (TSP)?",
            answer: "It asks for the shortest possible route that visits each city exactly once and returns to the origin city."
        },
        {
            question: "How does the Hamiltonian Cycle problem relate to TSP?",
            answer: "The Hamiltonian Cycle problem is finding a cycle that visits every vertex exactly once. It is related to TSP but does not consider edge weights."
        },
        {
            question: "What is the purpose of approximation algorithms for NP-Complete problems?",
            answer: "They provide near-optimal solutions within a provable bound when exact solutions are computationally infeasible."
        },
        {
            question: "Why are NP-Complete problems significant in real-world applications?",
            answer: "Many practical problems, such as scheduling, routing, and optimization, are NP-Complete and lack efficient algorithms."
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