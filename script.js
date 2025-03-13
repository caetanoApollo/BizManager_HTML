document.addEventListener("DOMContentLoaded", function () {
    // Toggle Menu Lateral
    const sidebar = document.querySelector(".sidebar");
    const toggleMenu = document.createElement("button");
    toggleMenu.innerHTML = "☰";
    toggleMenu.classList.add("toggle-menu");
    document.body.insertBefore(toggleMenu, document.body.firstChild);
    
    toggleMenu.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Logout
    const logoutButton = document.querySelector(".sidebar-menu li:last-child a");
    logoutButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

    // Simulação de carregamento de Notas Fiscais via API
    const notasFiscais = [
        { numero: "NF 05", data: "10.03.2025", valor: "R$ 300,00" },
        { numero: "NF 06", data: "11.03.2025", valor: "R$ 150,00" },
    ];

    const notasTable = document.querySelector(".notas-table tbody");
    notasFiscais.forEach(nota => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${nota.numero}</td><td>${nota.data}</td><td>${nota.valor}</td>`;
        notasTable.appendChild(row);
    });
});
