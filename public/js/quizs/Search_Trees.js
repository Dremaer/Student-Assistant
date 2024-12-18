const questions = [
  
    {
        "question": "What is a binary search tree (BST)?",
        "answers": [
            {"text": "A tree where every node has at most two children.", "correct": false},
            {"text": "A tree where left child nodes are smaller and right child nodes are larger than the parent.", "correct": true},
            {"text": "A tree that always has balanced height.", "correct": false},
            {"text": "A tree used for graph traversal.", "correct": false}
        ]
    },
    {
        "question": "Which operation has the worst-case time complexity of 𝑂(ℎ) in a binary search tree?",
        "answers": [
            {"text": "Traversal", "correct": false},
            {"text": "Insert", "correct": false},
            {"text": "Deletion", "correct": false},
            {"text": "Search", "correct": true}
        ]
    },
    {
        "question": "What is the key characteristic of a Red-Black Tree?",
        "answers": [
            {"text": "It is an unbalanced binary tree.", "correct": false},
            {"text": "It ensures logarithmic height through color properties.", "correct": true},
            {"text": "It uses AVL rotations to balance itself.", "correct": false},
            {"text": "It cannot store duplicate keys.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of balancing in a search tree?",
        "answers": [
            {"text": "To minimize the number of levels.", "correct": false},
            {"text": "To optimize space complexity.", "correct": false},
            {"text": "To keep operations O(logn) in the worst case.", "correct": true},
            {"text": "To maximize the number of nodes.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a property of a Red-Black Tree?",
        "answers": [
            {"text": "All nodes are either red or black.", "correct": true},
            {"text": "Every node has exactly two children.", "correct": false},
            {"text": "The root is always red.", "correct": false},
            {"text": "All leaves are red.", "correct": false}
        ]
    },
    {
        "question": "In a B-Tree, what is the maximum number of children a node with 𝑡 keys can have?",
        "answers": [
            {"text": "t", "correct": false},
            {"text": "𝑡−1", "correct": false},
            {"text": "𝑡+1", "correct": true},
            {"text": "2t", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of inserting a key into a B-Tree with 𝑛 elements?",
        "answers": [
            {"text": "O(n)", "correct": false},
            {"text": "O(nlogn)", "correct": false},
            {"text": "O(logn)", "correct": true},
            {"text": "O(1)", "correct": false}
        ]
    },
    {
        "question": "What happens during the deletion of a node in a binary search tree when the node has two children?",
        "answers": [
            {"text": "The node is directly removed without replacement.", "correct": false},
            {"text": "The tree becomes unbalanced.", "correct": false},
            {"text": "The node is replaced by the largest key in its left subtree.", "correct": false},
            {"text": "The node is replaced by the smallest key in its right subtree.", "correct": true}
        ]
    },
    {
        "question": "Which tree structure ensures all leaves are at the same level?",
        "answers": [
            {"text": "Binary Search Tree", "correct": false},
            {"text": "AVL Tree", "correct": false},
            {"text": "B-Tree", "correct": true},
            {"text": "Red-Black Tree", "correct": false}
        ]
    },
    {
        "question": "What is the primary advantage of a B-Tree over a binary search tree?",
        "answers": [
            {"text": "Lower insertion time.", "correct": false},
            {"text": "Better disk access patterns.", "correct": true},
            {"text": "Simplified implementation.", "correct": false},
            {"text": "Lower deletion time.", "correct": false}
        ]
    },
    {
        "question": "What is the relationship between Red-Black Trees and 2-3-4 Trees?",
        "answers": [
            {"text": "They are completely different data structures.", "correct": false},
            {"text": "Red-Black Trees can only store even numbers of elements.", "correct": false},
            {"text": "2-3-4 Trees are faster in all operations.", "correct": false},
            {"text": "A Red-Black Tree represents a 2-3-4 Tree as a binary tree.", "correct": true}
        ]
    },
    {
        "question": "How does a Red-Black Tree handle imbalances after an insertion?",
        "answers": [
            {"text": "By recoloring and rotating nodes.", "correct": false},
            {"text": "By swapping nodes randomly.", "correct": false},
            {"text": "By reconstructing the entire tree.", "correct": false},
            {"text": "By adding a new root.", "correct": false}
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