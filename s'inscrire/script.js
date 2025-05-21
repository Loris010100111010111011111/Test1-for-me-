
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        console.log('Inscription réussie :', { email, password });

       
        window.location.href = '/se connecter/indext.html';
    });
