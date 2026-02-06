/* =========================================
   CUSTOM SCRIPTS - JEFERSON ROSALES PORTFOLIO
   ========================================= */

document.addEventListener("DOMContentLoaded", function() {
    
    // Seleccionamos todos los enlaces de la página
    var links = document.querySelectorAll("a");

    links.forEach(function(link) {
        var href = link.getAttribute("href");

        // Verificamos si el link existe
        if (href) {
            // CONDICIÓN: Si es un link externo (http) O es un PDF
            // Y aseguramos que NO sea un link interno (que empiece con #)
            if ((href.startsWith("http") || href.endsWith(".pdf")) && !href.startsWith("#")) {
                
                // Forzamos abrir en nueva pestaña
                link.setAttribute("target", "_blank");
                
                // Seguridad y Performance (Buenas prácticas)
                link.setAttribute("rel", "noopener noreferrer");
            }
        }
    });
    
    console.log("Custom JS cargado: Enlaces externos configurados para abrir en nueva pestaña.");
    /* =========================================
       LOGICA TOGGLE EDUCACIÓN ("VER MÁS")
       ========================================= */
    const btnEducation = document.getElementById('btn-toggle-education');
    const extraEducation = document.getElementById('extra-education');

    if (btnEducation && extraEducation) {
        btnEducation.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que salte la página

            // Si está oculto, lo mostramos
            if (!extraEducation.classList.contains('show')) {
                extraEducation.classList.add('show');
                btnEducation.innerText = "Ver menos"; // Cambiamos texto
                btnEducation.classList.add('primary'); // (Opcional) Lo pintamos verde
            } 
            // Si está visible, lo ocultamos
            else {
                extraEducation.classList.remove('show');
                btnEducation.innerText = "Ver más formaciones"; // Restauramos texto
                btnEducation.classList.remove('primary'); // Quitamos verde
                
                // Opcional: Scrollear un poquito hacia arriba para que no se pierda el usuario
                document.getElementById('education').scrollIntoView({behavior: 'smooth'});
            }
        });
    }
});