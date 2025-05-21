document.getElementById('connect').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email &&  password) {
    console.log('Connection réussit:', { email, password });

   
    window.location.href = '/Krav maga academy mons/index.html';
} else {
    alert('Veuillez remplir tous les champs.');
}
});
