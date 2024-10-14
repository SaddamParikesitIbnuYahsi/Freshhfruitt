function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';

 
    if (username === '' || password === '') {
        errorMessage.textContent = 'Username dan password harus diisi.';
        return false; 
    }
    window.location.href = 'dashboard.html';
    return false; 
}
