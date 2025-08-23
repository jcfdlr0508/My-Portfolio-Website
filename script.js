document.addEventListener('DOMContentLoaded', () => {
    const aboutWrapper = document.querySelector('.about-content-wrapper');
    if (!aboutWrapper) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutWrapper.style.opacity = '1';
                aboutWrapper.style.transform = 'none';
                observer.unobserve(aboutWrapper);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(aboutWrapper);
});