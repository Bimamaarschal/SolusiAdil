function validateLength(input) {
    if (input.value.length > 13) {
        input.value = input.value.slice(0, 13);
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
    }
}
