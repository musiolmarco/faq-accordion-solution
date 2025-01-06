const faqHeaders = document.querySelectorAll(".faq-header");

faqHeaders.forEach((header) => {
  header.addEventListener("click", toggleFaq);

  header.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFaq(e);
    }
  });
});

function toggleFaq(event) {
  const header = event.currentTarget;
  const content = header.nextElementSibling;
  const icon = header.querySelector(".toggle-icon");

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.src = "assets/images/icon-plus.svg";
  } else {
    content.style.display = "block";
    icon.src = "assets/images/icon-minus.svg";
  }
}
