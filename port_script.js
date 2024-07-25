document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="Meassage"]').value;

    // Validation flags
    let valid = true;

    // Check if name is not empty
    if (name.trim() === "") {
      alert("Please enter your name.");
      valid = false;
    }

    // Check if email is not empty and is in a valid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
      alert("Please enter your email.");
      valid = false;
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      valid = false;
    }

    // Check if message is not empty
    if (message.trim() === "") {
      alert("Please enter your message.");
      valid = false;
    }

    // If all fields are valid, submit the form
    if (valid) {
      this.submit();
    }
  });
});