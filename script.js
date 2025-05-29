document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('#nav-list li');
  const sections = document.querySelectorAll('main section');

  navItems.forEach(item => {
    // Only add click listeners to Home, Contact, Projects, Team
    const targetId = item.getAttribute('data-target');
    if (['home', 'contact', 'projects', 'team'].includes(targetId)) {
      item.addEventListener('click', () => {
        // Remove active class from all nav items
        navItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked nav
        item.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));
        // Show targeted section
        document.getElementById(targetId).classList.add('active');
      });
    }
  });
});
