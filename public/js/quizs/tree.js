const questions = [
    {
        "question": "What is a binary tree?",
        "answers": [
            {"text": "A tree where each node has at most two children.", "correct": true},
            {"text": "A tree where each node has exactly two children.", "correct": false},
            {"text": "A tree where nodes are connected in a circular manner.", "correct": false},
            {"text": "A tree with no nodes.", "correct": false}
        ]
    },
    {
        "question": "What is the height of a tree?",
        "answers": [
            {"text": "The maximum level of any node in the tree.", "correct": true},
            {"text": "The number of nodes in the tree.", "correct": false},
            {"text": "The number of edges in the tree.", "correct": false},
            {"text": "The number of children of the root node.", "correct": false}
        ]
    },
    {
        "question": "In a binary tree, what is an inorder traversal?",
        "answers": [
            {"text": "Visit the left subtree, root, and then the right subtree.", "correct": true},
            {"text": "Visit the root, left subtree, and then the right subtree.", "correct": false},
            {"text": "Visit the left subtree, right subtree, and then the root.", "correct": false},
            {"text": "Visit the root only.", "correct": false}
        ]
    },
    {
        "question": "What is a full binary tree?",
        "answers": [
            {"text": "A binary tree where each node has either 0 or 2 children.", "correct": true},
            {"text": "A binary tree where all nodes have exactly 2 children.", "correct": false},
            {"text": "A binary tree with no leaves.", "correct": false},
            {"text": "A binary tree with all levels fully filled.", "correct": false}
        ]
    },
    {
        "question": "What is a threaded binary tree?",
        "answers": [
            {"text": "A binary tree where null pointers are replaced with pointers to inorder successors or predecessors.", "correct": true},
            {"text": "A binary tree where nodes are threaded together by parent-child links.", "correct": false},
            {"text": "A binary tree with a circular structure.", "correct": false},
            {"text": "A binary tree where all pointers are null.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the root node in a tree?",
        "answers": [
            {"text": "It serves as the entry point to the tree.", "correct": true},
            {"text": "It connects all the leaves of the tree.", "correct": false},
            {"text": "It always contains the smallest value in the tree.", "correct": false},
            {"text": "It has the most children in the tree.", "correct": false}
        ]
    },
    {
        "question": "What is the difference between a complete binary tree and a full binary tree?",
        "answers": [
            {"text": "A full binary tree has all levels fully filled, while a complete binary tree is filled except possibly the last level.", "correct": true},
            {"text": "A complete binary tree has all nodes with 2 children, while a full binary tree is filled except the last level.", "correct": false},
            {"text": "A full binary tree allows more than 2 children per node.", "correct": false},
            {"text": "A complete binary tree is always balanced.", "correct": false}
        ]
    },
    {
        "question": "How is a binary search tree different from a binary tree?",
        "answers": [
            {"text": "A binary search tree requires that left children are less than the root, and right children are greater.", "correct": true},
            {"text": "A binary search tree has exactly two children per node.", "correct": false},
            {"text": "A binary search tree does not allow duplicate values.", "correct": false},
            {"text": "A binary search tree always has a depth of 2.", "correct": false}
        ]
    },
    {
        "question": "What is a leaf node?",
        "answers": [
            {"text": "A node with no children.", "correct": true},
            {"text": "A node with exactly one child.", "correct": false},
            {"text": "A node that is at the maximum height of the tree.", "correct": false},
            {"text": "A node that serves as the root.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the left child pointer in a binary tree?",
        "answers": [
            {"text": "It points to the left subtree of the node.", "correct": true},
            {"text": "It points to the root node.", "correct": false},
            {"text": "It points to the sibling of the node.", "correct": false},
            {"text": "It stores data for the node.", "correct": false}
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