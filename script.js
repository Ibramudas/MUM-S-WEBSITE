// Get the burger menu element
const burgerMenu = document.querySelector('.burger');

// Get the nav links element
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the burger menu
burgerMenu.addEventListener('click', () => {
  // Toggle the nav links
  navLinks.classList.toggle('active');
});

// Get the enroll button elements
const enrollButtons = document.querySelectorAll('.enroll-button');

// Add an event listener to each enroll button
enrollButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Scroll to the pricing packages section
    document.querySelector('.pricing-packages').scrollIntoView({ behavior: 'smooth' });
  });
});

// Get the scroll to top button element
const scrollToTopButton = document.querySelector('#scroll-to-top');

// Add an event listener to the scroll to top button
scrollToTopButton.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add an event listener to the window
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  
  // Check if the scroll position is greater than 500
  if (scrollPosition > 500) {
    // Show the scroll to top button
    scrollToTopButton.style.display = 'block';
  } else {
    // Hide the scroll to top button
    scrollToTopButton.style.display = 'none';
  }
});



// Add event listeners to the package cards
const packageCards = document.querySelectorAll('.package');

packageCards.forEach(card => {
card.addEventListener('click', () => {
// Get the package details
const packageDetails = card.querySelector('.package-details');

// Toggle the package details
packageDetails.classList.toggle('active');
});
});

// Add event listener to the enroll now button
const enrollNowButton = document.querySelector('.enroll-now-button');

enrollNowButton.addEventListener('click', () => {
// Get the enrollment form
const enrollmentForm = document.querySelector('.enrollment-form');

// Show the enrollment form
enrollmentForm.style.display = 'block';
});

// Add event listener to the close button
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
// Get the enrollment form
const enrollmentForm = document.querySelector('.enrollment-form');

// Hide the enrollment form
enrollmentForm.style.display = 'none';
});

// Add event listener to the submit button
const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', () => {
// Get the enrollment form data
const formData = new FormData(document.querySelector('.enrollment-form'));

// Send the form data to the server
fetch('/enroll', {
method: 'POST',
body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
});


// Add event listener to the form fields
const formFields = document.querySelectorAll('.enrollment-form input, .enrollment-form select');

formFields.forEach(field => {
  field.addEventListener('input', () => {
    // Get the field value
    const fieldValue = field.value;

    // Validate the field value
    if (fieldValue.trim() === '') {
      // Show error message
      field.classList.add('error');
    } else {
      // Hide error message
      field.classList.remove('error');
    }
  });
});

// Add event listener to the form submission
const enrollmentForm = document.querySelector('.enrollment-form');

enrollmentForm.addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(enrollmentForm);

  // Send the form data to the server
  fetch('/enroll', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});

// Add event listener to the form fields
const formFields = document.querySelectorAll('.enrollment-form input, .enrollment-form select');

formFields.forEach(field => {
  field.addEventListener('input', () => {
    // Get the field value
    const fieldValue = field.value;

    // Validate the field value
    if (fieldValue.trim() === '') {
      // Show error message
      field.classList.add('error');
    } else {
      // Hide error message
      field.classList.remove('error');
    }
  });
});

// Add event listener to the form submission
const enrollmentForm = document.querySelector('.enrollment-form');

enrollmentForm.addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(enrollmentForm);

  // Send the form data to the server
  fetch('/enroll', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});

// End of JavaScript code
