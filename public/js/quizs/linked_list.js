const questions = [
    {
        "question": "What is a singly linked list?",
        "answers": [
            {"text": "A list where each node points to the next node in sequence.", "correct": true},
            {"text": "A list where nodes can point to any other node.", "correct": false},
            {"text": "A list where each node has two pointers: next and previous.", "correct": false},
            {"text": "A circular list with no pointers.", "correct": false}
        ]
    },
    {
        "question": "What is the primary advantage of using a linked list over an array?",
        "answers": [
            {"text": "Easier insertion and deletion without shifting elements.", "correct": true},
            {"text": "Direct access to elements by index.", "correct": false},
            {"text": "Requires less memory for small datasets.", "correct": false},
            {"text": "Supports sorting automatically.", "correct": false}
        ]
    },
    {
        "question": "In a doubly linked list, what does each node contain?",
        "answers": [
            {"text": "A data element and one pointer.", "correct": false},
            {"text": "Two pointers: one pointing to the next node and one to the previous node.", "correct": true},
            {"text": "A data element and no pointers.", "correct": false},
            {"text": "Only one pointer to the previous node.", "correct": false}
        ]
    },
    {
        "question": "How is a circular linked list different from a singly linked list?",
        "answers": [
            {"text": "It has a pointer to the first node in every node.", "correct": false},
            {"text": "The last node points back to the first node.", "correct": true},
            {"text": "Nodes can point to multiple other nodes.", "correct": false},
            {"text": "It contains no data elements, only pointers.", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of inserting a node at the head of a linked list?",
        "answers": [
            {"text": "O(1)", "correct": true},
            {"text": "O(log n)", "correct": false},
            {"text": "O(n)", "correct": false},
            {"text": "O(n^2)", "correct": false}
        ]
    },
    {
        "question": "In a linked list, what does the 'head' pointer indicate?",
        "answers": [
            {"text": "The last node in the list.", "correct": false},
            {"text": "The first node in the list.", "correct": true},
            {"text": "A node with no data.", "correct": false},
            {"text": "The largest node in the list.", "correct": false}
        ]
    },
    {
        "question": "Which operation does not typically apply to a singly linked list?",
        "answers": [
            {"text": "Traversal", "correct": false},
            {"text": "Reverse traversal", "correct": true},
            {"text": "Insertion", "correct": false},
            {"text": "Deletion", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of a dummy (header) node in a linked list?",
        "answers": [
            {"text": "To store the largest data value.", "correct": false},
            {"text": "To simplify edge case handling, like empty lists.", "correct": true},
            {"text": "To store metadata about the list.", "correct": false},
            {"text": "To act as a temporary placeholder for data.", "correct": false}
        ]
    },
    {
        "question": "How do you detect a cycle in a linked list?",
        "answers": [
            {"text": "Using a fast and slow pointer technique.", "correct": true},
            {"text": "Checking if all node pointers are non-NULL.", "correct": false},
            {"text": "By comparing all node values.", "correct": false},
            {"text": "Using a recursive approach to count nodes.", "correct": false}
        ]
    },
    {
        "question": "What is the defining feature of a circular doubly linked list?",
        "answers": [
            {"text": "Each node points to both the next and previous nodes, and the last node links back to the first.", "correct": true},
            {"text": "It contains no NULL pointers.", "correct": false},
            {"text": "It can only store integer data.", "correct": false},
            {"text": "It automatically sorts data.", "correct": false}
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
    window.location.href = "/quizs/quiz_data";
});

startQuiz();