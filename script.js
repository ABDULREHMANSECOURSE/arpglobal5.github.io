function toggleTheme() {
    document.body.classList.toggle('light-theme');
  }
  
  function openModal() {
    document.getElementById('signinModal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('signinModal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('signinModal');
    if (event.target == modal) {
      closeModal();
    }
  }
  
  function login() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
  
    if (email === "arp@example.com" && pass === "123456") {
      alert("Login successful!");
      closeModal();
    } else {
      alert("Invalid email or password.");
    }
  }
  