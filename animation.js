document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('darkModeButton');

    button.addEventListener('click', function (e) {
        const wave = document.createElement('div');
        wave.className = 'wave';
        
        // Calcul de la position de l'onde
        wave.style.left = `${e.clientX - button.offsetLeft}px`;
        wave.style.top = `${e.clientY - button.offsetTop}px`;
        
        button.appendChild(wave);
        
        // Attendre la fin de l'animation pour changer le mode sombre
        wave.addEventListener('animationend', function () {
            wave.remove();
            document.body.classList.toggle('dark-mode'); // Bascule le mode sombre après l'animation
        });
    });
});
