document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the definition of a sample space in probability?",
            answer: "The set of all possible outcomes of a statistical experiment, represented by S."
        },
        {
            question: "How is the probability of an event A calculated?",
            answer: "The sum of the weights of all sample points in A, satisfying 0 ≤ P(A) ≤ 1."
        },
        {
            question: "What is the additive rule of probability for two events A and B?",
            answer: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)."
        },
        {
            question: "What does the conditional probability P(B|A) represent?",
            answer: "The probability of event B given event A, calculated as P(A ∩ B) / P(A), provided P(A) > 0."
        },
        {
            question: "State the theorem of total probability.",
            answer: "P(A) = Σ P(Bi)P(A|Bi) for a partition B1, B2, ..., Bk of the sample space S."
        },
        {
            question: "What is Bayes’ Rule used for in probability?",
            answer: "To find the probability of a hypothesis given evidence, calculated as P(Bi|A) = [P(Bi)P(A|Bi)] / Σ[P(Bj)P(A|Bj)]."
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
        window.location.href = '/flashcards/flash_probability'; 
    });
    
    updateUI(currentCard);    
});