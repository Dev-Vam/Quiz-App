const quizData = {
    en: [
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
            explanation: "Mars is called the Red Planet due to its reddish appearance."
        },
        {
            question: "Who painted the Mona Lisa?",
            choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            correct: 1,
            explanation: "The Mona Lisa was painted by Leonardo da Vinci around 1503-1519."
        },
        {
            question: "What is the largest ocean on Earth?",
            choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            correct: 2,
            explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
        },
        {
            question: "Which element has the chemical symbol 'Au'?",
            choices: ["Silver", "Gold", "Copper", "Aluminum"],
            correct: 1,
            explanation: "Au comes from the Latin word 'Aurum', meaning gold."
        },
        {
            question: "What is the capital of Japan?",
            choices: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            correct: 2,
            explanation: "Tokyo is the capital and largest city of Japan."
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1,
            explanation: "Romeo and Juliet was written by William Shakespeare in the late 16th century."
        },
        {
            question: "What is the hardest natural substance on Earth?",
            choices: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2,
            explanation: "Diamond is the hardest known natural material on the Mohs scale."
        },
        {
            question: "Which country is home to the kangaroo?",
            choices: ["New Zealand", "South Africa", "Australia", "India"],
            correct: 2,
            explanation: "Kangaroos are native to Australia."
        },
        {
            question: "What is the smallest prime number?",
            choices: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "2 is the smallest and only even prime number."
        },
        {
            question: "Which planet is closest to the Sun?",
            choices: ["Venus", "Mars", "Mercury", "Earth"],
            correct: 2,
            explanation: "Mercury is the closest planet to the Sun in our solar system."
        },
        {
            question: "What is the main component of the Sun?",
            choices: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
            correct: 1,
            explanation: "The Sun is composed primarily of hydrogen (about 75%)."
        },
        {
            question: "Who invented the telephone?",
            choices: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
            correct: 1,
            explanation: "Alexander Graham Bell patented the first practical telephone in 1876."
        },
        {
            question: "Which is the longest river in the world?",
            choices: ["Amazon", "Nile", "Mississippi", "Yangtze"],
            correct: 1,
            explanation: "The Nile River is the longest river in the world."
        },
        {
            question: "What is the capital of Brazil?",
            choices: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            correct: 2,
            explanation: "Brasília has been the capital of Brazil since 1960."
        },
        {
            question: "Which year did World War II end?",
            choices: ["1943", "1944", "1945", "1946"],
            correct: 2,
            explanation: "World War II ended in 1945 with the surrender of Japan."
        },
        {
            question: "What is the chemical symbol for silver?",
            choices: ["Si", "Ag", "Au", "Fe"],
            correct: 1,
            explanation: "Ag comes from the Latin word 'Argentum', meaning silver."
        },
        {
            question: "Which continent is the largest?",
            choices: ["North America", "Africa", "Asia", "Europe"],
            correct: 2,
            explanation: "Asia is the largest continent by both area and population."
        },
        {
            question: "Who wrote '1984'?",
            choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
            correct: 0,
            explanation: "1984 was written by George Orwell and published in 1949."
        },
        {
            question: "What is the speed of light?",
            choices: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
            correct: 0,
            explanation: "Light travels at approximately 299,792 kilometers per second in a vacuum."
        },
        {
            question: "Which animal is known as the 'King of the Jungle'?",
            choices: ["Tiger", "Lion", "Elephant", "Gorilla"],
            correct: 1,
            explanation: "The lion is traditionally called the 'King of the Jungle'."
        },
        {
            question: "What is the largest mammal in the world?",
            choices: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correct: 1,
            explanation: "The Blue Whale is the largest known animal to have ever existed."
        },
        {
            question: "Who painted 'The Starry Night'?",
            choices: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
            correct: 1,
            explanation: "The Starry Night was painted by Vincent van Gogh in 1889."
        },
        {
            question: "What is the chemical formula for water?",
            choices: ["CO2", "H2O", "O2", "N2"],
            correct: 1,
            explanation: "Water's chemical formula is H2O, representing two hydrogen atoms and one oxygen atom."
        },
        {
            question: "Which country is home to the Great Barrier Reef?",
            choices: ["Brazil", "Thailand", "Australia", "Mexico"],
            correct: 2,
            explanation: "The Great Barrier Reef is located off the coast of Australia."
        },
        {
            question: "What is the capital of Canada?",
            choices: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            correct: 3,
            explanation: "Ottawa is the capital city of Canada."
        }
    ],
    fr: [
        {
            question: "Quelle planète est connue comme la Planète Rouge ?",
            choices: ["Vénus", "Mars", "Jupiter", "Saturne"],
            correct: 1,
            explanation: "Mars est appelée la Planète Rouge en raison de son apparence rougeâtre."
        },
        {
            question: "Qui a peint la Joconde ?",
            choices: ["Vincent van Gogh", "Léonard de Vinci", "Pablo Picasso", "Michel-Ange"],
            correct: 1,
            explanation: "La Joconde a été peinte par Léonard de Vinci vers 1503-1519."
        },
        {
            question: "Quel est le plus grand océan sur Terre ?",
            choices: ["L'océan Atlantique", "L'océan Indien", "L'océan Pacifique", "L'océan Arctique"],
            correct: 2,
            explanation: "L'océan Pacifique est le plus grand et le plus profond océan sur Terre."
        },
        {
            question: "Quel élément a le symbole chimique 'Au' ?",
            choices: ["Argent", "Or", "Cuivre", "Aluminium"],
            correct: 1,
            explanation: "Au vient du mot latin 'Aurum', signifiant or."
        },
        {
            question: "Quelle est la capitale du Japon ?",
            choices: ["Séoul", "Pékin", "Tokyo", "Bangkok"],
            correct: 2,
            explanation: "Tokyo est la capitale et la plus grande ville du Japon."
        },
        {
            question: "Qui a écrit 'Roméo et Juliette' ?",
            choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1,
            explanation: "Roméo et Juliette a été écrit par William Shakespeare à la fin du XVIe siècle."
        },
        {
            question: "Quelle est la substance naturelle la plus dure sur Terre ?",
            choices: ["Or", "Fer", "Diamant", "Platine"],
            correct: 2,
            explanation: "Le diamant est le matériau naturel le plus dur sur l'échelle de Mohs."
        },
        {
            question: "Dans quel pays vit le kangourou ?",
            choices: ["Nouvelle-Zélande", "Afrique du Sud", "Australie", "Inde"],
            correct: 2,
            explanation: "Les kangourous sont originaires d'Australie."
        },
        {
            question: "Quel est le plus petit nombre premier ?",
            choices: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "2 est le plus petit nombre premier et le seul nombre premier pair."
        },
        {
            question: "Quelle planète est la plus proche du Soleil ?",
            choices: ["Vénus", "Mars", "Mercure", "Terre"],
            correct: 2,
            explanation: "Mercure est la planète la plus proche du Soleil dans notre système solaire."
        },
        {
            question: "Quel est le principal composant du Soleil ?",
            choices: ["Hélium", "Hydrogène", "Oxygène", "Azote"],
            correct: 1,
            explanation: "Le Soleil est composé principalement d'hydrogène (environ 75%)."
        },
        {
            question: "Qui a inventé le téléphone ?",
            choices: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
            correct: 1,
            explanation: "Alexander Graham Bell a breveté le premier téléphone pratique en 1876."
        },
        {
            question: "Quel est le plus long fleuve du monde ?",
            choices: ["Amazone", "Nil", "Mississippi", "Yangtsé"],
            correct: 1,
            explanation: "Le Nil est le plus long fleuve du monde."
        },
        {
            question: "Quelle est la capitale du Brésil ?",
            choices: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            correct: 2,
            explanation: "Brasília est la capitale du Brésil depuis 1960."
        },
        {
            question: "En quelle année la Seconde Guerre mondiale s'est-elle terminée ?",
            choices: ["1943", "1944", "1945", "1946"],
            correct: 2,
            explanation: "La Seconde Guerre mondiale s'est terminée en 1945 avec la capitulation du Japon."
        },
        {
            question: "Quel est le symbole chimique de l'argent ?",
            choices: ["Si", "Ag", "Au", "Fe"],
            correct: 1,
            explanation: "Ag vient du mot latin 'Argentum', signifiant argent."
        },
        {
            question: "Quel est le plus grand continent ?",
            choices: ["Amérique du Nord", "Afrique", "Asie", "Europe"],
            correct: 2,
            explanation: "L'Asie est le plus grand continent par sa superficie et sa population."
        },
        {
            question: "Qui a écrit '1984' ?",
            choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
            correct: 0,
            explanation: "1984 a été écrit par George Orwell et publié en 1949."
        },
        {
            question: "Quelle est la vitesse de la lumière ?",
            choices: ["299 792 km/s", "199 792 km/s", "399 792 km/s", "499 792 km/s"],
            correct: 0,
            explanation: "La lumière se déplace à environ 299 792 kilomètres par seconde dans le vide."
        },
        {
            question: "Quel animal est connu comme le 'Roi de la Jungle' ?",
            choices: ["Tigre", "Lion", "Éléphant", "Gorille"],
            correct: 1,
            explanation: "Le lion est traditionnellement appelé le 'Roi de la Jungle'."
        },
        {
            question: "Quel est le plus grand mammifère du monde ?",
            choices: ["Éléphant d'Afrique", "Baleine bleue", "Girafe", "Hippopotame"],
            correct: 1,
            explanation: "La baleine bleue est le plus grand animal connu ayant jamais existé."
        },
        {
            question: "Qui a peint 'La Nuit étoilée' ?",
            choices: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
            correct: 1,
            explanation: "La Nuit étoilée a été peinte par Vincent van Gogh en 1889."
        },
        {
            question: "Quelle est la formule chimique de l'eau ?",
            choices: ["CO2", "H2O", "O2", "N2"],
            correct: 1,
            explanation: "La formule chimique de l'eau est H2O, représentant deux atomes d'hydrogène et un atome d'oxygène."
        },
        {
            question: "Dans quel pays se trouve la Grande Barrière de Corail ?",
            choices: ["Brésil", "Thaïlande", "Australie", "Mexique"],
            correct: 2,
            explanation: "La Grande Barrière de Corail se trouve au large des côtes de l'Australie."
        },
        {
            question: "Quelle est la capitale du Canada ?",
            choices: ["Toronto", "Vancouver", "Montréal", "Ottawa"],
            correct: 3,
            explanation: "Ottawa est la capitale du Canada."
        }
    ]
};

