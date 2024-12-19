const questions = [
  
    {
        "question": "What is the goal of amortized analysis?",
        "answers": [
            {"text": "To find the worst-case time complexity of an algorithm.", "correct": false},
            {"text": "To analyze the total cost of operations over a sequence of operations.", "correct": true},
            {"text": "To compute the average time complexity of an operation.", "correct": false},
            {"text": "To determine the best-case time complexity of an algorithm.", "correct": false}
        ]
    },
    {
        "question": "How does amortized analysis differ from average-case analysis?",
        "answers": [
            {"text": "It considers probabilities of inputs.", "correct": false},
            {"text": "It analyzes the cost of the most expensive single operation.", "correct": false},
            {"text": "It analyzes the cost of all operations over time, regardless of input distribution.", "correct": true},
            {"text": "It does not consider worst-case scenarios.", "correct": false}
        ]
    },
    {
        "question": "In the binary counter example, how many times does the least significant bit toggle in 𝑛 increments?",
        "answers": [
            {"text": "n/2", "correct": false},
            {"text": "n", "correct": true},
            {"text": "log𝑛", "correct": false},
            {"text": "2^n", "correct": false}
        ]
    },
    {
        "question": "What is the amortized cost of a MultiPop(k) operation in a stack?",
        "answers": [
            {"text": "O(k^2)", "correct": false},
            {"text": "O(n⋅k)", "correct": false},
            {"text": "O(1)", "correct": true},
            {"text": "O(k)", "correct": false}
        ]
    },
    {
        "question": "In the dynamic table allocation problem, what happens when the current table is full, and a new element is added?",
        "answers": [
            {"text": "The table size remains unchanged.", "correct": false},
            {"text": "The table size doubles, and all elements are copied to the new table.", "correct": true},
            {"text": "The table is reallocated with a size equal to the current number of elements.", "correct": false},
            {"text": "A single additional memory cell is allocated.", "correct": false}
        ]
    },
    {
        "question": "What is the amortized time complexity of a single insertion in a dynamic array?",
        "answers": [
            {"text": "O(1)", "correct": true},
            {"text": "O(n)", "correct": false},
            {"text": "O(logn)", "correct": false},
            {"text": "O(n^2)", "correct": false}
        ]
    },
    {
        "question": "Why is the amortized cost of Push(x) in a stack with MultiPop(k) operations set to 2?",
        "answers": [
            {"text": "It assumes constant reallocation cost.", "correct": false},
            {"text": "It simplifies analysis by ignoring worst-case scenarios.", "correct": false},
            {"text": "It compensates for memory allocation overhead.", "correct": false},
            {"text": "It accounts for both insertion and potential removal.", "correct": true}
        ]
    },
    {
        "question": "How many elements are copied during the 𝑛-th allocation in a dynamic table?",
        "answers": [
            {"text": "n/2", "correct": false},
            {"text": "n−1", "correct": false},
            {"text": "𝑛", "correct": false},
            {"text": "n/2+1", "correct": true}
        ]
    },
    {
        "question": "What is the total cost of doubling a dynamic table 𝑘 times starting from 1 element?",
        "answers": [
            {"text": "2^k", "correct": false},
            {"text": "2^k - 1", "correct": true},
            {"text": "k⋅logk", "correct": false},
            {"text": "𝑘^2", "correct": false}
        ]
    },
    {
        "question": "Why is the amortized cost analysis useful for algorithms like MultiPop(k) and dynamic table resizing?",
        "answers": [
            {"text": "It ensures that the cost of operations is evenly distributed over time.", "correct": true},
            {"text": "It ignores the impact of rare expensive operations.", "correct": false},
            {"text": "It minimizes the memory usage.", "correct": false},
            {"text": "It avoids worst-case analysis altogether.", "correct": false}
        ]
    },
    {
        "question": "What is the total number of bit flips in a binary counter incremented 𝑛 times?",
        "answers": [
            {"text": "n⋅logn", "correct": false},
            {"text": "n^2", "correct": false},
            {"text": "𝑛", "correct": false},
            {"text": "2n−1", "correct": true}
        ]
    },
    {
        "question": "What is the worst-case cost of a single Push(x) operation in a stack when the table size needs to be doubled?",
        "answers": [
            {"text": "O(1)", "correct": false},
            {"text": "O(logn)", "correct": false},
            {"text": "𝑂(n)", "correct": true},
            {"text": "O(n^2)", "correct": false}
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
    window.location.href = "/quizs/quizs_ALgorithm_Analysis_Design";
});

startQuiz();