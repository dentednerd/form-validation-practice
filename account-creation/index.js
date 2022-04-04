const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const username = document.getElementById('username');
const avatarUrl = document.getElementById('avatarUrl');

const form = document.getElementById('signupForm');
const errorMessage = document.getElementById('errorMessage');

const urlRegex =
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

const usernameRegex = /^[a-z]+[0-9]/i;

const validateURL = (e) => {
  const isURLValid = urlRegex.test(e.target.value);
  if (!isURLValid) {
    e.target.classList.add('invalid-url');
    errorMessage.innerText = 'Please enter a valid URL address';
  } else {
    e.target.classList.remove('invalid-url');
    errorMessage.innerText = '';
  }
};

const validateUsername = (e) => {
  const isUsernameValid = usernameRegex.test(e.target.value);
  if (!isUsernameValid) {
    e.target.classList.add('invalid');
    errorMessage.innerText =
      'A username must contain letters and numbers and must not contain special characters';
  } else {
    e.target.classList.remove('invalid');
    errorMessage.innerText = '';
  }
};

const validateForm = (e) => {
  const inputs = [...document.getElementsByClassName('form-input')];
  const formIsInvalid = inputs.some((input) =>
    input.classList.contains('invalid')
  );

  if (formIsInvalid) {
    e.preventDefault();
  }
};

avatarUrl.addEventListener('input', validateURL);
username.addEventListener('input', validateUsername);
form.addEventListener('submit', validateForm);
