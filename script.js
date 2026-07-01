// Suaviza el indicador "descubre más": desplaza hacia la sección de enlaces
document.querySelector('.scroll-cue')?.addEventListener('click', () => {
  document.querySelector('.links-section')?.scrollIntoView({ behavior: 'smooth' });
});
