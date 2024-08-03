document.getElementById('darkModeButton').addEventListener('click', function(e) {
    // Toggle dark mode
    document.body.classList.toggle('dark-mode');

    // Create the wave effect
    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.left = `${e.clientX}px`;
    wave.style.top = `${e.clientY}px`;
    document.body.appendChild(wave);

    // Remove the wave after animation
    wave.addEventListener('animationend', () => {
        wave.remove();
    });
});
