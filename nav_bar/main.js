const toggleBtn = document.querySelector('.nav-toggleBtn');
const menu = document.querySelector('.nav_center');
const icons = document.querySelector('.icon_right');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});