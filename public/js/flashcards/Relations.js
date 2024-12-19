document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a relation between two sets A and B?",
            answer: "A relation R between A and B is a subset of the Cartesian product A × B."
        },
        {
            question: "What is the inverse of a relation R?",
            answer: "The inverse R⁻¹ is defined as R⁻¹ = { (y, x) | (x, y) ∈ R }."
        },
        {
            question: "What does the composition of relations R and S represent?",
            answer: "The composition R ∘ S is defined as R ∘ S = { (x, y) | ∃z: (x, z) ∈ S and (z, y) ∈ R }."
        },
        {
            question: "What is a reflexive relation?",
            answer: "A relation R on a set X is reflexive if (x, x) ∈ R for all x ∈ X."
        },
        {
            question: "What is a symmetric relation?",
            answer: "A relation R on a set X is symmetric if (x, y) ∈ R implies (y, x) ∈ R."
        },
        {
            question: "What is an antisymmetric relation?",
            answer: "A relation R is antisymmetric if (x, y) ∈ R and (y, x) ∈ R imply x = y."
        },
        {
            question: "What is a transitive relation?",
            answer: "A relation R is transitive if (x, y) ∈ R and (y, z) ∈ R imply (x, z) ∈ R."
        },
        {
            question: "What is an equivalence relation?",
            answer: "A relation R is an equivalence relation if it is reflexive, symmetric, and transitive."
        },
        {
            question: "What is the closure of a relation?",
            answer: "The closure of a relation is the smallest relation containing R that satisfies a particular property (e.g., reflexive, symmetric, or transitive)."
        },
        {
            question: "What is a partial order?",
            answer: "A partial order is a relation that is reflexive, antisymmetric, and transitive."
        },
        {
            question: "What is a total order?",
            answer: "A total order is a partial order where every pair of elements is comparable."
        },
        {
            question: "What is topological sorting?",
            answer: "Topological sorting is a linear ordering of elements in a partially ordered set, where if x precedes y, then x appears before y in the order."
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