const backButtonPage = document.getElementById('backButton');

backButtonPage.addEventListener('click', () => {
    console.log('chamado')
    fetch('/users').then(() => {
        location.reload();
    });
});
