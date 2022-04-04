const queries = new URLSearchParams(window.location.search);
const firstName = queries.get('firstName');
const lastName = queries.get('lastName');
const username = queries.get('username');
const avatarURL = queries.get('avatarUrl');

const userfirstName = document.getElementById('user-firstName');
const userlastName = document.getElementById('user-lastName');
const userusername = document.getElementById('user-username');
const useravatar = document.getElementById('user-avatar');

userfirstName.innerText += firstName;
userlastName.innerText += lastName;
userusername.innerText += username;
useravatar.src = avatarURL;
