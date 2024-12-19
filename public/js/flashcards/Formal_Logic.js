document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a proposition in formal logic?",
            answer: "A proposition is a statement that can be determined to be true or false."
        },
        {
            question: "What are the main logical connectives in formal logic?",
            answer: "~ (not), ∧ (and), ∨ (or), ⇒ (implies), ⇔ (if and only if)."
        },
        {
            question: "What is the truth table for the implication \( p ⇒ q \)?",
            answer: "The implication \( p ⇒ q \) is false only when \( p \) is true and \( q \) is false."
        },
        {
            question: "What is the definition of a well-formed formula (WFF)?",
            answer: "A WFF is a logical expression constructed according to specific recursive rules using logical connectives."
        },
        {
            question: "What does it mean for a formula to be satisfiable?",
            answer: "A formula is satisfiable if there exists at least one interpretation where the formula evaluates to true."
        },
        {
            question: "What is the difference between logical truth and satisfiability?",
            answer: "Logical truth means a formula is true in all interpretations, while satisfiability requires the formula to be true in at least one interpretation."
        },
        {
            question: "What is De Morgan's Laws in logic?",
            answer: "1. \( ~(p ∨ q) = ~p ∧ ~q \)\n2. \( ~(p ∧ q) = ~p ∨ ~q \)."
        },
        {
            question: "What is an expression tree?",
            answer: "An expression tree is a graphical representation of a formula where each node is a logical connective or variable."
        },
        {
            question: "What is the purpose of Bessel's correction in statistics?",
            answer: "Bessel's correction, using \( n-1 \) instead of \( n \) in variance calculations, adjusts for the bias in estimating population variance from a sample."
        },
        {
            question: "How do you determine whether a formula is a tautology using a truth table?",
            answer: "Construct a truth table for the formula and check if it evaluates to true for all possible interpretations."
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