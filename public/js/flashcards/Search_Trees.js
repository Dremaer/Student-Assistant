document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a simple graph?",
            answer: "A graph with no loops or multiple edges."
        },
        {
            question: "What is the degree of a vertex in a graph?",
            answer: "The number of edges incident to the vertex."
        },
        {
            question: "What is a connected graph?",
            answer: "A graph in which there is a path between every pair of vertices."
        },
        {
            question: "What defines a complete graph?",
            answer: "A graph where every pair of distinct vertices is connected by a unique edge."
        },
        {
            question: "What is an adjacency matrix?",
            answer: "A square matrix used to represent a graph, where the entry at row i and column j represents the presence or absence of an edge between vertices i and j."
        },
        {
            question: "What is the runtime complexity of Breadth-First Search (BFS)?",
            answer: "O(V + E), where V is the number of vertices and E is the number of edges."
        },
        {
            question: "What is Dijkstra's algorithm used for?",
            answer: "Finding the shortest path from a source vertex to all other vertices in a weighted graph."
        },
        {
            question: "What is the key difference between directed and undirected graphs?",
            answer: "In a directed graph, edges have a direction, indicating the relationship flows from one vertex to another, while in an undirected graph, edges have no direction."
        },
        {
            question: "What is a spanning tree of a graph?",
            answer: "A subgraph that includes all the vertices of the original graph and is a single connected tree."
        },
        {
            question: "What is the purpose of Kruskal's algorithm?",
            answer: "To find the minimum spanning tree of a graph."
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
        window.location.href = '/flashcards/flash_Algorithm_Analysis_Design';
    });
    
    updateUI(currentCard);    
});