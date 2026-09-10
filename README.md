# 📚 Komik Reader - Platform Baca Komik Online

Website modern untuk membaca komik online dengan antarmuka yang indah, responsif, dan user-friendly.

## ✨ Fitur Utama

- 🎨 **UI Modern** - Desain responsif dengan gradient dan animasi smooth
- 📱 **Mobile-Friendly** - Sempurna di semua ukuran layar (desktop, tablet, mobile)
- 🔍 **Pencarian Cepat** - Cari komik favorit dengan modal search interaktif
- 📂 **Kategori** - Filter komik berdasarkan genre (Action, Romance, Comedy, dll)
- 📖 **Reader** - Interface membaca komik dengan navigasi halaman yang mudah
- ⭐ **Rating** - Lihat rating komik dari pembaca lain
- 🎯 **Popular** - Koleksi komik populer terbaru
- ⌨️ **Keyboard Navigation** - Navigasi dengan arrow keys untuk membaca

## 🚀 Teknologi

- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan CSS Grid & Flexbox
- **JavaScript Vanilla** - Fungsionalitas tanpa dependencies
- **ExtensionUI** - CDN library untuk UI components
- **Placeholder Images** - Dari placeholder.com

## 📁 Struktur Project

```
komik-reader/
├── index.html          # File HTML utama
├── styles.css          # Styling & responsif design
├── app.js              # Logika JavaScript
└── README.md           # Dokumentasi
```

## 🎯 Fitur-Fitur Lengkap

### 1. **Halaman Utama**
- Hero section dengan call-to-action
- Komik terbaru (featured section)
- Komik populer dengan sorting by rating
- Kategori komik dengan emoji icons

### 2. **Search Modal**
- Pencarian real-time
- Hasil instant saat mengetik
- Klik untuk membuka komik

### 3. **Category Filter**
- 6 kategori utama (Action, Romance, Comedy, Fantasy, Horror, Slice of Life)
- Display komik berdasarkan kategori terpilih
- Tombol untuk kembali ke halaman utama

### 4. **Reader View**
- Display halaman komik fullscreen
- Navigasi halaman (prev/next)
- Informasi judul, chapter, dan page count
- Keyboard shortcuts (← → untuk navigasi, ESC untuk close)

### 5. **Responsive Design**
- Desktop: Grid 6 kolom
- Tablet: Grid 4-3 kolom
- Mobile: Grid 2 kolom
- Semua elemen responsive

## 🎨 Warna & Styling

```css
Primary: #6366f1 (Indigo)
Secondary: #8b5cf6 (Violet)
Accent: #ec4899 (Pink)
Dark BG: #0f172a
Light BG: #f8fafc
```

## ⌨️ Keyboard Shortcuts

| Tombol | Fungsi |
|--------|--------|
| `→` | Halaman berikutnya |
| `←` | Halaman sebelumnya |
| `Esc` | Tutup reader |

## 📊 Data Komik

Website dilengkapi dengan 12 komik sample:
1. One Piece
2. My Hero Academia
3. Your Name
4. Attack on Titan
5. Love is War
6. Jujutsu Kaisen
7. Kaguya-sama: Love is War
8. That Time I Got Reincarnated
9. Tokyo Ghoul
10. Spy x Family
11. Demon Slayer
12. A Certain Magical Index

## 🔧 Setup & Menggunakan

### Option 1: Direct di Browser
1. Download/clone repository
2. Buka `index.html` di browser
3. Nikmati membaca komik!

### Option 2: Local Server (Recommended)
```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js (http-server)
npx http-server

# Akses di: http://localhost:8000
```

## 🎯 Cara Menggunakan

1. **Membaca Komik**
   - Klik salah satu komik dari grid
   - Modal reader akan terbuka
   - Gunakan tombol Next/Previous atau arrow keys

2. **Mencari Komik**
   - Klik icon 🔍 di navbar
   - Ketik nama komik
   - Klik hasil untuk membuka

3. **Filter Kategori**
   - Scroll ke section Kategori
   - Klik kategori yang diminati
   - Lihat semua komik dalam kategori tersebut

## 📱 Responsiveness

Tested dan optimized untuk:
- ✅ Desktop (1920px+)
- ✅ Laptop (1440px)
- ✅ Tablet (768px)
- ✅ Mobile (480px)

## 🎬 Animasi & Interaksi

- Smooth transitions di semua elemen
- Hover effects pada card
- Modal animations
- Scroll animations
- Loading smooth pada content

## 🚀 Optimasi Performance

- Minimal CSS & JS
- No heavy dependencies
- Fast loading time
- Optimized images
- CSS Grid untuk layout efficiency

## 📈 Future Enhancements

- [ ] Backend dengan database real
- [ ] User authentication & bookmarks
- [ ] Offline reading capability
- [ ] Dark mode toggle
- [ ] Social sharing
- [ ] Comments & ratings sistem
- [ ] Download komik
- [ ] API integration untuk komik real

## 📝 License

Open source - Bebas untuk digunakan dan dimodifikasi

## 👨‍💻 Developer

Dibuat dengan ❤️ menggunakan HTML, CSS, JavaScript vanilla.

---

**Happy Reading! 📚**

Untuk pertanyaan atau saran, silakan buka issue atau PR di GitHub.
