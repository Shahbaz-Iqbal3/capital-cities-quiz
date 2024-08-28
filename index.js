// Quiz App for Country Capitals

// Array of countries and their capitals
const countriesAndCapitals =[
    ["Afghanistan", "Kabul", "🇦🇫"],
    ["Albania", "Tirana", "🇦🇱"],
    ["Algeria", "Algiers", "🇩🇿"],
    ["Andorra", "Andorra la Vella", "🇦🇩"],
    ["Angola", "Luanda", "🇦🇴"],
    ["Antigua and Barbuda", "Saint John's", "🇦🇬"],
    ["Argentina", "Buenos Aires", "🇦🇷"],
    ["Armenia", "Yerevan", "🇦🇲"],
    ["Australia", "Canberra", "🇦🇺"],
    ["Austria", "Vienna", "🇦🇹"],
    ["Azerbaijan", "Baku", "🇦🇿"],
    ["Bahamas", "Nassau", "🇧🇸"],
    ["Bahrain", "Manama", "🇧🇭"],
    ["Bangladesh", "Dhaka", "🇧🇩"],
    ["Barbados", "Bridgetown", "🇧🇧"],
    ["Belarus", "Minsk", "🇧🇾"],
    ["Belgium", "Brussels", "🇧🇪"],
    ["Belize", "Belmopan", "🇧🇿"],
    ["Benin", "Porto-Novo", "🇧🇯"],
    ["Bhutan", "Thimphu", "🇧🇹"],
    ["Bolivia (Plurinational State of)", "Sucre", "🇧🇴"],
    ["Bosnia and Herzegovina", "Sarajevo", "🇧🇦"],
    ["Botswana", "Gaborone", "🇧🇼"],
    ["Brazil", "Brasília", "🇧🇷"],
    ["Brunei Darussalam", "Bandar Seri Begawan", "🇧🇳"],
    ["Bulgaria", "Sofia", "🇧🇬"],
    ["Burkina Faso", "Ouagadougou", "🇧🇫"],
    ["Burundi", "Gitega", "🇧🇮"],
    ["Cabo Verde", "Praia", "🇨🇻"],
    ["Cambodia", "Phnom Penh", "🇰🇭"],
    ["Cameroon", "Yaoundé", "🇨🇲"],
    ["Canada", "Ottawa", "🇨🇦"],
    ["Central African Republic", "Bangui", "🇨🇫"],
    ["Chad", "N'Djamena", "🇹🇩"],
    ["Chile", "Santiago", "🇨🇱"],
    ["China", "Beijing", "🇨🇳"],
    ["Colombia", "Bogotá", "🇨🇴"],
    ["Comoros", "Moroni", "🇰🇲"],
    ["Congo", "Brazzaville", "🇨🇬"],
    ["Costa Rica", "San José", "🇨🇷"],
    ["Côte D'Ivoire", "Yamoussoukro", "🇨🇮"],
    ["Croatia", "Zagreb", "🇭🇷"],
    ["Cuba", "Havana", "🇨🇺"],
    ["Cyprus", "Nicosia", "🇨🇾"],
    ["Czechia", "Prague", "🇨🇿"],
    ["Democratic People's Republic of Korea", "Pyongyang", "🇰🇵"],
    ["Democratic Republic of the Congo", "Kinshasa", "🇨🇩"],
    ["Denmark", "Copenhagen", "🇩🇰"],
    ["Djibouti", "Djibouti", "🇩🇯"],
    ["Dominica", "Roseau", "🇩🇲"],
    ["Dominican Republic", "Santo Domingo", "🇩🇴"],
    ["Ecuador", "Quito", "🇪🇨"],
    ["Egypt", "Cairo", "🇪🇬"],
    ["El Salvador", "San Salvador", "🇸🇻"],
    ["Equatorial Guinea", "Malabo", "🇬🇶"],
    ["Eritrea", "Asmara", "🇪🇷"],
    ["Estonia", "Tallinn", "🇪🇪"],
    ["Eswatini", "Mbabane", "🇸🇿"],
    ["Ethiopia", "Addis Ababa", "🇪🇹"],
    ["Fiji", "Suva", "🇫🇯"],
    ["Finland", "Helsinki", "🇫🇮"],
    ["France", "Paris", "🇫🇷"],
    ["Gabon", "Libreville", "🇬🇦"],
    ["Gambia (Republic of The)", "Banjul", "🇬🇲"],
    ["Georgia", "Tbilisi", "🇬🇪"],
    ["Germany", "Berlin", "🇩🇪"],
    ["Ghana", "Accra", "🇬🇭"],
    ["Greece", "Athens", "🇬🇷"],
    ["Grenada", "St. George's", "🇬🇩"],
    ["Guatemala", "Guatemala City", "🇬🇹"],
    ["Guinea", "Conakry", "🇬🇳"],
    ["Guinea Bissau", "Bissau", "🇬🇼"],
    ["Guyana", "Georgetown", "🇬🇾"],
    ["Haiti", "Port-au-Prince", "🇭🇹"],
    ["Honduras", "Tegucigalpa", "🇭🇳"],
    ["Hungary", "Budapest", "🇭🇺"],
    ["Iceland", "Reykjavik", "🇮🇸"],
    ["India", "New Delhi", "🇮🇳"],
    ["Indonesia", "Jakarta", "🇮🇩"],
    ["Iran (Islamic Republic of)", "Tehran", "🇮🇷"],
    ["Iraq", "Baghdad", "🇮🇶"],
    ["Ireland", "Dublin", "🇮🇪"],
    ["Israel", "Jerusalem", "🇮🇱"],
    ["Italy", "Rome", "🇮🇹"],
    ["Jamaica", "Kingston", "🇯🇲"],
    ["Japan", "Tokyo", "🇯🇵"],
    ["Jordan", "Amman", "🇯🇴"],
    ["Kazakhstan", "Astana", "🇰🇿"],
    ["Kenya", "Nairobi", "🇰🇪"],
    ["Kiribati", "South Tarawa", "🇰🇮"],
    ["Kuwait", "Kuwait City", "🇰🇼"],
    ["Kyrgyzstan", "Bishkek", "🇰🇬"],
    ["Lao People’s Democratic Republic", "Vientiane", "🇱🇦"],
    ["Latvia", "Riga", "🇱🇻"],
    ["Lebanon", "Beirut", "🇱🇧"],
    ["Lesotho", "Maseru", "🇱🇸"],
    ["Liberia", "Monrovia", "🇱🇷"],
    ["Libya", "Tripoli", "🇱🇾"],
    ["Liechtenstein", "Vaduz", "🇱🇮"],
    ["Lithuania", "Vilnius", "🇱🇹"],
    ["Luxembourg", "Luxembourg", "🇱🇺"],
    ["Madagascar", "Antananarivo", "🇲🇬"],
    ["Malawi", "Lilongwe", "🇲🇼"],
    ["Malaysia", "Kuala Lumpur", "🇲🇾"],
    ["Maldives", "Malé", "🇲🇻"],
    ["Mali", "Bamako", "🇲🇱"],
    ["Malta", "Valletta", "🇲🇹"],
    ["Marshall Islands", "Majuro", "🇲🇭"],
    ["Mauritania", "Nouakchott", "🇲🇷"],
    ["Mauritius", "Port Louis", "🇲🇺"],
    ["Mexico", "Mexico City", "🇲🇽"],
    ["Micronesia (Federated States of)", "Palikir", "🇫🇲"],
    ["Monaco", "Monaco", "🇲🇨"],
    ["Mongolia", "Ulaanbaatar", "🇲🇳"],
    ["Montenegro", "Podgorica", "🇲🇪"],
    ["Morocco", "Rabat", "🇲🇦"],
    ["Mozambique", "Maputo", "🇲🇿"],
    ["Myanmar", "Naypyidaw", "🇲🇲"],
    ["Namibia", "Windhoek", "🇳🇦"],
    ["Nauru", "Yaren", "🇳🇷"],
    ["Nepal", "Kathmandu", "🇳🇵"],
    ["Netherlands (Kingdom of the)", "Amsterdam", "🇳🇱"],
    ["New Zealand", "Wellington", "🇳🇿"],
    ["Nicaragua", "Managua", "🇳🇮"],
    ["Niger", "Niamey", "🇳🇪"],
    ["Nigeria", "Abuja", "🇳🇬"],
    ["North Macedonia", "Skopje", "🇲🇰"],
    ["Norway", "Oslo", "🇳🇴"],
    ["Oman", "Muscat", "🇴🇲"],
    ["Pakistan", "Islamabad", "🇵🇰"],
    ["Palau", "Ngerulmud", "🇵🇼"],
    ["Panama", "Panama City", "🇵🇦"],
    ["Papua New Guinea", "Port Moresby", "🇵🇬"],
    ["Paraguay", "Asunción", "🇵🇾"],
    ["Peru", "Lima", "🇵🇪"],
    ["Philippines", "Manila", "🇵🇭"],
    ["Poland", "Warsaw", "🇵🇱"],
    ["Portugal", "Lisbon", "🇵🇹"],
    ["Qatar", "Doha", "🇶🇦"],
    ["Republic of Korea", "Seoul", "🇰🇷"],
    ["Republic of Moldova", "Chișinău", "🇲🇩"],
    ["Romania", "Bucharest", "🇷🇴"],
    ["Russian Federation", "Moscow", "🇷🇺"],
    ["Rwanda", "Kigali", "🇷🇼"],
    ["Saint Kitts and Nevis", "Basseterre", "🇰🇳"],
    ["Saint Lucia", "Castries", "🇱🇨"],
    ["Saint Vincent and the Grenadines", "Kingstown", "🇻🇨"],
    ["Samoa", "Apia", "🇼🇸"],
    ["San Marino", "San Marino", "🇸🇲"],
    ["Sao Tome and Principe", "São Tomé", "🇸🇹"],
    ["Saudi Arabia", "Riyadh", "🇸🇦"],
    ["Senegal", "Dakar", "🇸🇳"],
    ["Serbia", "Belgrade", "🇷🇸"],
    ["Seychelles", "Victoria", "🇸🇨"],
    ["Sierra Leone", "Freetown", "🇸🇱"],
    ["Singapore", "Singapore", "🇸🇬"],
    ["Slovakia", "Bratislava", "🇸🇰"],
    ["Slovenia", "Ljubljana", "🇸🇮"],
    ["Solomon Islands", "Honiara", "🇸🇧"],
    ["Somalia", "Mogadishu", "🇸🇴"],
    ["South Africa", "Pretoria", "🇿🇦"],
    ["South Sudan", "Juba", "🇸🇸"],
    ["Spain", "Madrid", "🇪🇸"],
    ["Sri Lanka", "Colombo", "🇱🇰"],
    ["Sudan", "Khartoum", "🇸🇩"],
    ["Suriname", "Paramaribo", "🇸🇷"],
    ["Sweden", "Stockholm", "🇸🇪"],
    ["Switzerland", "Bern", "🇨🇭"],
    ["Syrian Arab Republic", "Damascus", "🇸🇾"],
    ["Tajikistan", "Dushanbe", "🇹🇯"],
    ["Thailand", "Bangkok", "🇹🇭"],
    ["Timor-Leste", "Dili", "🇹🇱"],
    ["Togo", "Lomé", "🇹🇬"],
    ["Tonga", "Nukuʻalofa", "🇹🇴"],
    ["Trinidad and Tobago", "Port of Spain", "🇹🇹"],
    ["Tunisia", "Tunis", "🇹🇳"],
    ["Türkiye", "Ankara", "🇹🇷"],
    ["Turkmenistan", "Ashgabat", "🇹🇲"],
    ["Tuvalu", "Funafuti", "🇹🇻"],
    ["Uganda", "Kampala", "🇺🇬"],
    ["Ukraine", "Kyiv", "🇺🇦"],
    ["United Arab Emirates", "Abu Dhabi", "🇦🇪"],
    ["United Kingdom of Great Britain and Northern Ireland", "London", "🇬🇧"],
    ["United Republic of Tanzania", "Dodoma", "🇹🇿"],
    ["United States of America", "Washington, D.C.", "🇺🇸"],
    ["Uruguay", "Montevideo", "🇺🇾"],
    ["Uzbekistan", "Tashkent", "🇺🇿"],
    ["Vanuatu", "Port Vila", "🇻🇺"],
    ["Venezuela, Bolivarian Republic of", "Caracas", "🇻🇪"],
    ["Viet Nam", "Hanoi", "🇻🇳"],
    ["Yemen", "Sana'a", "🇾🇪"],
    ["Zambia", "Lusaka", "🇿🇲"],
    ["Zimbabwe", "Harare", "🇿🇼"]
]

