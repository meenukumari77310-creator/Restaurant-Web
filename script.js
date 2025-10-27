// Dynamic greeting based on time
const heroSection = document.querySelector('.hero-section');
const currentHour = new Date().getHours();

let greetingMessage = "Welcome to Foodie Restaurant";
if (currentHour >= 6 && currentHour < 12) {
  greetingMessage = "Good Morning! Start your day right!";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingMessage = "Good Afternoon! Enjoy a delicious meal!";
} else if (currentHour >= 18 && currentHour < 22) {
  greetingMessage = "Good Evening! Dinner awaits!";
} else {
  greetingMessage = "Welcome to Foodie — open late!";
}

heroSection.querySelector("h2").textContent = greetingMessage;
