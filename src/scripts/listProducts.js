const darkModeButton = document.getElementById('darkModeButton');

darkModeButton.addEventListener('click', () => {
    fetch(`/products/dark`).then(() => {
        location.reload();
    });
});