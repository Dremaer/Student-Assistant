document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the primary purpose of stratified sampling?", answer: "To ensure each group in the data set is proportionally represented" },
        { question: "Which of the following is an advantage of rule induction?", answer: "Provides an easy-to-understand framework for explaining classifications" },
        { question: "In the k-nearest neighbors (k-NN) algorithm, what happens if the value of k is too small?", answer: "The algorithm overfits to the data" },
        { question: "What is the key difference between eager learners and lazy learners in machine learning?", answer: "Lazy learners store all training data and wait until prediction time to make calculations" },
        { question: "What is the purpose of cross-validation?", answer: "To measure the model’s performance on unseen data" },
        { question: "What does underfitting in a model indicate?", answer: "The model is too simple and fails to capture patterns in the data" },
        { question: "What is the purpose of a cost matrix in classification tasks?", answer: "To represent the cost of different types of misclassifications" },
        { question: "Which metric is used to evaluate how well a model predicts positive outcomes?", answer: "Sensitivity" },
        { question: "Why is feature scaling important for algorithms like k-NN?", answer: "To make sure all features contribute equally to the distance calculation" },
        { question: "Which principle suggests choosing a simpler model when two models have similar accuracy?", answer: "Occam’s Razor" }
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