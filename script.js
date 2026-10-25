
"use strict";

/* =========================================================
   1. PENGATURAN WEBSITE LAUNDRYGO
   Bagian ini menyimpan harga layanan dan konfigurasi.
   ========================================================= */

// Daftar harga setiap jenis layanan per kilogram.
// Sesuaikan harga ini dengan tarif mitra laundry kamu.
const tarifLayanan = {
    reguler: {
        nama: "Cuci Reguler",
        harga: 11000
    },

    kilat: {
        nama: "Cuci Kilat",
        harga: 33000
    },

    setrika: {
        nama: "Cuci dan Setrika",
        harga: 14000
    }
};

// Contoh biaya antar-jemput per pesanan.
// Nilai ini hanya contoh dan dapat diubah.
const biayaAntarJemput = 5000;

// Ganti dengan nomor WhatsApp kasir yang benar.
// Gunakan kode negara 62 tanpa tanda + atau angka 0 di depan.
// Contoh format: 6282228264669
const nomorKasir = "6282228264669";

// Batas berat yang bisa dipilih pada formulir.
const beratMinimum = 2;
const beratMaksimum = 100;


/* =========================================================
   2. MENGAMBIL ELEMEN HTML
   JavaScript memerlukan ID HTML untuk mengakses elemen.
   ========================================================= */

// Elemen formulir pemesanan.
const bookingForm = document.getElementById("bookingForm");

// Elemen menu navigasi.
const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");

// Elemen pilihan layanan dan berat pakaian.
const layananSelect = document.getElementById("layananSelect");
const beratInput = document.getElementById("berat");
const antarJemputSelect = document.getElementById("antarJemput");

// Elemen tanggal dan waktu penjemputan.
const tanggalInput = document.getElementById("tanggal");
const waktuInput = document.getElementById("waktu");

// Elemen untuk menampilkan estimasi biaya.
const estimasiBiaya = document.getElementById("estimasiBiaya");
const rincianBiaya = document.getElementById("rincianBiaya");

// Elemen pesan status formulir.
const formMessage = document.getElementById("formMessage");

// Elemen tombol kirim pesanan.
const submitBooking = document.getElementById("submitBooking");

// Elemen tahun pada footer.
const currentYear = document.getElementById("currentYear");


/* =========================================================
   3. FUNGSI BANTUAN
   Fungsi ini dapat digunakan berulang kali.
   ========================================================= */

// Mengubah angka menjadi format rupiah.
// Contoh: 25000 menjadi Rp25.000.
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);
}

// Mengambil tanggal lokal dalam format YYYY-MM-DD.
// Cara ini menghindari masalah perbedaan zona waktu.
function tanggalLokalSekarang() {
    const sekarang = new Date();

    const tahun = sekarang.getFullYear();
    const bulan = String(sekarang.getMonth() + 1).padStart(2, "0");
    const hari = String(sekarang.getDate()).padStart(2, "0");

    return `${tahun}-${bulan}-${hari}`;
}

// Mengubah format tanggal menjadi lebih mudah dibaca.
// Contoh: 2026-10-23 menjadi 23 Oktober 2026.
function formatTanggal(tanggal) {
    const bagianTanggal = tanggal.split("-").map(Number);

    // Membuat tanggal dari tahun, bulan, dan hari lokal.
    const tanggalObjek = new Date(
        bagianTanggal[0],
        bagianTanggal[1] - 1,
        bagianTanggal[2]
    );

    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(tanggalObjek);
}

// Menampilkan pesan kepada pelanggan.
// Jenis pesan dapat berupa "pesan anda berhasil" atau "terjadi kesalahan mohon di chek kembali".
function tampilkanPesan(teks, jenis = "") {
    if (!formMessage) return;

    formMessage.textContent = teks;

    // Menghapus kelas lama dan menambahkan kelas baru.
    formMessage.classList.remove("pesan anda berhasil", "terjadi kesalahan mohon di chek kembali");

    if (jenis) {
        formMessage.classList.add(jenis);
    }
}

// Menghapus pesan status ketika pelanggan mulai mengubah data.
function hapusPesan() {
    if (!formMessage) return;

    formMessage.textContent = "";
    formMessage.classList.remove("pesan anda berhasil", "terjadi kesalahan mohon di chek kembali");
}


