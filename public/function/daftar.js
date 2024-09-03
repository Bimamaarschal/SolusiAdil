

    function generateRandomID() {
        var id = Math.floor(Math.random() * 900000000) + 100000000;
        return id.toString();
    }
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("id_masyarakat").value = generateRandomID();
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
  
    // Menghapus spasi dari input
    input.value = input.value.replace(/\s/g, '');
  
    // Cek karakter alfabet dan angka
    const hasAlphabet = /[a-zA-Z]/.test(input.value);
    const hasNumber = /[0-9]/.test(input.value);
  
    // Validasi password
    if (input.value.length > 8 && hasAlphabet && hasNumber) {
        passwordSafeMessage.style.display = 'block';
        passwordMessage.style.display = 'none';
        return true; // Password valid
    } else {
        passwordSafeMessage.style.display = 'none';
        passwordMessage.style.display = 'block';
        // Tambahkan pesan khusus jika panjang password kurang dari 9 karakter
        if (input.value.length <= 8) {
            passwordMessage.textContent = 'Password harus lebih dari 8 karakter dan mengandung huruf serta angka.';
        } else {
            passwordMessage.textContent = 'Password harus mengandung huruf dan angka.';
        }
        return false; // Password tidak valid
    }
  }
  
  function validateForm() {
    const passwordInput = document.getElementById('password');
    // Validasi password saat submit
    return validatePassword(passwordInput);
  }