let highScore = 0;
let currentLanguage = 'en';
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timeLeft = 10;
let timer;
const timerEl = document.getElementById("timer");
const progressTextEl = document.getElementById("progressText");

// Update the UI elements
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const scoreEl = document.getElementById("score");
const langToggleBtn = document.getElementById("langToggle");
const explanationEl = document.getElementById("explanation");
const progressEl = document.getElementById("progress");

document.getElementById("langToggle").addEventListener("click", toggleLanguage);

const resultGifs = {
    perfect: {
        en: {
            gif: "hhttps://media.giphy.com/media/Wm8h2gyEY8VnJeru6f/giphy.gif?cid=790b7611eoke3s6c0g2s51itryw95eb0kt28i0w45ybk30mn&ep=v1_stickers_search&rid=giphy.gif&ct=e",
            message: "Perfect Score! You're a genius!"
        },
        fr: {
            gif: "https://media.giphy.com/media/Wm8h2gyEY8VnJeru6f/giphy.gif?cid=790b7611eoke3s6c0g2s51itryw95eb0kt28i0w45ybk30mn&ep=v1_stickers_search&rid=giphy.gif&ct=e",
            message: "Score parfait ! Vous êtes un génie !"
        }
    },
    good: {
        en: {
            gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzhpNm5mc3ozMnZvMTQ3OGZ3ZGY2eW1zd2E1aXVkdDllcGdkc2MwaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dVdIu1HNxeKyqzkgPA/giphy.gif",
            message: "Great job! Well done!"
        },
        fr: {
            gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzhpNm5mc3ozMnZvMTQ3OGZ3ZGY2eW1zd2E1aXVkdDllcGdkc2MwaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dVdIu1HNxeKyqzkgPA/giphy.gif",
            message: "Bon travail ! Bien joué !"
        }
    },
    okay: {
        en: {
            gif: "https://media.giphy.com/media/jf3AdGZH3Bn3LdO4mL/giphy.gif?cid=790b7611985bzyxj2sm06zqcnm0grcyl8ym2h896yz6warav&ep=v1_stickers_search&rid=giphy.gif&ct=s",
            message: "Not bad! Keep practicing!"
        },
        fr: {
            gif: "https://media.giphy.com/media/jf3AdGZH3Bn3LdO4mL/giphy.gif?cid=790b7611985bzyxj2sm06zqcnm0grcyl8ym2h896yz6warav&ep=v1_stickers_search&rid=giphy.gif&ct=s",
            message: "Pas mal ! Continuez à pratiquer !"
        }
    },
    poor: {
        en: {
            gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3ByZjd0ejR3NjQzemU3OTV5czZlYnZwMXBpdWE3bzIwMTFsbXBxMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/li0dswKqIZNpm/giphy.gif",
            message: "Keep trying! You can do better!"
        },
        fr: {
            gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3ByZjd0ejR3NjQzemU3OTV5czZlYnZwMXBpdWE3bzIwMTFsbXBxMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/li0dswKqIZNpm/giphy.gif",
            message: "Continuez d'essayer ! Vous pouvez faire mieux !"
        }
    }
};

