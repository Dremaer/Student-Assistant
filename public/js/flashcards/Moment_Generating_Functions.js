document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the r-th moment about the origin of a random variable X?",
            answer: "It is defined as \( \\mu_r' = E(X^r) \), which is \( \\sum x^r f(x) \) for discrete and \( \\int x^r f(x) dx \) for continuous variables."
        },
        {
            question: "What is a moment-generating function (MGF)?",
            answer: "It is \( M_X(t) = E(e^{tX}) \), calculated as \( \\sum e^{tx} f(x) \) for discrete variables or \( \\int e^{tx} f(x) dx \) for continuous variables."
        },
        {
            question: "What is the purpose of a moment-generating function?",
            answer: "MGFs are used to generate all moments of a random variable and to uniquely determine its probability distribution."
        },
        {
            question: "What is Theorem 7.6 for MGFs?",
            answer: "The r-th derivative of the MGF evaluated at \( t=0 \) gives the r-th moment about the origin: \( \\frac{d^r M_X(t)}{dt^r}|_{t=0} = \\mu_r' \)."
        },
        {
            question: "What does Theorem 7.7 (Uniqueness Theorem) state?",
            answer: "If two random variables have the same MGF for all \( t \), then they have the same probability distribution."
        },
        {
            question: "What is the MGF of a binomial random variable?",
            answer: "For a binomial variable with parameters \( n \) and \( p \), the MGF is \( M_X(t) = (1 - p + p e^t)^n \)."
        },
        {
            question: "What is the MGF of a normal random variable?",
            answer: "For a normal variable with mean \( \\mu \) and variance \( \\sigma^2 \), the MGF is \( M_X(t) = e^{\\mu t + \\frac{1}{2} \\sigma^2 t^2} \)."
        },
        {
            question: "What is the significance of Theorem 7.11 for normal variables?",
            answer: "If \( X_1, ..., X_n \) are independent normal variables, their linear combination \( Y = \\sum a_i X_i \) is also normal with mean \( \\mu_Y = \\sum a_i \\mu_i \) and variance \( \\sigma_Y^2 = \\sum a_i^2 \\sigma_i^2 \)."
        },
        {
            question: "What is the MGF of a chi-squared random variable with v degrees of freedom?",
            answer: "The MGF is \( M_X(t) = (1 - 2t)^{-v/2} \) for \( t < 1/2 \)."
        },
        {
            question: "What is the relationship between MGFs and independence?",
            answer: "If \( X_1, ..., X_n \) are independent, the MGF of their sum is the product of their individual MGFs: \( M_Y(t) = \\prod M_{X_i}(t) \)."
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