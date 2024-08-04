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

// Handle alert close button
document.querySelector('.closebtn').addEventListener('click', function() {
    const alertBox = this.parentElement;
    alertBox.classList.add('hidden');
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 500);
});

// Handle sidebar person selection
document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', function() {
        const person = this.getAttribute('data-person');
        document.querySelectorAll('.photos .gallery').forEach(gallery => {
            if (gallery.classList.contains(person)) {
                gallery.style.display = 'block';
            } else {
                gallery.style.display = 'none';
            }
        });
    });
});
