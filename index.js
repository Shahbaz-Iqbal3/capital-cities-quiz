// Quiz App for Country Capitals

// Array of countries and their capitals
const countriesAndCapitals = [
  ["Afghanistan", "Kabul", "🇦🇫", "Asia"],
  ["Albania", "Tirana", "🇦🇱", "Europe"],
  ["Algeria", "Algiers", "🇩🇿", "Africa"],
  ["Andorra", "Andorra la Vella", "🇦🇩", "Europe"],
  ["Angola", "Luanda", "🇦🇴", "Africa"],
  ["Antigua and Barbuda", "Saint John's", "🇦🇬", "North America"],
  ["Argentina", "Buenos Aires", "🇦🇷", "South America"],
  ["Armenia", "Yerevan", "🇦🇲", "Asia"],
  ["Australia", "Canberra", "🇦🇺", "Oceania"],
  ["Austria", "Vienna", "🇦🇹", "Europe"],
  ["Azerbaijan", "Baku", "🇦🇿", "Asia"],
  ["Bahamas", "Nassau", "🇧🇸", "North America"],
  ["Bahrain", "Manama", "🇧🇭", "Asia"],
  ["Bangladesh", "Dhaka", "🇧🇩", "Asia"],
  ["Barbados", "Bridgetown", "🇧🇧", "North America"],
  ["Belarus", "Minsk", "🇧🇾", "Europe"],
  ["Belgium", "Brussels", "🇧🇪", "Europe"],
  ["Belize", "Belmopan", "🇧🇿", "North America"],
  ["Benin", "Porto-Novo", "🇧🇯", "Africa"],
  ["Bhutan", "Thimphu", "🇧🇹", "Asia"],
  ["Bolivia (Plurinational State of)", "Sucre", "🇧🇴", "South America"],
  ["Bosnia and Herzegovina", "Sarajevo", "🇧🇦", "Europe"],
  ["Botswana", "Gaborone", "🇧🇼", "Africa"],
  ["Brazil", "Brasília", "🇧🇷", "South America"],
  ["Brunei Darussalam", "Bandar Seri Begawan", "🇧🇳", "Asia"],
  ["Bulgaria", "Sofia", "🇧🇬", "Europe"],
  ["Burkina Faso", "Ouagadougou", "🇧🇫", "Africa"],
  ["Burundi", "Gitega", "🇧🇮", "Africa"],
  ["Cabo Verde", "Praia", "🇨🇻", "Africa"],
  ["Cambodia", "Phnom Penh", "🇰🇭", "Asia"],
  ["Cameroon", "Yaoundé", "🇨🇲", "Africa"],
  ["Canada", "Ottawa", "🇨🇦", "North America"],
  ["Central African Republic", "Bangui", "🇨🇫", "Africa"],
  ["Chad", "N'Djamena", "🇹🇩", "Africa"],
  ["Chile", "Santiago", "🇨🇱", "South America"],
  ["China", "Beijing", "🇨🇳", "Asia"],
  ["Colombia", "Bogotá", "🇨🇴", "South America"],
  ["Comoros", "Moroni", "🇰🇲", "Africa"],
  ["Congo", "Brazzaville", "🇨🇬", "Africa"],
  ["Costa Rica", "San José", "🇨🇷", "North America"],
  ["Côte D'Ivoire", "Yamoussoukro", "🇨🇮", "Africa"],
  ["Croatia", "Zagreb", "🇭🇷", "Europe"],
  ["Cuba", "Havana", "🇨🇺", "North America"],
  ["Cyprus", "Nicosia", "🇨🇾", "Europe"],
  ["Czechia", "Prague", "🇨🇿", "Europe"],
  ["Democratic People's Republic of Korea", "Pyongyang", "🇰🇵", "Asia"],
  ["Democratic Republic of the Congo", "Kinshasa", "🇨🇩", "Africa"],
  ["Denmark", "Copenhagen", "🇩🇰", "Europe"],
  ["Djibouti", "Djibouti", "🇩🇯", "Africa"],
  ["Dominica", "Roseau", "🇩🇲", "North America"],
  ["Dominican Republic", "Santo Domingo", "🇩🇴", "North America"],
  ["Ecuador", "Quito", "🇪🇨", "South America"],
  ["Egypt", "Cairo", "🇪🇬", "Africa"],
  ["El Salvador", "San Salvador", "🇸🇻", "North America"],
  ["Equatorial Guinea", "Malabo", "🇬🇶", "Africa"],
  ["Eritrea", "Asmara", "🇪🇷", "Africa"],
  ["Estonia", "Tallinn", "🇪🇪", "Europe"],
  ["Eswatini", "Mbabane", "🇸🇿", "Africa"],
  ["Ethiopia", "Addis Ababa", "🇪🇹", "Africa"],
  ["Fiji", "Suva", "🇫🇯", "Oceania"],
  ["Finland", "Helsinki", "🇫🇮", "Europe"],
  ["France", "Paris", "🇫🇷", "Europe"],
  ["Gabon", "Libreville", "🇬🇦", "Africa"],
  ["Gambia (Republic of The)", "Banjul", "🇬🇲", "Africa"],
  ["Georgia", "Tbilisi", "🇬🇪", "Asia"],
  ["Germany", "Berlin", "🇩🇪", "Europe"],
  ["Ghana", "Accra", "🇬🇭", "Africa"],
  ["Greece", "Athens", "🇬🇷", "Europe"],
  ["Grenada", "St. George's", "🇬🇩", "North America"],
  ["Guatemala", "Guatemala City", "🇬🇹", "North America"],
  ["Guinea", "Conakry", "🇬🇳", "Africa"],
  ["Guinea Bissau", "Bissau", "🇬🇼", "Africa"],
  ["Guyana", "Georgetown", "🇬🇾", "South America"],
  ["Haiti", "Port-au-Prince", "🇭🇹", "North America"],
  ["Honduras", "Tegucigalpa", "🇭🇳", "North America"],
  ["Hungary", "Budapest", "🇭🇺", "Europe"],
  ["Iceland", "Reykjavik", "🇮🇸", "Europe"],
  ["India", "New Delhi", "🇮🇳", "Asia"],
  ["Indonesia", "Jakarta", "🇮🇩", "Asia"],
  ["Iran (Islamic Republic of)", "Tehran", "🇮🇷", "Asia"],
  ["Iraq", "Baghdad", "🇮🇶", "Asia"],
  ["Ireland", "Dublin", "🇮🇪", "Europe"],
  ["Israel", "Jerusalem", "🇮🇱", "Asia"],
  ["Italy", "Rome", "🇮🇹", "Europe"],
  ["Jamaica", "Kingston", "🇯🇲", "North America"],
  ["Japan", "Tokyo", "🇯🇵", "Asia"],
  ["Jordan", "Amman", "🇯🇴", "Asia"],
  ["Kazakhstan", "Astana", "🇰🇿", "Asia"],
  ["Kenya", "Nairobi", "🇰🇪", "Africa"],
  ["Kiribati", "South Tarawa", "🇰🇮", "Oceania"],
  ["Kuwait", "Kuwait City", "🇰🇼", "Asia"],
  ["Kyrgyzstan", "Bishkek", "🇰🇬", "Asia"],
  ["Lao People’s Democratic Republic", "Vientiane", "🇱🇦", "Asia"],
  ["Latvia", "Riga", "🇱🇻", "Europe"],
  ["Lebanon", "Beirut", "🇱🇧", "Asia"],
  ["Lesotho", "Maseru", "🇱🇸", "Africa"],
  ["Liberia", "Monrovia", "🇱🇷", "Africa"],
  ["Libya", "Tripoli", "🇱🇾", "Africa"],
  ["Liechtenstein", "Vaduz", "🇱🇮", "Europe"],
  ["Lithuania", "Vilnius", "🇱🇹", "Europe"],
  ["Luxembourg", "Luxembourg", "🇱🇺", "Europe"],
  ["Madagascar", "Antananarivo", "🇲🇬", "Africa"],
  ["Malawi", "Lilongwe", "🇲🇼", "Africa"],
  ["Malaysia", "Kuala Lumpur", "🇲🇾", "Asia"],
  ["Maldives", "Malé", "🇲🇻", "Asia"],
  ["Mali", "Bamako", "🇲🇱", "Africa"],
  ["Malta", "Valletta", "🇲🇹", "Europe"],
  ["Marshall Islands", "Majuro", "🇲🇭", "Oceania"],
  ["Mauritania", "Nouakchott", "🇲🇷", "Africa"],
  ["Mauritius", "Port Louis", "🇲🇺", "Africa"],
  ["Mexico", "Mexico City", "🇲🇽", "North America"],
  ["Micronesia (Federated States of)", "Palikir", "🇫🇲", "Oceania"],
  ["Monaco", "Monaco", "🇲🇨", "Europe"],
  ["Mongolia", "Ulaanbaatar", "🇲🇳", "Asia"],
  ["Montenegro", "Podgorica", "🇲🇪", "Europe"],
  ["Morocco", "Rabat", "🇲🇦", "Africa"],
  ["Mozambique", "Maputo", "🇲🇿", "Africa"],
  ["Myanmar", "Naypyidaw", "🇲🇲", "Asia"],
  ["Namibia", "Windhoek", "🇳🇦", "Africa"],
  ["Nauru", "Yaren", "🇳🇷", "Oceania"],
  ["Nepal", "Kathmandu", "🇳🇵", "Asia"],
  ["Netherlands", "Amsterdam", "🇳🇱", "Europe"],
  ["New Zealand", "Wellington", "🇳🇿", "Oceania"],
  ["Nicaragua", "Managua", "🇳🇮", "North America"],
  ["Niger", "Niamey", "🇳🇪", "Africa"],
  ["Nigeria", "Abuja", "🇳🇬", "Africa"],
  ["North Macedonia", "Skopje", "🇲🇰", "Europe"],
  ["Norway", "Oslo", "🇳🇴", "Europe"],
  ["Oman", "Muscat", "🇴🇲", "Asia"],
  ["Pakistan", "Islamabad", "🇵🇰", "Asia"],
  ["Palau", "Ngerulmud", "🇵🇼", "Oceania"],
  ["Panama", "Panama City", "🇵🇦", "North America"],
  ["Papua New Guinea", "Port Moresby", "🇵🇬", "Oceania"],
  ["Paraguay", "Asunción", "🇵🇾", "South America"],
  ["Peru", "Lima", "🇵🇪", "South America"],
  ["Philippines", "Manila", "🇵🇭", "Asia"],
  ["Poland", "Warsaw", "🇵🇱", "Europe"],
  ["Portugal", "Lisbon", "🇵🇹", "Europe"],
  ["Qatar", "Doha", "🇶🇦", "Asia"],
  ["Republic of Korea", "Seoul", "🇰🇷", "Asia"],
  ["Republic of Moldova", "Chișinău", "🇲🇩", "Europe"],
  ["Romania", "Bucharest", "🇷🇴", "Europe"],
  ["Russian Federation", "Moscow", "🇷🇺", "Europe"],
  ["Rwanda", "Kigali", "🇷🇼", "Africa"],
  ["Saint Kitts and Nevis", "Basseterre", "🇰🇳", "North America"],
  ["Saint Lucia", "Castries", "🇱🇨", "North America"],
  ["Saint Vincent and the Grenadines", "Kingstown", "🇻🇨", "North America"],
  ["Samoa", "Apia", "🇼🇸", "Oceania"],
  ["San Marino", "San Marino", "🇸🇲", "Europe"],
  ["Sao Tome and Principe", "São Tomé", "🇸🇹", "Africa"],
  ["Saudi Arabia", "Riyadh", "🇸🇦", "Asia"],
  ["Senegal", "Dakar", "🇸🇳", "Africa"],
  ["Serbia", "Belgrade", "🇷🇸", "Europe"],
  ["Seychelles", "Victoria", "🇸🇨", "Africa"],
  ["Sierra Leone", "Freetown", "🇸🇱", "Africa"],
  ["Singapore", "Singapore", "🇸🇬", "Asia"],
  ["Slovakia", "Bratislava", "🇸🇰", "Europe"],
  ["Slovenia", "Ljubljana", "🇸🇮", "Europe"],
  ["Solomon Islands", "Honiara", "🇸🇧", "Oceania"],
  ["Somalia", "Mogadishu", "🇸🇴", "Africa"],
  ["South Africa", "Pretoria", "🇿🇦", "Africa"],
  ["South Sudan", "Juba", "🇸🇸", "Africa"],
  ["Spain", "Madrid", "🇪🇸", "Europe"],
  ["Sri Lanka", "Sri Jayawardenepura Kotte", "🇱🇰", "Asia"],
  ["State of Palestine", "Ramallah", "🇵🇸", "Asia"],
  ["Sudan", "Khartoum", "🇸🇩", "Africa"],
  ["Suriname", "Paramaribo", "🇸🇷", "South America"],
  ["Sweden", "Stockholm", "🇸🇪", "Europe"],
  ["Switzerland", "Bern", "🇨🇭", "Europe"],
  ["Syrian Arab Republic", "Damascus", "🇸🇾", "Asia"],
  ["Tajikistan", "Dushanbe", "🇹🇯", "Asia"],
  ["Thailand", "Bangkok", "🇹🇭", "Asia"],
  ["Timor-Leste", "Dili", "🇹🇱", "Asia"],
  ["Togo", "Lomé", "🇹🇬", "Africa"],
  ["Tonga", "Nuku'alofa", "🇹🇴", "Oceania"],
  ["Trinidad and Tobago", "Port of Spain", "🇹🇹", "North America"],
  ["Tunisia", "Tunis", "🇹🇳", "Africa"],
  ["Turkey", "Ankara", "🇹🇷", "Asia"],
  ["Turkmenistan", "Ashgabat", "🇹🇲", "Asia"],
  ["Tuvalu", "Funafuti", "🇹🇻", "Oceania"],
  ["Uganda", "Kampala", "🇺🇬", "Africa"],
  ["Ukraine", "Kyiv", "🇺🇦", "Europe"],
  ["United Arab Emirates", "Abu Dhabi", "🇦🇪", "Asia"],
  ["United Kingdom", "London", "🇬🇧", "Europe"],
  ["United Republic of Tanzania", "Dodoma", "🇹🇿", "Africa"],
  ["United States of America", "Washington, D.C.", "🇺🇸", "North America"],
  ["Uruguay", "Montevideo", "🇺🇾", "South America"],
  ["Uzbekistan", "Tashkent", "🇺🇿", "Asia"],
  ["Vanuatu", "Port Vila", "🇻🇺", "Oceania"],
  ["Venezuela (Bolivarian Republic of)", "Caracas", "🇻🇪", "South America"],
  ["Viet Nam", "Hanoi", "🇻🇳", "Asia"],
  ["Yemen", "Sana'a", "🇾🇪", "Asia"],
  ["Zambia", "Lusaka", "🇿🇲", "Africa"],
  ["Zimbabwe", "Harare", "🇿🇼", "Africa"]
];


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
const selectvalue = document.getElementById("continent")
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
  selectvalue.textContent= currentQuestion[3]
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
