document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the primary advantage of Support Vector Machines (SVM)?", answer: "Robust to overfitting" },
        { question: "What does a kernel function do in SVM?", answer: "Converts linear data to non-linear" },
        { question: "Which parameter in SVM adjusts the trade-off between margin size and classification error?", answer: "Slack variable" },
        { question: "What is the main purpose of backpropagation in neural networks?", answer: "Adjust weights to minimize error" },
        { question: "What does the sigmoid activation function do?", answer: "Outputs probabilities between 0 and 1" },
        { question: "What does 'learning rate' control in a neural network?", answer: "Step size for weight updates" },
        { question: "Which type of model is most affected by the curse of dimensionality?", answer: "Distance-based models" },
        { question: "What is the key property of an activation function?", answer: "Introduces non-linearity" },
        { question: "What is an epoch in the context of neural networks?", answer: "One complete pass through the training data" },
        { question: "What is the main advantage of using SVM for classification tasks?", answer: "High flexibility in kernel functions" },
        { question: "What does the perceptron algorithm output?", answer: "A binary decision based on weighted inputs" },
        { question: "What is a key limitation of neural networks?", answer: "Requires high computational power" },
        { question: "What is the main goal of the softmax activation function?", answer: "Map outputs to probabilities for categorical outputs" },
        { question: "What does the margin in SVM represent?", answer: "Distance between decision boundary and nearest data points" },
        { question: "What happens when the learning rate in a neural network is too large?", answer: "Oscillations or divergence during training" }
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