document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the primary goal of data science?", answer: "To extract knowledge from data using analysis techniques" },
        { question: "What is predictive analytics?", answer: "Predicting future outcomes based on historical data" },
        { question: "What is data mining?", answer: "Finding useful patterns in large datasets" },
        { question: "Which of these is NOT a key application of data mining?", answer: "Generating random numbers" },
        { question: "What distinguishes data mining from traditional statistical techniques?", answer: "Application of algorithms to generalize patterns" },
        { question: "Which of the following is NOT a stage of the data mining process?", answer: "Data deletion" },
        { question: "What is an example of unsupervised learning in data mining?", answer: "Clustering" },
        { question: "What type of data is structured data?", answer: "Tabular format data" },
        { question: "What are the five steps in CRISP-DM?", answer: "Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment" },
        { question: "What does SEMMA stand for?", answer: "Sample, Explore, Modify, Model, Assess" },
        { question: "What is the purpose of feature selection?", answer: "To improve model performance by reducing attributes" },
        { question: "Why is data quality important?", answer: "It ensures reliable and accurate analysis" },
        { question: "What is ensemble modeling?", answer: "Combining predictions from multiple models" },
        { question: "What is the primary risk of overfitting?", answer: "High accuracy on training data but poor generalization" },
        { question: "What does data transformation achieve?", answer: "Standardizes data for consistency" },
        { question: "What is a common use of probability in machine learning?", answer: "To model uncertainty and make predictions" },
        { question: "What is a dependent variable in supervised learning?", answer: "The outcome the model predicts" },
        { question: "What does PCA (Principal Component Analysis) do?", answer: "Reduces data complexity by selecting key features" },
        { question: "Which of these is an example of a probabilistic approach in machine learning?", answer: "Naive Bayes Classifier" }
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
    
    updateUI(currentCard);    document.addEventListener('DOMContentLoaded', () => {
        const flashcards = [
            { question: "What is the primary goal of data science?", answer: "To extract knowledge from data using analysis techniques" },
            { question: "What is predictive analytics?", answer: "Predicting future outcomes based on historical data" },
            { question: "What is data mining?", answer: "Finding useful patterns in large datasets" },
            { question: "Which of these is NOT a key application of data mining?", answer: "Generating random numbers" },
            { question: "What distinguishes data mining from traditional statistical techniques?", answer: "Application of algorithms to generalize patterns" },
            { question: "Which of the following is NOT a stage of the data mining process?", answer: "Data deletion" },
            { question: "What is an example of unsupervised learning in data mining?", answer: "Clustering" },
            { question: "What type of data is structured data?", answer: "Tabular format data" },
            { question: "What are the five steps in CRISP-DM?", answer: "Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment" },
            { question: "What does SEMMA stand for?", answer: "Sample, Explore, Modify, Model, Assess" },
            { question: "What is the purpose of feature selection?", answer: "To improve model performance by reducing attributes" },
            { question: "Why is data quality important?", answer: "It ensures reliable and accurate analysis" },
            { question: "What is ensemble modeling?", answer: "Combining predictions from multiple models" },
            { question: "What is the primary risk of overfitting?", answer: "High accuracy on training data but poor generalization" },
            { question: "What does data transformation achieve?", answer: "Standardizes data for consistency" },
            { question: "What is a common use of probability in machine learning?", answer: "To model uncertainty and make predictions" },
            { question: "What is a dependent variable in supervised learning?", answer: "The outcome the model predicts" },
            { question: "What does PCA (Principal Component Analysis) do?", answer: "Reduces data complexity by selecting key features" },
            { question: "Which of these is an example of a probabilistic approach in machine learning?", answer: "Naive Bayes Classifier" }
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
});
