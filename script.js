// === SCREEN NAVIGATION & TABS ===
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".lesson-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            this.classList.add("active");
            const lessonId = `lesson-${this.getAttribute("data-lesson")}`;
            const targetContent = document.getElementById(lessonId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
});

function switchView(viewName) {
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    const targetSection = document.getElementById('view-' + viewName);
    const targetNavLink = document.getElementById('nav-' + viewName);
    
    if (targetSection) targetSection.classList.add('active');
    if (targetNavLink) targetNavLink.className = 'active';

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === LOGIN & ACCOUNT VALIDATION ===
function validateLogin() {
    const emailInput = document.getElementById('login-email').value.trim();
    const passwordInput = document.getElementById('login-password').value;

    if (emailInput === "" || passwordInput === "") {
        alert("Please fill out both the email and password fields.");
        return;
    }

    if (!emailInput.toLowerCase().endsWith('@gmail.com')) {
        alert("Error: Only Gmail accounts (@gmail.com) are allowed.");
        return;
    }

    if (passwordInput.length < 4) {
        alert("Error: The password must be at least 4 characters long.");
        return;
    }

    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('intro-screen').style.display = 'flex';
}

function startWebsite() {
    const screen = document.getElementById('intro-screen');
    if (screen) {
        screen.style.opacity = '0';
        screen.style.visibility = 'hidden';
        screen.style.pointerEvents = 'none';
        
        const dateBadge = document.getElementById('current-date-badge');
        if (dateBadge) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            dateBadge.innerText = new Date().toLocaleDateString('en-US', options);
        }

        const mainNav = document.getElementById('main-navigation');
        if (mainNav) {
            mainNav.style.display = 'flex';
        }
    }
}

