import { entregarLote } from "../api/lotesAPI.js";

document.addEventListener("DOMContentLoaded", function () {
    var latitud = document.getElementById("latitud")
    var longitud = document.getElementById("longitud")

    function entregarLoteUI() {
        var btnEnviar = document.getElementById("enviarBtn");

        btnEnviar.addEventListener("click", async () => {
            const lote = {
                latitud: latitud.value,
                longitud: longitud.value,
            }

            try {
                await entregarLote(lote)

            } catch (error) {
                console.error('Error al añadir el lote', error)
            }
        });
    }

    function iniciarMap() {
        var coord = { lat: 38.693082781209704, lng: -4.108655534417066 }
        generarMapa(coord);
    }

    function generarMapa(coord) {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: new google.maps.LatLng(coord.lat, coord.lng),
        });

        var marcador = new google.maps.Marker({
            map: map,
            draggable: true,
            position: new google.maps.LatLng(coord.lat, coord.lng),
        });

        marcador.addListener("dragend", function () {
            document.getElementById("latitud").value = this.getPosition().lat();
            document.getElementById("longitud").value = this.getPosition().lng();
        });
    }

    entregarLoteUI();
    iniciarMap();
});
