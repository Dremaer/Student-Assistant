document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the formal definition of an algorithm?",
            answer: "A finite sequence of well-defined instructions that produces the correct output for any valid input within a finite amount of time."
        },
        {
            question: "What are the three key properties of an algorithm?",
            answer: "1. Correctness: Produces the required output for every input.\n2. Finiteness: Terminates after a finite number of steps.\n3. Uniqueness: Every step is precisely defined."
        },
        {
            question: "What is the difference between 'program' and 'algorithm'?",
            answer: "A program is an implementation of an algorithm, often written in a specific programming language and intended for execution on a computer."
        },
        {
            question: "What is the 'Halting Problem' in algorithms?",
            answer: "The Halting Problem is the question of determining whether an algorithm will terminate for all inputs. It is proven to be unsolvable in general."
        },
        {
            question: "Why is recursion useful in algorithm design?",
            answer: "Recursion simplifies problems by solving smaller instances of the same problem and combining their results to solve the original problem."
        },
        {
            question: "What is the time complexity of the Towers of Hanoi problem for \( n \) disks?",
            answer: "The time complexity is \( T(n) = 2^n - 1 \), which is \( O(2^n) \)."
        },
        {
            question: "What does \( T(n) = T(n-1) + n \) represent in recurrence relations?",
            answer: "It represents an algorithm whose total complexity grows quadratically as \( \Theta(n^2) \)."
        },
        {
            question: "What is the Master Theorem used for?",
            answer: "It provides a method to solve recurrence relations that commonly appear in divide-and-conquer algorithms."
        },
        {
            question: "What is the Stable Marriage Problem?",
            answer: "It is the problem of finding a stable matching between two sets of elements (e.g., men and women) such that no two individuals prefer each other over their current partners."
        },
        {
            question: "What is the time complexity of the Gale-Shapley algorithm for the Stable Marriage Problem?",
            answer: "The Gale-Shapley algorithm has a time complexity of \( O(n^2) \), where \( n \) is the number of participants in each group."
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