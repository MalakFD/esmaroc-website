// 1. ANIMATION DU SLIDER
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slider .slide");
    let currentSlideIndex = 0;
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlideIndex].classList.remove("slide-active");
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            slides[currentSlideIndex].classList.add("slide-active");
        }, 4000);
    }

    // 2. MENU HAMBURGER
    const hamburger = document.getElementById("hamburgerMenu");
    const navMenu = document.getElementById("navMenu");
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    // 3. STATISTIQUES (Comptage)
    document.querySelectorAll('.counter').forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const updateCount = () => {
            const count = parseInt(counter.innerText.replace(/\s/g, '')) || 0;
            const speed = Math.ceil(target / 40);
            if (count < target) {
                counter.innerText = (count + speed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "+";
            }
        };
        updateCount();
    });

    // 4. ACTUALITÉS (Affichage dans la carte)
    document.querySelectorAll('.news-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentDiv = this.nextElementSibling;
            
            // Si le texte est vide, on l'injecte
            if (contentDiv.innerText === "") {
                const titre = this.parentElement.querySelector('h4').innerText;
                contentDiv.innerText = titre.includes("École d'Été") 
                    ? "Texte long pour l'École d'Été..." 
                    : "Texte long pour Speed Africa...";
            }

            // Alternance affichage/masquage
            if (contentDiv.style.display === "none" || contentDiv.style.display === "") {
                contentDiv.style.display = "block";
                this.innerHTML = 'Réduire <i class="fa-solid fa-arrow-up"></i>';
            } else {
                contentDiv.style.display = "none";
                this.innerHTML = 'Lire la suite <i class="fa-solid fa-arrow-right"></i>';
            }
        });
    });

    // 5. ACCORDÉON DES PROGRAMMES
    document.querySelectorAll(".program-header").forEach(header => {
        header.addEventListener("click", () => {
            const box = header.parentElement;
            document.querySelectorAll(".program-box").forEach(b => b.classList.remove("active"));
            box.classList.add("active");
        });
    });
});
