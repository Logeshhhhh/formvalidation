document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Clear any previous error messages
    clearErrors();
  
    // Retrieve form values
    let name = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
  
    // Validate each field
    let valid = true;
    
    // Full Name validation (must be at least 5 characters)
    if (name.length < 5) {
      setError('nameError', 'Full name must be at least 5 characters long.');
      valid = false;
    }
  
    // Email validation (must contain @)
    if (!email.includes('@')) {
      setError('emailError', 'Enter a valid email address with @.');
      valid = false;
    }
  
    // Phone number validation (must be 10 digits and not 123456789)
    if (phone.length !== 10 || phone === '1234567890' || isNaN(phone)) {
      setError('phoneError', 'Enter a valid 10-digit phone number.');
      valid = false;
    }
  
    // Password validation (cannot be 'password', 'name', or less than 8 characters)
    if (password === 'password' || password.toLowerCase() === name.toLowerCase() || password.length < 8) {
      setError('passwordError', 'Password must be at least 8 characters and not the same as your name or "password".');
      valid = false;
    }
  
    // Confirm Password validation (must match password)
    if (password !== confirmPassword) {
      setError('confirmPasswordError', 'Passwords do not match.');
      valid = false;
    }
  
    // If all fields are valid, submit the form or show success message
    if (valid) {
      alert('Form submitted successfully!');
      // Optionally reset the form here
    }
  });
  
  // Helper function to set error messages
  function setError(id, message) {
    document.getElementById(id).innerText = message;
  }
  
  // Helper function to clear all error messages
  function clearErrors() {
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
  }
  