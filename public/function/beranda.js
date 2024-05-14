async function fetchUserData() {
    try {
        const nik = new URLSearchParams(window.location.search).get("nik");
        const apiUrl = `https://solusiadil-api.vercel.app/users/nik/${nik}`;
        const response = await fetch(apiUrl);
        const userData = await response.json();
        const uniqueId = Object.keys(userData)[0];
        const user = userData[uniqueId];

        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.innerHTML = `
            <strong>Nik:</strong> ${user.id_masyarakat}<br>
            <strong>Nama:</strong> ${user.nama}<br>
            <!-- Tambahkan informasi pengguna lainnya sesuai kebutuhan -->
        `;

    } catch (error) {
        console.error('Error fetching user data:', error);
        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.textContent = 'Failed to fetch user data.';
    }
}
document.addEventListener('DOMContentLoaded', fetchUserData);