document.getElementById('darkModeButton').addEventListener('click', function (e) {
    document.body.classList.toggle('dark-mode');
    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.left = `${e.clientX}px`;
    wave.style.top = `${e.clientY}px`;
    document.body.appendChild(wave);
    setTimeout(() => wave.remove(), 1000);
});

document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', function () {
        const person = this.getAttribute('data-person');
        document.querySelectorAll('.gallery').forEach(gallery => {
            if (gallery.classList.contains(person) || person === '') {
                gallery.style.display = 'block';
            } else {
                gallery.style.display = 'none';
            }
        });
    });
});

// Assurez-vous que le code est placé dans script.js ou directement dans un <script> en bas de la page HTML