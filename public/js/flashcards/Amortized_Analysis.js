document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is amortized analysis?",
            answer: "Amortized analysis measures the average time complexity of an operation over a sequence of operations, providing a more accurate assessment than worst-case analysis."
        },
        {
            question: "What is the key difference between average case and amortized analysis?",
            answer: "Average case considers all possible inputs, while amortized analysis assumes a sequence of operations and provides the average cost per operation."
        },
        {
            question: "What are the three methods of amortized analysis?",
            answer: "1. Aggregate method\n2. Accounting method\n3. Potential method"
        },
        {
            question: "What is the aggregate method in amortized analysis?",
            answer: "The aggregate method calculates the total cost of a sequence of operations and divides it by the number of operations."
        },
        {
            question: "What is the accounting method in amortized analysis?",
            answer: "The accounting method assigns an amortized cost to each operation, ensuring the total amortized cost covers the actual cost."
        },
        {
            question: "What is the potential method in amortized analysis?",
            answer: "The potential method uses a potential function to represent the 'stored work,' adjusting it to account for expensive operations."
        },
        {
            question: "What is the amortized time complexity of push and multipop operations on a stack?",
            answer: "The amortized time complexity is O(1) for push and multipop operations combined over a sequence."
        },
        {
            question: "Why is the potential function important in amortized analysis?",
            answer: "It allows tracking of stored work or resources, making it easier to analyze the cost of sequences of operations."
        },
        {
            question: "How does amortized analysis apply to dynamic array resizing?",
            answer: "Doubling the size of an array during resizing incurs O(n) cost, but over many operations, the amortized cost remains O(1)."
        },
        {
            question: "What is the main advantage of using amortized analysis?",
            answer: "It provides a realistic measure of performance over sequences of operations, smoothing out expensive operations."
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