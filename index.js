const signupForm = document.querySelector('form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = signupForm.name.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const confirm_password = signupForm.confirm_password.value;
  if (password !== confirm_password) {
    alert('Passwords do not match');
    return;
  }
  if (!isValidEmail(email)) {
    alert('Invalid email format');
    return;
  }
  if (!name) {
