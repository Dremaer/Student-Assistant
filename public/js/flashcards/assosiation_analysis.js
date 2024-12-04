document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the primary goal of association analysis?", answer: "To discover patterns of co-occurrence among items" },
        { question: "What does the term 'support' refer to in association rules?", answer: "The proportion of transactions containing the itemset" },
        { question: "Which of the following algorithms is commonly used for association rule mining?", answer: "Apriori" },
        { question: "What does the confidence of an association rule measure?", answer: "The probability that the consequent occurs given the antecedent" },
        { question: "What is the main advantage of the Apriori algorithm?", answer: "It reduces computation by pruning infrequent itemsets" },
        { question: "What does the 'lift' metric indicate in association rule mining?", answer: "The degree to which the occurrence of one item predicts the occurrence of another" },
        { question: "Which of the following best describes hierarchical clustering?", answer: "Organizing data into a tree-like structure" },
        { question: "What type of data is typically used in market basket analysis?", answer: "Transactional data" },
        { question: "What is the primary output of the Apriori algorithm?", answer: "Frequent itemsets and association rules" },
        { question: "What is the purpose of binning in data preprocessing for association analysis?", answer: "To convert numerical data into categorical data" }
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