const questions = [
    {
        "question": "What is a structure in C?",
        "answers": [
            {"text": "A collection of only integers", "correct": false},
            {"text": "A group of related data of different types combined into one unit", "correct": true},
            {"text": "A predefined library function", "correct": false},
            {"text": "A pointer to an array", "correct": false}
        ]
    },
    {
        "question": "What keyword is used to declare a structure?",
        "answers": [
            {"text": "union", "correct": false},
            {"text": "typedef", "correct": false},
            {"text": "struct", "correct": true},
            {"text": "class", "correct": false}
        ]
    },
    {
        "question": "How do you access a member of a structure?",
        "answers": [
            {"text": "Using the -> operator", "correct": false},
            {"text": "Using the . operator", "correct": true},
            {"text": "Using the & operator", "correct": false},
            {"text": "Using the * operator", "correct": false}
        ]
    },
    {
        "question": "What will the following code output?<br><br>struct EMPLOYEE {<br>&nbsp;&nbsp;&nbsp; char name[20];<br>&nbsp;&nbsp;&nbsp; int salary;<br>} emp = {\"John\", 3000};<br><br>printf(\"%s %d\", emp.name, emp.salary);",
        "answers": [
            {"text": "Compilation error", "correct": false},
            {"text": "John 3000", "correct": true},
            {"text": "Name: John, Salary: 3000", "correct": false},
            {"text": "John followed by a garbage value", "correct": false}
        ]
    },
    {
        "question": "What is the role of typedef with a structure?",
        "answers": [
            {"text": "It allows renaming the structure to a simpler name", "correct": true},
            {"text": "It initializes the structure", "correct": false},
            {"text": "It declares an array", "correct": false},
            {"text": "It allocates dynamic memory", "correct": false}
        ]
    },
    {
        "question": "What happens if you copy one structure variable to another?",
        "answers": [
            {"text": "Only the first member is copied", "correct": false},
            {"text": "All the members of the structure are copied", "correct": true},
            {"text": "Only the addresses are copied", "correct": false},
            {"text": "Compilation error occurs", "correct": false}
        ]
    },
    {
        "question": "How is a structure passed to a function in C?",
        "answers": [
            {"text": "By value or by pointer", "correct": true},
            {"text": "Only by value", "correct": false},
            {"text": "Only by pointer", "correct": false},
            {"text": "Structures cannot be passed to functions", "correct": false}
        ]
    },
    {
        "question": "What is a nested structure?",
        "answers": [
            {"text": "A structure that uses arrays as members", "correct": false},
            {"text": "A structure defined inside a function", "correct": false},
            {"text": "A structure containing another structure as a member", "correct": true},
            {"text": "A structure that cannot hold any values", "correct": false}
        ]
    },
    {
        "question": "How do you access a member of a structure using a pointer?",
        "answers": [
            {"text": "pointer.member", "correct": false},
            {"text": "pointer->member", "correct": true},
            {"text": "*pointer.member", "correct": false},
            {"text": "&pointer.member", "correct": false}
        ]
    },
    {
        "question": "What is the output of the following code?<br><br>struct EMP {<br>&nbsp;&nbsp;&nbsp; char name[20];<br>&nbsp;&nbsp;&nbsp; int age;<br>} emp1 = {\"Alice\", 25}, *ptr;<br><br> ptr = &emp1;<br>printf(\"%s %d\", ptr->name, ptr->age);",
        "answers": [
            {"text": "Compilation error", "correct": false},
            {"text": "Alice 25", "correct": true},
            {"text": "Garbage value", "correct": false},
            {"text": "Address of emp1", "correct": false}
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
    window.location.href = "/quizs/quiz_c";
});

startQuiz();