
    const accountIcon = document.getElementById('accountIcon');
    const dropdownMenu = document.getElementById('dropdownMenu');

    accountIcon.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    const isConnected = false; // Changez cette valeur pour tester

    const acountIcon = document.getElementById('accountIcon');

    if (!isConnected) {
        // Ajoute la classe "disabled" pour désactiver l'icône
        accountIcon.classList.add('disabled');

        // Empêche le clic et affiche un message
        accountIcon.addEventListener('click', function (event) {
            event.preventDefault();
            alert("Vous devez être connecté pour accéder à cette fonctionnalité.");
        });
    }

    let userCount = 0; // Nombre initial d'inscrits

// Simuler une inscription
function registerUser() {
    userCount++; // Incrémente le nombre d'inscrits
    document.getElementById('userCount').textContent = userCount; // Met à jour l'affichage
    alert("Nouvel utilisateur inscrit ! Nombre total d'inscrits : " + userCount);
}

// Exemple : Bouton pour simuler une inscription
const signupButton = document.querySelector('.loginButton');
signupButton.addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le comportement par défaut
    registerUser(); // Appelle la fonction pour incrémenter le nombre d'inscrits
});
    