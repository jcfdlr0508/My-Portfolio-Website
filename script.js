document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about-content-wrapper, .skills-content, .projects-content');
    if (!sections.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.querySelectorAll(".projects-slideshow").forEach(slideshow => {
  let slideIndex = 0;
  const slides = slideshow.querySelectorAll(".projects-slideshow-images");
  const dots = slideshow.querySelectorAll(".projects-dot");
  const wrapper = slideshow.querySelector(".projects-slideshow-wrapper");

  let autoSlide = setInterval(() => plusSlides(1), 5000);

  function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    wrapper.style.transform = `translateX(${-slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
  }

  function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetAutoSlide();
  }

  function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(slideIndex);
    resetAutoSlide();
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => plusSlides(1), 5000);
  }

  // Attach controls
  slideshow.querySelector(".projects-slideshow-prev").onclick = () => plusSlides(-1);
  slideshow.querySelector(".projects-slideshow-next").onclick = () => plusSlides(1);
  dots.forEach((dot, i) => dot.onclick = () => currentSlide(i + 1));

  // Init
  showSlides(slideIndex);
});


