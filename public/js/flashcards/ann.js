document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the primary assumption of the Naïve Bayes algorithm?", answer: "Features are independent within each class" },
        { question: "What is the purpose of Bayes' theorem in classification?", answer: "To calculate posterior probabilities" },
        { question: "Which method can address the issue of zero probabilities in Naïve Bayes?", answer: "Laplace smoothing" },
        { question: "What does stratified sampling ensure in a dataset?", answer: "Proportional representation of each group" },
        { question: "Which metric is used to measure a classifier’s ability to predict positive outcomes?", answer: "Sensitivity" },
        { question: "What is the key issue with overfitting in a decision tree?", answer: "The tree is too complex and fits noise in the training data" },
        { question: "What is a 'cost matrix' used for in classification?", answer: "To assign costs to different misclassifications" },
        { question: "Which property makes k-NN a lazy learner?", answer: "It stores all training data and defers computation until prediction" },
        { question: "In cross-validation, what is the main purpose of splitting the data into training and test sets?", answer: "To evaluate generalization ability" },
        { question: "What does Occam’s Razor imply in model selection?", answer: "Prefer simpler models if they have similar accuracy" },
        { question: "What is the main disadvantage of k-NN when the dataset size increases?", answer: "Distance computation becomes slow" },
        { question: "What is sensitivity in classification metrics?", answer: "True positives / All actual positives" },
        { question: "Which method reduces variance in a model during validation?", answer: "Cross-validation" },
        { question: "What is the role of conditional independence in Naïve Bayes?", answer: "It simplifies computation of posterior probabilities" },
        { question: "Why is Laplace smoothing applied in Naïve Bayes?", answer: "To handle zero probabilities in the data" }
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