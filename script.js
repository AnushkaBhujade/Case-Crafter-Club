// Function for smooth scrolling to a section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// JavaScript for FAQ Toggle
document.querySelectorAll(".toggle-answer").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.parentElement.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      button.textContent = "+";
    } else {
      answer.style.display = "block";
      button.textContent = "-";
    }
  });
});
