// Menu mobile

const toggleMenuMobile = document.querySelector('.toggle-menu-mobile');
const mobileNavigation = document.querySelector('.mobile-navigation');
const mobileNavigationOverlay = document.querySelector(
  '.overlay-mobile-navigation'
);
const mobileSubmenu = document.querySelectorAll('.menu-mobile .submenu');
const closeMenuMobile = document.querySelector('.close-menu-mobile');

if (toggleMenuMobile) {
  toggleMenuMobile.addEventListener('click', (e) => {
    e.preventDefault();

    mobileNavigation.classList.add('active');
    mobileNavigationOverlay.classList.add('active');
    closeMenuMobile.classList.add('active');
  });

  closeMenuMobile.addEventListener('click', (e) => {
    e.preventDefault();

    mobileNavigation.classList.remove('active');
    mobileNavigationOverlay.classList.remove('active');
    closeMenuMobile.classList.remove('active');
    for (let i = 0; i < mobileSubmenu.length; i++) {
      const submenu = mobileSubmenu[i];
      submenu.classList.remove('active');
    }
  });

  mobileNavigationOverlay.addEventListener('click', (e) => {
    e.preventDefault();

    mobileNavigation.classList.remove('active');
    mobileNavigationOverlay.classList.remove('active');
    closeMenuMobile.classList.remove('active');
    for (let i = 0; i < mobileSubmenu.length; i++) {
      const submenu = mobileSubmenu[i];
      submenu.classList.remove('active');
    }
  });
}

// Mobile menu navigation

const hasSubmenuMobile = document.querySelectorAll(
  '.menu-mobile li.has-submenu > a'
);
const backMenuMobile = document.querySelectorAll(
  '.menu-mobile .back-menu-mobile'
);

for (let i = 0; i < hasSubmenuMobile.length; i++) {
  const menuItem = hasSubmenuMobile[i];

  menuItem.addEventListener('click', (e) => {
    e.preventDefault();

    menuItem.closest('li').querySelector('.submenu').classList.add('active');
  });
}

for (let i = 0; i < backMenuMobile.length; i++) {
  const backMenu = backMenuMobile[i];

  backMenu.addEventListener('click', (e) => {
    e.preventDefault();

    backMenu.closest('.submenu').classList.remove('active');
  });
}

// Scroll Header
const headerSite = document.querySelector('header');
const headerMiddle = document.querySelector('.header-middle');

if (headerSite && headerMiddle) {
  let prevScrollpos = window.pageYOffset;

  window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    if (window.scrollY > 130) {
      headerSite.classList.add('sticky');
    } else {
      headerSite.classList.remove('sticky');
    }
    prevScrollpos = currentScrollPos;
  });
}