/* =========================================================
   4. MENU NAVIGASI PADA HP
   Tombol ☰ membuka dan menutup menu.
   ========================================================= */

if (menuToggle && navMenu) {

    // Ketika tombol menu diklik, ubah status menu.
    menuToggle.addEventListener("click", function () {
        const menuTerbuka = navMenu.classList.toggle("active");

        // Memperbarui informasi status untuk aksesibilitas.
        menuToggle.setAttribute(
            "aria-expanded",
            String(menuTerbuka)
        );

        // Mengubah simbol tombol sesuai keadaan menu.
        menuToggle.textContent = menuTerbuka ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-label",
            menuTerbuka ? "Tutup menu navigasi" : "Buka menu navigasi"
        );
    });

    // Menutup menu ketika salah satu tautan navigasi diklik.
    navMenu.querySelectorAll("a").forEach(function (tautan) {
        tautan.addEventListener("click", function () {
            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu navigasi");
            menuToggle.textContent = "☰";
        });
    });

    // Menutup menu jika pengguna menekan tombol Escape.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu navigasi");
            menuToggle.textContent = "☰";
        }
    });
}


/* =========================================================
   5. TOMBOL PILIH LAYANAN
   Tombol pada kartu layanan akan memilih layanan di formulir.
   ========================================================= */

const tombolPilihLayanan = document.querySelectorAll(".service-select");

