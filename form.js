// Function to handle form submission and validation
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting until validation
  
    // Get form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Clear any previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  
    let isValid = true;
  
    // Validate name: should not be empty
    if (name.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }
  
    // Validate email: using regex for email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    // Validate password: using regex to ensure at least 6 characters, at least one letter, and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (password.trim() === "") {
      document.getElementById("passwordError").textContent = "Password is required.";
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters, including one letter and one number.";
      isValid = false;
    }
  
    // If validation passes, simulate form submission (you can also submit the form here)
    if (isValid) {
      alert("Form submitted successfully!");
      // For actual form submission, you would use:
      // document.getElementById("signupForm").submit();
    
      setTimeout(function() {
        window.location.href = './todo.html';
    }, 1000);//linking a document in js .set time out helps escape the window ur in to another page without seeing ur refreshing the page (1000)is the time in milliseconds
    
    
    }
  }
  
  // Attach the validateForm function to the form's submit event
  document.getElementById("signupForm").addEventListener("submit", validateForm);
  