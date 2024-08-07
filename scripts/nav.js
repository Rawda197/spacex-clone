let isActive = false;

function toggle() {
  const hamburger = document.querySelector('.hamburger');
  const shadow = document.querySelector('.shadow');
  const mobileNav = document.querySelector('.mobile-nav');

  if (isActive) {
    // Disable active
    hamburger.classList.remove('active');
    shadow.classList.remove('active');
    mobileNav.classList.remove('active');
    isActive = false;
  } else {
    // Activate
    hamburger.classList.add('active');
    shadow.classList.add('active');
    mobileNav.classList.add('active');
    isActive = true;
  }
}
