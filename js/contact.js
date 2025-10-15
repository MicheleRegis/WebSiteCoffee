document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('feedbackForm');
  const thankyouMsg = document.getElementById('thankyouMsg');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Limpa mensagens de erro
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let valid = true;

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback').value.trim();

    const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fname || !nameRegex.test(fname)) {
      document.getElementById('fnameError').textContent = 'First name is required and must contain only letters.';
      valid = false;
    }

    if (!lname || !nameRegex.test(lname)) {
      document.getElementById('lnameError').textContent = 'Last name is required and must contain only letters.';
      valid = false;
    }

    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (feedback.length === 0 || feedback.length > 200) {
      document.getElementById('feedbackError').textContent = 'Feedback is required and must not exceed 200 characters.';
      valid = false;
    }

    if (valid) {
      form.reset();
      form.style.display = 'none';
      thankyouMsg.style.display = 'block';
    }
  });
});
