const questions = [
  
    {
        "question": "What is an algorithm?",
        "answers": [
            {"text": "A procedure that runs indefinitely.", "correct": false},
            {"text": "A process that solves a problem with correct output in finite time.", "correct": true},
            {"text": "A relation with no outputs.", "correct": false},
            {"text": "A program that only handles small inputs.", "correct": false}
        ]
    },
    {
        "question": "What is the main purpose of analyzing algorithms?",
        "answers": [
            {"text": "To test algorithms on specific hardware.", "correct": false},
            {"text": "To evaluate how execution time grows as input size increases.", "correct": true},
            {"text": "To determine how much memory an algorithm requires.", "correct": false},
            {"text": "To compare the programming languages used for algorithms.", "correct": false}
        ]
    },
    {
        "question": "What does f(n)=O(g(n)) mean?",
        "answers": [
            {"text": "f(n) is greater than g(n).", "correct": false},
            {"text": "f(n) grows faster than g(n).", "correct": false},
            {"text": "f(n) is the inverse of g(n).", "correct": false},
            {"text": "f(n) grows slower than or at the same rate as g(n).", "correct": true}
        ]
    },
    {
        "question": "What is the time complexity of Bubble Sort?",
        "answers": [
            {"text": "Θ(nlogn)", "correct": false},
            {"text": "Θ(n)", "correct": false},
            {"text": "Θ(1)", "correct": false},
            {"text": "Θ(n^2)", "correct": true}
        ]
    },
    {
        "question": "Which of the following best describes the notation Ω(g(n))?",
        "answers": [
            {"text": "f(n) grows at least as fast as g(n).", "correct": true},
            {"text": "f(n) is upper-bounded by g(n).", "correct": false},
            {"text": "f(n) is equal to g(n) for all inputs.", "correct": false},
            {"text": "f(n) grows slower than g(n).", "correct": false}
        ]
    },
    {
        "question": "What does f(n)=Θ(g(n)) imply?",
        "answers": [
            {"text": "f(n) grows faster than g(n).", "correct": false},
            {"text": "f(n) grows slower than g(n).", "correct": false},
            {"text": "f(n) grows unpredictably.", "correct": false},
            {"text": "f(n) grows exactly at the same rate as g(n).", "correct": true}
        ]
    },
    {
        "question": "Which property holds for the transitive relationship of asymptotic notations?",
        "answers": [
            {"text": "If f(n)=O(g(n)), then g(n)=O(f(n)).", "correct": false},
            {"text": "If f(n)=O(g(n)), then h(n)=O(f(n)).", "correct": false},
            {"text": "If f(n)=O(g(n)) and g(n)=O(h(n)), then f(n)=O(h(n)).", "correct": true},
            {"text": "f(n) and g(n) are unrelated.", "correct": false}
        ]
    },
    {
        "question": "What is the worst-case time complexity of finding the maximum value in a list of n elements?",
        "answers": [
            {"text": "Θ(logn)", "correct": false},
            {"text": "Θ(n^2)", "correct": false},
            {"text": "Θ(n)", "correct": true},
            {"text": "Θ(1)", "correct": false}
        ]
    },
    {
        "question": "How does Bubble Sort compare adjacent elements in an array?",
        "answers": [
            {"text": "From right to left, swapping when needed.", "correct": false},
            {"text": "From left to right, swapping when the left element is greater.", "correct": true},
            {"text": "By sorting halves recursively.", "correct": false},
            {"text": "By finding the smallest element in the list.", "correct": false}
        ]
    },
    {
        "question": "What is the benefit of analyzing algorithms using asymptotic notation?",
        "answers": [
            {"text": "It provides exact execution time in seconds.", "correct": false},
            {"text": "It tests the algorithm for all input sizes.", "correct": false},
            {"text": "It gives an abstract measure of growth without hardware dependency.", "correct": true},
            {"text": "It evaluates memory usage for an algorithm.", "correct": false}
        ]
    },
    {
        "question": "Which algorithmic approach does binary search utilize?",
        "answers": [
            {"text": "Greedy.", "correct": false},
            {"text": "Dynamic programming.", "correct": false},
            {"text": "Divide-and-conquer.", "correct": true},
            {"text": "Backtracking.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is the fastest growing function?",
        "answers": [
            {"text": "logn", "correct": false},
            {"text": "n^2", "correct": false},
            {"text": "2^n", "correct": true},
            {"text": "nlogn", "correct": false}
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
    window.location.href = "/quizs/quizs_Discrete_Math";
});

startQuiz();