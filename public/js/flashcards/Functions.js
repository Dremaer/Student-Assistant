document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the definition of a function in mathematics?",
            answer: "A function is a special type of relation where every input is associated with exactly one output."
        },
        {
            question: "What are the domain and codomain of a function?",
            answer: "The domain is the set of all possible inputs, and the codomain is the set of all possible outputs."
        },
        {
            question: "What is an identity function?",
            answer: "An identity function, denoted \( Id \), maps each element to itself: \( Id(x) = x \)."
        },
        {
            question: "What is the difference between Floor and Ceiling functions?",
            answer: "The Floor function maps \( x \) to the largest integer less than or equal to \( x \), while the Ceiling function maps \( x \) to the smallest integer greater than or equal to \( x \)."
        },
        {
            question: "How can a function be recursively defined?",
            answer: "A function can be defined recursively by specifying its base case and the relationship between successive terms."
        },
        {
            question: "What is the composition of two functions \( F \) and \( G \)?",
            answer: "The composition \( G \circ F \) is defined as \( (G \circ F)(x) = G(F(x)) \)."
        },
        {
            question: "What is an inverse function?",
            answer: "An inverse function \( F^{-1} \) reverses the mapping of \( F \), such that \( F^{-1}(F(x)) = x \)."
        },
        {
            question: "What are injective, surjective, and bijective functions?",
            answer: "Injective (1-to-1): Each output is mapped by at most one input.\nSurjective (onto): Every element of the codomain is an output.\nBijective: A function that is both injective and surjective."
        },
        {
            question: "What is the Pigeonhole Principle?",
            answer: "If \( m \) items are placed into \( n \) containers and \( m > n \), at least one container must hold more than one item."
        },
        {
            question: "What is a Boolean function?",
            answer: "A Boolean function is a function where inputs and outputs are from the set \( \\{0, 1\\} \)."
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