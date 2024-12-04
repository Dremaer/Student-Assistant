document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { 
            question: "What is a decision tree primarily used for in predictive analytics?", 
            answer: "Predicting outcomes based on input features" 
        },
        { 
            question: "What does a 'leaf node' in a decision tree signify?", 
            answer: "A final decision or class label" 
        },
        { 
            question: "Which of the following best describes 'classification'?", 
            answer: "Assigning a categorical label to input data" 
        },
        { 
            question: "Which task is NOT an example of a classification problem?", 
            answer: "Estimating the price of a house" 
        },
        { 
            question: "What is the main goal of Hunt’s Algorithm in decision trees?", 
            answer: "Splitting data recursively to achieve pure subsets" 
        },
        { 
            question: "Which of these is NOT a classification technique?", 
            answer: "K-Means Clustering" 
        },
        { 
            question: "In decision tree terminology, what is a 'pure node'?", 
            answer: "A node with only one class of data points" 
        },
        { 
            question: "Which statement describes the greedy algorithm in decision tree construction?", 
            answer: "It makes the best local choice at each split to optimize the tree" 
        },
        { 
            question: "What distinguishes classification from numeric prediction?", 
            answer: "Classification predicts categorical outputs, while numeric prediction predicts continuous values" 
        },
        { 
            question: "Which of the following describes a 'default class' in decision trees?", 
            answer: "The fallback class when no data is available for a node" 
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
        window.location.href = '/flashcards/flash_ml'; 
    });
    
    updateUI(currentCard);    
});
