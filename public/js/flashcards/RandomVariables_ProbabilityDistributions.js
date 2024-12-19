document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a random variable?",
            answer: "A function that assigns a real number to each element in the sample space of a random experiment."
        },
        {
            question: "What is the difference between discrete and continuous random variables?",
            answer: "Discrete random variables have countable outcomes, while continuous random variables take values within a range."
        },
        {
            question: "What is the probability mass function (PMF)?",
            answer: "A function that gives the probability that a discrete random variable is exactly equal to some value."
        },
        {
            question: "What is the probability density function (PDF)?",
            answer: "A function that describes the likelihood of a continuous random variable to take on a specific value."
        },
        {
            question: "What is the cumulative distribution function (CDF)?",
            answer: "The function \( F(x) = P(X \leq x) \), which gives the probability that the random variable is less than or equal to a value."
        },
        {
            question: "What is the expectation (mean) of a random variable?",
            answer: "The weighted average of all possible values a random variable can take, using probabilities as weights."
        },
        {
            question: "How is the variance of a random variable calculated?",
            answer: "Variance is \( E[(X - \mu)^2] \), where \( \mu \) is the mean of the random variable."
        },
        {
            question: "What is the definition of a joint probability distribution?",
            answer: "A function \( f(x, y) \) that gives the probability of two random variables \( X \) and \( Y \) occurring simultaneously."
        },
        {
            question: "What are marginal distributions?",
            answer: "Distributions of individual variables obtained by summing (discrete) or integrating (continuous) the joint distribution over the other variable."
        },
        {
            question: "What is conditional probability in the context of random variables?",
            answer: "The probability of one random variable given that another random variable takes a specific value."
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