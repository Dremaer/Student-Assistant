document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What does Theorem 7.1 describe for transformations of discrete random variables?",
            answer: "It states that if \( Y = u(X) \) is a one-to-one transformation, the probability distribution of \( Y \) is \( g(y) = f(w(y)) \), where \( x = w(y) \)."
        },
        {
            question: "What is Theorem 7.3 for continuous random variables?",
            answer: "For \( Y = u(X) \), the probability distribution is \( g(y) = f(w(y)) |J| \), where \( J \) is the Jacobian of the transformation."
        },
        {
            question: "How do you find the distribution of \( Y = 2X - 1 \) for a discrete random variable \( X \)?",
            answer: "Use the probability of transformed values \( y = 2x - 1 \) and map them back to their corresponding probabilities in \( X \)."
        },
        {
            question: "What is the Jacobian in Theorem 7.3?",
            answer: "The Jacobian \( J \) is the derivative \( w'(y) \) used in transformations of continuous random variables."
        },
        {
            question: "What does Theorem 7.4 describe for joint transformations?",
            answer: "It gives the joint probability distribution of two transformed variables \( Y_1 \) and \( Y_2 \) using their original joint distribution and the determinant of the Jacobian matrix."
        },
        {
            question: "How can you transform a random variable to find its new distribution?",
            answer: "Identify the relationship \( Y = u(X) \), solve for \( X \) as \( w(Y) \), and apply the corresponding formula for discrete or continuous variables."
        },
        {
            question: "What is an example of using Theorem 7.5 for a non-one-to-one transformation?",
            answer: "If \( X \) can map to multiple values of \( Y \), the probability distribution of \( Y \) sums the contributions from all inverse mappings."
        },
        {
            question: "What is the importance of Theorem 7.2 in joint transformations for discrete variables?",
            answer: "It calculates the joint probability distribution of transformed variables \( Y_1 \) and \( Y_2 \) based on the joint distribution of \( X_1 \) and \( X_2 \)."
        },
        {
            question: "What is a real-world application of random variable transformations?",
            answer: "Transformations are used in statistics for rescaling data, modeling, and finding derived distributions, such as time to failure or population changes."
        },
        {
            question: "How is independence preserved in transformations?",
            answer: "For independent random variables \( X_1 \) and \( X_2 \), independence is preserved if their transformations do not introduce dependencies."
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