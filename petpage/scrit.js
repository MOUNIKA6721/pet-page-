let isHappy = true;

function toggleMood() {
  const petImage = document.getElementById('petImage');
  const moodText = document.getElementById('petMood');

  if (isHappy) {
    petImage.src = 'bruno_sad.jpg';
    moodText.textContent = 'Mood: 😢 Feeling a little down...';
  } else {
    petImage.src = 'bruno_happy.jpg';
    moodText.textContent = 'Mood: 🐾 Happy!';
  }

  isHappy = !isHappy;
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}