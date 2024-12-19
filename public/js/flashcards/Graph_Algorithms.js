document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a graph G = (V, E)?",
            answer: "A structure where V is a set of nodes and E is a set of edges connecting those nodes."
        },
        {
            question: "What is the difference between a directed graph and an undirected graph?",
            answer: "In a directed graph, edges have direction, while in an undirected graph, they do not."
        },
        {
            question: "What is a weighted graph?",
            answer: "A graph where each edge is assigned a numerical value called a weight."
        },
        {
            question: "How is connectivity defined in a graph?",
            answer: "Two nodes are connected if there exists a path between them. A graph is connected if all pairs of nodes are connected."
        },
        {
            question: "What is Depth First Search (DFS) used for?",
            answer: "DFS explores as far as possible along each branch before backtracking, used for graph traversal."
        },
        {
            question: "What is Breadth First Search (BFS) used for?",
            answer: "BFS explores all neighbors of a node before moving to the next level, used for shortest path in unweighted graphs."
        },
        {
            question: "What is a Minimum Spanning Tree (MST)?",
            answer: "An MST is a subgraph connecting all nodes with the minimum possible total edge weight."
        },
        {
            question: "What algorithms are used to find an MST?",
            answer: "Prim’s algorithm and Kruskal’s algorithm."
        },
        {
            question: "What is Dijkstra's algorithm used for?",
            answer: "Finding the shortest path from a source node to all other nodes in a graph with non-negative edge weights."
        },
        {
            question: "What is the Bellman-Ford algorithm used for?",
            answer: "Finding shortest paths in graphs with edges that may have negative weights."
        },
        {
            question: "What is the key idea behind Floyd-Warshall algorithm?",
            answer: "It calculates shortest paths between all pairs of nodes by considering intermediate nodes one by one."
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