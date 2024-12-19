document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the definition of the mean of a random variable?",
            answer: "The mean, or expected value, is \( E(X) = \\sum_x x f(x) \) for discrete variables and \( E(X) = \\int_{-\\infty}^{\\infty} x f(x) dx \) for continuous variables."
        },
        {
            question: "What is the formula for the expected value of \( g(X) \), a function of a random variable \( X \)?",
            answer: "\( E[g(X)] = \\sum_x g(x) f(x) \) for discrete variables and \( E[g(X)] = \\int_{-\\infty}^{\\infty} g(x) f(x) dx \) for continuous variables."
        },
        {
            question: "How do you calculate the variance of a random variable \( X \)?",
            answer: "Variance is \( \\sigma^2 = E[(X - \\mu)^2] \), where \( \\mu = E(X) \), or equivalently \( \\sigma^2 = E(X^2) - [E(X)]^2 \)."
        },
        {
            question: "What does Chebyshev’s Theorem state?",
            answer: "The probability that any random variable \( X \) is within \( k \) standard deviations of the mean is at least \( 1 - \\frac{1}{k^2} \)."
        },
        {
            question: "What is the expected value of the sum of two random variables \( X \) and \( Y \)?",
            answer: "For \( X \) and \( Y \), \( E(X + Y) = E(X) + E(Y) \)."
        },
        {
            question: "What is the expected value of \( aX + b \), where \( a \) and \( b \) are constants?",
            answer: "\( E(aX + b) = aE(X) + b \)."
        },
        {
            question: "What is the formula for the variance of a linear combination of random variables?",
            answer: "For \( Y = aX + b \), \( \\sigma_Y^2 = a^2 \\sigma_X^2 \)."
        },
        {
            question: "How is the covariance of two random variables \( X \) and \( Y \) defined?",
            answer: "\( \\text{Cov}(X, Y) = E[(X - \\mu_X)(Y - \\mu_Y)] \), or equivalently \( \\text{Cov}(X, Y) = E(XY) - E(X)E(Y) \)."
        },
        {
            question: "What does it mean if the covariance between two variables is zero?",
            answer: "Zero covariance implies that \( X \) and \( Y \) are uncorrelated, but they are not necessarily independent."
        },
        {
            question: "What is the formula for the correlation coefficient between \( X \) and \( Y \)?",
            answer: "\( \\rho_{XY} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} \)."
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