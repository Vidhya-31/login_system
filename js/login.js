const form = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

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

  // If both inputs are valid, submit the form
  alert('Login successful!');
  form.submit();
});

// Function to check if email is valid
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}