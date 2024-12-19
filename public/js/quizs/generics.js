const questions = [
    {
        "question": "What is the primary purpose of a sealed class in Kotlin?",
        "answers": [
            {"text": "To allow unlimited inheritance from any file.", "correct": false},
            {"text": "To restrict inheritance to the same file.", "correct": true},
            {"text": "To prevent the creation of any subclasses.", "correct": false},
            {"text": "To enforce immutability in classes.", "correct": false}
        ]
    },
    {
        "question": "What is the main feature of an interface in Kotlin?",
        "answers": [
            {"text": "It can have state and constructors.", "correct": false},
            {"text": "It allows multiple inheritance for implementing classes.", "correct": true},
            {"text": "It cannot contain default method implementations.", "correct": false},
            {"text": "It is always abstract and final.", "correct": false}
        ]
    },
    {
        "question": "What is the output of the following code?<br><br>sealed class Result {<br>&nbsp;&nbsp;&nbsp;  class Success(val value: Int) : Result()<br>&nbsp;&nbsp;&nbsp;  class Error(val message: String) : Result()<br>}<br><br>val result: Result = Result.Success(42)<br>val message = when(result) {<br>&nbsp;&nbsp;&nbsp;  is Result.Success -> \"Success: ${result.value}\"<br>&nbsp;&nbsp;&nbsp;  is Result.Error -> \"Error: ${result.message}\"<br>}<br>println(message)<br>",
        "answers": [
            {"text": "Success: 42", "correct": true},
            {"text": "Error: ", "correct": false},
            {"text": "42", "correct": false},
            {"text": "Error: Unhandled case", "correct": false}
        ]
    },
    {
        "question": "Which keyword is used to define a type parameter in a generic class in Kotlin?",
        "answers": [
            {"text": "T", "correct": false},
            {"text": "<>", "correct": false},
            {"text": "< T >", "correct": true},
            {"text": "Any", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the `is` keyword in Kotlin?",
        "answers": [
            {"text": "To explicitly cast a variable to a specific type.", "correct": false},
            {"text": "To check if a variable is of a certain type.", "correct": true},
            {"text": "To compare structural equality.", "correct": false},
            {"text": "To perform instance equality checks.", "correct": false}
        ]
    },
    {
        "question": "What happens when two interfaces have the same method and are implemented by the same class?",
        "answers": [
            {"text": "The class must override the method.", "correct": true},
            {"text": "The method from the first interface is used.", "correct": false},
            {"text": "The method from the second interface is used.", "correct": false},
            {"text": "The program throws a compile-time error.", "correct": false}
        ]
    },
    {
        "question": "What is the difference between `abstract` and `sealed` classes in Kotlin?",
        "answers": [
            {"text": "`abstract` allows inheritance from any file, while `sealed` restricts inheritance to the same file.", "correct": true},
            {"text": "`sealed` classes are always final, while `abstract` classes are not.", "correct": false},
            {"text": "`sealed` classes cannot have subclasses.", "correct": false},
            {"text": "`abstract` classes can only have abstract members.", "correct": false}
        ]
    },
    {
        "question": "What does the following code do?<br><br>interface Vehicle {<br>&nbsp;&nbsp;&nbsp;  val currentSpeed: Int<br>&nbsp;&nbsp;&nbsp;  fun move()<br>&nbsp;&nbsp;&nbsp;  fun stop()<br>}<br><br>class Car : Vehicle {<br>&nbsp;&nbsp;&nbsp;  override var currentSpeed = 0<br>&nbsp;&nbsp;&nbsp;    override fun move() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  currentSpeed = 50<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    println(\"Car is moving at $currentSpeed\")<br>&nbsp;&nbsp;&nbsp;  }<br>&nbsp;&nbsp;&nbsp;    override fun stop() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    currentSpeed = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        println(\"Car stopped\")<br>&nbsp;&nbsp;&nbsp;    }<br>}<br>",
        "answers": [
            {"text": "Defines an interface and a class that implements it.", "correct": true},
            {"text": "Defines an abstract class and a subclass.", "correct": false},
            {"text": "Defines a sealed class and its subclass.", "correct": false},
            {"text": "Throws a compilation error.", "correct": false}
        ]
    },
    {
        "question": "What is the main feature of a generic class in Kotlin?",
        "answers": [
            {"text": "It uses type parameters to allow operations on different types.", "correct": true},
            {"text": "It restricts the type to integers only.", "correct": false},
            {"text": "It automatically generates implementations for primitive types.", "correct": false},
            {"text": "It ensures that all subclasses have the same methods.", "correct": false}
        ]
    },
    {
        "question": "What is the result of the following code?<br><br>fun <T> List<T>.secondOrNull(): T? = if (this.size > 1) this[1] else null<br>val list = listOf(1, 2, 3)<br>println(list.secondOrNull())<br>",
        "answers": [
            {"text": "2", "correct": true},
            {"text": "null", "correct": false},
            {"text": "Error: Function not defined.", "correct": false},
            {"text": "Error: List index out of bounds.", "correct": false}
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
    window.location.href = "/quizs/quiz_oop";
});

startQuiz();