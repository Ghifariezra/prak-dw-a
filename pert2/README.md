# Praktikum 2 - Pengiriman Resep

Proyek ini merupakan tugas praktikum berupa **halaman web sederhana** yang menyediakan formulir untuk mengirimkan resep makanan/minuman. Formulir ini menampung data dasar resep seperti nama resep, waktu persiapan, tingkat kesulitan, hingga kategori resep. Selain itu, terdapat bagian **pratinjau halaman resep** untuk menampilkan contoh tampilan hasil.

---

## ✨ Fitur Utama

1. **Formulir Input Resep**

   * Input teks untuk nama resep (maksimal 80 karakter, wajib diisi).
   * Input angka untuk waktu persiapan (dalam menit, minimal 5).
   * Slider (range input) untuk tingkat kesulitan (1–5).
   * Input dengan datalist untuk memilih kategori resep (Makanan Pembuka, Makanan Utama, Hidangan Penutup, Minuman).
   * Tombol **Kirim Resep** untuk submit data.

2. **Pratinjau Resep**

   * Menampilkan judul resep.
   * Informasi waktu persiapan menggunakan elemen `<time>`.
   * Gambar contoh resep menggunakan elemen `<figure>` dan `<img>`.

---

## 🗂️ Struktur File

```
.
├── index.html   # Halaman utama (Formulir Pengiriman Resep)
```

---

## 🛠️ Teknologi yang Digunakan

* **HTML5**:

  * `<form>`, `<fieldset>`, `<legend>` untuk struktur formulir.
  * `<input>` dengan berbagai tipe (`text`, `number`, `range`, `list`).
  * `<datalist>` untuk pilihan kategori resep.
  * `<article>`, `<header>`, `<figure>`, dan `<time>` untuk menampilkan pratinjau resep.

---

## 🚀 Cara Menjalankan

1. Clone atau salin file HTML ke komputer.
2. Simpan file dengan nama `index.html`.
3. Buka file tersebut menggunakan browser (Chrome, Firefox, Edge, dll).
4. Formulir dapat diisi dan dikirim (meskipun backend `/submit-recipe` belum diimplementasikan).

---

## 📌 Catatan

* Halaman ini **hanya menggunakan HTML** tanpa CSS/JavaScript tambahan.
* Backend untuk menangani route `/submit-recipe` tidak termasuk dalam proyek ini.
* Gambar pada pratinjau menggunakan data URI base64 bawaan dari kode.

---

## 📷 Preview

**Formulir Resep Baru**

* Nama Resep
* Waktu Persiapan
* Tingkat Kesulitan
* Kategori Resep

**Pratinjau Halaman Resep**

* Judul Resep Akan Muncul di Sini
* Waktu persiapan ditampilkan dengan elemen `<time>`
* Gambar resep (dummy)

---

👨‍💻 Dibuat untuk memenuhi tugas praktikum **Mata Kuliah Pemrograman Web Dasar**.
