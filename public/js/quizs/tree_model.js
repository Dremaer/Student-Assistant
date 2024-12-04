const questions = [
    {
        "question": "What is a decision tree primarily used for in predictive analytics?",
        "answers": [
            {"text": "Compressing data into smaller datasets", "correct": false},
            {"text": "Predicting outcomes based on input features", "correct": true},
            {"text": "Visualizing data distributions", "correct": false},
            {"text": "Generating synthetic data", "correct": false}
        ]
    },
    {
        "question": "What does a 'leaf node' in a decision tree signify?",
        "answers": [
            {"text": "A splitting criterion", "correct": false},
            {"text": "A final decision or class label", "correct": true},
            {"text": "A connection between nodes", "correct": false},
            {"text": "A root variable", "correct": false}
        ]
    },
    {
        "question": "Which of the following best describes 'classification'?",
        "answers": [
            {"text": "Grouping data into clusters", "correct": false},
            {"text": "Assigning a categorical label to input data", "correct": true},
            {"text": "Predicting continuous numeric values", "correct": false},
            {"text": "Visualizing feature distributions", "correct": false}
        ]
    },
    {
        "question": "Which task is NOT an example of a classification problem?",
        "answers": [
            {"text": "Predicting if a loan will default (Yes/No)", "correct": false},
            {"text": "Identifying whether an email is spam", "correct": false},
            {"text": "Estimating the price of a house", "correct": true},
            {"text": "Categorizing animals in images (Cat/Dog)", "correct": false}
        ]
    },
    {
        "question": "What is the main goal of Hunt’s Algorithm in decision trees?",
        "answers": [
            {"text": "Splitting data recursively to achieve pure subsets", "correct": true},
            {"text": "Visualizing hierarchical data relationships", "correct": false},
            {"text": "Calculating probabilities for predictions", "correct": false},
            {"text": "Combining multiple decision trees into a single model", "correct": false}
        ]
    },
    {
        "question": "Which of these is NOT a classification technique?",
        "answers": [
            {"text": "Decision Trees", "correct": false},
            {"text": "Neural Networks", "correct": false},
            {"text": "K-Means Clustering", "correct": true},
            {"text": "Naïve Bayes", "correct": false}
        ]
    },
    {
        "question": "In decision tree terminology, what is a 'pure node'?",
        "answers": [
            {"text": "A node with a mix of class labels", "correct": false},
            {"text": "A node with only one class of data points", "correct": true},
            {"text": "A node used to start the tree", "correct": false},
            {"text": "A node that connects parent nodes to child nodes", "correct": false}
        ]
    },
    {
        "question": "Which statement describes the greedy algorithm in decision tree construction?",
        "answers": [
            {"text": "It evaluates all possible splits simultaneously.", "correct": false},
            {"text": "It makes the best local choice at each split to optimize the tree.", "correct": true},
            {"text": "It builds the tree by randomly assigning nodes.", "correct": false},
            {"text": "It ensures a globally optimal tree structure.", "correct": false}
        ]
    },
    {
        "question": "What distinguishes classification from numeric prediction?",
        "answers": [
            {"text": "Classification uses continuous outputs.", "correct": false},
            {"text": "Classification predicts categorical outputs, while numeric prediction predicts continuous values.", "correct": true},
            {"text": "Classification is less accurate than numeric prediction.", "correct": false},
            {"text": "Classification requires more computational resources.", "correct": false}
        ]
    },
    {
        "question": "Which of the following describes a 'default class' in decision trees?",
        "answers": [
            {"text": "The class assigned when a node is impure", "correct": false},
            {"text": "The fallback class when no data is available for a node", "correct": true},
            {"text": "The most frequent class in the dataset", "correct": false},
            {"text": "The class assigned to the root node", "correct": false}
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