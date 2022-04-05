const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const company = document.getElementById('company');
const jobTitle = document.getElementById('jobTitle');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const errorMessage = document.getElementById('errorMessage');

const textRegex = /^[a-zA-Z]/i;

const phoneRegex = /^[0-9]/i;

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateText = (event) => {
  const isTextValid = textRegex.test(event.target.value);

  if (!isTextValid) {
    event.target.classList.add('invalid');
    errorMessage.innerText = 'Your name, company and job title should only contain text characters.';
  } else {
    event.target.classList.remove('invalid');
    errorMessage.innerText = '';
  }
}

const validateEmail = (event) => {
  const isEmailValid = emailRegex.test(event.target.value);

  if (!isEmailValid) {
    event.target.classList.add('invalid');
    errorMessage.innerText = 'Please submit a valid email address.';
  } else {
    event.target.classList.remove('invalid');
    errorMessage.innerText = '';
  }
}

const validatePhone = (event) => {
  const isPhoneValid = phoneRegex.test(event.target.value);

  if (!isPhoneValid) {
    event.target.classList.add('invalid');
    errorMessage.innerText = 'Your phone number should only contain digits.';
  } else {
    event.target.classList.remove('invalid');
    errorMessage.innerText = '';
  }
}

const validateForm = (e) => {
  const inputs = [...document.getElementsByClassName('form-input')];
  const formIsInvalid = inputs.some((input) =>
    input.classList.contains('invalid')
  );

  if (formIsInvalid) {
    e.preventDefault();
  }
};

firstName.addEventListener('input', validateText);
lastName.addEventListener('input', validateText);
company.addEventListener('input', validateText);
jobTitle.addEventListener('input', validateText);
email.addEventListener('input', validateEmail);
phone.addEventListener('input', validatePhone);
form.addEventListener('submit', validateForm);
