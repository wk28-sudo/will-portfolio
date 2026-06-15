document.querySelectorAll('a[href="resume.html"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (location.protocol === 'file:') return;
    e.preventDefault();
    window.open(link.href, '_blank', 'noopener,noreferrer');
  });
});
