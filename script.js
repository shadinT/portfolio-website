const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

if(navLinks.style.display === "flex"){
navLinks.style.display = "none";
} else {
navLinks.style.display = "flex";
navLinks.style.flexDirection = "column";
}

});

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for your message! Replace this with Formspree or EmailJS."
);

});
