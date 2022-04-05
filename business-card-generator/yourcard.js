const queries = new URLSearchParams(window.location.search);
const firstName = queries.get('firstName');
const lastName = queries.get('lastName');
const company = queries.get('company');
const jobTitle = queries.get('jobTitle');
const email = queries.get('email');
const phone = queries.get('phone');

const cardFirstName = document.getElementById('card-firstName');
const cardLastName = document.getElementById('card-lastName');
const cardCompany = document.getElementById('card-company');
const cardJobTitle = document.getElementById('card-jobTitle');
const cardEmail = document.getElementById('card-email');
const cardPhone = document.getElementById('card-phone');

cardFirstName.innerText += firstName;
cardLastName.innerText += lastName;
cardCompany.innerText += company;
cardJobTitle.innerText += jobTitle;
cardEmail.innerText += email;
cardPhone.innerText += phone;