// Variables
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let isQuizOver = false;

// DOM elements
const questionElement = document.getElementById("question");
const progressElement = document.getElementById("progress");
const optionsContainer = document.getElementById("options");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prev");
const resetButton = document.getElementById("reset");
const endButton = document.getElementById("end");
let corectElement = ''


prevButton.addEventListener("click", () => {
  if (currentQuestionIndex > 1) {
    currentQuestionIndex = currentQuestionIndex -2
    loadNextQuestion()
  }
})
resetButton.addEventListener("click", () => {
  questionElement.style.display = "block";
  optionsContainer.style.display = "block";
  nextButton.style.display = "block";

  resultElement.textContent = ``;
  scoreElement.textContent = ''

  currentQuestionIndex = 0 
  isQuizOver = false
  incorrectAnswers = 0 
  correctAnswers = 0
  loadNextQuestion()
})
endButton.addEventListener("click", () => {
  isQuizOver = true;
    displayResult();
})

// Function to load the next question
function loadNextQuestion() {
  if (currentQuestionIndex >= countriesAndCapitals.length) {
    // Quiz is over
    isQuizOver = true;
    displayResult();
    return;
  }

  const currentQuestion = countriesAndCapitals[currentQuestionIndex];
  questionElement.textContent = `What is the capital of ${currentQuestion[0]} ${currentQuestion[2]} ?`;
  progressElement.textContent = `score: ${correctAnswers}  ________ ${currentQuestionIndex +1 } / ${countriesAndCapitals.length}`

  optionsContainer.innerHTML = "";

// Create an array to hold the options
let options = [];

// Add the correct answer
options.push(currentQuestion[1]);

// Add the incorrect answers
for (let i = 0; i < 3; i++) {
  options.push(getRandomCapital());
}

// Shuffle the options array
options = options.sort(() => Math.random() - 0.5);

// Create buttons for each option and append them to the container
options.forEach(optionText => {
  const option = document.createElement("button");
  option.textContent = optionText;
  if(option.textContent == currentQuestion[1]){
    corectElement = option
  }
  option.addEventListener("click", checkAnswer);
  optionsContainer.appendChild(option);
});

  currentQuestionIndex++;
}

