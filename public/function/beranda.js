// async function fetchUserData() {
//     try {
//         const id_masyarakat = new URLSearchParams(window.location.search).get("id_masyarakat");
//         const apiUrl = `https://solusiadil-api.vercel.app/users/idmasyarakat/${id_masyarakat}`;
//         const response = await fetch(apiUrl);
//         const userData = await response.json();
//         const uniqueId = Object.keys(userData)[0];
//         const user = userData[uniqueId];

//         const userInfoElement = document.getElementById('userInfo');
//         userInfoElement.innerHTML = `
//             <strong>Nik:</strong> ${user.nik}<br>
//             <strong>Nama:</strong> ${user.nama}<br>
//             <!-- Tambahkan informasi pengguna lainnya sesuai kebutuhan -->
//         `;

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//         const userInfoElement = document.getElementById('userInfo');
//         userInfoElement.textContent = 'Failed to fetch user data.';
//     }
// }
// document.addEventListener('DOMContentLoaded', fetchUserData);

        // var nama = "<%= nama %>"; 
        // var idMasyarakat = "<%= idMasyarakat %>";
        
        // document.getElementById("nama").innerText = nama;
        // document.getElementById("idMasyarakat").innerText = idMasyarakat;
