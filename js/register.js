const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="cpassword"]');
const userTypeSelect = document.querySelector('select[name="user_type"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  // Check if name is not empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  // Check if email is valid
  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check if password is at least 8 characters long
  if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  // Check if password and confirm password match
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match.');
    return;
  }

  // If all inputs are valid, submit the form
  form.submit();
});

// Function to check if email is valid
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}