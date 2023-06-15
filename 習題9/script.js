const homeLink = document.getElementById('homeLink');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const logoutLink = document.getElementById('logoutLink');
const homePage = document.getElementById('homePage');
const registerPage = document.getElementById('registerPage');
const loginPage = document.getElementById('loginPage');
const logoutPage = document.getElementById('logoutPage');

homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  setActivePage(homePage);
});

registerLink.addEventListener('click', function(event) {
  event.preventDefault();
  setActivePage(registerPage);
});

loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  setActivePage(loginPage);
});

logoutLink.addEventListener('click', function(event) {
  event.preventDefault();
  setActivePage(logoutPage);
});

function setActivePage(page) {
  const pages = document.getElementsByClassName('page');
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }

  page.classList.add('active');
}
