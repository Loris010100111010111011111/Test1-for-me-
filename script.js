
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        console.log('Inscription réussie :', { email, password });

       
        window.location.href = '/se connecter/indext.html';
    });


// Fonction pour simuler l'envoi d'un code d'authentification
function sendFakeAuthCode(email) {
    const code = Math.floor(100000 + Math.random() * 900000); // 6 chiffres
    localStorage.setItem('authCode', code);
    alert("Code d'authentification envoyé à " + email + " (en réalité : " + code + ")");
}

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const nom = document.querySelector('input[placeholder="nom"]').value;
    const prenom = document.querySelector('input[placeholder="prénom"]').value;
    // Exemple : 10 cours offerts à l'inscription
    const user = {
        email: email,
        nom: nom,
        prenom: prenom,
        coursRestants: 10
    };
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = "../Code/index.html";
});