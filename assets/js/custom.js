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
});