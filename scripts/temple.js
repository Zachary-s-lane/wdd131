// JavaScript for Hamburger Menu
document.getElementById('hamburger').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  });
  
  // Dynamic Footer Content
  const currentYear = new Date().getFullYear();
  document.getElementById('year').textContent = currentYear;
  
  const lastModified = document.lastModified;
  document.getElementById('last-modified').textContent = lastModified;
  