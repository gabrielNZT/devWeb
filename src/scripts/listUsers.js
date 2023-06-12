// Função para remover acentos
function removeAccent(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const rows = document.querySelectorAll('.container_table tbody tr');

    searchInput.addEventListener('input', function () {
        const searchText = removeAccent(this.value.toLowerCase());

        rows.forEach(function (row) {
            const name = removeAccent(row.querySelector('td:first-child').textContent.toLowerCase());
            const cpf = removeAccent(row.querySelector('td:nth-child(2)').textContent.toLowerCase());
            const cargo = removeAccent(row.querySelector('td:nth-child(3)').textContent.toLowerCase());
            const cidade = removeAccent(row.querySelector('td:nth-child(4)').textContent.toLowerCase());
            if (
                name.includes(searchText) ||
                cpf.includes(searchText) ||
                cargo.includes(searchText) ||
                cidade.includes(searchText)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

