const PASSWORD = '26_design';
const SESSION_KEY = 'ks_auth';

const form = document.getElementById('gate-form');
const input = document.getElementById('gate-password');
const error = document.getElementById('gate-error');
const submit = document.getElementById('gate-submit');

if (sessionStorage.getItem(SESSION_KEY) === 'true') {
  window.location.replace('./work.html');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = input.value.trim();

  if (val === PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, 'true');
    submit.textContent = 'Welcome';
    submit.classList.add('is-success');
    document.querySelector('.gate').classList.add('is-leaving');
    setTimeout(() => window.location.replace('./work.html'), 450);
  } else {
    input.classList.add('error');
    error.textContent = 'Incorrect password. Try again.';
    error.classList.add('visible');
    input.value = '';
    input.focus();
    setTimeout(() => {
      input.classList.remove('error');
      error.classList.remove('visible');
    }, 3000);
  }
});

input.addEventListener('input', () => {
  input.classList.remove('error');
  error.classList.remove('visible');
});
