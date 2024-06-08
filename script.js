document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const buyButton = document.querySelector(".buy-button");
    const purchaseMenu = document.getElementById("purchaseMenu");
    const purchaseForm = document.getElementById("purchaseForm");
    const paymentInfo = document.getElementById("paymentInfo");
    const continueButton = document.querySelector(".continue-button");
    const purchaseButton = document.querySelector(".purchase-button");
    const promoSection = document.querySelector(".promo-section");
    const promoTexts = document.querySelectorAll(".promo-section p");

    // Mostrar el menú de compra al hacer clic en el botón "Comprar"
    buyButton.addEventListener("click", function() {
        showElement(purchaseMenu); // Mostrar el menú de compra
        fadeIn(purchaseMenu); // Animación de entrada
        fadeOut(promoSection); // Ocultar la sección promocional
    });

    // Continuar con la compra después de completar la información
    continueButton.addEventListener("click", function(event) {
        event.preventDefault();
        fadeOut(purchaseMenu); // Ocultar el menú de compra
        setTimeout(function() {
            hideElement(purchaseMenu); // Ocultar el menú de compra
            showElement(paymentInfo); // Mostrar la información de pago
            fadeIn(paymentInfo); // Animación de entrada
        }, 500); // Retraso para sincronizar con la animación
    });

    // Procesar el pago al hacer clic en el botón "Pagar"
    purchaseButton.addEventListener("click", function(event) {
        event.preventDefault();
        simulatePayment(); // Simular el proceso de pago
    });

    // Función para simular un proceso de pago
    function simulatePayment() {
        showLoader(); // Mostrar el indicador de carga
        setTimeout(function() {
            hideLoader(); // Ocultar el indicador de carga
            alert("¡Gracias por tu compra!"); // Mensaje de agradecimiento
        }, 2000); // Retraso para simular el proceso de pago
    }

    // Función para mostrar un elemento
    function showElement(element) {
        element.classList.remove("hidden");
    }

    // Función para ocultar un elemento
    function hideElement(element) {
        element.classList.add("hidden");
    }

    // Función para animar la entrada de un elemento
    function fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = "block";
        let opacity = 0;
        const interval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.1;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 50); // Velocidad de la animación
    }

    // Función para animar la salida de un elemento
    function fadeOut(element) {
        let opacity = 1;
        const interval = setInterval(function() {
            if (opacity > 0) {
                opacity -= 0.1;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
                element.style.display = "none";
            }
        }, 50); // Velocidad de la animación
    }

    // Función para mostrar el indicador de carga
    function showLoader() {
        const loader = document.createElement("div");
        loader.className = "loader";
        document.body.appendChild(loader);
    }

    // Función para ocultar el indicador de carga
    function hideLoader() {
        const loader = document.querySelector(".loader");
        if (loader) {
            loader.remove();
        }
    }

    // Función para mostrar texto promocional de manera emergente
    function showPromoText() {
        promoTexts.forEach(function(text) {
            setTimeout(function() {
                fadeIn(text);
            }, 1000); // Retraso para mostrar el texto después de 1 segundo
        });
    }

    // Mostrar texto promocional de manera emergente al cargar la página
    showPromoText();
});