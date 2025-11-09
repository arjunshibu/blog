(function() {
  const html = document.documentElement;

  // Get saved theme or default to dark
  const getTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved;
    }
    // Default to dark theme
    return 'dark';
  };

  // SVG icons
  const sunIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M8 1v2M8 13v2M15 8h-2M3 8H1M13.364 2.636l-1.414 1.414M4.05 11.95l-1.414 1.414M13.364 13.364l-1.414-1.414M4.05 4.05l-1.414-1.414" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  const moonIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 2.5C6.5 5.81371 9.18629 8.5 12.5 8.5C9.18629 8.5 6.5 11.1863 6.5 14.5C6.5 11.1863 3.81371 8.5 0.5 8.5C3.81371 8.5 6.5 5.81371 6.5 2.5Z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>';

  // Set theme
  const setTheme = (theme) => {
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const themeToggleIconMobile = document.getElementById('theme-toggle-icon-mobile');
    
    if (theme === 'light') {
      html.setAttribute('data-theme', 'light');
      if (themeToggleIcon) themeToggleIcon.innerHTML = moonIcon;
      if (themeToggleIconMobile) themeToggleIconMobile.innerHTML = moonIcon;
    } else {
      html.removeAttribute('data-theme');
      if (themeToggleIcon) themeToggleIcon.innerHTML = sunIcon;
      if (themeToggleIconMobile) themeToggleIconMobile.innerHTML = sunIcon;
    }
    localStorage.setItem('theme', theme);
  };

  // Toggle theme
  const toggleTheme = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const currentTheme = html.getAttribute('data-theme');
    if (currentTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  // Initialize theme and set up event listeners
  const init = () => {
    // Initialize theme on page load
    const theme = getTheme();
    setTheme(theme);

    // Add click handlers
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
      themeToggleMobile.addEventListener('click', toggleTheme);
    }
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded
    init();
  }
})();

