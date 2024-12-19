document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a statistical hypothesis?",
            answer: "An assertion or conjecture concerning one or more populations."
        },
        {
            question: "What is the null hypothesis (\( H_0 \))?",
            answer: "A hypothesis we wish to test, representing no effect or no difference."
        },
        {
            question: "What is the alternative hypothesis (\( H_1 \))?",
            answer: "A hypothesis that is accepted if \( H_0 \) is rejected, representing the presence of an effect or a difference."
        },
        {
            question: "What is a Type I error?",
            answer: "Rejecting the null hypothesis (\( H_0 \)) when it is true."
        },
        {
            question: "What is a Type II error?",
            answer: "Failing to reject the null hypothesis (\( H_0 \)) when it is false."
        },
        {
            question: "What is the level of significance (\( \alpha \))?",
            answer: "The probability of making a Type I error."
        },
        {
            question: "What is a p-value?",
            answer: "The lowest level of significance at which the observed value of the test statistic is significant."
        },
        {
            question: "What is the test statistic for a single mean when variance is known?",
            answer: "\( z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}} \), compared to critical values for rejection."
        },
        {
            question: "What is the test statistic for a single mean when variance is unknown?",
            answer: "\( t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}} \), compared to \( t \)-distribution values."
        },
        {
            question: "What is a two-sample pooled t-test used for?",
            answer: "To test the difference between two population means when variances are assumed equal."
        },
        {
            question: "What is the formula for the pooled variance in a two-sample t-test?",
            answer: "\( s_p^2 = \\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} \)."
        },
        {
            question: "What is the purpose of a goodness-of-fit test?",
            answer: "To determine if a population follows a specified theoretical distribution."
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