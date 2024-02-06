const btn = document.getElementById('myBtn');
const modal = document.getElementById('myModal');

btn.addEventListener('click', openModal);

function openModal() {
  modal.classList.add('open');
  attachModalEvents();
}

function attachModalEvents() {
  modal.querySelector('.close').addEventListener('click', closeModal);
  document.addEventListener('keydown', handleEscape);
}

function handleEscape(event) {
  console.log(event.key);
  if (event.key === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  modal.classList.remove('open');
  detachModalEvents();
}
function detachModalEvents() {
  modal.querySelector('.close').removeEventListener('click', closeModal);
  document.removeEventListener('keydown', handleEscape);
}
