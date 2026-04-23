document.querySelector("form")?.addEventListener("submit", function(e){
    e.preventDefault();
    alert("✅ Cita registrada correctamente");
});

// =========================================================
// 1. CONFIGURACIÓN INICIAL Y EFECTOS (CARRUSEL / IMÁGENES)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema del Hospital listo. Bienvenido, Dante.");

    // Lógica de reparación de imágenes:
    // Si una imagen falla, carga la imagen de respaldo
    document.querySelectorAll('img').forEach((img) => {
        img.onerror = function () {
            this.src = 'descarga.jfif';
        };
    });
});
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formExpediente");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            nombre: document.getElementById("nombre").value,
            edad: document.getElementById("edad").value,
            sexo: document.getElementById("sexo").value,
            fechaNacimiento: document.getElementById("fechaNacimiento").value,
            curp: document.getElementById("curp").value,
            telefono: document.getElementById("telefono").value,
            direccion: document.getElementById("direccion").value,
            motivo: document.getElementById("motivo").value,
            historial: document.getElementById("historial").value,
            alergias: document.getElementById("alergias").value,
            medicamentos: document.getElementById("medicamentos").value,
            peso: document.getElementById("peso").value,
            altura: document.getElementById("altura").value,
            presion: document.getElementById("presion").value,
            frecuencia: document.getElementById("frecuencia").value
        };

        try {
          await fetch("https://script.google.com/macros/s/AKfycby810271QBC7GbRM8Dp5UxhUWe0II7uriLcMyP3WLmzdDEpBxNvMZUSIuuuG0tkJPgR3g/exec", {
    method: "POST",
    body: new URLSearchParams(data)
});

            const result = await response.json();

            alert("✅ Expediente guardado correctamente");
            form.reset();

        } catch (error) {
            alert("❌ Error al guardar");
            console.error("Error:", error);
        }
    });

});