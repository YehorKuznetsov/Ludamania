// balance.js

// Перевіряємо, чи є баланс у localStorage. Якщо ні, встановлюємо початкове значення.
if (!localStorage.getItem('balance')) {
    localStorage.setItem('balance', '10.00'); // Початковий баланс
}

// Функція для отримання поточного балансу
function getBalance() {
    return parseFloat(localStorage.getItem('balance'));
}

// Функція для оновлення балансу
function setBalance(newBalance) {
    localStorage.setItem('balance', newBalance.toFixed(2)); // Оновлюємо у localStorage
    updateBalanceDisplay(); // Оновлюємо на сторінці
}

// Функція для відображення балансу на сторінці
function updateBalanceDisplay() {
    const balanceElement = document.querySelector('#balance');
    if (balanceElement) {
        balanceElement.textContent = `Баланс: ${getBalance().toFixed(2)}`;
    }
}

// Викликаємо оновлення балансу при завантаженні сторінки
document.addEventListener('DOMContentLoaded', updateBalanceDisplay);
