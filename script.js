const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");
const welcome = document.getElementById("welcome");
const imageInput = document.getElementById("imageInput");


// SEND MESSAGE
function sendMessage() {

  const text = input.value.trim();

  if (!text) return;

  welcome.style.display = "none";

  addMessage(text, "user");

  input.value = "";

  // Temporary AI response
  setTimeout(() => {

    const reply = generateReply(text);

    addMessage(reply, "ai");

  }, 700);
}


// ADD MESSAGE
function addMessage(text, type) {

  const message = document.createElement("div");

  message.className = `message ${type}`;

  const bubble = document.createElement("div");

  bubble.className = "bubble";

  bubble.textContent = text;

  message.appendChild(bubble);

  chat.appendChild(message);

  chat.scrollTop = chat.scrollHeight;
}


// BASIC AI DEMO
function generateReply(text) {

  const msg = text.toLowerCase();

  if (msg.includes("hello") ||
      msg.includes("hi")) {

    return "Hello! 👋 I'm Neuron Tech AI. How can I help you today?";
  }

if (msg.includes("algebraic expression")) {
  
  
  return "An algebraic expression is a mathematical phrase that combines numbers, variables (letters representing unknown values), and arithmetic operations like addition and subtraction, without an equals sign. Key Parts of an Expression Variable: A letter like x or y that stands for an unknown number.Constant: A fixed number on its own, like 5 or -7.Coefficient: The number multiplied by a variable, such as 3 in the term 3x.Term: The individual parts of an expression separated by plus or minus signs, like 4x and 2 in 4x + 2. Types of Expressions Monomial: An expression with one term, such as 5x. Binomial: An expression with two terms, such as 2x + 3y.Trinomial: An expression with three terms, such as 2x + 3y + 9.Polynomial: An expression with one or more terms. How to Simplify ExpressionsTo simplify an expression, you combine like terms (terms with the exact same variables and powers) by adding or subtracting their coefficients. For example, in 3x + 5x + 2, you combine 3x and 5x to get 8x + 2.    If you'd like, let me know: Would you like an example of evaluating an expression by plugging in numbers? Do you have a specific algebraic expression you need help simplifying?";
}
  
if (msg.includes("explain html css javascript")) {
  
  return "HTML, CSS, and JavaScript are the three core technologies used to build websites. They work together like the anatomy of a house to create the structure, design, and behavior of a web page.The House Analogy HTML is the structure (the walls, doors, and layout).CSS is the design (the paint, wallpaper, and furniture).JavaScript is the functionality (the light switches, running water, and automated garage door).🧱 1. HTML (HyperText Markup Language) HTML is the skeleton of a web page. It uses tags to tell the browser what content to display on the screen.Purpose: Defines the text, images, headings, and links.Example Code: html <h1> Welcome to My Website </h1>  🎨 2. CSS Cascading Style Sheets";
} 
  
  if (msg.includes("samsung") ||
   msg.includes("samsung mobile")) {
     
     
     return "Samsung Electronics is a South Korean multinational electronics corporation. It is one of the world's largest manufacturers of smartphones, televisions, memory chips, and home appliances.To give you the most relevant information, here is an overview of Samsung's product lines and ecosystems. Samsung's smartphone lineup is divided into specific series catering to different budgets and form factors: Galaxy S Series (Flagship) Galaxy Z Series (Foldables) Galaxy A & M Series (Mid-range / Budget)";
   }
  
  if (msg.includes("android")) {
    
    return "Android is a Linux-based, open-source operating system developed by Google designed primarily for touchscreen mobile devices like smartphones and tablets. First released in 2008, it has grown into the world's most popular operating system, powering billions of devices globally.";
  }    
  
 if (msg.includes("all chemical formula and name")) {
   
   return "A comprehensive reference of common chemical compounds, their names, and formulas Common AcidsHydrochloric acid — \(\{HCl}\)Sulfuric acid — \(\t{H}_2\{SO}_4\)Nitric acid — HNO_{3}\)Acetic acid — \{CH}_3\text{COOH}\)Carbonic acid — \(\text{H}_2\text{CO}_3\)Phosphoric acid — \(\text{H}_3\text{PO}_4\) Common BasesSodium hydroxide — \(\text{NaOH}\)Potassium hydroxide — \(\text{KOH}\)Calcium hydroxide — \(\text{Ca(OH)}_{2}\)Ammonium hydroxide — \(\text{NH}_4\text{OH}\)Magnesium hydroxide — \(\text{Mg(OH)}_{2}\) Sodium chloride (Table Salt) — \(\text{NaCl}\)Calcium carbonate (Limestone) — \(\text{CaCO}_{3}\)Sodium bicarbonate (Baking Soda) — \(\text{NaHCO}_{3}\)Sodium carbonate (Washing Soda) — \(\text{Na}_2\text{CO}_3\)Potassium nitrate — \(\text{KNO}_{3}\)Copper sulfate — \(\text{CuSO}_{4}\) Water — \(\text{H}_2\text{O}\)Carbon dioxide — \(\text{CO}_{2}\)Carbon monoxide — \(\text{CO}\)Ammonia — \(\text{NH}_{3}\)Sulfur dioxide — \(\text{SO}_{2}\)Methane — \(\text{CH}_{4}\) Organic CompoundsGlucose — \(\text{C}_6\text{H}_{12}\text{O}_6\)Sucrose — \(\text{C}_{12}\{H}_{22}\{O}_{11}\)Ethanol — \(\text{C}_2\{H}_5\{OH}\)Benzene — \(\{C}_6\{H}_6\)Acetone — \(\{C}_3\{H}_6\{O}\)Urea — \(\{CO(NH}_{2})_{2}\) "
 }
  
  if (msg.includes("garo language ai models")) {
    
    return "Garo language AI models include specialized tools like Garo ASR for speech-to-text and Garo OCR for text recognition, developed to support the low-resource Tibeto-Burman language Key Garo AI and Language Technologies Garo ASR: An automatic speech recognition model built by MWire Labs using the Whisper architecture (244M parameters) to convert Latin-script Garo (A'chik) speech into text with under 10% word error rate. Garo OCR: An optical character recognition model fine-tuned on Florence-2-base-ft using 80,000 image-text pairs to digitize printed and handwritten Garo text. Adi-Vaani: An upcoming government AI translation platform by the Ministry of Tribal Affairs designed to support documentation and digital access for tribal languages, with Garo currently in development. ";
  }
  
  if (msg.includes("who are you")) {

    return "I'm Neuron Tech AI, an AI assistant build by Nikrangra Ch Sangma.";
  }

  if (msg.includes("apple iphone") ||
  msg.includes("iphone")) {
    
    return"Apple iPhones represent the benchmark for premium smartphones, delivering industry-leading performance, exceptional camera quality, and a highly secure iOS ecosystem. Whether you are looking for the absolute latest cutting-edge technology or a high-value previous-generation device, Apple offers distinct lineups tailored to different budgets and user needs.The current flagship and popular iPhone models";
  }
  
  if (msg.includes("ai")) {

    return "Artificial Intelligence is technology that enables computers to perform tasks that normally require human intelligence 🛠️ Path 1: The AI User & Automation Specialist (Non-Technical) Best for professionals, students, and creators who want to use AI to supercharge their workflows without writing complex code. [1] (https://www.coursera.org/ Phase 1: Master Daily AI Tools (Weeks 1–2) Pin a top LLM like ChatGPT, Claude, or Google Gemini to your desktop. Use it as your primary search engine and brainstorming partner.Learn Structured Prompting. Master the four core pillars: Role (who the AI is), Context (background data), Command (the task), and Format (how to present the output) 📊 Direct Comparison: Which Path Is Yours? FeatureAI User & AutomationAI / ML Engineer Primary GoalStreamline work, automate tasks, create content Build applications, train models, write software Coding Needed?❌ No code required🚀 Heavy Python proficiencyMath Needed?❌ None📈 Linear algebra, calculus, statsKey Tools ChatGPT, Claude, Zapier, NotebookLM Python, PyTorch, Hugging Face, SQLTime Investment1 to 4 weeks for proficiency 6 months to a year of intense study.";
  }

  if (msg.includes("explain ai learn")){
    
    return "How you should learn AI depends entirely on your goal. Are you looking to become a technical AI Engineer who codes models, or do you want to become a power user who leverages AI to automate work and boost productivity? Choose the path that fits your goals: Path 1: The AI User & Automation Specialist Non-Technical Best for professionals, students, and creators who want to use AI to supercharge their workflows without writing complex code. Phase 1: Master Daily AI Tools Weeks 1–2 Pin a top LLM like ChatGPT, Claude, or Google Gemini to your desktop. Use it as your primary search engine and brainstorming partner.Learn Structured Prompting. Master the four core pillars: Role who the AI is, Context background data, Command the task, and Format (how to present the output.";
  }
  
  if (msg.includes("polynomial") ||
  msg.includes("what is polynomial")) {
    
    return "A polynomial is a math expression made up of constants, variables, and exponents combined using addition, subtraction, and multiplication. Key Parts of a PolynomialTerm: Parts of the expression separated by plus or minus signs.Variable: A letter (like x or y) that represents an unknown value.Coefficient: A real number multiplied by a variable.Exponent: The power to which the variable is raised. It must be a whole number (\(0, 1, 2, \dots\)).Constant: A fixed number without a variable (like 5 or -7).  Types of Polynomials Monomial: One term (e.g., 5x²).Binomial: Two terms (e.g., x + 3).Trinomial: Three terms (e.g., x² + 2x - 5).Degree: The highest exponent in the expression, which defines its type (such as linear for degree 1 or quadratic for degree 2).";
  }
  
  if (msg.includes("python")) {

    return "Python is a popular programming language used for AI, automation, web development and data science.";
  }

  if (msg.includes("study")) {

    return "I can help you create a study plan, explain lessons, make quizzes and practice questions.";
  } 
  
  if (msg.includes("ideas")) {
    
    return "An idea is a mental thought, plan, opinion, or image formed in the mind through understanding, reason, or imagination.Meaning and DefinitionsThought or Plan: A suggestion or purpose for action (e.g., a good idea for a project).Belief or Opinion: An outlook or conviction someone holds about a topic.Philosophy: A mental impression or a foundational concept representing an object or abstraction. You can read more about its history and definition on Encyclopædia Britannica.Synonyms: Merriam-Webster lists related terms like concept, thought, notion, impression, and conception.How to Generate IdeasAsk Questions: Use words like who, what, where, when, why, and how to stay curious.Write Everything Down: Keep a notebook to capture thoughts before you forget them.Mix Concepts: Combine two different topics or experiences to create new connections.If you are looking for specific inspiration, tell me:What topic or project are you working on?What is your main goal?I can share targeted ideas for your situation.";
  }
  
  if (msg.includes("give me creative ideas")) {
    
    return "It looks like your request is wide open! Ideas are the foundational building blocks of innovation, problem-solving, and personal expression.To give you the most relevant inspiration, could you let me know what kind of ideas you are looking for? For example:Business & Startups: Side hustles, tech innovations, or marketing campaigns?Creative Projects: Writing prompts, painting concepts, or video topics?Life & Home: Gift choices, room renovations, DIY crafts, or dinner recipes?Ideation Techniques: Brainstorming exercises to help you generate your own concepts?Tell me a bit about your goals or the problem you are trying to solve, and I will brainstorm a tailored list for you!";
  }
  
  if(msg.includes("machine learning") || msg.includes("software course")) {
    
    return "machine learning        Machine learning is a subset of artificial intelligence that develops algorithms allowing computers to learn from data and improve performance without being explicitly programmed. Core Concepts Data Training: Feeding sample data into a statistical algorithm to tune internal parameters.Predictions & Classification: Using patterns to forecast numerical values or categorize discrete labels.Feedback Loop: Comparing model results against error functions to refine accuracy over time.  Main Types Supervised Learning: Training a model using labeled input-output pairs.Unsupervised Learning: Finding hidden structures or clusters inside unlabeled data.Reinforcement Learning: Guiding an agent through trial, error, rewards, and penalties. Would you like to explore a specific programming language like Python for machine learning, or dive deeper into neural networks?GeeksforGeeksMachine Learning Tutorial - GeeksforGeeks Machine Learning Tutorial * Machine learning is a branch of Artificial Intelligence that focuses on developing models and algorithms that let computers learn fr...WikipediaMachine learning - WikipediaModels. A machine learning model is a type of mathematical model that, once trained on a given dataset, can be used to make predictions or classifications on ...OracleWhat Is Machine Learning? | Oracle IndiaAs its name indicates, machine learning works by creating computer-based statistical models that are refined for a given purpose by evaluating training data, ra...YouTube·freeCodeCamp.org11mMachine Learning for Everybody – Full CourseYouTube·IBM Technology 3mMachine Learning Explained: A Guide to ML, AI, & Deep LearningYouTube·Simplilearn3mMachine Learning Full Course 2026 | From Basics to Real ProjectsYouTube·Fireship2:35Machine Learning Explained in 100 Secondswww.youtube.comMachine Learning Full Course for Beginners | Simplilearninformation on topics like news weather sports and traffic reports etc. let's move forward and see what is machine. learning machine learning is a subset of art...";
  }
  
  if (msg.includes('computer science')) {
    
    return "Computer science is the study of computers, computation, information processing, and the design of both hardware and software Core Concepts Algorithms and Data Structures: Step-by-step rules for solving problems and the ways data is organized.Theory of Computation: The mathematical limits and capabilities of what computers can calculate.Software and Hardware: Building both the physical machinery and the programs that run on it.";
  }    
  
  return "I understand your message. 🤖 Connect this frontend to an AI API/backend to get intelligent responses.";
}


