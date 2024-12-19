document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is dynamic programming?",
            answer: "Dynamic programming is a method for solving complex problems by breaking them into simpler overlapping subproblems and storing their solutions to avoid redundant calculations."
        },
        {
            question: "How does dynamic programming differ from divide and conquer?",
            answer: "Dynamic programming solves overlapping subproblems and stores their results, while divide and conquer solves independent subproblems and combines their solutions."
        },
        {
            question: "What are the two key properties of problems suitable for dynamic programming?",
            answer: "1. Optimal Substructure: The solution to a problem can be composed of solutions to its subproblems.\n2. Overlapping Subproblems: Subproblems recur multiple times."
        },
        {
            question: "What is memoization?",
            answer: "Memoization is an optimization technique where computed solutions to subproblems are stored and reused instead of being recomputed."
        },
        {
            question: "What is the time complexity of the Fibonacci number computation using dynamic programming?",
            answer: "The time complexity is O(n) when using dynamic programming."
        },
        {
            question: "What is the difference between top-down and bottom-up approaches in dynamic programming?",
            answer: "Top-down involves recursion with memoization, while bottom-up solves problems iteratively by building solutions from smaller subproblems."
        },
        {
            question: "What is the recursive relation for the stair climbing problem?",
            answer: "F(n) = F(n-1) + F(n-2), where F(1) = 1 and F(2) = 2."
        },
        {
            question: "What is the time complexity of solving the matrix chain multiplication problem using dynamic programming?",
            answer: "The time complexity is O(n³), where n is the number of matrices."
        },
        {
            question: "What is the primary advantage of using dynamic programming over naive recursive solutions?",
            answer: "Dynamic programming reduces time complexity by avoiding redundant calculations, making it efficient for problems with overlapping subproblems."
        },
        {
            question: "How does dynamic programming optimize the assembly line scheduling problem?",
            answer: "Dynamic programming computes the minimum time to complete each station step-by-step, storing results to avoid redundant calculations."
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