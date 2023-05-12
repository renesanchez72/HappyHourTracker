$(document).ready(function() {
    $('#login-btn').on('click', function() {
      // Get the form data
      var formData = $('#login-form').serialize();
      
      // Send the post request
      $.ajax({
        type: 'POST',
        url: 'login.php',
        data: formData,
        success: function(response) {
          // If the login is successful, redirect to the search page
          window.location.href = 'search.php';
        },
        // error: function(xhr, status, error) {
        //   // If there's an error, display an error message
        //   alert('Login failed. Please check your username and password.');
        // }
        error: function(xhr, status, error) {
            // Parse the JSON error message
            var response = JSON.parse(xhr.responseText);
            
            // Display the error message
            alert(response.error);
          }
      });
    });
  });
  