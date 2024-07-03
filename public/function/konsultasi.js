

function generateRandomID() {
  var id = Math.floor(Math.random() * 900000000) + 100000000;
  return id.toString();
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("id_konsultasi").value = generateRandomID();
});


function validateNik(input) {
const regex = /[^0-9]/g;
if (regex.test(input.value)) {
input.value = input.value.replace(regex, '');
document.getElementById('error-message-nik').style.display = 'block';
} else {
document.getElementById('error-message-nik').style.display = 'none';
}
if (input.value.length > 13) {
input.value = input.value.slice(0, 13);
document.getElementById('error-message-nik').style.display = 'block';
}
}

function validateNama(input) {
const regex = /[^a-zA-Z\s]/g;
if (regex.test(input.value)) {
input.value = input.value.replace(regex, '');
document.getElementById('error-message-nama').style.display = 'block';
} else {
document.getElementById('error-message-nama').style.display = 'none';
}
if (input.value.length > 150) {
input.value = input.value.slice(0, 150);
document.getElementById('error-message-nama').style.display = 'block';
}
}

function validateFirstDigit(event) {
const firstDigit = event.key;
if (event.target.selectionStart === 0 && firstDigit !== '0') {
event.preventDefault();
}
}

function validateTLP(input) {
const regex = /[^0-9]/g;
if (regex.test(input.value) || input.value.length > 13) {
input.value = input.value.replace(regex, '');
document.getElementById('error-message-tlp').style.display = 'block';
} else {
document.getElementById('error-message-tlp').style.display = 'none';
}

if (input.value.length > 13) {
input.value = input.value.slice(0, 13);
}
}

function validatePassword(input) {
const password = input.value;
const passwordMessage = document.getElementById('password-message');
const passwordSafeMessage = document.getElementById('password-safe-message');
input.value = input.value.replace(/\s/g, '');
const hasAlphabet = /[a-zA-Z]/.test(input.value);
const hasNumber = /[0-9]/.test(input.value);

if (input.value.length > 8 && hasAlphabet && hasNumber) {
passwordSafeMessage.style.display = 'block';
passwordMessage.style.display = 'none';
} else {
passwordSafeMessage.style.display = 'none';
passwordMessage.style.display = 'block';
}
}