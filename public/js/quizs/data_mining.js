const questions = [
    {
        question: "What is the primary goal of data science?",
        answers: [
            {text: "To extract patterns from random datasets", correct: false},
            {text: "To analyze human behavior", correct: false},
            {text: "To extract knowledge from data using analysis techniques", correct: true},
            {text: "To store large volumes of data", correct: false},
        ]
    },
    {
        question: "What is predictive analytics?",
        answers: [
            {text: "Predicting future outcomes based on historical data", correct: true},
            {text: "Identifying past trends", correct: false},
            {text: "Measuring current business performance", correct: false},
            {text: "Visualizing real-time data", correct: false},
        ]
    },
    {
        question: "What is data mining?",
        answers: [
            {text: "Finding useful patterns in large datasets", correct: true},
            {text: "Summarizing data using charts", correct: false},
            {text: "Encrypting data for security", correct: false},
            {text: "Extracting statistical summaries from data", correct: false},
        ]
    },
    {
        question: "Which of these is NOT a key application of data mining?",
        answers: [
            {text: "Customer segmentation", correct: false},
            {text: "Fraud detection", correct: false},
            {text: "Generating random numbers", correct: true},
            {text: "Risk analysis", correct: false},
        ]
    },
    {
        question: "What distinguishes data mining from traditional statistical techniques?",
        answers: [
            {text: "Use of exploratory data visualization", correct: false},
            {text: "Application of algorithms to generalize patterns", correct: true},
            {text: "Creating tabular data formats", correct: false},
            {text: "Storing data in databases", correct: false},
        ]
    },
    {
        question: "Which of the following is NOT a stage of the data mining process?",
        answers: [
            {text: "Exploration", correct: false},
            {text: "Modeling", correct: false},
            {text: "Data deletion", correct: true},
            {text: "Knowledge extraction", correct: false},
        ]
    },
    {
        question: "What is an example of unsupervised learning in data mining?",
        answers: [
            {text: "Regression", correct: false},
            {text: "Clustering", correct: true},
            {text: "Prediction", correct: false},
            {text: "Classification", correct: false},
        ]
    },
    {
        question: "What type of data is structured data?",
        answers: [
            {text: "Audio files", correct: false},
            {text: "Images", correct: false},
            {text: "Tabular format data", correct: true},
            {text: "Video streams", correct: false},
        ]
    },
    {
        question: "What are the five steps in CRISP-DM?",
        answers: [
            {text: "Define, Measure, Analyze, Improve, Control", correct: false},
            {text: "Explore, Modify, Analyze, Validate, Control", correct: false},
            {text: "Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment", correct: true},
            {text: "Analyze, Interpret, Evaluate, Transform, Store", correct: false},
        ]
    },
    {
        question: "What does SEMMA stand for?",
        answers: [
            {text: "Select, Explore, Model, Measure, Assess", correct: false},
            {text: "Sample, Explore, Modify, Model, Assess", correct: true},
            {text: "Simplify, Extract, Modify, Analyze, Assess", correct: false},
            {text: "Sample, Enhance, Measure, Model, Assess", correct: false},
        ]
    },
    {
        question: "What is the purpose of feature selection?",
        answers: [
            {text: "To increase the number of attributes in a dataset", correct: false},
            {text: "To improve model performance by reducing attributes", correct: true},
            {text: "To change the format of the dataset", correct: false},
            {text: "To combine all attributes into a single one", correct: false},
        ]
    },
    {
        question: "Why is data quality important?",
        answers: [
            {text: "It reduces the cost of analysis", correct: false},
            {text: "It ensures reliable and accurate analysis", correct: true},
            {text: "It allows for faster visualization", correct: false},
            {text: "It increases storage efficiency", correct: false},
        ]
    },
    {
        question: "What is ensemble modeling?",
        answers: [
            {text: "Combining predictions from multiple models", correct: true},
            {text: "Creating a single model for specific data", correct: false},
            {text: "Analyzing data using manual approaches", correct: false},
            {text: "Separating data into different subsets", correct: false},
        ]
    },
    {
        question: "What is the primary risk of overfitting?",
        answers: [
            {text: "Low accuracy on training data", correct: false},
            {text: "High accuracy on training data but poor generalization", correct: true},
            {text: "Increased data complexity", correct: false},
            {text: "Reduced model interpretability", correct: false},
        ]
    },
    {
        question: "What does data transformation achieve?",
        answers: [
            {text: "Reduces data volume", correct: false},
            {text: "Standardizes data for consistency", correct: true},
            {text: "Increases storage efficiency", correct: false},
            {text: "Identifies missing values", correct: false},
        ]
    },
    {
        question: "What is a common use of probability in machine learning?",
        answers: [
            {text: "To predict weather patterns", correct: false},
            {text: "To model uncertainty and make predictions", correct: true},
            {text: "To perform exploratory data analysis", correct: false},
            {text: "To encode categorical data", correct: false},
        ]
    },
    {
        question: "What is a dependent variable in supervised learning?",
        answers: [
            {text: "An attribute used for feature selection", correct: false},
            {text: "The outcome the model predicts", correct: true},
            {text: "A random variable in unsupervised learning", correct: false},
            {text: "A numerical variable used in clustering", correct: false},
        ]
    },
    {
        question: "What does PCA (Principal Component Analysis) do?",
        answers: [
            {text: "Reduces data complexity by selecting key features", correct: true},
            {text: "Generates new data from existing attributes", correct: false},
            {text: "Combines all features into one", correct: false},
            {text: "Removes outliers from the dataset", correct: false},
        ]
    },
    {
        question: "Which of these is an example of a probabilistic approach in machine learning?",
        answers: [
            {text: "Decision Trees", correct: false},
            {text: "K-Means Clustering", correct: false},
            {text: "Naive Bayes Classifier", correct: true},
            {text: "Support Vector Machines", correct: false},
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