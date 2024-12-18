document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is a binary tree?",
            answer: "A tree where each node has at most two children."
        },
        {
            question: "What is the height of a tree?",
            answer: "The maximum level of any node in the tree."
        },
        {
            question: "In a binary tree, what is an inorder traversal?",
            answer: "Visit the left subtree, root, and then the right subtree."
        },
        {
            question: "What is a full binary tree?",
            answer: "A binary tree where each node has either 0 or 2 children."
        },
        {
            question: "What is a threaded binary tree?",
            answer: "A binary tree where null pointers are replaced with pointers to inorder successors or predecessors."
        },
        {
            question: "What is the purpose of the root node in a tree?",
            answer: "It serves as the entry point to the tree."
        },
        {
            question: "What is the difference between a complete binary tree and a full binary tree?",
            answer: "A full binary tree has all levels fully filled, while a complete binary tree is filled except possibly the last level."
        },
        {
            question: "How is a binary search tree different from a binary tree?",
            answer: "A binary search tree requires that left children are less than the root, and right children are greater."
        },
        {
            question: "What is a leaf node?",
            answer: "A node with no children."
        },
        {
            question: "What is the purpose of the left child pointer in a binary tree?",
            answer: "It points to the left subtree of the node."
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