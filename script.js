document.getElementById("estado").addEventListener("change", function() {
    let estadoSeleccionado = document.getElementById("estado").value;
    document.getElementById("estadoSeleccionado").textContent = estadoSeleccionado;
});
