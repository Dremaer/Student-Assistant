document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the key concept of the Divide-and-Conquer sorting technique?",
            answer: "Divide the problem into smaller parts, solve them independently, and combine their solutions."
        },
        {
            question: "What is the time complexity of Bubble Sort?",
            answer: "Θ(n^2) in both worst and average cases."
        },
        {
            question: "Which sorting algorithm guarantees Θ(n log n) complexity regardless of input?",
            answer: "Merge Sort"
        },
        {
            question: "How does Quick Sort achieve its average time complexity?",
            answer: "By recursively dividing elements around a pivot, averaging Θ(n log n) for randomized pivots."
        },
        {
            question: "What is the primary drawback of Heap Sort compared to Merge Sort?",
            answer: "Heap Sort is not stable, while Merge Sort preserves the order of identical elements."
        },
        {
            question: "What is the advantage of Radix Sort over comparison-based algorithms?",
            answer: "It sorts in O(nk) time for narrow-value ranges, bypassing the O(n log n) comparison limit."
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