document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the definition of a population in statistics?",
            answer: "A population consists of the totality of the observations with which we are concerned."
        },
        {
            question: "How is a random sample defined?",
            answer: "A subset of a population chosen such that observations are made independently and at random."
        },
        {
            question: "What is a sampling distribution?",
            answer: "The probability distribution of a statistic, dependent on population distribution, sample size, and sampling method."
        },
        {
            question: "State the Central Limit Theorem (Theorem 8.2).",
            answer: "If \( \bar{X} \) is the mean of a random sample of size \( n \) taken from a population with mean \( \mu \) and variance \( \sigma^2 \), then as \( n \to \infty \), the distribution of \( Z = \\frac{\\bar{X} - \mu}{\\sigma / \sqrt{n}} \) approaches a standard normal distribution."
        },
        {
            question: "What are the formulas for sample variance and standard deviation?",
            answer: "Sample variance: \( S^2 = \\frac{1}{n-1} \\sum_{i=1}^n (X_i - \\bar{X})^2 \). Sample standard deviation: \( S = \\sqrt{S^2} \)."
        },
        {
            question: "What is the \( t \)-distribution?",
            answer: "A distribution for a random variable \( T = \\frac{\\bar{X} - \mu}{S / \\sqrt{n}} \), where \( S^2 \) is sample variance, with \( v = n - 1 \) degrees of freedom."
        },
        {
            question: "What is an \( F \)-distribution used for?",
            answer: "To compare variances of two independent random samples. If \( S_1^2 \) and \( S_2^2 \) are sample variances, \( F = \\frac{S_1^2 / \\sigma_1^2}{S_2^2 / \\sigma_2^2} \) follows an \( F \)-distribution."
        },
        {
            question: "How is a quantile defined?",
            answer: "A quantile of a sample, \( q(f) \), is a value such that a fraction \( f \) of the data values are less than or equal to \( q(f) \)."
        },
        {
            question: "What does the Central Limit Theorem imply about sample size?",
            answer: "A sample size of \( n = 30 \) is often used as a guideline for the theorem to hold effectively."
        },
        {
            question: "How can quantile plots indicate normality?",
            answer: "A nearly straight-line relationship in a quantile-quantile plot suggests the data follows a normal distribution."
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