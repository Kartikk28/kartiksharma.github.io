// Typing Effect for Hero Section
const roles = ["a Software Engineer", "an Aerospace Engineer", "a Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
const dynamicText = document.querySelector(".dynamic-text");

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        dynamicText.innerHTML += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 50);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        dynamicText.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
