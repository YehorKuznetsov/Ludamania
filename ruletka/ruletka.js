document.addEventListener('DOMContentLoaded', function () {
    const symbols = ['🍒', '🍋', '🍉', '🍊', '🍓', '🍍', '💎'];

    // Баланс користувача
    let balance = 1000; // Початковий баланс
    const spinCost = 10; // Вартість одного прокруту
    const winReward = 500; // Винагорода за виграш

    // Елемент для відображення балансу
    const balanceElement = document.querySelector('#balance');

    // Функція оновлення відображення балансу
    function updateBalanceDisplay() {
        balanceElement.textContent = `Баланс: ${balance.toFixed(2)}`;
    }

    // Функція для випадкового вибору символу
    function getRandomSymbol() {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        return symbols[randomIndex];
    }

    // Функція для обертання слотів
    function spinSlots() {
        const slot1 = document.getElementById('slot1');
        const slot2 = document.getElementById('slot2');
        const slot3 = document.getElementById('slot3');
        const result = document.getElementById('result');

        // Перевірка балансу
        if (balance < spinCost) {
            result.textContent = 'Недостатньо коштів для гри!';
            return;
        }

        // Знімаємо вартість прокрутки
        balance -= spinCost;
        updateBalanceDisplay();

        // Генеруємо випадкові символи для кожного слоту
        const symbol1 = getRandomSymbol();
        const symbol2 = getRandomSymbol();
        const symbol3 = getRandomSymbol();

        // Оновлюємо відображення слотів
        slot1.textContent = symbol1;
        slot2.textContent = symbol2;
        slot3.textContent = symbol3;

        // Перевірка виграшу
        if (symbol1 === symbol2 && symbol2 === symbol3) {
            result.textContent = 'Виграш! 🎉';
            balance += winReward;
            updateBalanceDisplay();
        } else {
            result.textContent = 'Спробуйте ще раз!';
        }
    }

    // Прив’язка дії прокрутки до кнопки
    document.getElementById('spinBtn').addEventListener('click', spinSlots);

    // Ініціалізація балансу на сторінці
    updateBalanceDisplay();
});