// QUICK QUESTIONS
function quickAsk(text) {

  input.value = text;

  sendMessage();
}


// ENTER KEY
function handleEnter(event) {

  if (event.key === "Enter") {
    sendMessage();
  }
}


// NEW CHAT
function newChat() {

  chat.innerHTML = "";

  chat.appendChild(welcome);

  welcome.style.display = "flex";

  input.value = "";

  closeSidebar();
}


// CLEAR CHAT
function clearChat() {

  chat.innerHTML = "";

  chat.appendChild(welcome);

  welcome.style.display = "flex";

  closeSettings();
}


// FOCUS CHAT
function focusChat() {

  input.focus();

  closeSidebar();
}


// HOME
function showHome() {

  newChat();

}


// VOICE
function startVoice() {

  if (!("webkitSpeechRecognition" in window ||
        "SpeechRecognition" in window)) {

    alert("Voice recognition is not supported in this browser.");

    return;
  }

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.lang = "en-IN";

  recognition.interimResults = false;

  recognition.start();

  recognition.onstart = () => {

    input.placeholder = "Listening...";

  };

  recognition.onresult = (event) => {

    input.value =
      event.results[0][0].transcript;

    input.placeholder = "Message Neuron Tech AI...";

  };

  recognition.onerror = () => {

    input.placeholder = "Message Neuron Tech AI...";

  };

  recognition.onend = () => {

    input.placeholder = "Message Neuron Tech AI...";

  };
}


