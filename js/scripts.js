
// --- State -true;

// --- Fungsi Konversi Suhu ---
function konversiSuhu() {
    const input = parseFloat(konversiInput.value);

    if (isNaN(input)) {
        alert('Masukkan angka yang valid!');
        return;
    }

    // Tampilkan loading di tombol
    konversiButton.innerHTML = "Menghitung...";
    konversiButton.disabled = true;

    setTimeout(() => {
        let result = 0;
        let detail = '';

        if (isCelciusToFahrenheit) {
            result = (input * 9/5) + 32;
            detail = `(${input}°C × 9/5) + 32 = ${result.toFixed(2)}°F`;
        } else {
            result = (input - 32) * 5/9;
            detail = `(${input}°F - 32) × 5/9 = ${result.toFixed(2)}°C`;
        }

        resultInput.value = result.toFixed(2);
        calculateDetail.value = detail;

        // Reset tombol setelah loading
        konversiButton.innerHTML = "Konversi";
        konversiButton.disabled = false;

        // Tampilkan toast
        showToast('Konversi Berhasil!');
    }, 1000); // Simulasi loading 1 detik
}

// --- Fungsi Reset Form ---
function resetForm() {
    konversiInput.value = '';
    resultInput.value = '';
    calculateDetail.value = '';
}

// --- Fungsi Reverse Arah Konversi ---
function reverseKonversi() {
    isCelciusToFahrenheit = !isCelciusToFahrenheit;

    const inputLabel = document.querySelector('label[for="konversi-input"]');
    const outputLabel = document.querySelector('label[for="result-input"]');

    if (isCelciusToFahrenheit) {
        inputLabel.innerHTML = 'Celcius (&deg;C)';
        outputLabel.innerHTML = 'Fahrenheit (&deg;F)';
    } else {
        inputLabel.innerHTML = 'Fahrenheit (&deg;F)';
        outputLabel.innerHTML = 'Celcius (&deg;C)';
    }

    resetForm();
}

// --- Fungsi Toast Notification ---
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// --- Fungsi Dark Mode Toggle ---
function setDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
}

// --- Event Listener untuk Dark Mode Toggle ---
darkModeToggle.addEventListener('click', function () {
    const isDark = document.body.classList.contains('dark-mode');
    setDarkMode(!isDark);
});

// --- Cek Dark Mode saat Load Halaman ---
window.addEventListener('load', function () {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// --- Event Listener Tombol ---
konversiButton.addEventListener('click', konversiSuhu);
resetButton.addEventListener('click', resetForm);
reverseButton.addEventListener('click', function () {
    reverseKonversi();

    // Animasi tombol reverse mutar
    reverseButton.classList.add('rotate');
    setTimeout(() => {
        reverseButton.classList.remove('rotate');
    }, 600);
});
// --- Ambil elemen-elemen yang dibutuhkan ---
const konversiInput = document.getElementById('konversi-input');
const resultInput = document.getElementById('result-input');
const calculateDetail = document.getElementById('calculate-detail');
const konversiButton = document.querySelector('.bg-1');
const resetButton = document.querySelector('.bg-2');
const reverseButton = document.querySelector('.bg-3');
const toast = document.getElementById('toast');
const darkModeToggle = document.getElementById('darkModeToggle');

