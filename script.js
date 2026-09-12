// ==============================
// MOBILE NAVBAR
// ==============================

const menuBtn = document.querySelector(".mobile-menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar-link");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("ion-icon");

        if (icon) {
            if (navbar.classList.contains("active")) {
                icon.setAttribute("name", "close-outline");
            } else {
                icon.setAttribute("name", "menu-outline");
            }
        }

    });

}


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }

        const icon = menuBtn?.querySelector("ion-icon");

        if (icon) {
            icon.setAttribute("name", "menu-outline");
        }

    });

});


// ==============================
// COUNTER
// ==============================

const counters = document.querySelectorAll(".counter-num");

const counterObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            counters.forEach((counter) => {

                const target = Number(
                    counter.getAttribute("data-target")
                );

                let current = 0;

                const updateCounter = () => {

                    const increment = Math.ceil(target / 60);

                    current += increment;

                    if (current >= target) {
                        current = target;
                    }

                    counter.textContent = current + "+";

                    if (current < target) {
                        requestAnimationFrame(updateCounter);
                    }

                };

                updateCounter();

            });

            observer.disconnect();

        });

    },

    {
        threshold: 0.4
    }

);


const counterSection =
    document.querySelector(".section-work-data");

if (counterSection) {
    counterObserver.observe(counterSection);
}


// ==============================
// CURRENT YEAR
// ==============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}