tombolPilihLayanan.forEach(function (tombol) {

    tombol.addEventListener("click", function () {

        // Membaca jenis layanan dari atribut data-service.
        const jenisLayanan = tombol.dataset.service;

        // Memastikan layanan tersedia di daftar harga.
        if (!tarifLayanan[jenisLayanan] || !layananSelect) {
            return;
        }

        // Memilih layanan pada formulir secara otomatis.
        layananSelect.value = jenisLayanan;

        // Memperbarui estimasi biaya.
        perbaruiEstimasi();

        // Membersihkan pesan status sebelumnya.
        hapusPesan();

        // Memindahkan pengguna ke formulir pemesanan.
        const bagianPesan = document.getElementById("pesan");

        if (bagianPesan) {
            bagianPesan.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* =========================================================
   6. MENGHITUNG ESTIMASI BIAYA
   Harga dihitung berdasarkan layanan, berat, dan antar-jemput.
   ========================================================= */

// Menghitung total estimasi berdasarkan data pelanggan.
function hitungTotal(jenisLayanan, berat, menggunakanAntarJemput) {

    // Pastikan jenis layanan tersedia.
    if (!tarifLayanan[jenisLayanan]) {
        return null;
    }

    // Pastikan berat berupa angka yang valid.
    if (
        !Number.isFinite(berat) ||
        berat < beratMinimum ||
        berat > beratMaksimum
    ) {
        return null;
    }

    // Menghitung biaya pencucian.
    const hargaCuci = tarifLayanan[jenisLayanan].harga * berat;

    // Menghitung biaya antar-jemput jika dipilih.
    const hargaAntar = menggunakanAntarJemput
        ? biayaAntarJemput
        : 0;

    // Menghasilkan total estimasi.
    return {
        hargaCuci: hargaCuci,
        hargaAntar: hargaAntar,
        total: hargaCuci + hargaAntar
    };
}

// Memperbarui angka estimasi pada halaman.
function perbaruiEstimasi() {

    // Jika elemen HTML belum tersedia, hentikan fungsi.
    if (
        !layananSelect ||
        !beratInput ||
        !antarJemputSelect ||
        !estimasiBiaya ||
        !rincianBiaya
    ) {
        return;
    }

    // Membaca nilai dari formulir.
    const jenisLayanan = layananSelect.value;
    const berat = Number(beratInput.value);

    const menggunakanAntarJemput =
        antarJemputSelect.value === "ya";

    // Jika layanan belum dipilih, tampilkan petunjuk.
    if (!tarifLayanan[jenisLayanan]) {
        estimasiBiaya.textContent = formatRupiah(0);
        rincianBiaya.textContent =
            "Pilih layanan dan masukkan berat pakaian.";

        return;
    }

    // Jika berat belum diisi atau belum valid.
    if (
        !beratInput.value ||
        !Number.isFinite(berat) ||
        berat < beratMinimum ||
        berat > beratMaksimum
    ) {
        estimasiBiaya.textContent = formatRupiah(0);
        rincianBiaya.textContent =
            `Masukkan berat antara ${beratMinimum}–${beratMaksimum} kg.`;

        return;
    }

    // Menghitung estimasi.
    const hasil = hitungTotal(
        jenisLayanan,
        berat,
        menggunakanAntarJemput
    );

    // Jika hasil perhitungan tidak valid.
    if (!hasil) {
        estimasiBiaya.textContent = formatRupiah(0);
        rincianBiaya.textContent = "Periksa kembali pilihan layanan.";

        return;
    }

    // Menampilkan total biaya.
    estimasiBiaya.textContent = formatRupiah(hasil.total);

    // Menampilkan rincian biaya agar transparan.
    rincianBiaya.textContent =
        `${berat} kg × ${formatRupiah(tarifLayanan[jenisLayanan].harga)}` +
        ` + antar-jemput ${formatRupiah(hasil.hargaAntar)}`;

}

// Memperbarui estimasi ketika pilihan layanan berubah.
if (layananSelect) {
    layananSelect.addEventListener("change", perbaruiEstimasi);
}

// Memperbarui estimasi ketika berat berubah.
if (beratInput) {
    beratInput.addEventListener("input", perbaruiEstimasi);
}

// Memperbarui estimasi ketika opsi antar-jemput berubah.
if (antarJemputSelect) {
    antarJemputSelect.addEventListener("change", perbaruiEstimasi);
}


/* =========================================================
   7. PENGATURAN TANGGAL PENJEMPUTAN
   Mencegah pelanggan memilih tanggal yang sudah berlalu.
   ========================================================= */

if (tanggalInput) {

    // Tanggal hari ini menjadi tanggal paling awal.
    tanggalInput.min = tanggalLokalSekarang();

    // Memeriksa kembali ketika tanggal diubah.
    tanggalInput.addEventListener("change", function () {

        if (
            tanggalInput.value &&
            tanggalInput.value < tanggalLokalSekarang()
        ) {
            tanggalInput.setCustomValidity(
                "Tanggal penjemputan tidak boleh di masa lalu."
            );

        } else {
            tanggalInput.setCustomValidity("");
        }

    });

}


/* =========================================================
   8. MEMBUAT NOMOR PESANAN
   Nomor ini membantu membedakan satu pesanan dengan pesanan lain.
   ========================================================= */

function buatNomorPesanan() {

    // Membuat tanggal tanpa tanda hubung.
    const tanggal = tanggalLokalSekarang().replaceAll("-", "");

    // Membuat bagian nomor unik dari waktu dan angka acak.
    // Nomor ini cocok untuk demo, bukan pengganti ID database.
    const bagianUnik =
        Date.now().toString().slice(-6) +
        Math.floor(Math.random() * 90 + 10);

    return `LG-${tanggal}-${bagianUnik}`;
}


/* =========================================================
   9. MEMERIKSA NOMOR TELEPON
   Memastikan nomor yang dimasukkan cukup masuk akal.
   ========================================================= */

function nomorTeleponValid(nomor) {

    // Mengambil hanya digit dari nomor yang dimasukkan.
    const digitNomor = nomor.replace(/\D/g, "");

    // Memeriksa panjang nomor, tidak termasuk tanda baca.
    return digitNomor.length >= 9 && digitNomor.length <= 15;
}


/* =========================================================
   10. MEMPROSES FORMULIR PEMESANAN
   Ketika pelanggan menekan tombol Lanjutkan Pemesanan.
   ========================================================= */

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        // Mencegah browser memuat ulang halaman secara otomatis.
        event.preventDefault();

        // Menghapus pesan status sebelumnya.
        hapusPesan();

        // Memastikan semua elemen formulir tersedia.
        if (
            !layananSelect ||
            !beratInput ||
            !tanggalInput ||
            !waktuInput ||
            !antarJemputSelect
        ) {
            tampilkanPesan(
                "Formulir belum terhubung dengan benar. Periksa HTML.",
                "error"
            );

            return;
        }

        // Membaca semua data dari formulir.
        const nama = document.getElementById("nama").value.trim();
        const telepon = document.getElementById("telepon").value.trim();
        const alamat = document.getElementById("alamat").value.trim();
        const jenisLayanan = layananSelect.value;
        const berat = Number(beratInput.value);
        const tanggal = tanggalInput.value;
        const waktu = waktuInput.value;

        const catatan =
            document.getElementById("catatan").value.trim();

        const menggunakanAntarJemput =
            antarJemputSelect.value === "ya";

        // Browser biasanya memvalidasi required lebih dahulu,
        // tetapi pemeriksaan berikut tetap dilakukan di JavaScript.
        if (
            !nama ||
            !telepon ||
            !alamat ||
            !jenisLayanan ||
            !beratInput.value ||
            !tanggal ||
            !waktu
        ) {
            tampilkanPesan(
                "Mohon lengkapi semua kolom wajib.",
                "error"
            );

            return;
        }

        // Memeriksa panjang nomor telepon.
        if (!nomorTeleponValid(telepon)) {
            tampilkanPesan(
                "Nomor WhatsApp belum valid. Periksa kembali nomornya.",
                "error"
            );

            return;
        }

        // Memastikan layanan sesuai daftar harga.
        if (!tarifLayanan[jenisLayanan]) {
            tampilkanPesan(
                "Layanan yang dipilih tidak tersedia.",
                "error"
            );

            return;
        }

        // Memastikan berat berada dalam batas yang diperbolehkan.
        if (
            !Number.isFinite(berat) ||
            berat < beratMinimum ||
            berat > beratMaksimum
        ) {
            tampilkanPesan(
                `Berat pakaian harus antara ${beratMinimum} dan ${beratMaksimum} kg.`,
                "error"
            );

            return;
        }

        // Memastikan tanggal bukan tanggal yang sudah berlalu.
        if (tanggal < tanggalLokalSekarang()) {
            tampilkanPesan(
                "Pilih tanggal penjemputan hari ini atau setelahnya.",
                "error"
            );

            return;
        }

        // Menghitung total estimasi.
        const hasil = hitungTotal(
            jenisLayanan,
            berat,
            menggunakanAntarJemput
        );

        if (!hasil) {
            tampilkanPesan(
                "Estimasi biaya tidak dapat dihitung. Periksa kembali data.",
                "error"
            );

            return;
        }

        // Membuat nomor pesanan untuk ringkasan.
        const nomorPesanan = buatNomorPesanan();

        // Mengumpulkan seluruh data menjadi satu objek.
        const dataPesanan = {
            nomorPesanan: nomorPesanan,
            nama: nama,
            telepon: telepon,
            alamat: alamat,
            layanan: tarifLayanan[jenisLayanan].nama,
            berat: berat,
            tanggal: tanggal,
            waktu: waktu,
            antarJemput: menggunakanAntarJemput,
            catatan: catatan,
            biayaCuci: hasil.hargaCuci,
            biayaAntar: hasil.hargaAntar,
            total: hasil.total
        };

        // Menampilkan ringkasan sebelum membuka WhatsApp.
        const ringkasan = [
            "RINGKASAN PESANAN LAUNDRYGO",
            "",
            `Nomor pesanan: ${dataPesanan.nomorPesanan}`,
            `Nama: ${dataPesanan.nama}`,
            `WhatsApp: ${dataPesanan.telepon}`,
            `Alamat: ${dataPesanan.alamat}`,
            `Layanan: ${dataPesanan.layanan}`,
            `Berat perkiraan: ${dataPesanan.berat} kg`,
            `Tanggal jemput: ${formatTanggal(dataPesanan.tanggal)}`,
            `Waktu jemput: ${dataPesanan.waktu}`,
            `Antar-jemput: ${dataPesanan.antarJemput ? "Ya" : "Tidak"}`,
            "",
            `Biaya cuci: ${formatRupiah(dataPesanan.biayaCuci)}`,
            `Biaya antar-jemput: ${formatRupiah(dataPesanan.biayaAntar)}`,
            `TOTAL ESTIMASI: ${formatRupiah(dataPesanan.total)}`,
            "",
            `Catatan: ${dataPesanan.catatan || "-"}`,
            "",
            "Apakah detail pesanan sudah benar?",
            "Pilih OK untuk melanjutkan ke WhatsApp."
        ].join("\n");

        // Meminta pelanggan memeriksa detail sebelum mengirim.
        const lanjutkan = window.confirm(ringkasan);

        // Jika pelanggan memilih Cancel, proses dihentikan.
        if (!lanjutkan) {
            tampilkanPesan(
                "Pemesanan belum dikirim. Silakan periksa kembali data kamu.",
                ""
            );

            return;
        }

        // Membuat isi pesan WhatsApp dengan data pesanan.
        const pesanWhatsApp = [
            "*PESANAN BARU LAUNDRYGO*",
            "",
            `*Nomor pesanan:* ${dataPesanan.nomorPesanan}`,
            `*Nama:* ${dataPesanan.nama}`,
            `*WhatsApp pelanggan:* ${dataPesanan.telepon}`,
            `*Alamat jemput:* ${dataPesanan.alamat}`,
            `*Layanan:* ${dataPesanan.layanan}`,
            `*Berat perkiraan:* ${dataPesanan.berat} kg`,
            `*Tanggal jemput:* ${formatTanggal(dataPesanan.tanggal)}`,
            `*Waktu jemput:* ${dataPesanan.waktu}`,
            `*Antar-jemput:* ${dataPesanan.antarJemput ? "Ya" : "Tidak"}`,
            "",
            `*Biaya cuci:* ${formatRupiah(dataPesanan.biayaCuci)}`,
            `*Biaya antar-jemput:* ${formatRupiah(dataPesanan.biayaAntar)}`,
            `*TOTAL ESTIMASI:* ${formatRupiah(dataPesanan.total)}`,
            "",
            `*Catatan:* ${dataPesanan.catatan || "-"}`,
            "",
            "Mohon periksa pesanan ini dan konfirmasikan ketersediaan jadwal.",
            "Total akhir mengikuti hasil penimbangan dan kebijakan laundry."
        ].join("\n");

        // Mengubah pesan menjadi format yang aman untuk URL.
        const pesanEncoded = encodeURIComponent(pesanWhatsApp);

        // Membuat tautan WhatsApp menuju nomor kasir.
        const urlWhatsApp =
            `https://wa.me/${nomorKasir}?text=${pesanEncoded}`;

        // Membuka WhatsApp di tab baru.
        const tabWhatsApp = window.open(
            urlWhatsApp,
            "_blank",
            "noopener,noreferrer"
        );

        // Jika browser memblokir tab baru, arahkan tab saat ini
        // ke WhatsApp sebagai alternatif.
        if (!tabWhatsApp) {
            window.location.href = urlWhatsApp;
            return;
        }

        // Memberi informasi kepada pelanggan.
        tampilkanPesan(
            `Ringkasan pesanan ${nomorPesanan} telah disiapkan. ` +
            "Periksa WhatsApp dan tekan Kirim untuk mengirimkannya kepada kasir.",
            "success"
        );

    });

}


/* =========================================================
   11. MEMBERSIHKAN PESAN KETIKA FORMULIR DIUBAH
   ========================================================= */

// Ketika pelanggan mengubah input, pesan status lama dihapus.
if (bookingForm) {

    bookingForm.querySelectorAll("input, select, textarea").forEach(
        function (elemen) {

            elemen.addEventListener("input", hapusPesan);
            elemen.addEventListener("change", hapusPesan);

        }
    );

}


/* =========================================================
   12. MEMPERBARUI TAHUN FOOTER
   Tahun mengikuti tahun pada perangkat pengguna.
   ========================================================= */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   13. MENJALANKAN FUNGSI AWAL
   Menampilkan estimasi awal dan menyiapkan formulir.
   ========================================================= */

// Menampilkan keadaan awal kalkulator biaya.
perbaruiEstimasi();

// Menghapus pesan validasi tanggal ketika tanggal sudah benar.
if (tanggalInput) {
    tanggalInput.addEventListener("input", function () {
        tanggalInput.setCustomValidity("");
    });
}
