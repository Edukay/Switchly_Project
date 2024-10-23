document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert('Thank you! Your message has been sent.');
        // Reset the form
        document.getElementById('contactForm').reset();
    }

    document.getElementById( 'WELCOME' ) 
});
