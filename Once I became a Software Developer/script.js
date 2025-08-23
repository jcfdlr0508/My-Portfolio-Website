document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.about-content-wrapper');
    if (!wrapper) return;

    const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Remove observer after animation triggers
        }
        });
    },
    {
        threshold: 0.2 // Trigger when 20% of the element is visible
    }
    );

    observer.observe(wrapper);
});