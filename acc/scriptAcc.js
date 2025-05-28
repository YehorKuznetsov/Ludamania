const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        // Якщо файл не обрано, повернутися до початкового зображення
        preview.src = 'placeholder.jpg'; // Знову замініть на фактичний шлях до вашого фото
    }
});

function logout() {
    // Очищення даних користувача
    alert("Ви вийшли з облікового запису");
    window.location.href = "../main.html"; // Перенаправлення на головну сторінку
}
