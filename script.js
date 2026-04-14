// ===========================
// NAVBAR – destaca o link ativo
// conforme o scroll da página
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// ===========================
// SCROLL REVEAL
// Deixa as seções aparecerem
// com animação ao scrollar
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplica nos cards de trabalho e linhas de projeto
document.querySelectorAll('.work-card, .project-row').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===========================
// EFEITO DE DIGITAÇÃO
// Anima o cursor piscante
// na seção About
// ===========================
// O cursor já é animado via CSS (classe .cursor no index.html)
// Este bloco pode ser usado para texto dinâmico no futuro

// ===========================
// SMOOTH SCROLL
// para links de navegação
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const carousel = document.querySelector('.projects-carousel');
const prevBtn = document.querySelector('.carousel-arrow.prev');
const nextBtn = document.querySelector('.carousel-arrow.next');

if (carousel && prevBtn && nextBtn) {
  const scrollStep = () => Math.round(carousel.clientWidth * 0.85);

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollStep(), behavior: 'smooth' });
  });
}
