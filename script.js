// Navigation Menu
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
menu.classList.toggle('active');
});

// Image Slider
const slides = document.querySelectorAll('.slide');
const autoSlideInterval = 5000;
let slideIndex = 0;

const showSlide = () => {
slides.forEach((slide) => slide.classList.remove('active'));
slides[slideIndex].classList.add('active');
slideIndex++;
if (slideIndex === slides.length) {
slideIndex = 0;
}
};

let autoSlide = setInterval(showSlide, autoSlideInterval);

// Form Validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const showError = (input, message) => {
const formGroup = input.parentElement;
formGroup.classList.add('error');
const error = formGroup.querySelector('.error-message');
error.innerText = message;
};

const showSuccess = (input) => {
const formGroup = input.parentElement;
formGroup.classList.remove('error');
formGroup.classList.add('success');
};

const checkInputs = () => {
let isValid = true;

const nameValue = nameInput.value.trim();
if (nameValue === '') {
showError(nameInput, 'Name is required');
isValid
= false;
} else {
showSuccess(nameInput);
}

const emailValue = emailInput.value.trim();
if (emailValue === '') {
showError(emailInput, 'Email is required');
isValid = false;
} else if (!isValidEmail(emailValue)) {
showError(emailInput, 'Email is not valid');
isValid = false;
} else {
showSuccess(emailInput);
}

const messageValue = messageInput.value.trim();
if (messageValue === '') {
showError(messageInput, 'Message is required');
isValid = false;
} else {
showSuccess(messageInput);
}

return isValid;
};

const isValidEmail = (email) => {
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return emailRegex.test(email);
};

form.addEventListener('submit', (e) => {
e.preventDefault();
if (checkInputs()) {
// Send form data to server
alert('Form submitted successfully!');
form.reset();
}
});

