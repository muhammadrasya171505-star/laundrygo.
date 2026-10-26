AI LOGBOOK PROYEK WEBSITE LAUNDRYGO

Tahap 1 --- Eksplorasi Ide & Perancangan Solusi
Tujuan: Menentukan kebutuhan pengguna, konsep produk, dan alur
solusi.

Catatan proses: - Masalah: Pelanggan membutuhkan cara praktis
untuk mengetahui layanan laundry, memperkirakan biaya, dan mengirim
detail pesanan. - Ide produk: LaundryGo, website informasi layanan
dan pemesanan laundry. - Pengguna: Pelanggan dan kasir. -
Solusi: Pelanggan memilih layanan, memasukkan data pesanan dan berat
cucian, melihat estimasi biaya, lalu meneruskan ringkasan pesanan
melalui WhatsApp. - Peran AI: Membantu mengembangkan ide fitur, alur
pemesanan, dan data yang perlu diminta dari pelanggan. - Keputusan:
Menggunakan HTML untuk struktur, CSS untuk tampilan, dan JavaScript
untuk interaksi serta perhitungan.

Hasil tahap: Konsep produk dan alur pemesanan awal berhasil
ditentukan.

Refleksi siswa: Saya memahami bahwa fitur sebaiknya dirancang
berdasarkan kebutuhan pengguna. Website tidak hanya perlu menarik,
tetapi juga harus membantu pelanggan menyelesaikan pemesanan dengan
jelas.
Tahap 2 --- Penyusunan Kerangka Kode (Scaffolding)
Tujuan: Membagi struktur dan fungsi kode agar mudah dikembangkan.

Catatan proses: - index.html: Membentuk struktur halaman,
informasi layanan, formulir, input, tombol, dan area pesan status. -
style.css: Mengatur warna, tata letak, jarak, tipografi, tombol,
formulir, dan tampilan responsif. - script.js: Mengelola
interaksi, validasi input, estimasi harga, nomor pesanan, serta
penyusunan pesan WhatsApp. - Peran AI: Membantu menjelaskan
pembagian tugas HTML/CSS/JavaScript dan hubungan elemen HTML dengan
logika JavaScript.

Alur program: 1. Pelanggan memilih layanan. 2. Pelanggan mengisi
data pesanan dan berat cucian. 3. JavaScript memvalidasi data. 4.
JavaScript menghitung estimasi harga berdasarkan layanan dan berat,
termasuk biaya tambahan yang ditetapkan. 5. Website menyusun ringkasan
dan nomor pesanan. 6. Pelanggan dapat meneruskan detail pesanan melalui
WhatsApp.

Hasil tahap: Kode dibagi menjadi tiga berkas utama yang saling
terhubung.

Refleksi siswa: Saya memahami bahwa HTML mengatur struktur, CSS
mengatur tampilan, dan JavaScript mengatur perilaku serta logika
website.
Tahap 3 --- Pemecahan Masalah & Penanganan Galat (Debugging)
Tujuan: Menemukan potensi kesalahan dan memeriksa apakah program
berjalan sesuai kebutuhan.

Temuan peninjauan kode:
1. Nama class pesan sukses
   - Temuan: Terdapat classList.remove("succes", "error").
   - Masalah: succes tidak sama dengan class CSS success.
   - Perbaikan yang disarankan: Ganti menjadi
     classList.remove("success", "error") agar nama class
     konsisten.
2. Contoh berat dan batas minimum
   - Temuan: Contoh berat pada placeholder perlu sesuai dengan batas
     minimum input dan validasi JavaScript.
   - Tindakan: Samakan nilai contoh dengan berat minimum yang
     benar-benar diperbolehkan.
3. Pembukaan WhatsApp
   - Temuan: Kode menggunakan window.open() dengan opsi
     noopener,noreferrer, lalu memiliki pengalihan halaman jika
     hasilnya dianggap gagal.
   - Potensi masalah: Pada kondisi tertentu, hasil window.open()
     bisa bernilai null, sehingga halaman saat ini dapat dialihkan
     secara tidak terduga.
   - Tindakan: Uji alur tersebut pada browser yang digunakan dan
     pastikan tidak terjadi pengalihan yang tidak diinginkan.
4. Penyimpanan pesanan
   - Temuan: Berdasarkan kode yang ditinjau, detail pesanan
     diteruskan melalui WhatsApp dan belum terlihat disimpan ke
     database.
   - Dampak: Belum ada penyimpanan terpusat atau riwayat pesanan
     otomatis.
   - Pengembangan berikutnya: Tambahkan backend dan database jika
     fitur penyimpanan diperlukan.
5. Harga dan nomor kasir
   - Tindakan: Verifikasi semua harga, biaya tambahan, batas berat,
     dan nomor WhatsApp sebelum website dipublikasikan.
Peran AI: Membantu menemukan potensi ketidaksesuaian, menjelaskan
penyebab dan dampaknya, serta mengusulkan perbaikan. Saran AI tetap
harus diuji langsung.

Hasil tahap: Ditemukan beberapa hal yang perlu diperbaiki atau
diverifikasi, terutama konsistensi class, batas berat, alur WhatsApp,
dan penyimpanan pesanan.

Refleksi siswa: Saya memahami bahwa debugging tidak hanya mencari
error, tetapi juga menguji apakah hasil program sesuai dengan kebutuhan.
Setelah memperbaiki kode, saya perlu menguji ulang fitur terkait.
Tahap 4 --- Refleksi & Penjelasan Kode
Tujuan: Memverifikasi bahwa siswa memahami fungsi dan keterbatasan
program.

Penjelasan kode: - HTML: Membentuk halaman dan elemen yang
digunakan pelanggan. - CSS: Mengatur tampilan visual website. -
JavaScript: Memvalidasi formulir, menghitung estimasi biaya, membuat
nomor pesanan, dan menyiapkan pesan WhatsApp. - Validasi: Memeriksa
apakah input sudah sesuai ketentuan. - Perhitungan harga:
Menggunakan layanan dan berat cucian serta biaya tambahan yang
ditetapkan dalam kode. - WhatsApp: Membuka tautan yang berisi pesan
pesanan. Pengiriman tetap mengikuti tindakan pengguna di WhatsApp. -
Keterbatasan: Tanpa backend/database, pesanan belum tersimpan
otomatis ke sistem terpusat dan status pesanan belum dapat dilacak dari
website.
