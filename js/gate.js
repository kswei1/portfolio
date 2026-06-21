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
    input.blur();
    // bear breaks into a smile, holds ~1s, then the gate fades out
    const bear = document.getElementById('gate-bear');
    if (bear) bear.classList.add('is-happy');
    setTimeout(() => document.querySelector('.gate').classList.add('is-leaving'), 850);
    setTimeout(() => window.location.replace('./work.html'), 1250);
  } else {
    input.classList.add('error');
    error.textContent = 'Incorrect password. Try again.';
    error.classList.add('visible');
    input.value = '';
    input.focus();
    const bear = document.getElementById('gate-bear');
    if (bear) bear.classList.add('is-confused');
    setTimeout(() => {
      input.classList.remove('error');
      error.classList.remove('visible');
      if (bear) bear.classList.remove('is-confused');
    }, 3000);
  }
});

input.addEventListener('input', () => {
  input.classList.remove('error');
  error.classList.remove('visible');
  const bear = document.getElementById('gate-bear');
  if (bear) bear.classList.remove('is-confused');
});
