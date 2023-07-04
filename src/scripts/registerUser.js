const backButtonPage = document.getElementById('backButton');

backButtonPage.addEventListener('click', () => {
    fetch('/users').then(() => {
        location.reload();
    });
});
