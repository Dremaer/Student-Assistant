const questions = [
    {
        "question": "What is the primary goal of exploratory data analysis (EDA)?",
        "answers": [
            {"text": "To gain an initial understanding of the dataset’s characteristics", "correct": true},
            {"text": "To clean and preprocess data", "correct": false},
            {"text": "To predict future data trends", "correct": false},
            {"text": "To calculate complex statistical metrics", "correct": false}
        ]
    },
    {
        "question": "What is an example of categorical data?",
        "answers": [
            {"text": "Age in years", "correct": false},
            {"text": "Temperature in Celsius", "correct": false},
            {"text": "Gender (Male, Female)", "correct": true},
            {"text": "Income in dollars", "correct": false}
        ]
    },
    {
        "question": "What does 'descriptive statistics' aim to achieve?",
        "answers": [
            {"text": "Summarize data into understandable numerical metrics", "correct": true},
            {"text": "Create visualizations of complex relationships", "correct": false},
            {"text": "Replace exploratory data analysis", "correct": false},
            {"text": "Identify anomalies in the data", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of feature selection?",
        "answers": [
            {"text": "To improve model performance by reducing attributes", "correct": true},
            {"text": "To increase the number of attributes in a dataset", "correct": false},
            {"text": "To change the format of the dataset", "correct": false},
            {"text": "To combine all attributes into a single one", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a measure of data dispersion?",
        "answers": [
            {"text": "Mean", "correct": false},
            {"text": "Mode", "correct": false},
            {"text": "Range", "correct": true},
            {"text": "Median", "correct": false}
        ]
    },
    {
        "question": "Why is data quality important?",
        "answers": [
            {"text": "It ensures reliable and accurate analysis", "correct": true},
            {"text": "It reduces the cost of analysis", "correct": false},
            {"text": "It allows for faster visualization", "correct": false},
            {"text": "It increases storage efficiency", "correct": false}
        ]
    },
    {
        "question": "What is an example of unsupervised learning?",
        "answers": [
            {"text": "Clustering", "correct": true},
            {"text": "Prediction", "correct": false},
            {"text": "Classification", "correct": false},
            {"text": "Regression", "correct": false}
        ]
    },
    {
        "question": "What is the primary risk of overfitting?",
        "answers": [
            {"text": "High accuracy on training data but poor generalization", "correct": true},
            {"text": "Low accuracy on training data", "correct": false},
            {"text": "Increased data complexity", "correct": false},
            {"text": "Reduced model interpretability", "correct": false}
        ]
    },
    {
        "question": "What does PCA (Principal Component Analysis) do?",
        "answers": [
            {"text": "Reduces data complexity by selecting key features", "correct": true},
            {"text": "Generates new data from existing attributes", "correct": false},
            {"text": "Combines all features into one", "correct": false},
            {"text": "Removes outliers from the dataset", "correct": false}
        ]
    },
    {
        "question": "What is ensemble modeling?",
        "answers": [
            {"text": "Combining predictions from multiple models", "correct": true},
            {"text": "Creating a single model for specific data", "correct": false},
            {"text": "Analyzing data using manual approaches", "correct": false},
            {"text": "Separating data into different subsets", "correct": false}
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