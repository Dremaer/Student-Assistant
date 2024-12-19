const questions = [
  
    {
        "question": "What is an NP problem?",
        "answers": [
            {"text": "A problem where solutions can be verified in polynomial time.", "correct": true},
            {"text": "A problem solvable in polynomial time.", "correct": false},
            {"text": "A problem that cannot be solved by a computer.", "correct": false},
            {"text": "A problem requiring exponential time for verification.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is an example of a decision problem?",
        "answers": [
            {"text": "Finding the shortest path between two nodes.", "correct": false},
            {"text": "Optimizing a traveling route.", "correct": false},
            {"text": "Maximizing the number of paths in a graph.", "correct": false},
            {"text": "Determining if a path of length 𝑘 exists between two nodes.", "correct": true}
        ]
    },
    {
        "question": "What is the definition of an NP-Complete problem?",
        "answers": [
            {"text": "A problem solvable by non-deterministic algorithms.", "correct": false},
            {"text": "A problem that is in P but not in NP.", "correct": false},
            {"text": "A problem that is both in NP and as hard as any other NP problem.", "correct": true},
            {"text": "A problem requiring exponential space complexity.", "correct": false}
        ]
    },
    {
        "question": "What does polynomial-time reduction (A≤pB) mean?",
        "answers": [
            {"text": "Problem 𝐴 is harder than B.", "correct": false},
            {"text": "Problem 𝐴 can be transformed into 𝐵 in polynomial time.", "correct": true},
            {"text": "Problem 𝐵 is reducible to 𝐴.", "correct": false},
            {"text": "Problem 𝐴 is exponential in complexity.", "correct": false}
        ]
    },
    {
        "question": "Why is the Traveling Salesman Problem (TSP) considered NP-Complete?",
        "answers": [
            {"text": "It requires solving a decision problem in polynomial time.", "correct": false},
            {"text": "It cannot be approximated.", "correct": false},
            {"text": "It is an optimization problem, not a decision problem.", "correct": false},
            {"text": "It is reducible to the Hamiltonian Cycle Problem.", "correct": true}
        ]
    },
    {
        "question": "What is the primary difference between P and NP problems?",
        "answers": [
            {"text": "P problems are unsolvable, and NP problems are solvable.", "correct": false},
            {"text": "P problems are decision problems, and NP problems are optimization problems.", "correct": false},
            {"text": "P problems can be solved in polynomial time, while NP problems can only be verified in polynomial time.", "correct": true},
            {"text": "P problems are always easier than NP problems.", "correct": false}
        ]
    },
    {
        "question": "What does it mean if P=NP?",
        "answers": [
            {"text": "Every problem in P requires exponential verification.", "correct": false},
            {"text": "P problems become harder than NP problems.", "correct": false},
            {"text": "Every problem solvable in polynomial time can be verified in polynomial time.", "correct": false},
            {"text": "Every problem in NP can also be solved in polynomial time.", "correct": true}
        ]
    },
    {
        "question": "What is the significance of the SAT problem in NP-Completeness?",
        "answers": [
            {"text": "It was the first problem proven to be NP-Complete.", "correct": true},
            {"text": "It is the only problem in NP.", "correct": false},
            {"text": "It is not reducible to any other problem.", "correct": false},
            {"text": "It is an optimization problem.", "correct": false}
        ]
    },
    {
        "question": "How does the reduction from the Hamiltonian Cycle Problem to the TSP work?",
        "answers": [
            {"text": "Add weights to the edges and solve the TSP directly.", "correct": true},
            {"text": "Remove all cycles and search for the shortest path.", "correct": false},
            {"text": "Convert the graph into a binary tree.", "correct": false},
            {"text": "Remove all weights and use depth-first search.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is TRUE about NP-Hard problems?",
        "answers": [
            {"text": "They are a subset of NP problems.", "correct": false},
            {"text": "They require verification in exponential time.", "correct": false},
            {"text": "They are always harder than NP-Complete problems.", "correct": false},
            {"text": "They are not necessarily in NP.", "correct": true}
        ]
    },
    {
        "question": "Why are approximation algorithms used for NP-Complete problems?",
        "answers": [
            {"text": "To provide exact solutions for large inputs.", "correct": false},
            {"text": "To reduce the time complexity to logarithmic time.", "correct": false},
            {"text": "To find approximate solutions in polynomial time.", "correct": true},
            {"text": "To transform NP problems into P problems.", "correct": false}
        ]
    },
    {
        "question": "What does the triangle inequality imply for the TSP approximation algorithm?",
        "answers": [
            {"text": "It allows the approximate solution to be at most twice the optimal value.", "correct": true},
            {"text": "It eliminates the need for heuristic approaches.", "correct": false},
            {"text": "It ensures the optimal solution.", "correct": false},
            {"text": "It guarantees that all cycles are minimal.", "correct": false}
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