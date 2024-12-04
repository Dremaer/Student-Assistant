document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the main advantage of ensemble learning?", answer: "It combines multiple models to improve accuracy" },
        { question: "Which of the following is a characteristic of bagging in ensemble methods?", answer: "Combines predictions from multiple models using voting or averaging" },
        { question: "What is a key feature of boosting in ensemble learning?", answer: "Models are built sequentially to correct previous errors" },
        { question: "Which algorithm is most commonly used in boosting?", answer: "Adaboost" },
        { question: "What is the purpose of the 'learning rate' in boosting algorithms?", answer: "To control the contribution of each base model" },
        { question: "What does overfitting in an ensemble model typically result in?", answer: "Increased complexity without improving accuracy" },
        { question: "In random forests, how are individual trees trained?", answer: "On random subsets of data and features" },
        { question: "What is the key difference between bagging and boosting?", answer: "Bagging focuses on variance reduction, while boosting focuses on bias reduction" },
        { question: "Which metric is commonly used to evaluate ensemble models?", answer: "All of the above (Mean Squared Error, F1 Score, AUC-ROC)" },
        { question: "Why is random sampling used in bagging?", answer: "To improve the generalization of the model" }
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
