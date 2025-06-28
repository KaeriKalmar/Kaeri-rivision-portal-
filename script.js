// === CONFIGURATION ===
const fullAccessCodes = [
   'kjsghshj'
];
const usedAccessCodes = [
 'kjsghshj'
];

let hasFullAccess = false;
const currentDeviceKey = "DEVICE_" + btoa(navigator.userAgent + screen.width + screen.height).slice(0, 20);

// === ON LOAD ===
window.onload = () => {
  const accessCode = localStorage.getItem("accessCode");

  if (accessCode && fullAccessCodes.includes(accessCode)) {
    hasFullAccess = true;
    updateModeBanner("✅ Full Access Mode");
    clearDemoLocks();
  } else {
    const userCode = prompt("Enter Access Code (or leave blank for Demo):");

    if (!userCode) {
      updateModeBanner("🔒 Demo Mode: Limited Access");
      return;
    }

    if (usedAccessCodes.includes(userCode)) {
      if (localStorage.getItem("accessCode") === userCode) {
        hasFullAccess = true;
        updateModeBanner("✅ Full Access Mode");
        clearDemoLocks();
      } else {
        alert("❌ This code has already been used on another device.");
        updateModeBanner("🔒 Demo Mode: Limited Access");
      }
    } else if (fullAccessCodes.includes(userCode)) {
      localStorage.setItem("accessCode", userCode);
      hasFullAccess = true;
      updateModeBanner("✅ Full Access Mode");
      clearDemoLocks();
    } else {
      updateModeBanner("🔒 Demo Mode: Limited Access");
    }
  }
};

// === UI UPDATES ===
function updateModeBanner(text) {
  const banner = document.getElementById("mode-banner");
  banner.innerText = text;
  // These styles are now largely handled by CSS for better separation of concerns,
  // but keeping 'style.color' here as it's directly manipulated by JS.
  // banner.style.textAlign = "center";
  // banner.style.fontWeight = "bold";
  // banner.style.marginBottom = "20px";
  banner.style.color = hasFullAccess ? "#8aff8a" : "#ffc107";
}

// === UTILITIES ===
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function clearDemoLocks() {
  ["mcq", "short", "essay", "flashcard"].forEach(m =>
    localStorage.removeItem(`demo_${m}_used`)
  );
}

function blockDemo(modeKey) {
  const lockKey = `demo_${modeKey}_used`;
  if (!hasFullAccess) {
    if (localStorage.getItem(lockKey)) {
      alert(`🔒 Demo mode allows only one attempt. Please unlock full access.`);
      return true;
    }
    localStorage.setItem(lockKey, "yes");
  }
  return false;
}

function updateProgress(current, total) {
  const percent = Math.round((current / total) * 100);
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("progress-text").innerText = `Progress: ${current} of ${total}`;
}