function getResultType(score, total) {
    const percentage = (score / total) * 100;
    if (percentage === 100) return 'perfect';
    if (percentage >= 75) return 'good';
    if (percentage >= 50) return 'okay';
    return 'poor';
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    langToggleBtn.textContent = currentLanguage === 'en' ? 'FR' : 'EN';
    
    // Update UI text based on language
    document.querySelector('h1').textContent = currentLanguage === 'en' ? 
        'General Knowledge Quiz' : 'Quiz de Culture Générale';
    submitBtn.textContent = currentLanguage === 'en' ? 'Submit Answer' : 'Soumettre';
    document.querySelector('.timer-text').textContent = currentLanguage === 'en' ? 
        'Time left:' : 'Temps restant:';
    document.getElementById('restart').textContent = currentLanguage === 'en' ? 
        'Play Again' : 'Jouer à nouveau';
    
    // Reset and restart quiz
    restartQuiz();
}

function updateProgress() {
    const percent = (currentQuestion / quizData[currentLanguage].length) * 100;
    progressEl.style.width = `${percent}%`;
}

function startTimer() {
    timeLeft = 10;
    clearInterval(timer);
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(); // Automatically move to next question when time runs out
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerEl.textContent = timeLeft;
    // Add warning colors when time is running low
    if (timeLeft <= 3) {
        timerEl.classList.add('warning');
    } else {
        timerEl.classList.remove('warning');
    }
}

