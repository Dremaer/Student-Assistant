document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a graph in discrete mathematics?",
            answer: "A graph is defined as G=(V,E), where V is a set of vertices (nodes), and E is a set of edges connecting pairs of vertices."
        },
        {
            question: "What differentiates a directed graph from an undirected graph?",
            answer: "In a directed graph, edges have a direction, whereas in an undirected graph, edges do not have a direction."
        },
        {
            question: "What is a complete graph?",
            answer: "A complete graph is a graph where every pair of vertices is connected by an edge."
        },
        {
            question: "Define a bipartite graph.",
            answer: "A bipartite graph is a graph whose vertex set can be divided into two disjoint sets such that no two vertices in the same set are adjacent."
        },
        {
            question: "What is a spanning tree of a graph?",
            answer: "A spanning tree is a subgraph that includes all vertices of the original graph and is a tree (connected and acyclic)."
        },
        {
            question: "What is the handshaking lemma in graphs?",
            answer: "The handshaking lemma states that the sum of the degrees of all vertices in a graph equals twice the number of edges."
        },
        {
            question: "What is an Eulerian circuit?",
            answer: "An Eulerian circuit is a circuit that uses every edge of a graph exactly once and starts and ends at the same vertex."
        },
        {
            question: "What conditions must be met for a graph to be Eulerian?",
            answer: "A connected graph is Eulerian if and only if every vertex has an even degree."
        },
        {
            question: "Define a Hamiltonian cycle.",
            answer: "A Hamiltonian cycle is a cycle that visits every vertex of the graph exactly once."
        },
        {
            question: "What is the difference between depth-first search (DFS) and breadth-first search (BFS)?",
            answer: "DFS explores as far as possible along each branch before backtracking, while BFS explores all neighbors of a vertex before moving to the next level."
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