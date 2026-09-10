// ==================== Data Komik ==================== //

const komikData = [
    {
        id: 1,
        title: "One Piece",
        author: "Eiichiro Oda",
        category: "action",
        rating: 4.9,
        chapters: 1050,
        image: "https://via.placeholder.com/180x250?text=One+Piece",
        description: "Petualangan Monkey D. Luffy mencari harta karun terbesar di dunia.",
        pages: 50
    },
    {
        id: 2,
        title: "My Hero Academia",
        author: "Kohei Horikoshi",
        category: "action",
        rating: 4.8,
        chapters: 400,
        image: "https://via.placeholder.com/180x250?text=My+Hero",
        description: "Kisah tentang siswa sekolah pahlawan dengan berbagai kekuatan unik.",
        pages: 45
    },
    {
        id: 3,
        title: "Your Name",
        author: "Makoto Shinkai",
        category: "romance",
        rating: 4.7,
        chapters: 150,
        image: "https://via.placeholder.com/180x250?text=Your+Name",
        description: "Cerita romantis tentang dua remaja yang menukar tubuh.",
        pages: 35
    },
    {
        id: 4,
        title: "Attack on Titan",
        author: "Hajime Isayama",
        category: "action",
        rating: 4.9,
        chapters: 139,
        image: "https://via.placeholder.com/180x250?text=Attack+Titan",
        description: "Pertarungan melawan raksasa yang menakutkan di dunia yang terbatas.",
        pages: 40
    },
    {
        id: 5,
        title: "Love is War",
        author: "Aka Akasaka",
        category: "romance",
        rating: 4.6,
        chapters: 300,
        image: "https://via.placeholder.com/180x250?text=Love+is+War",
        description: "Dua siswa pintar yang saling mencintai tapi bangga mengakui.",
        pages: 30
    },
    {
        id: 6,
        title: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "action",
        rating: 4.8,
        chapters: 250,
        image: "https://via.placeholder.com/180x250?text=Jujutsu+Kaisen",
        description: "Petualangan dua sorcerer melawan kutukan gelap.",
        pages: 42
    },
    {
        id: 7,
        title: "Kaguya-sama: Love is War",
        author: "Aka Akasaka",
        category: "comedy",
        rating: 4.7,
        chapters: 280,
        image: "https://via.placeholder.com/180x250?text=Kaguya-sama",
        description: "Komedi romantis tentang pertempuran intelijen dalam cinta.",
        pages: 32
    },
    {
        id: 8,
        title: "That Time I Got Reincarnated",
        author: "Fuse",
        category: "fantasy",
        rating: 4.5,
        chapters: 200,
        image: "https://via.placeholder.com/180x250?text=Reincarnated",
        description: "Seorang pria terlahir kembali sebagai slime di dunia fantasi.",
        pages: 38
    },
    {
        id: 9,
        title: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "horror",
        rating: 4.6,
        chapters: 179,
        image: "https://via.placeholder.com/180x250?text=Tokyo+Ghoul",
        description: "Cerita menakutkan tentang makhluk pemakan manusia di Tokyo.",
        pages: 44
    },
    {
        id: 10,
        title: "Spy x Family",
        author: "Tatsuya Endo",
        category: "slice-of-life",
        rating: 4.8,
        chapters: 160,
        image: "https://via.placeholder.com/180x250?text=Spy+Family",
        description: "Keluarga unik terdiri dari spy, psychic, dan assassin.",
        pages: 36
    },
    {
        id: 11,
        title: "Demon Slayer",
        author: "Koyoharu Gotouge",
        category: "action",
        rating: 4.9,
        chapters: 207,
        image: "https://via.placeholder.com/180x250?text=Demon+Slayer",
        description: "Perjalanan Tanjiro membunuh iblis untuk menyelamatkan saudara.",
        pages: 48
    },
    {
        id: 12,
        title: "A Certain Magical Index",
        author: "Kazuma Kamachi",
        category: "fantasy",
        rating: 4.5,
        chapters: 350,
        image: "https://via.placeholder.com/180x250?text=Magical+Index",
        description: "Dunia dengan sains dan sihir yang bertabrakan.",
        pages: 41
    }
];

let currentCategory = null;
let currentComic = null;
let currentPage = 1;

// ==================== Initialize ==================== //

document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedComics();
    loadPopularComics();
    setupEventListeners();
});

// ==================== Event Listeners ==================== //

function setupEventListeners() {
    // Search
    document.querySelector('.search-btn').addEventListener('click', openSearchModal);
    document.querySelector('.close').addEventListener('click', closeSearchModal);

    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length > 0) {
            const results = komikData.filter(k => k.title.toLowerCase().includes(query));
            displaySearchResults(results);
        } else {
            document.getElementById('searchResults').innerHTML = '';
        }
    });

    // Categories
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showCategoryResults(category);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const searchModal = document.getElementById('searchModal');
        const readModal = document.getElementById('readModal');
        if (e.target === searchModal) closeSearchModal();
        if (e.target === readModal) closeReadModal();
    });
}

