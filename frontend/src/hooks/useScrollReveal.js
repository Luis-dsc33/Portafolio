import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Opcional: si queremos que la animación ocurra solo una vez:
                    // observer.unobserve(entry.target);
                } else {
                    // Si queremos que la animación se repita al scrollear arriba y abajo:
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        // Seleccionamos todos los elementos con la clase 'reveal'
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, []); // Dependencias vacías para que corra al montar el componente que usa el hook
};

export default useScrollReveal;
