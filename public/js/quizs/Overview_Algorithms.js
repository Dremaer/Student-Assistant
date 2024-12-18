const questions = [
  
    {
        "question": "What is an algorithm?",
        "answers": [
            {"text": "A program that always produces the same output.", "correct": false},
            {"text": "A procedure that solves a problem in finite time.", "correct": true},
            {"text": "A set of heuristic methods.", "correct": false},
            {"text": "A function that maps input to random outputs.", "correct": false}
        ]
    },
    {
        "question": "Which condition does a valid algorithm satisfy?",
        "answers": [
            {"text": "It always terminates after infinite iterations.", "correct": false},
            {"text": "It gives correct output for all valid inputs.", "correct": true},
            {"text": "It can process incorrect inputs without any errors.", "correct": false},
            {"text": "It always uses maximum computational resources.", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of finding the maximum value in an unsorted list of 𝑛 elements?",
        "answers": [
            {"text": "Θ(n^2)", "correct": false},
            {"text": "Θ(nlogn)", "correct": false},
            {"text": "Θ(n)", "correct": true},
            {"text": "Θ(logn)", "correct": false}
        ]
    },
    {
        "question": "What is the key advantage of using a binary search tree to find the mode in a list of integers?",
        "answers": [
            {"text": "It guarantees O(1) time complexity.", "correct": false},
            {"text": "It uses less space than a hash map.", "correct": false},
            {"text": "It avoids comparisons altogether.", "correct": false},
            {"text": "It allows dynamic insertion and counting.", "correct": true}
        ]
    },
    {
        "question": "What is the optimal time complexity of finding a specific value in a sorted array using binary search?",
        "answers": [
            {"text": "O(n)", "correct": false},
            {"text": "O(nlogn)", "correct": false},
            {"text": "O(logn)", "correct": true},
            {"text": "O(1)", "correct": false}
        ]
    },
    {
        "question": "Which step is NOT part of designing an algorithm?",
        "answers": [
            {"text": "Writing pseudocode before solving the problem.", "correct": true},
            {"text": "Analyzing relationships between subproblems.", "correct": false},
            {"text": "Combining subproblem solutions into a full solution.", "correct": false},
            {"text": "Breaking a large problem into smaller subproblems.", "correct": false}
        ]
    },
    {
        "question": "What is the recurrence relation for the number of moves in the Tower of Hanoi problem?",
        "answers": [
            {"text": "T(n)=T(n/2)+1", "correct": false},
            {"text": "T(n)=2n+1", "correct": false},
            {"text": "T(n)=T(n−1)+1", "correct": false},
            {"text": "T(n)=2T(n−1)+1", "correct": true}
        ]
    },
    {
        "question": "What is Gale & Shapley’s algorithm used for?",
        "answers": [
            {"text": "Finding stable matchings between two groups.", "correct": true},
            {"text": "Sorting a list of numbers efficiently.", "correct": false},
            {"text": "Optimizing the shortest path between two nodes.", "correct": false},
            {"text": "Identifying the most frequent item in a dataset.", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of Gale & Shapley’s algorithm for stable marriage?",
        "answers": [
            {"text": "O(n^1/2)", "correct": false},
            {"text": "O(n^2)", "correct": true},
            {"text": "O(nlogn)", "correct": false},
            {"text": "O(n)", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of searching for a key in an unsorted array?",
        "answers": [
            {"text": "O(logn)", "correct": false},
            {"text": "O(n^2)", "correct": false},
            {"text": "𝑂(𝑛)", "correct": true},
            {"text": "O(1)", "correct": false}
        ]
    },
    {
        "question": "How is the growth of 𝑓(𝑛)=𝑂(𝑔(𝑛))interpreted?",
        "answers": [
            {"text": "𝑓(𝑛) grows faster than 𝑔(𝑛).", "correct": false},
            {"text": "f(n) grows at the same rate as 𝑔(𝑛).", "correct": false},
            {"text": "f(n) is not comparable to 𝑔(𝑛).", "correct": false},
            {"text": "f(n) grows slower than or at most as fast as 𝑔(𝑛).", "correct": true}
        ]
    },
    {
        "question": "What is the best-case scenario for linear search in an array?",
        "answers": [
            {"text": "The key is in the middle of the array.", "correct": false},
            {"text": "The key is the first element.", "correct": true},
            {"text": "The key is the last element.", "correct": false},
            {"text": "The key is not in the array.", "correct": false}
        ]
    },
    



];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const backBtn = document.getElementById("back-btn"); // Back button

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    // Reset question index and score
    currentQuestionIndex = 0;
    score = 0;

    // Reset all user answers only when restarting the quiz
    questions.forEach(question => {
        question.userAnswer = null; 
    });

    // Reset UI elements
    nextBtn.innerHTML = "Next";
    backBtn.style.display = "none";
    prevBtn.style.display = "none";

    // Start the quiz from the first question
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        // Persist user's previous answer during normal navigation
        if (currentQuestion.userAnswer === answer.text) {
            button.classList.add(answer.correct ? "correct" : "incorrect");
        }

        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", (e) => {
            selectAnswer(e, answer.text); 
        });
    });
}

function selectAnswer(e, selectedText) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Save the user's selected answer
    questions[currentQuestionIndex].userAnswer = selectedText;

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Highlight correct answer and disable all buttons
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function resetState() {
    nextBtn.style.display = "block";
    prevBtn.style.display = currentQuestionIndex > 0 ? "block" : "none";
    backBtn.style.display = "none";

    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function showScore() {
    resetState();

    questionElement.innerHTML = `
        <h2 style="font-size: 36px; font-weight: bold; color: #001e4d; margin-bottom: 15px; text-align: center; margin-top: 100px;">
            Fantastic! You've completed the quiz session! 🎓
        </h2>
        <p style="font-size: 26px; font-weight: bold; color: #333; text-align: center; margin-bottom: 180px;">
            You answered ${score} out of ${questions.length} questions correctly.
        </p>
    `;
    nextBtn.innerHTML = "Take Quiz"; 
    nextBtn.style.display = "block";
    prevBtn.style.display = "none";
    backBtn.style.display = "block";
}

// Handle navigation to the next question
function handleNextButton() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}

// Handle navigation to the previous question
function handlePrevButton() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

prevBtn.addEventListener("click", handlePrevButton);

nextBtn.addEventListener("click", () => {
    if (nextBtn.innerHTML === "Take Quiz") {
        startQuiz();
    } else {
        handleNextButton(); 
    }
});

backBtn.addEventListener("click", () => {
    window.location.href = "/quizs/quizs_ml";
});

startQuiz();