// ==================== Load & Display Comics ==================== //

function loadFeaturedComics() {
    const featuredContainer = document.getElementById('featuredComics');
    const featured = komikData.slice(0, 6);
    featuredContainer.innerHTML = featured.map(comic => createComicCard(comic)).join('');
}

function loadPopularComics() {
    const popularContainer = document.getElementById('popularComics');
    const popular = komikData.sort((a, b) => b.rating - a.rating).slice(0, 8);
    popularContainer.innerHTML = popular.map(comic => createComicCard(comic)).join('');
}

function createComicCard(comic) {
    return `
        <div class="comic-card" onclick="openReadModal(${comic.id})">
            <img src="${comic.image}" alt="${comic.title}" class="comic-card-image">
            <div class="comic-card-content">
                <h3 class="comic-card-title">${comic.title}</h3>
                <p class="comic-card-author">Oleh: ${comic.author}</p>
                <div class="comic-card-meta">
                    <span class="comic-rating">⭐ ${comic.rating}</span>
                    <span>${comic.chapters} Ch</span>
                </div>
            </div>
        </div>
    `;
}

// ==================== Search Functionality ==================== //

function openSearchModal() {
    document.getElementById('searchModal').style.display = 'block';
    document.getElementById('searchInput').focus();
}

function closeSearchModal() {
    document.getElementById('searchModal').style.display = 'none';
    document.getElementById('searchResults').innerHTML = '';
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="padding: 1rem; text-align: center; color: var(--text-secondary);">Tidak ada hasil ditemukan</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(comic => `
        <div class="search-result-item" onclick="handleSearchResult(${comic.id})">
            <strong>${comic.title}</strong>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.3rem;">
                ${comic.author} • ${comic.chapters} Chapters
            </p>
        </div>
    `).join('');
}

function handleSearchResult(id) {
    closeSearchModal();
    openReadModal(id);
}

// ==================== Category Functionality ==================== //

function showCategoryResults(category) {
    currentCategory = category;
    const categoryComics = komikData.filter(k => k.category === category);
    const categoryNames = {
        'action': 'Action',
        'romance': 'Romance',
        'comedy': 'Comedy',
        'fantasy': 'Fantasy',
        'horror': 'Horror',
        'slice-of-life': 'Slice of Life'
    };

    document.getElementById('categoryTitle').textContent = `Kategori: ${categoryNames[category]}`;
    document.getElementById('categoryComics').innerHTML = categoryComics.map(comic => createComicCard(comic)).join('');
    
    document.querySelector('.featured-section').style.display = 'none';
    document.querySelector('.popular-section').style.display = 'none';
    document.querySelector('.categories-section').style.display = 'none';
    document.getElementById('categoryResults').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToMain() {
    currentCategory = null;
    document.querySelector('.featured-section').style.display = 'block';
    document.querySelector('.popular-section').style.display = 'block';
    document.querySelector('.categories-section').style.display = 'block';
    document.getElementById('categoryResults').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== Reader Modal ==================== //

function openReadModal(id) {
    currentComic = komikData.find(k => k.id === id);
    if (!currentComic) return;

    currentPage = 1;
    document.getElementById('readModal').style.display = 'block';
    updateReaderContent();
    document.body.style.overflow = 'hidden';
}

function closeReadModal() {
    document.getElementById('readModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentComic = null;
    currentPage = 1;
}

function updateReaderContent() {
    if (!currentComic) return;

    document.getElementById('readTitle').textContent = currentComic.title;
    document.getElementById('readChapter').textContent = `Chapter ${Math.ceil(currentPage / 5)}`;
    
    // Generate placeholder image untuk halaman komik
    const imageUrl = `https://via.placeholder.com/800x600?text=Page+${currentPage}`;
    document.getElementById('pageImage').src = imageUrl;
    
    const pageInfo = `Halaman ${currentPage} / ${currentComic.pages}`;
    document.getElementById('pageInfo').textContent = pageInfo;
    document.getElementById('pageInfo2').textContent = pageInfo;

    // Update button states
    const prevBtns = document.querySelectorAll('button');
    const nextBtns = document.querySelectorAll('button');
}

function nextPage() {
    if (currentComic && currentPage < currentComic.pages) {
        currentPage++;
        updateReaderContent();
    } else {
        alert('Anda sudah di halaman terakhir!');
    }
}

function previousPage() {
    if (currentComic && currentPage > 1) {
        currentPage--;
        updateReaderContent();
    } else {
        alert('Anda sudah di halaman pertama!');
    }
}

// ==================== Navigation ==================== //

function scrollToPopular() {
    document.getElementById('popular').scrollIntoView({ behavior: 'smooth' });
}

// ==================== Keyboard Navigation ==================== //

document.addEventListener('keydown', (e) => {
    if (document.getElementById('readModal').style.display === 'block') {
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') previousPage();
        if (e.key === 'Escape') closeReadModal();
    }
});

// ==================== Smooth Scroll ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
