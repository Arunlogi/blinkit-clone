// Open the modal
document.querySelector('.login-button').addEventListener('click', function () {
    document.getElementById('loginModal').style.display = 'block';
  });
  
  // Close the modal
  function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
  }


  
  // Close the modal on form submission
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading page
     alert('Form submitted successfully!'); // Optional feedback
     closeModal();
  });
  