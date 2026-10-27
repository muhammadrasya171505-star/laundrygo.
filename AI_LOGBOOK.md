# AI LOGBOOK — LAUNDRYGO

## Identitas Proyek

- **Nama Proyek:** LaundryGo — Website Laundry Antar Jemput
- **Nama Pengembang:** MUHAMMAD RASYA ZIVEN PRASETIYO & MUHAMMAD FAWWAZ HILMY
- **Kelas:** XI
- **Jurusan:** IPA
- **Sekolah:** SMAS AL-RIFA'IE GONDANGLEGI MALANG
- **Tahun Pembuatan:** 2026
- **Repositori:** https://github.com/muhammadrasya171505-star/laundrygo.

---

## Tahap 1: Eksplorasi Ide & Perancangan Solusi

### 1. Tujuan Tahap

Tahap ini dilakukan untuk menentukan ide produk digital yang dapat membantu menyelesaikan permasalahan dalam kehidupan sehari-hari. Ide yang dipilih adalah website LaundryGo, yaitu website layanan laundry yang memudahkan pelanggan memperoleh informasi layanan dan melakukan pemesanan laundry secara online.

### 2. Interaksi dengan AI

**AI yang digunakan:** ChatGPT

**Contoh prompt:**

> Berperanlah sebagai ahli startup aplikasi. Berikan ide dan rancangan website laundry online yang memiliki fitur informasi layanan, pemesanan laundry, estimasi biaya, dan layanan antar jemput.

**Ringkasan saran AI:**

AI memberikan saran untuk membuat website LaundryGo dengan fitur-fitur berikut:

1. Halaman beranda untuk memperkenalkan layanan laundry.
2. Bagian layanan untuk menampilkan pilihan jasa laundry.
3. Bagian cara kerja yang menjelaskan tahapan pemesanan.
4. Formulir pemesanan laundry.
5. Fitur perhitungan estimasi biaya.
6. Integrasi WhatsApp untuk membantu pelanggan mengirimkan detail pesanan.
7. Bagian kontak untuk menampilkan informasi layanan.

### 3. Validasi & Modifikasi Mandiri

Saya meninjau saran AI dan menyesuaikannya dengan kebutuhan proyek. Saya memilih fitur yang sesuai untuk website LaundryGo, terutama formulir pemesanan, estimasi biaya, informasi layanan, dan pengiriman detail pesanan melalui WhatsApp.

Saya juga menentukan nama produk, susunan menu navigasi, dan isi informasi yang akan ditampilkan pada website.

**Hasil tahap:** Konsep website LaundryGo ditetapkan sebagai website layanan laundry yang dirancang agar mudah dipahami dan digunakan oleh pelanggan.

---

## Tahap 2: Penyusunan Kerangka Kode (Scaffolding)

### 1. Tujuan Tahap

Tahap ini bertujuan menyusun struktur dasar website dan membagi kode berdasarkan fungsinya agar lebih mudah dikembangkan dan diperbaiki.

### 2. Interaksi dengan AI

**AI yang digunakan:** ChatGPT

**Contoh prompt:**

> Buatkan kode index.html secara lengkap untuk website LaundryGo. Setelah itu, buatkan style.css dan script.js secara terpisah. Berikan komentar pada kode agar mudah dipahami oleh pemula.

**Ringkasan saran AI:**

AI membantu menyusun struktur proyek sebagai berikut:

```text
LaundryGo/
├── index.html
├── style.css
├── script.js
├── README.md
└── AI_LOGBOOK.md
```

Fungsi setiap file:

- **index.html:** Menyusun struktur halaman, navigasi, informasi layanan, dan formulir pemesanan.
- **style.css:** Mengatur warna, ukuran teks, tata letak, jarak, dan tampilan responsif website.
- **script.js:** Mengatur interaksi website, seperti pemrosesan formulir, perhitungan estimasi biaya, dan penyusunan pesan pesanan untuk WhatsApp.
- **README.md:** Menjelaskan informasi proyek, teknologi yang digunakan, dan panduan penggunaan.
- **AI_LOGBOOK.md:** Mendokumentasikan proses penggunaan AI selama pengerjaan proyek.

### 3. Validasi & Modifikasi Mandiri

Saya memeriksa struktur file dan memastikan bahwa file HTML terhubung dengan CSS dan JavaScript menggunakan nama file yang sesuai.

Saya menggunakan tiga file utama, yaitu `index.html`, `style.css`, dan `script.js`, agar struktur kode lebih teratur. Saya juga meninjau komentar kode dari AI untuk membantu memahami fungsi setiap bagian sebelum melakukan perubahan.

**Hasil tahap:** Kerangka dasar website tersusun dan setiap file memiliki fungsi yang jelas.

---

## Tahap 3: Pemecahan Masalah & Penanganan Galat (Debugging)

### 1. Tujuan Tahap

Tahap ini bertujuan menemukan dan memperbaiki kesalahan kode yang menyebabkan tampilan website tidak sesuai dengan yang diharapkan.

### 2. Interaksi dengan AI

**AI yang digunakan:** ChatGPT

**Contoh prompt:**

> Periksa kode CSS website saya. Ada bagian CSS yang tidak berjalan dengan benar. Bantu temukan kesalahannya dan jelaskan cara memperbaikinya agar mudah dipahami pemula.

