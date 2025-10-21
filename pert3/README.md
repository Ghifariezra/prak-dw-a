Nama   : Bryan Ananda Saputra Hulu
NPM    : 4524210020
MatKul : Desain Web (A)

=====================================================
📄 Dokumentasi Kode HTML: Formulir Pengiriman Resep
=====================================================

1. Struktur Dasar HTML
----------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Praktikum 4</title>
</head>
<body>
    ...
</body>
</html>

- <!DOCTYPE html> → mendeklarasikan bahwa dokumen menggunakan HTML5.
- <html lang="en"> → elemen utama dokumen dengan bahasa default Inggris.
- <head> → berisi metadata.
- <meta charset="UTF-8"> → mendukung karakter UTF-8.
- <meta name="viewport"...> → membuat tampilan responsif di perangkat mobile.
- <title> → judul halaman yang tampil di tab browser.

-----------------------------------------------------

2. Judul Utama Halaman
----------------------
<h1>Formulir Pengiriman Resep Baru</h1>

- <h1> → heading utama halaman.

-----------------------------------------------------

3. Formulir Resep
-----------------
<form action="/submit-recipe" method="post">

- <form> → elemen utama untuk input data.
- action="/submit-recipe" → data dikirim ke URL /submit-recipe.
- method="post" → metode pengiriman data POST.

a. Informasi Dasar Resep
------------------------
<fieldset>
    <legend>Informasi Dasar Resep</legend>
    <p>
        <label for="recipe-name">Nama Resep:</label><br>
        <input type="text" id="recipe-name" name="recipe_name" required maxlength="80">
    </p>
    <p>
        <label for="prep-time">Waktu Persiapan (menit):</label><br>
        <input type="number" id="prep-time" name="prep_time" min="5" placeholder="Contoh: 45">
    </p>
</fieldset>

- <fieldset> → mengelompokkan input.
- <legend> → judul kelompok input.
- Nama Resep → wajib diisi, maksimal 80 karakter.
- Waktu Persiapan → angka menit, minimal 5.

b. Detail Tambahan
------------------
<fieldset>
    <legend>Detail Tambahan</legend>
    <p>
        <label for="difficulty">Tingkat Kesulitan (1-5):</label><br>
        <input type="range" id="difficulty" name="difficulty" min="1" max="5" step="1">
    </p>
    <p>
        <label for="recipe-category">Kategori Resep:</label><br>
        <input list="categories" id="recipe-category" name="recipe_category">
        <datalist id="categories">
            <option value="Makanan Pembuka"></option>
            <option value="Makanan Utama"></option>
            <option value="Hidangan Penutup"></option>
            <option value="Minuman"></option>
        </datalist>
    </p>
</fieldset>

- Tingkat Kesulitan → slider 1–5.
- Kategori Resep → input dengan pilihan otomatis dari datalist.

c. Tombol Kirim
---------------
<button type="submit">Kirim Resep</button>

- Tombol untuk mengirimkan formulir.

-----------------------------------------------------

4. Pratinjau Halaman Resep
--------------------------
<hr>
<h2>Pratinjau Halaman Resep</h2>

- <hr> → garis pemisah.
- <h2> → subjudul pratinjau resep.

a. Header Resep
---------------
<article>
    <header>
        <h1>Judul Resep Akan Muncul Di Sini</h1>
        <p>Waktu persiapan: <time datetime="PT45M">45 menit</time></p>
    </header>

- <article> → konten mandiri.
- <header> → bagian kepala artikel.
- <time> → elemen waktu (ISO 8601).

b. Gambar Resep
---------------
<figure>
    <img src="html5.jpg" alt="Gambar hidangan utama resep" width="600">
    <figcaption>Deskripsi singkat atau caption untuk gambar.</figcaption>
</figure>

- <figure> → gambar + caption.
- <img> → menampilkan gambar.
- <figcaption> → keterangan gambar.

c. Deskripsi Resep
------------------
<p>
    Deskripsi lengkap tentang resep...
    <mark>bumbu spesial</mark>...
</p>

- <p> → paragraf penjelasan.
- <mark> → sorot teks penting.

d. Informasi Gizi
-----------------
<details>
    <summary>Tampilkan Informasi Gizi</summary>
    <ul>
        <li>Kalori: 350kcal</li>
        <li>Protein: 20g</li>
        <li>Karbohidrat: 30g</li>
    </ul>
</details>

- <details> → konten tersembunyi.
- <summary> → teks ringkasan.
- <ul> → daftar informasi gizi.

e. Video Tutorial
-----------------
<h3>Video Tutorial</h3>
<video controls width="600">
    <source src="01 praktikum dasar dasar html.mp4" type="video/mp4">
    Maaf, browser Anda tidak mendukung pemutaran video.
    <track label="Bahasa Indonesia" kind="subtitles" srclang="id" src="subtitles.vtt" default>
</video>

- <video> → elemen video.
- controls → kontrol play/pause.
- <source> → file video.
- <track> → subtitle bahasa Indonesia.

f. Footer Artikel
-----------------
<footer>
    <p>Tingkat Kesulitan: 
        <meter min="0" max="5" value="3" title="3 dari 5">Sedang</meter>
    </p>
</footer>

- <footer> → bagian penutup artikel.
- <meter> → indikator tingkat kesulitan (0–5).

-----------------------------------------------------

Ringkasan
---------
1. Formulir Resep: input nama resep, waktu persiapan, tingkat kesulitan, kategori.
2. Pratinjau Resep: artikel berisi judul, gambar, deskripsi, informasi gizi, video, tingkat kesulitan.
3. Menggunakan elemen HTML5 semantik: article, header, footer, figure, details, meter, time.

=====================================================
