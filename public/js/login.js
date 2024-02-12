const loginForm = async (event) => {
    event.preventDefault();
  
    // Get user input from the login form
    const username = document.querySelector('#login-name').value.trim();
    const password = document.querySelector('#login-pw').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(`Failed to login, please try again.`);
      }
    }
  };

document
  .querySelector('.login-form')
  .addEventListener('submit', loginForm);