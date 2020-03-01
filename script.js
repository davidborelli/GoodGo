const rawText = "Good Go";

const text = document.getElementById("text");
const letters = rawText.split("");

letters.forEach(letter => {
  const newElement = document.createElement("span");
  newElement.classList.add("letter");
  newElement.textContent = letter;

  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  newElement.style.animationDelay = `${random(0.1, 0.6)}s`;
  newElement.style.animationDuration = `${random(0.4, 1)}s`;

  Math.random() > 0.5 && newElement.classList.add("rev");

  text.appendChild(newElement);
});