// Function to get a random capital from the list (excluding the correct one)
function getRandomCapital() {
  let randomCapital;
  do {
    randomCapital =
      countriesAndCapitals[
        Math.floor(Math.random() * countriesAndCapitals.length)
      ][1];
  } while (randomCapital === countriesAndCapitals[currentQuestionIndex][1]);
  return randomCapital;
}


// Function to check the user's answer
function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  console.log(event);
  
  const correctAnswer = countriesAndCapitals[currentQuestionIndex - 1][1];

  if (selectedAnswer === correctAnswer) {
    correctAnswers++;
    event.srcElement.style.borderColor = "green"
  } else {
    incorrectAnswers++;
    event.srcElement.style.borderColor = "red"
   corectElement.style.borderColor = "green"
  }
  optionsContainer.style.pointerEvents = "none"
  
}

// Function to display the final result
function displayResult() {
  questionElement.style.display = "none";
  optionsContainer.style.display = "none";
  nextButton.style.display = "none";

  resultElement.textContent = `Quiz Over!`;
  scoreElement.textContent = `Correct Answers: ${correctAnswers}, \n Incorrect Answers: ${incorrectAnswers}`;
}

// Load the first question
loadNextQuestion();

// Event listener for the next button
nextButton.addEventListener("click", () => {
  if (!isQuizOver) {
    optionsContainer.style.pointerEvents = "all"
    loadNextQuestion();
  }
});

// Sources:
// 1. https://github.com/AnaKarlaZ/FinalProjectWeb
// 2. https://github.com/Preetisharma9958/preeti_sharmatask4.github.io
// 3. https://github.com/robinsonfdossantos/JavaScript_Quiz
// 4. https://github.com/asifpinjari123/Quiz-App
