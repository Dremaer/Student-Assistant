document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the formula for the probability density function of a continuous uniform distribution?",
            answer: "f(x; A, B) = 1 / (B - A) for A ≤ x ≤ B; 0 otherwise."
        },
        {
            question: "What are the mean and variance of a uniform distribution?",
            answer: "Mean: µ = (A + B) / 2, Variance: σ² = (B - A)² / 12."
        },
        {
            question: "What is the probability density function (PDF) of a normal distribution?",
            answer: "f(x; µ, σ) = (1 / √(2πσ²)) e^(-1/2 ((x - µ) / σ)²), where -∞ < x < ∞."
        },
        {
            question: "What are the properties of a normal distribution?",
            answer: "1. Symmetric about µ. 2. Mode at µ. 3. Inflection points at µ ± σ. 4. Total area under the curve is 1."
        },
        {
            question: "How is a standard normal distribution defined?",
            answer: "A normal distribution with mean 0 and variance 1, using Z = (X - µ) / σ."
        },
        {
            question: "What is the gamma function, and where is it used?",
            answer: "The gamma function Γ(α) is defined as ∫₀⁺∞ x^(α-1)e^(-x) dx for α > 0, used in gamma distributions."
        },
        {
            question: "What is the PDF of an exponential distribution?",
            answer: "f(x; β) = (1 / β) e^(-x / β) for x > 0, 0 otherwise."
        },
        {
            question: "What is the relationship between exponential and gamma distributions?",
            answer: "The exponential distribution is a special case of the gamma distribution when α = 1."
        },
        {
            question: "What is the chi-squared distribution, and how is it related to the gamma distribution?",
            answer: "It is a gamma distribution with α = v/2 and β = 2, where v is the degrees of freedom."
        },
        {
            question: "What are the mean and variance of a chi-squared distribution with v degrees of freedom?",
            answer: "Mean: µ = v, Variance: σ² = 2v."
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