function renderQuiz() { // This is the function for Multiple Choice
  if (blockDemo("mcq")) return;

  const container = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  container.innerHTML = "";
  resultDiv.innerHTML = "";

  const questions = hasFullAccess ? shuffle(mcqData).slice(0, 10) : mcqData.slice(0, 3);
  updateProgress(0, questions.length);

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";

    // --- START: ADDED METADATA DISPLAY FOR MCQ ---
    if (q.topic) {
        const topicElement = document.createElement("p");
        // Changed class to 'question-metadata' to match the updated CSS
        topicElement.className = "question-metadata"; 
        topicElement.innerHTML = `<strong>Topic:</strong> ${q.topic}`;
        div.appendChild(topicElement);
    }
    if (q.year) {
        const yearElement = document.createElement("p");
        // Changed class to 'question-metadata' to match the updated CSS
        yearElement.className = "question-metadata"; 
        yearElement.innerHTML = `<strong>Source:</strong> ${q.year}`;
        div.appendChild(yearElement);
    }
    if (q.tag) {
        const tagElement = document.createElement("p");
        // Changed class to 'question-metadata' to match the updated CSS
        tagElement.className = "question-metadata"; 
        tagElement.innerHTML = `<strong>Tag:</strong> ${q.tag}`;
        div.appendChild(tagElement);
    }
    // --- END: ADDED METADATA DISPLAY ---

    let optionsHtml = q.options.map((option, index) =>
      `<label><input type="radio" name="question${i}" value="${index}"> ${option}</label><br>`
    ).join('');

    div.innerHTML += `<p><strong>Q${i + 1}:</strong> ${q.q}</p><div class="options">${optionsHtml}</div>`;
    container.appendChild(div);
  });

  const submit = document.createElement("button");
  submit.textContent = "Check Answers";
  submit.onclick = (e) => {
    e.preventDefault();
    submit.disabled = true;

    let score = 0;
    questions.forEach((q, i) => {
      const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
      const result = document.createElement("div");
      if (selectedOption && parseInt(selectedOption.value) === q.correct) {
        result.className = "correct-answer";
        result.innerText = `✔️ Correct!`;
        score++;
      } else {
        result.className = "incorrect-answer";
        result.innerText = `❌ Incorrect. Correct answer was: ${q.options[q.correct]}`;
      }
      container.children[i].appendChild(result);
      updateProgress(i + 1, questions.length);
    });

    const percent = Math.round((score / questions.length) * 100);
    const comment = percent >= 90 ? "🎉 Excellent work!" : percent >= 70 ? "✅ Good job!" : percent >= 50 ? "⚠️ Fair attempt." : "❌ Keep practicing!";
    resultDiv.innerHTML = `<strong>Your Score: ${score}/${questions.length} (${percent}%)</strong><br><em>${comment}</em>`;

    const restart = document.createElement("button");
    restart.textContent = "🔁 Restart Quiz";
    restart.onclick = renderQuiz;
    container.appendChild(restart);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  container.appendChild(submit);
  setTimeout(() => container.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
}


function renderShortAnswers() {
  if (blockDemo("short")) return;

  const container = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  container.innerHTML = "";
  resultDiv.innerHTML = "";

  const questions = hasFullAccess ? shuffle(shortData).slice(0, 10) : shortData.slice(0, 3);
  updateProgress(0, questions.length);

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";

    // --- START: ADDED METADATA DISPLAY FOR SHORT ANSWER ---
    if (q.topic) {
        const topicElement = document.createElement("p");
        // Changed class to 'question-metadata' to match the updated CSS
        topicElement.className = "question-metadata"; 
        topicElement.innerHTML = `<strong>Topic:</strong> ${q.topic}`;
        div.appendChild(topicElement);
    }
    if (q.year) {
        const yearElement = document.createElement("p");
        // Changed class to 'question-metadata' to match the updated CSS
        yearElement.className = "question-metadata"; 
        yearElement.innerHTML = `<strong>Source:</strong> ${q.year}`;
        div.appendChild(yearElement);
    }
    if (q.tag) {
        const tagElement = document.createElement("p");
        // Changed class to 'question-metadata' to match the updated CSS
        tagElement.className = "question-metadata"; 
        tagElement.innerHTML = `<strong>Tag:</strong> ${q.tag}`;
        div.appendChild(tagElement);
    }
    // --- END: ADDED METADATA DISPLAY ---

    div.innerHTML += `<p><strong>Q${i + 1}:</strong> ${q.q}</p>
      <input type="text" id="short${i}" placeholder="Type your answer..." style="width:100%;padding:10px;margin-top:10px;" />`;
    container.appendChild(div);
  });

  const submit = document.createElement("button");
  submit.textContent = "Check Answers";
  submit.onclick = (e) => {
    e.preventDefault();
    submit.disabled = true;

    let score = 0;
    questions.forEach((q, i) => {
      const userInput = document.getElementById(`short${i}`).value.trim().toLowerCase();
      const correctAnswers = q.answer.map(a => a.toLowerCase());
      const result = document.createElement("div");
      if (correctAnswers.includes(userInput)) {
        result.className = "correct-answer";
        result.innerText = `✔️ Correct! ${q.explanation}`;
        score++;
      } else {
        result.className = "incorrect-answer";
        result.innerText = `❌ Incorrect. ${q.explanation}`;
      }
      container.children[i].appendChild(result);
      updateProgress(i + 1, questions.length);
    });

    const percent = Math.round((score / questions.length) * 100);
    const comment = percent >= 90 ? "🎉 Excellent work!" : percent >= 70 ? "✅ Good job!" : percent >= 50 ? "⚠️ Fair attempt." : "❌ Keep practicing!";
    resultDiv.innerHTML = `<strong>Your Score: ${score}/${questions.length} (${percent}%)</strong><br><em>${comment}</em>`;

    const restart = document.createElement("button");
    restart.textContent = "🔁 Restart Quiz";
    restart.onclick = renderShortAnswers;
    container.appendChild(restart);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  container.appendChild(submit);
  setTimeout(() => container.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
}

function renderFlashcardTopics() {
  if (blockDemo("flashcard")) return;

  const container = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  container.innerHTML = "<h2>🃏 Choose a Flashcard Topic:</h2>";
  resultDiv.innerHTML = "";
  updateProgress(0, 1); // reset

  // Added this div to wrap topic buttons for better styling/layout with flexbox
  const topicButtonsDiv = document.createElement("div");
  topicButtonsDiv.className = "flashcard-topic-buttons"; 
  container.appendChild(topicButtonsDiv);


  Object.keys(flashcards).forEach(topic => {
    const btn = document.createElement("button");
    btn.innerText = topic;
    btn.onclick = () => showFlashcard(topic);
    topicButtonsDiv.appendChild(btn); // Append to the new div
  });
}
function showFlashcard(topic) {
  const container = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  container.innerHTML = "";
  resultDiv.innerHTML = "";

  const cards = flashcards[topic];
  let current = 0;

  const cardDiv = document.createElement("div");
  cardDiv.className = "flashcard";

  const inner = document.createElement("div");
  inner.className = "card-inner";

  const front = document.createElement("div");
  front.className = "card-front";

  const back = document.createElement("div");
  back.className = "card-back";

  inner.appendChild(front);
  inner.appendChild(back);
  cardDiv.appendChild(inner);
  container.appendChild(cardDiv);

  cardDiv.onclick = () => {
    cardDiv.classList.toggle("flipped");
  };

  // Create a container for navigation buttons
  const navButtonsContainer = document.createElement("div");
  navButtonsContainer.className = "flashcard-nav-buttons";
  container.appendChild(navButtonsContainer);

  const prevBtn = document.createElement("button");
  prevBtn.innerText = "⬅️ Previous";
  prevBtn.onclick = () => {
    if (current > 0) {
      current--;
      updateFlashcard();
    }
  };
  navButtonsContainer.appendChild(prevBtn);

  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Next ➡️";
  nextBtn.onclick = () => {
    if (current < cards.length - 1) {
      current++;
      updateFlashcard();
    } else {
      renderFlashcardTopics(); // Go back to topics after last card
    }
  };
  navButtonsContainer.appendChild(nextBtn);

  function updateFlashcard() {
    updateProgress(current + 1, cards.length);
    front.innerText = cards[current].front;
    back.innerText = cards[current].back;
    cardDiv.classList.remove("flipped");
    prevBtn.disabled = current === 0;
    nextBtn.innerText = current < cards.length - 1 ? "Next ➡️" : "🔁 Back to Topics";
  }

  updateFlashcard();
}
function renderEssaySimulation() {
  if (blockDemo("essay")) return;

  const container = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  container.innerHTML = "";
  resultDiv.innerHTML = "";

  const essays = hasFullAccess ? shuffle(essayData).filter(e => e.steps) : essayData.filter(e => e.steps).slice(0, 1);
  if (essays.length === 0) {
    container.innerHTML = "<p>⚠️ No essay simulations available.</p>";
    return;
  }

  const essay = essays[0];
  let currentStepIndex = 0;
  let score = 0;

  const title = document.createElement("h3");
  title.innerText = `📝 Essay: ${essay.title}`;
  container.appendChild(title);

  const questionDiv = document.createElement("div");
  questionDiv.className = "question";
  container.appendChild(questionDiv);

  const feedbackDiv = document.createElement("div");
  feedbackDiv.className = "feedback-section"; // Added class for consistent styling
  container.appendChild(feedbackDiv);

  function showStep(index) {
    questionDiv.innerHTML = "";
    feedbackDiv.innerHTML = "";
    updateProgress(index + 1, essay.steps.length); // Adjusted for 1-based indexing in progress text

    const step = essay.steps[index];

    // --- START: ADDED METADATA DISPLAY FOR ESSAY SIMULATION ---
    // Metadata for Essay Simulation is typically at the essay object level
    if (essay.topic) {
        const topicElement = document.createElement("p");
        // Changed class to 'question-metadata' to match the updated CSS
        topicElement.className = "question-metadata"; 
        topicElement.innerHTML = `<strong>Topic:</strong> ${essay.topic}`;
        questionDiv.appendChild(topicElement);
    }
    if (essay.year) {
        const yearElement = document.createElement("p");
        // Changed class to 'question-metadata' to match the updated CSS
        yearElement.className = "question-metadata"; 
        yearElement.innerHTML = `<strong>Source:</strong> ${essay.year}`;
        questionDiv.appendChild(yearElement);
    }
    if (essay.tag) {
        const tagElement = document.createElement("p");
        // Changed class to 'question-metadata' to match the updated CSS
        tagElement.className = "question-metadata"; 
        tagElement.innerHTML = `<strong>Tag:</strong> ${essay.tag}`;
        questionDiv.appendChild(tagElement);
    }
    // --- END: ADDED METADATA DISPLAY ---

    const p = document.createElement("p");
    p.innerHTML = `<strong>Step ${index + 1}:</strong> ${step.q}`;
    questionDiv.appendChild(p);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";
    step.options.forEach((opt, i) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="step" value="${i}"> ${opt}`;
      optionsDiv.appendChild(label);
    });
    questionDiv.appendChild(optionsDiv);

    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit Answer";
    submitBtn.onclick = () => {
      const selected = document.querySelector('input[name="step"]:checked');
      if (!selected) return alert("Please select an answer.");
      submitBtn.disabled = true;

      const correct = parseInt(selected.value) === step.correct;
      const explanation = document.createElement("div");
      explanation.className = correct ? "correct-answer" : "incorrect-answer";
      explanation.innerText = (correct ? "✔️ Correct: " : "❌ Incorrect: ") + step.explanation;
      if (correct) score++;

      feedbackDiv.appendChild(explanation);
      document.querySelectorAll('input[name="step"]').forEach(input => input.disabled = true);

      const nextBtn = document.createElement("button");
      nextBtn.innerText = index < essay.steps.length - 1 ? "Next Step ➡️" : "Finish & Score";
      nextBtn.onclick = () => {
        if (index < essay.steps.length - 1) {
          showStep(++currentStepIndex);
        } else {
          showFinalScore();
        }
      };
      feedbackDiv.appendChild(nextBtn);
    };

    questionDiv.appendChild(submitBtn);
  }

  function showFinalScore() {
    container.innerHTML = "";
    updateProgress(essay.steps.length, essay.steps.length);

    const final = document.createElement("div");
    final.id = "essay-score";

    const percent = Math.round((score / essay.steps.length) * 100);
    const comment = percent >= 90 ? "🎉 Excellent work!" : percent >= 70 ? "✅ Good job!" : percent >= 50 ? "⚠️ Fair attempt." : "❌ Keep practicing!";
    final.innerHTML = `<strong>Essay Score: ${score}/${essay.steps.length} (${percent}%)</strong><br><em>${comment}</em>`;

    const restart = document.createElement("button");
    restart.innerText = "🔁 Try Another Essay";
    restart.onclick = renderEssaySimulation;
    final.appendChild(restart);

    container.appendChild(final);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  showStep(currentStepIndex);
}