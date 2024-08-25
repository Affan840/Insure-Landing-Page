let open = document.querySelector('.open');
let close = document.querySelector('.close');
let nav = document.querySelector('.mobile-nav');

open.addEventListener('click', function() {
  nav.style.display = 'flex';
  open.style.display = 'none';
  close.style.display = 'block';
});

close.addEventListener('click', function() {
  nav.style.display = 'none';
  close.style.display = 'none';
  open.style.display = 'block';
});