# 🤖 BOT-WA-NODE-JS

Bot WhatsApp sederhana berbasis **Node.js** menggunakan library [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js).  
Bot ini dapat membalas pesan otomatis sesuai kata kunci yang diterima.

---

## 🚀 Fitur

- 🔄 Login otomatis menggunakan `LocalAuth` (tidak perlu scan ulang setiap kali jalan)
- 🧠 Balasan otomatis berdasarkan kata kunci
- 💬 Dapat diatur untuk menolak pesan dari grup
- 🔐 Menggunakan versi web WhatsApp terbaru (via remote cache)

---

## 🧰 Teknologi yang Digunakan

- [Node.js](https://nodejs.org/)
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)

---

## ⚙️ Cara Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/zxkky/BOT-WA-NODE-JS.git
cd BOT-WA-NODE-JS
```
### 2. Install Dependency
```
npm install
```
### 3. Jalankan Bot
```
node index.js
```
Saat pertama kali dijalankan, terminal akan menampilkan QR Code.
Scan QR tersebut menggunakan WhatsApp di ponselmu (Perangkat Tertaut).

### 🧩 Contoh Balasan Otomatis

Kamu bisa menambahkan lebih banyak respon di bagian:
```
if (msg.includes('halo')) {
    message.reply('halooo juga!');
}
```

🗂️ Struktur Folder
```
BOT-WA-NODE-JS/
│
├── node_modules/
├── .wwebjs_auth/         # Folder autentikasi lokal (jangan dihapus)
├── index.js              # Script utama bot
├── package.json          # Informasi proyek & dependencies
└── README.md             # Dokumentasi ini
```
💡 Catatan

    Bot ini tidak berjalan di grup WhatsApp, karena pesan dari grup diabaikan.

    Jangan ubah remotePath jika tidak tahu fungsinya — itu digunakan untuk memuat versi web WhatsApp yang stabil.

    Untuk menjalankan di server (misalnya VPS), pastikan node tetap aktif (gunakan pm2 atau screen).

🧑‍💻 Kontributor

Dibuat oleh zxkky

Terinspirasi dari proyek komunitas whatsapp-web.js
