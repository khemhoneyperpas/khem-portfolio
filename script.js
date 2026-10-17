// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  navLinks.classList.toggle('open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  });
});

// Reveal sections as they enter the viewport.
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

// Keep the footer year current.
document.querySelector('#year').textContent = new Date().getFullYear();


// Accessible certificate preview modal.
const certificateModal = document.querySelector('.certificate-modal');
const modalImage = document.querySelector('.modal-image');
const modalCaption = document.querySelector('.modal-caption');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.certificate-preview').forEach((button) => {
  button.addEventListener('click', () => {
    modalImage.src = button.dataset.certificate;
    modalCaption.textContent = button.dataset.title || 'Certificate preview';
    if (typeof certificateModal.showModal === 'function') {
      certificateModal.showModal();
    }
  });
});

modalClose.addEventListener('click', () => certificateModal.close());
certificateModal.addEventListener('click', (event) => {
  if (event.target === certificateModal) certificateModal.close();
});
