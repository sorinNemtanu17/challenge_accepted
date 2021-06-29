const a = document.querySelector('.top-nav button:nth-child(2)');
a.addEventListener('click', showDropdownMneu);
function showDropdownMneu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}