**Contoh masalah yang ditinjau:**

1. **Kesalahan penulisan sintaks CSS:** Kurung kurawal penutup `}` pada aturan `.soap` tidak ditulis dengan benar atau tidak tersedia, sehingga aturan CSS berikutnya dapat ikut terdampak.
2. **Ukuran ikon sabun:** Ikon sabun perlu disesuaikan ukurannya agar tampil lebih besar dan seimbang dengan ilustrasi keranjang serta pakaian.

**Contoh prompt lanjutan:**

> Bagian ikon sabun pada CSS terlihat terlalu kecil. Bantu sesuaikan ukurannya agar lebih besar dan tetap responsif mengikuti ukuran layar.

### 3. Validasi & Modifikasi Mandiri

Saya memeriksa kembali kode CSS yang bermasalah dan membandingkan saran perbaikan AI dengan kode yang digunakan.

Perubahan yang ditinjau meliputi:

- Memastikan setiap blok CSS memiliki kurung kurawal pembuka dan penutup yang sesuai.
- Menyesuaikan ukuran ikon sabun menggunakan properti CSS seperti `font-size`.
- Menguji tampilan website setelah perubahan untuk melihat apakah masalah sudah teratasi.

**Contoh kode penyesuaian ukuran ikon:**

```css
awalnya seperti

.soap {
    font-size: 100px !important;
   line-height: 1;
}
```

**Hasil tahap:** Kesalahan kode ditinjau dan perbaikan dilakukan berdasarkan hasil pemeriksaan. Status keberhasilan setiap perbaikan perlu dipastikan melalui pengujian website.

---

## Tahap 4: Refleksi & Penjelasan Kode

### 1. Tujuan Tahap

Tahap ini bertujuan memastikan bahwa saya tidak hanya menggunakan kode yang diberikan AI, tetapi juga memahami fungsi dan cara kerja kode tersebut.

### 2. Interaksi dengan AI

**AI yang digunakan:** ChatGPT

**Contoh prompt:**

> Jelaskan fungsi index.html, style.css, dan script.js pada website LaundryGo. Jelaskan juga cara kerja formulir pemesanan, perhitungan estimasi biaya, dan pengiriman pesanan melalui WhatsApp dengan bahasa yang mudah dipahami pemula.

**Ringkasan penjelasan AI:**

- **HTML** digunakan untuk membentuk struktur dan isi halaman website.
- **CSS** digunakan untuk mengatur tampilan, termasuk warna, tata letak, ukuran elemen, dan responsivitas.
- **JavaScript** digunakan untuk menambahkan interaksi dan mengolah data dari pengguna.
- **Formulir pemesanan** digunakan untuk menerima informasi pesanan pelanggan.
- **Perhitungan estimasi biaya** digunakan untuk menghitung perkiraan harga berdasarkan aturan perhitungan yang diterapkan pada kode.
- **Integrasi WhatsApp** digunakan untuk menyusun dan mengirimkan detail pesanan melalui aplikasi atau layanan WhatsApp setelah pengguna melakukan tindakan yang diperlukan.

### 3. Validasi & Modifikasi Mandiri

Saya mempelajari kembali kode yang dibuat dan mencocokkan penjelasan AI dengan implementasi sebenarnya di dalam proyek.

Saya melakukan pemeriksaan terhadap:

1. Hubungan antara elemen HTML dan aturan CSS.
2. Hubungan antara formulir HTML dan fungsi JavaScript.
3. Cara data formulir dibaca dan diproses oleh JavaScript.
4. Rumus yang digunakan untuk menghitung estimasi biaya.
5. Format pesan yang disusun untuk dikirim melalui WhatsApp.

Saya juga meninjau kode secara mandiri agar dapat menjelaskan fungsi setiap file dan alasan penggunaan fitur yang tersedia.

**Refleksi pribadi:**

Dari pengerjaan proyek LaundryGo, saya belajar bahwa AI dapat membantu dalam mencari ide, menyusun struktur kode, menjelaskan pemrograman, dan menemukan kemungkinan kesalahan. Namun, saran AI tidak boleh langsung dianggap benar. Kode tetap perlu diperiksa, diuji, dan disesuaikan dengan kebutuhan proyek.

Saya juga belajar pentingnya memahami kode yang digunakan agar dapat melakukan perbaikan sendiri ketika muncul masalah.

**Hasil tahap:** Saya memperoleh pemahaman yang lebih baik mengenai struktur website dan proses pengembangan menggunakan HTML, CSS, serta JavaScript.

---

## Kesimpulan

Penggunaan AI dalam pengembangan website LaundryGo membantu proses perancangan ide, penyusunan kerangka kode, debugging, dan pemahaman program.

AI digunakan sebagai alat bantu pembelajaran, bukan sebagai pengganti proses berpikir dan pemeriksaan mandiri. Setiap saran yang digunakan perlu divalidasi dan disesuaikan dengan kebutuhan proyek.

Dokumentasi ini dibuat sebagai bentuk transparansi penggunaan AI dalam proses pengembangan website LaundryGo.

---

**Catatan:** Isi logbook harus disesuaikan dengan proses pengerjaan yang benar-benar dilakukan oleh pengembang. Contoh prompt, perubahan kode, dan refleksi di atas perlu diperiksa kembali agar sesuai dengan interaksi AI dan pengujian yang sebenarnya.
