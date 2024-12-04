document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the primary goal of exploratory data analysis (EDA)?", answer: "To gain an initial understanding of the dataset’s characteristics" },
        { question: "What is an example of categorical data?", answer: "Gender (Male, Female)" },
        { question: "What does 'descriptive statistics' aim to achieve?", answer: "Summarize data into understandable numerical metrics" },
        { question: "What is the purpose of feature selection?", answer: "To improve model performance by reducing attributes" },
        { question: "Which of the following is a measure of data dispersion?", answer: "Range" },
        { question: "Why is data quality important?", answer: "It ensures reliable and accurate analysis" },
        { question: "What is an example of unsupervised learning?", answer: "Clustering" },
        { question: "What is the primary risk of overfitting?", answer: "High accuracy on training data but poor generalization" },
        { question: "What does PCA (Principal Component Analysis) do?", answer: "Reduces data complexity by selecting key features" },
        { question: "What is ensemble modeling?", answer: "Combining predictions from multiple models" }
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
