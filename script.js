document.getElementById('darkModeButton').addEventListener('click', function(e) {
    // Toggle dark mode
    document.body.classList.toggle('dark-mode');

    // Get button position
    const button = e.target;
    const rect = button.getBoundingClientRect();

    // Create the wave effect
    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.left = `${rect.left + rect.width / 2}px`;
    wave.style.top = `${rect.top + rect.height / 2}px`;
    document.body.appendChild(wave);

    // Remove the wave after animation
    wave.addEventListener('animationend', () => {
        wave.remove();
    });
});
