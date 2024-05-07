window.addEventListener("DOMContentLoaded", function() {
    // Periksa apakah ada ID pengguna yang tersimpan di localStorage
    var userId = localStorage.getItem("userId");
    if (userId) {
        // Jika ada, kirim permintaan ke API untuk mendapatkan data pengguna
        fetch("https://solusiadil-api.vercel.app/users" + userId)
        .then(response => response.json())
        .then(data => {
            // Tampilkan informasi pengguna yang telah login
            var userInfo = document.getElementById("userInfo");
            userInfo.innerHTML = "Nama: " + data.nama + "<br>Email: " + data.email;
        })
        .catch(error => {
            console.error("Gagal mendapatkan data pengguna:", error);
            alert("Terjadi kesalahan. Silakan coba lagi.");
        });
    } else {
        // Jika tidak ada ID pengguna yang tersimpan di localStorage, alihkan pengguna kembali ke halaman login
        window.location.href = "login.html";
    }
});
