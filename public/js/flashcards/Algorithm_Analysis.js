document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the formal definition of an algorithm?",
            answer: "An algorithm is a finite sequence of well-defined instructions to solve a problem for all valid inputs."
        },
        {
            question: "Why is abstract performance analysis important in algorithms?",
            answer: "Abstract analysis focuses on growth rates (e.g., O(n)) rather than specific runtime, making it independent of hardware or input variations."
        },
        {
            question: "What does \( f(n) = O(g(n)) \) mean?",
            answer: "For \( n \geq n_0 \), there exists a constant \( c \) such that \( f(n) \leq c \cdot g(n) \)."
        },
        {
            question: "What is the definition of \( \Theta(g(n)) \)?",
            answer: "A function \( f(n) \) is \( \Theta(g(n)) \) if \( f(n) \) is both \( O(g(n)) \) and \( \Omega(g(n)) \)."
        },
        {
            question: "What is the runtime complexity of Bubble Sort?",
            answer: "Bubble Sort has a time complexity of \( \Theta(n^2) \) for all cases."
        },
        {
            question: "What is the runtime of an algorithm that performs \( n(n-1)/2 \) comparisons?",
            answer: "The runtime complexity is \( \Theta(n^2) \)."
        },
        {
            question: "What is the difference between exact and asymptotic analysis?",
            answer: "Exact analysis measures actual runtime, while asymptotic analysis examines growth rates for large inputs."
        },
        {
            question: "How can you determine if \( g(n) = O(f(n)) \)?",
            answer: "Show that \( g(n) \leq c \cdot f(n) \) for \( n \geq n_0 \) with some constant \( c \)."
        },
        {
            question: "What is the importance of using \( n-1 \) comparisons in sorting?",
            answer: "Each comparison identifies one misplaced element, ensuring correctness with \( n-1 \) iterations."
        },
        {
            question: "What is a polynomial function's growth rate?",
            answer: "For \( P(n) = a_k n^k + ... + a_0 \), \( P(n) = O(n^k) \)."
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
        window.location.href = '/flashcards/flash_Discrete_Math'; 
    });
    
    updateUI(currentCard);    
});