function showQuestion() {
    const question = quizData[currentLanguage][currentQuestion];
    questionEl.textContent = question.question;
    
    // Update progress text
    progressTextEl.textContent = `Question ${currentQuestion + 1}/${quizData[currentLanguage].length}`;
    
    // Update progress bar
    updateProgress();
    
    // Start timer for new question
    startTimer();
    
    choicesEl.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice-btn");
        button.addEventListener("click", () => selectChoice(index));
        choicesEl.appendChild(button);
    });
}

function selectChoice(index) {
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach(button => button.classList.remove("selected"));
    buttons[index].classList.add("selected");
    selectedAnswer = index;
}

function checkAnswer() {
    clearInterval(timer);
    
    if (selectedAnswer === null && timeLeft > 0) {
        alert("Please select an answer!");
        startTimer(); // Restart timer if no answer selected
        return;
    }

    if (selectedAnswer === quizData[currentLanguage][currentQuestion].correct) {
        score++;
    }

    currentQuestion++;
    selectedAnswer = null;

    if (currentQuestion < quizData[currentLanguage].length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    clearInterval(timer);
    const resultDiv = document.getElementById('result');
    const resultGifDiv = document.getElementById('result-gif');
    const total = quizData[currentLanguage].length;
    const resultType = getResultType(score, total);
    const result = resultGifs[resultType][currentLanguage];

    // Update high score if current score is higher
    if (score > highScore) {
        highScore = score;
    }

    questionEl.style.display = "none";
    choicesEl.style.display = "none";
    submitBtn.style.display = "none";
    timerEl.style.display = "none";
    progressTextEl.style.display = "none";
    
    resultDiv.classList.remove("hide");
    
    // Show current score and high score
    scoreEl.innerHTML = currentLanguage === 'en' ? 
        `Score: ${score} out of ${total}<br>High Score: ${highScore} out of ${total}` :
        `Score: ${score} sur ${total}<br>Meilleur Score: ${highScore} sur ${total}`;
    
    resultGifDiv.innerHTML = `
        <img src="${result.gif}" alt="result">
        <p>${result.message}</p>
    `;
    
    // Show the restart button
    document.getElementById('restart').style.display = "block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    
    document.getElementById('result').classList.add("hide");
    document.getElementById('restart').style.display = "none";
    questionEl.style.display = "block";
    choicesEl.style.display = "block";
    submitBtn.style.display = "block";
    timerEl.style.display = "block";
    progressTextEl.style.display = "block";
    
    showQuestion();
}

// Add event listener for restart button
document.getElementById('restart').addEventListener('click', restartQuiz);

submitBtn.addEventListener("click", checkAnswer);
showQuestion(); 