// IMAGE UPLOAD
function openImage() {

  imageInput.click();

}


function imageSelected(event) {

  const file = event.target.files[0];

  if (!file) return;

  welcome.style.display = "none";

  addMessage(
    "🖼 Image selected: " + file.name,
    "user"
  );

  setTimeout(() => {

    addMessage(
      "I received your image. Connect an image-capable AI API to analyze it.",
      "ai"
    );

  }, 700);

}


// SETTINGS
function openSettings() {

  document
    .getElementById("settingsModal")
    .classList.add("show");

}


function closeSettings() {

  document
    .getElementById("settingsModal")
    .classList.remove("show");

}


// THEME
function toggleTheme() {

  document.body.classList.toggle("light");

  const light =
    document.body.classList.contains("light");

  localStorage.setItem(
    "theme",
    light ? "light" : "dark"
  );
}


function changeTheme(theme) {

  if (theme === "light") {

    document.body.classList.add("light");

  } else {

    document.body.classList.remove("light");

  }

  localStorage.setItem("theme", theme);
}


// LOAD THEME
const savedTheme =
  localStorage.getItem("theme");

if (savedTheme === "light") {

  document.body.classList.add("light");

}


// ABOUT
function showAbout() {

  alert(
    "Neuron Tech AI\n\n" +
    "AI chatbot frontend built with HTML, CSS and JavaScript."
  );

}


// MOBILE SIDEBAR
function toggleSidebar() {

  document
    .getElementById("sidebar")
    .classList.toggle("open");

}


function closeSidebar() {

  document
    .getElementById("sidebar")
    .classList.remove("open");

}

