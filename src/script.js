// ========== Fonctionsutilitaires ========== 

// Afficher un message "À venir"
function comingSoon(serviceName) {
    alert(`${serviceName} sera disponible très bientôt! 🚀\n\nRestez en contact pour les mises à jour.`);
}

// Gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Récupérer les valeurs
    const inputs = form.querySelectorAll('input, textarea');
    const data = {
        name: inputs[0].value,
        email: inputs[1].value,
        message: inputs[2].value
    };
    
    // Simulation d'envoi
    console.log('Message envoyé:', data);
    alert('Merci pour votre message! Nous vous répondrons bientôt. ✓');
    
    // Réinitialiser le formulaire
    form.reset();
    
    // En production, vous enverriez les données à un serveur
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
}

// ========== Animations au défilement ========== 

// Observer pour les animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes de service et autres éléments
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .about, .contact-form');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========== Menu mobile ========== 

// Fermer le menu mobile quand on clique sur un lien
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Ajouter ici la logique pour fermer le menu mobile si présent
        });
    });
});

// ========== Smooth scroll pour les ancres ========== 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========== Gestion du scroll pour la navbar ========== 

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// ========== Gestion des événements des boutons ========== 

document.addEventListener('DOMContentLoaded', () => {
    // Ajouter des événements aux boutons "En Savoir Plus"
    const moreButtons = document.querySelectorAll('.btn-secondary');
    moreButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.boxShadow = '0 10px 20px rgba(124, 58, 237, 0.2)';
        });
        button.addEventListener('mouseout', () => {
            button.style.boxShadow = 'none';
        });
    });
});

// ========== Utilitaires de console ========== 

console.log('%cBienvenue sur CreativiAI!', 'font-size: 24px; font-weight: bold; color: #7c3aed;');
console.log('%cLa plateforme IA du futur', 'font-size: 14px; color: #ec4899;');
