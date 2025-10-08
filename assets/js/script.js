// Fungsi untuk menangani pengiriman form
function handleSubmit() {
    // Menampilkan notifikasi sukses menggunakan SweetAlert
    Swal.fire({
        title: 'Berhasil!',
        text: 'Pesan sudah dikirim! Terima kasih atas pesan atau sarannya.',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then((result) => {
        // Jika pengguna menekan tombol OK, reset form
        if (result.isConfirmed) {
            resetForm();
        }
    });

    // Mengembalikan false untuk mencegah pengiriman form secara default
    return false;
}

// Fungsi untuk mengatur ulang form
function resetForm() {
    // Mendefinisikan nama-nama field yang ada di form
    const formFields = ['name', 'email', 'message'];
    // Mengosongkan nilai setiap field
    formFields.forEach(field => document.getElementById(field).value = '');

    // Mengambil elemen form feedback
    const feedbackForm = document.getElementById('feedback-form');
    // Menambahkan kelas 'active' untuk menampilkan form
    feedbackForm.classList.add('active');
    // Memicu reflow untuk efek animasi
    void feedbackForm.offsetHeight;
}

// Event listener untuk menjalankan kode saat DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Mengambil elemen toggle untuk dark mode
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const toggleLabel = document.getElementById('toggle-label');

    // Mengecek status dark mode dari localStorage
    const darkMode = localStorage.getItem('darkMode') === 'enabled';
    // Mengatur kelas body untuk dark mode
    body.classList.toggle('dark-mode', darkMode);
    // Menyetel status toggle sesuai dengan dark mode
    toggle.checked = darkMode;
    // Menentukan label berdasarkan status dark mode
    toggleLabel.textContent = darkMode ? 'Dark Mode' : 'Light Mode';

    // Menambahkan event listener untuk toggle
    toggle.addEventListener('change', () => {
        const isChecked = toggle.checked;
        // Mengatur kelas body untuk dark mode berdasarkan status toggle
        body.classList.toggle('dark-mode', isChecked);
        // Menyimpan status dark mode di localStorage
        localStorage.setItem('darkMode', isChecked ? 'enabled' : 'disabled');
        // Memperbarui label toggle sesuai dengan status dark mode
        toggleLabel.textContent = isChecked ? 'Dark Mode' : 'Light Mode';
    });
});
