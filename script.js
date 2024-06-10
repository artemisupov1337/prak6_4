// Функція для валідації та реєстрації користувача
function registerUser() {
    // Отримання введених значень
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const birthdate = document.getElementById('birthdate').value;

    // Елементи для відображення повідомлень
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    
    // Скидання повідомлень
    errorMessage.textContent = '';
    successMessage.textContent = '';

    // Валідація
    if (!username || !email || !password || !confirmPassword || !firstName || !lastName || !birthdate) {
        errorMessage.textContent = 'Будь ласка, заповніть всі поля.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Паролі не співпадають.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Невірний формат електронної пошти.';
        return;
    }

    // Успішна реєстрація (тут можна додати код для передачі даних на сервер)
    successMessage.textContent = 'Реєстрація пройшла успішно!';
}

// Функція для валідації електронної пошти
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}