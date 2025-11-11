# 🍜 Praktikum 7 – Konten Dinamis dengan AJAX

Proyek ini merupakan tugas **Praktikum JavaScript Lanjutan** dengan fokus pada integrasi **data eksternal (API)** ke dalam halaman web.
Pada praktikum ini, mahasiswa belajar mengubah halaman statis menjadi aplikasi web dinamis menggunakan **AJAX (Asynchronous JavaScript and XML)** melalui `fetch()` dan `async/await.`

---

## 🎯 Tujuan Pembelajaran

Di akhir praktikum ini, mahasiswa diharapkan mampu:
1. Menggunakan Fetch API dengan sintaks async/await untuk mengambil data dari API publik.
1. Menangani status asynchronous secara visual (loading, success, error).
1. Membaca dan mengurai data berformat JSON.
1. Membuat dan menambahkan elemen HTML ke DOM secara dinamis menggunakan `document.createElement()`.
1. Menggunakan Git untuk manajemen branch dan pengumpulan tugas.

---

## 🧩 Skenario Praktikum – Evolusi “Dapur Koding”

Proyek Dapur Koding yang sebelumnya hanya bisa membuat resep baru kini ditingkatkan dengan fitur dinamis berbasis data eksternal.
Mahasiswa diminta menambahkan fitur yang memanfaatkan API dari TheMealDB.

### ✨ Fitur Utama
Menampilkan bagian “Inspirasi Resep” yang otomatis mengambil data dari API publik TheMealDB
.
### 🎁 Fitur Bonus
Menambahkan tombol resep acak yang memanggil data dari API dan mengisi formulir resep secara otomatis.

--- 

## 🗂️ Struktur Folder Proyek
```bash
📁 pert7
│
├── index.html
├── README.md
├── style.css
├── subtitles.vtt
│
├── 📁 assets
│   ├── chicken.jpg
│   └── wafel.jpg
│
├── 📁 scripts
│   ├── script.js
│   └── mealdb.js
│
└── 📁 vid
    └── video-radit.mp4
```

---

## 🛠️ Teknologi dan Konsep yang Digunakan
| Teknologi              | Deskripsi                                                       |
| ---------------------- | --------------------------------------------------------------- |
| **HTML5**              | Struktur halaman web dan elemen konten resep.                   |
| **CSS3 (Grid Layout)** | Styling responsif untuk menampilkan kartu resep.                |
| **JavaScript (ES6)**   | Mengambil data dari API dan menampilkan hasil ke DOM.           |
| **Fetch API**          | Digunakan untuk mengambil data dari endpoint TheMealDB.         |
| **Async/Await**        | Menangani proses asynchronous dengan sintaks yang lebih bersih. |
| **DOM Manipulation**   | Dinamis menambahkan elemen resep dari data API.                 |


---

## 🧠 Alur Logika Program

1. Menyiapkan Elemen HTML
Pada file `index.html`, dibuat section baru dengan `id="inspirasi-resep"` untuk menampung hasil dari API.
Elemen-elemen seperti indikator loading, pesan error, dan kontainer resep juga disiapkan.

1. Styling Grid Resep
File `style.css` menggunakan CSS Grid agar tampilan kartu resep bersifat responsif.

1. Mengambil Data dari API
Di dalam `mealdb.js`, digunakan `fetch()` untuk mengambil data dari:
```bash
https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
```
Data yang diterima berupa JSON dan di-loop untuk membuat elemen `<div>` resep secara dinamis.

4. Menangani Status Loading & Error
Sebelum data tampil, teks “Memuat resep...” akan muncul.
Jika fetch gagal, pesan error ditampilkan ke pengguna.

5. Menampilkan Hasil ke DOM
Hasil API berupa gambar dan nama resep akan disusun menjadi elemen `<div>` dengan kelas `.kartu-resep.`

---

## 💻 Contoh Cuplikan Kode
### **File:** `mealdb.js`
```js
const containerInspirasi = document.querySelector('#resep-container');
const loadingIndicator = document.querySelector('#loading-indicator');
const errorMessage = document.querySelector('#error-message');

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

async function muatInspirasiResep() {
    try {
        // 1. Tampilkan loading, sembunyikan error
        loadingIndicator.style.display = 'block';
        errorMessage.style.display = 'none';

        // 2. Ambil data dari API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari server.');
        }

        // 3. Ubah data menjadi JSON
        const data = await response.json();
        console.log(data);
        const resepArray = data.meals; // Ini adalah array berisi resep

        // 4. Sembunyikan loading
        loadingIndicator.style.display = 'none';

        // 5. Panggil fungsi untuk menampilkan data
        tampilkanResep(resepArray);

    } catch (error) {
        // 6. Tangani jika terjadi error
        console.error('Terjadi kesalahan:', error);
        loadingIndicator.style.display = 'none';
        errorMessage.textContent = 'Gagal memuat resep. Coba lagi nanti.';
        errorMessage.style.display = 'block';
    }
}

function tampilkanResep(resepArray) {
    // Bersihkan kontainer (jika ada data lama)
    containerInspirasi.innerHTML = '';

    // Loop (ulangi) untuk setiap resep di dalam array
    resepArray.forEach(resep => {
        // 1. Buat elemen-elemen HTML baru
        const kartuDiv = document.createElement('div');
        kartuDiv.className = 'kartu-resep'; // Beri kelas CSS

        const gambar = document.createElement('img');
        gambar.src = resep.strMealThumb; // Ambil URL gambar dari API
        gambar.alt = resep.strMeal;

        const judul = document.createElement('h3');
        judul.textContent = resep.strMeal; // Ambil nama resep dari API

        // 2. Susun elemen-elemen tersebut
        kartuDiv.appendChild(gambar);
        kartuDiv.appendChild(judul);

        // 3. Masukkan kartu yang sudah jadi ke dalam kontainer di halaman
        containerInspirasi.appendChild(kartuDiv);
    });
}

document.addEventListener('DOMContentLoaded', async function () {
    await muatInspirasiResep();
});
```