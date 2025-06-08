function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollLeftBtns = document.querySelectorAll(".scroll-left");
  const scrollRightBtns = document.querySelectorAll(".scroll-right");
  const sliders = document.querySelectorAll(".slider");

  const scrollAmount = 300;

  scrollLeftBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      sliders[index].scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  });

  scrollRightBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      sliders[index].scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
});

const NYT_API_KEY = "xx7F75qROXPOBmMPy1HAESctZ5wuGPdw";

// Fetch bestseller titles from NYT
async function fetchNYTBestsellers() {
  const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NYT_API_KEY}`);
  const data = await res.json();
  const books = data.results.books.map(book => ({
    title: book.title,
    author: book.author
  }));
  return books;
}

// Use Google API to get cover and rating
async function fetchBookDetailsFromGoogle(title, author) {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}&maxResults=1`);
  const data = await response.json();

  if (!data.items || data.items.length === 0) return null;

  const item = data.items[0].volumeInfo;

  return {
    id: data.items[0].id,
    title: item.title || title,
    author: item.authors ? item.authors[0] : author,
    rating: item.averageRating || "N/A",
    cover: item.imageLinks?.thumbnail || "default_cover.jpg"
  };
}

function createBookHTML(book) {
  return `
  <a class="book-link" href="Book-Page.html?id=${encodeURIComponent(book.id)}" class="book-card">
    <div class="book-card">
      <img src="${book.cover}" alt="${book.title}">
      <h4>${book.title}</h4>
      <p>by ${book.author}</p>
      <p>Rating: ${book.rating}</p>
    </div>
  `;
}

function renderBooks(bookArray, sliderId) {
  const slider = document.getElementById(sliderId);
  slider.innerHTML = "";
  bookArray.forEach(book => {
    slider.innerHTML += createBookHTML(book);
  });
}

// Main logic: Combine both APIs
async function loadPopularBooks() {
  const nytBooks = await fetchNYTBestsellers();
  const detailedBooks = [];

  for (let book of nytBooks) {
    const detailed = await fetchBookDetailsFromGoogle(book.title, book.author);
    if (detailed) detailedBooks.push(detailed);
  }

  renderBooks(detailedBooks, "popular-slider");
}

loadPopularBooks();