// === COMPREHENSIVE QUIZ DATA BANK (25 ITEMS) ===
const skilloraQuizBank = [
    // === LESSON 1 ===
    {
        lesson: 1,
        question: "What is the main purpose of office administration?",
        choices: [
            "To organize and manage office operations",
            "To clean the workspace",
            "To build software programs",
            "To cook food"
        ],
        answer: "To organize and manage office operations"
    },
    {
        lesson: 1,
        question: "Which is a common responsibility of an office administrator?",
        choices: [
            "Repairing vehicles",
            "Managing office records",
            "Building houses",
            "Cooking meals"
        ],
        answer: "Managing office records"
    },
    {
        lesson: 1,
        question: "Why is office administration important?",
        choices: [
            "It makes office work more confusing",
            "It prevents employees from working",
            "It helps keep office operations organized",
            "It removes the need for communication"
        ],
        answer: "It helps keep office operations organized"
    },
    {
        lesson: 1,
        question: "Which of the following is commonly used in an office?",
        choices: [
            "Gardening tools",
            "Cooking equipment",
            "Sports equipment",
            "Computers and printer"
            
        ],
        answer: "Computers and printer"
    },
    {
        lesson: 1,
        question: "Who may benefit from the work of an office administrator",
        choices: [
            "Employees, managers, and clients",
            "Employees only",
            "Manager only",
            "Visitor only"
        ],
        answer: "Employees, managers, and clients"
    },

    // === LESSON 2 ===
    {
        lesson: 2,
        question: "What is professional communication?",
        choices: [
            "Speaking rudely to your coworkers",
            "Communicating clearly and respectfully",
            "Ignoring messages",
            "Shouting during meetings"
        ],
        answer: "Communicating clearly and respectfully"
    },
    {
        lesson: 2,
        question: "How should you respond when your supervisor gives you a task?",
        choices: [
            "Ignore the instructions",
            "Complain immediately",
            "Listen carefully and clarify if needed",
            "Leave the workplace"
        ],
        answer: "Listen carefully and clarify if needed"
    },
    {
        lesson: 2,
        question: "Which is an example of written workplace communication?",
        choices: [
            "Email",
            "Handshake",
            "Facial expressions",
            "Eye Contact"
        ],
        answer: "Email"
    },
    {
        lesson: 2,
        question: "What should you do when a coworker is speaking?",
        choices: [
            "Interrupt them ",
            "Look at your phone ",
            "Walk away immediately",
            "Listen attentively"
        ],
        answer: "Listen attentively"
    },
    {
        lesson: 2,
        question: "Why is communication important in the workplace?",
        choices: [
            "It creates more misunderstandings",
            "It helps people share information ands coordinate tasks",
            "It prevents teamwork",
            "It makes instructions unnecessary"
        ],
        answer: "It helps people share information ands coordinate tasks"
    },

    // === LESSON 3 ===
    {
        lesson: 3,
        question: "Which software is commonly used to create documents?",
        choices: [
            "Calculator",
            "Camera",
            "Microsoft Word",
            "Music player"
        ],
        answer: "Microsoft Word"
    },
    {
        lesson: 3,
        question: "Which keyboard shortcut is commonly used to save a document?",
        choices: [
            "Ctrl + S",
            "Ctrl + P",
            "Ctrl + X",
            "Ctrl + Z"
        ],
        answer: "Ctrl + S"
    },
    {
        lesson: 3,
        question: "Which software is commonly used to organize data in rows and columns?",
        choices: [
            "Microsoft Paint",
            "Notepad",
            "Calculator",
            "Microsoft Excel"
        ],
        answer: "Microsoft Excel"
    },
    {
        lesson: 3,
        question: "What is the main purpose of a printer",
        choices: [
            "To browse  websites",
            "To produce paper copies of documents",
            "To calculate numbers",
            "To send emails"
        ],
            answer: "To produce paper copies of documents"
    },
    {
        lesson: 3,
        question: "What should you do to protect your computer files?",
        choices: [
            "Share your  password with everyone",
            "Open every unknown attachment",
            "Use strong passwords and save backup copies",
            "Delete all files "
        ],
        answer: "Use strong passwords and save backup copies"
    },

    // === LESSON 4 ===
    {
        lesson: 4,
        question: "What is records management?",
        choices: [
            "Organizing, storing, and maintaining records",
            "Throwing away all documents",
            "Decorating office walls",
            "Purchasing office furniture"
        ],
        answer: "Organizing, storing, and maintaining records"
    },
    {
        lesson: 4,
        question: "Why should files have clear names?",
        choices: [
            "To make them difficult to find",
            "To use more storage space",
            "To confuse other employees",
            "To make documents easier to identify"
        ],
        answer: "To make documents easier to identify"
    },
    {
        lesson: 4,
        question: "Which is an example of a physical office record?",
        choices: [
                "A computer mouse" ,
                "A printed employee record" ,
                "A desk lamp" ,
                "A telephone" 
            ],
            answer: "A printed employee record"
        },
        {
            lesson: 4,
            question: "How should confidential documents be handled?",
            choices: [
                "Leave them in public areas",
                "Share them on social media",
                "Store them securely and limit access to authorized people",
                "Give copies to everyone"
            ],
            answer: "Store them securely and limit access to authorized people"
        },
        {
            lesson: 4,
            question: "What is a benefit of organizing digital files into folders?",
            choices: [
                "It makes files easier to locate",
                "It automatically delete files",
                "It makes computer slower",
                "It prevents employees from accessing their work"
            ],
            answer: "It makes files easier to locate"
        },
        // === LESSON 5 ===
        {
            lesson: 5,
            question: "Which behavior demonstrates professionalism?",
            choices: [
                "Arriving late  regularly",
                "Ignoring assigned tasks",
                "Disrespecting coworkers",
                "Being responsible and punctual"
            ],
            answer: "Being responsible and punctual"
        },
        {
            lesson: 5,
            question: "What should you do if you make a mistake at work?",
            choices: [
                "Blame a coworker",
                "Admit the mistake and help correct it",
                "Hide the mistake",
                "Ignore the problem"
            ],
            answer: "Admit the mistake and help correct it"
        },
        {
            lesson: 5,
            question: "What does confidentiality mean in the workplace?",
            choices: [
                "Sharing all information publicly",
                "Posting office documents online",
                "Protecting private and sensitive information",
                "Discussing confidential matters with friends"
            ],
            answer: "Protecting private and sensitive information"
        },
        {
            lesson: 5,
            question: "Which action shows respect for coworkers?",
            choices: [
                "Listening to their ideas and treating them fairly",
                "Makign fun of their mistakes",
                "Taking credit for their work",
                "Ignoring their concerns"
            ],
            answer: "Listening to their ideas and treating them fairly"
        },
        {
            lesson: 5,
            question: "what should you do if witness untheical behavior at work?",
            choices: [
                "Join the behavior",
                "Share rumors about it",
                "Pretend it never happened in every situation",
                "Follow workplace reporting procedures and inform the appropriate person"
            ],
            answer: "Follow workplace reporting procedures and inform the appropriate person"
        }
];


let currentQuestionIndex = 0;
let userAnswers = [];
let savedScore = 0;

function runQuizEngine() {
    const lobby = document.getElementById('quiz-lobby');
    const container = document.getElementById('quiz-container');
    if (lobby) lobby.style.display = 'none';
    if (container) container.style.display = 'block';
    currentQuestionIndex = 0;
    userAnswers = [];
    displayQuestion();
}

