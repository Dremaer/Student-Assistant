document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the definition of a discrete uniform distribution?",
            answer: "A distribution where all outcomes are equally likely, with \( P(X=x) = \\frac{1}{n} \), where \( n \) is the number of outcomes."
        },
        {
            question: "What are the mean and variance of a discrete uniform distribution?",
            answer: "Mean: \( \\mu = \\frac{a+b}{2} \\), Variance: \( \\sigma^2 = \\frac{(b-a+1)^2 - 1}{12} \), where \( a \) and \( b \) are the range bounds."
        },
        {
            question: "What is a Bernoulli process?",
            answer: "A process with repeated trials, where each trial has two outcomes: success with probability \( p \) and failure with probability \( 1-p \)."
        },
        {
            question: "What is the formula for the probability mass function of a binomial distribution?",
            answer: "PMF: \( P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k} \), where \( k \) is the number of successes in \( n \) trials."
        },
        {
            question: "What is the relationship between the hypergeometric and binomial distributions?",
            answer: "The binomial distribution approximates the hypergeometric distribution when the sample size is small relative to the population size."
        },
        {
            question: "What is the Poisson distribution used for?",
            answer: "It models the number of events occurring in a fixed interval of time or space, given that events occur independently at a constant rate."
        },
        {
            question: "What is the mean and variance of the Poisson distribution?",
            answer: "Both the mean and variance are equal to \( \\lambda t \), where \( \\lambda \) is the rate of occurrence."
        },
        {
            question: "What is the PMF of the geometric distribution?",
            answer: "PMF: \( P(X=x) = (1-p)^{x-1}p \), where \( x \) is the trial on which the first success occurs."
        },
        {
            question: "What is the expected value and variance of a negative binomial distribution?",
            answer: "Mean: \( \\frac{r}{p} \), Variance: \( \\frac{r(1-p)}{p^2} \), where \( r \) is the number of successes and \( p \) is the probability of success."
        },
        {
            question: "When can the Poisson distribution approximate the binomial distribution?",
            answer: "When \( n \) is large and \( p \) is small, with \( \\lambda = np \) remaining constant."
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