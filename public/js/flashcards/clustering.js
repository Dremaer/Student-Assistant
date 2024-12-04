document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the primary purpose of DBSCAN clustering?", answer: "To cluster data based on density and detect outliers" },
        { question: "Which parameter is NOT required in the DBSCAN algorithm?", answer: "Number of clusters (k)" },
        { question: "What is the main characteristic of hierarchical clustering?", answer: "It organizes data into a tree-like structure with relationships" },
        { question: "Which distance metric is NOT commonly used in k-means clustering?", answer: "Cosine similarity" },
        { question: "What does the term 'Dendrogram' refer to in hierarchical clustering?", answer: "A chart displaying clusters in a hierarchical tree structure" },
        { question: "What is the stopping criterion for k-means clustering?", answer: "Both cluster centroids stop changing significantly and a predefined number of iterations" },
        { question: "What is one disadvantage of k-means clustering?", answer: "It requires specifying the number of clusters" },
        { question: "What is the main advantage of DBSCAN over k-means clustering?", answer: "It does not require the number of clusters as an input" },
        { question: "What is the function of the 'epsilon' parameter in DBSCAN?", answer: "Determines the minimum distance for two points to be considered neighbors" },
        { question: "What type of structure does the Self-Organizing Map (SOM) use for its output layer?", answer: "A 2D lattice grid" }
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