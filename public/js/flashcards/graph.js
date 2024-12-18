document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a graph in data structures?",
            answer: "A collection of nodes connected by edges."
        },
        {
            question: "What is the main difference between directed and undirected graphs?",
            answer: "Directed graphs have ordered pairs of vertices for edges."
        },
        {
            question: "What is the degree of a vertex in a graph?",
            answer: "The number of edges connected to it."
        },
        {
            question: "What defines a complete graph?",
            answer: "A graph where every vertex is connected to every other vertex."
        },
        {
            question: "What is an Eulerian path?",
            answer: "A path that visits every edge exactly once."
        },
        {
            question: "Which data structure is commonly used to represent sparse graphs?",
            answer: "Adjacency List"
        },
        {
            question: "What is the time complexity of Depth First Search (DFS) in a graph with 'V' vertices and 'E' edges?",
            answer: "O(V + E)"
        },
        {
            question: "What is the key feature of a connected graph?",
            answer: "There exists a path between any two vertices."
        },
        {
            question: "What does an adjacency matrix represent in graph theory?",
            answer: "A 2D array indicating the presence or absence of edges between vertices."
        },
        {
            question: "What is a spanning tree in graph theory?",
            answer: "A subgraph that includes all vertices and is a tree."
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