function displayQuestion() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    const currentQuestion = skilloraQuizBank[currentQuestionIndex];
    let choicesHtml = '';
    
    currentQuestion.choices.forEach((choice, index) => {
        choicesHtml += `
            <div class="quiz-option" style="margin: 10px 0; padding: 15px; border: 1px solid #e0e0e0; border-radius: 12px; background: #fafafa; display: flex; align-items: center; gap: 10px;">
                <input type="radio" id="choice-${index}" name="quiz-choice" value="${choice}" style="cursor: pointer; width: 18px; height: 18px;">
                <label for="choice-${index}" style="cursor: pointer; font-size: 1rem; width: 100%; color: #333;">${choice}</label>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="quiz-header" style="margin-bottom: 20px; border-bottom: 2px solid #f0f5fa; padding-bottom: 15px;"> 
            <span class="question-number" style="font-weight: 700; color: #0056b3; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;"> Lesson ${currentQuestion.lesson} • Question ${currentQuestionIndex + 1} of ${skilloraQuizBank.length} </span> 
            <h3 style="margin-top: 10px; font-size: 1.4rem; color: #003366;">${currentQuestion.question}</h3> 
        </div> 
        <div class="quiz-choices-container"> ${choicesHtml} </div> 
        <div style="margin-top: 25px; text-align: right;"> 
                    <button class="quiz-button" id="check-answer-btn" onclick="checkAnswer()" style="padding: 0.85rem 2rem; background: #003366;">NEXT</button>

        </div>
    `;
}


let isAnswerChecked = false;

function checkAnswer() {
    const nextBtn = document.getElementById("check-answer-btn");

    if (!isAnswerChecked) {
        
        const selectedOption = document.querySelector('input[name="quiz-choice"]:checked');
        if (!selectedOption) {
            alert("Please select an answer before proceeding.");
            return;
        }

        
        userAnswers.push(selectedOption.value);

        
        if (nextBtn) nextBtn.innerText = "NEXT";
        isAnswerChecked = true;

    } else {
        
        if (currentQuestionIndex < skilloraQuizBank.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
            
            
            if (nextBtn) nextBtn.innerText = "NEXT";
            isAnswerChecked = false;
        } else {
            
            showQuizResults();
            isAnswerChecked = false; 
        }
    }
}


function showQuizResults() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    let score = 0;
    skilloraQuizBank.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            score++;
        }
    });
    savedScore = score;
    
    container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;"> 
            <div style="font-size: 5rem; margin-bottom: 15px;">🎉</div> 
            <h2 style="color: #003366; font-size: 2.2rem; margin-bottom: 10px;">Quiz Completed!</h2> 
            <p style="font-size: 1.25rem; color: #555; margin-bottom: 30px;"> You scored <strong style="color: #0056b3; font-size: 1.6rem;">${score} out of ${skilloraQuizBank.length}</strong>. </p> 
            <div style="display: flex; gap: 15px; justify-content: center;"> 
                <button class="quiz-button" onclick="viewAnswerKey()" style="padding: 0.85rem 2rem; background: #0056b3; color: white; border: none; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer;"> View Answer Key </button> 
                <button class="quiz-button" onclick="resetQuiz()" style="padding: 0.85rem 2rem; background: #e2e8f0; color: #333; border: none; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer;"> Retake Quiz </button> 
            </div> 
        </div>
    `;
}

function viewAnswerKey() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    let reviewHtml = '';
    
    skilloraQuizBank.forEach((q, index) => {
        const userAns = userAnswers[index];
        const isCorrect = userAns === q.answer;
        reviewHtml += `
            <div style="text-align: left; background: #fafafa; padding: 15px; margin-bottom: 15px; border-left: 5px solid ${isCorrect ? '#28a745' : '#dc3545'}; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.02);"> 
                <p style="margin: 0 0 8px 0; font-weight: 700; color: #003366; font-size: 1.05rem;">Item ${index + 1}: ${q.question}</p> 
                <p style="margin: 0 0 4px 0; font-size: 0.95rem; color: #555;"> Your answer: <span style="color: ${isCorrect ? '#28a745' : '#dc3545'}; font-weight: 600;">${userAns}</span> ${isCorrect ? ' <span style="color: #28a745; font-weight: bold;">(✓ Correct)</span>' : ' <span style="color: #dc3545; font-weight: bold;">(✗ Incorrect)</span>'} </p> 
                ${!isCorrect ? `<p style="margin: 4px 0 0 0; font-size: 0.95rem; color: #28a745; font-weight: 600;">✔ Correct Answer: ${q.answer}</p>` : ''} 
            </div>
        `;
    });

    container.innerHTML = `
        <div style="padding: 20px 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #f0f5fa; padding-bottom: 15px;">
                <h2 style="color: #003366; margin: 0; font-size: 1.8rem;">Answer Key & Review</h2>
                <span style="background: #f0f5fa; color: #0056b3; padding: 5px 15px; border-radius: 20px; font-weight: 700; font-size: 1rem;">
                    Score: ${savedScore} / ${skilloraQuizBank.length}
                </span>
            </div>
            <div style="max-height: 450px; overflow-y: auto; margin-bottom: 25px; padding-right: 5px;">
                ${reviewHtml}
            </div>
                    <div style="text-align: center; display: flex; gap: 15px; justify-content: center;">
            <button class="quiz-button" onclick="showQuizResults()" style="padding: 0.85rem 2rem; background: #e2e8f0; color: #333;">
                Back to Results
            </button>
            <button class="quiz-button" onclick="finishExit()" style="padding: 0.85rem 2rem; background: #003366; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Finish and Exit
            </button>
        </div>

    `;
}
function finishExit() {
   
    location.reload();
}
