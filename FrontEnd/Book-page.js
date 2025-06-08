// Get book ID from URL
function getBookIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Fetch book details from Google Books API
async function fetchBookDetails(bookId) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    const data = await response.json();

    return {
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors?.join(", ") || "Unknown Author",
        description: data.volumeInfo.description || "No description available.",
        thumbnail: data.volumeInfo.imageLinks?.thumbnail || "default-book.png",
        averageRating: data.volumeInfo.averageRating || "N/A",
        categories: data.volumeInfo.categories || ["Fiction"],
        publisher: data.volumeInfo.publisher || "Unknown Publisher"
    };
}

// Display book info on the page
async function displayBook() {
    const bookId = getBookIdFromURL();
    const book = await fetchBookDetails(bookId);

    document.getElementById('book-title').textContent = book.title;
    document.getElementById('book-author').textContent = "By " + book.authors;
    document.getElementById('book-description').innerHTML = book.description;
    document.getElementById('book-poster').src = book.thumbnail;
    document.getElementById('book-rating').textContent = `Average Rating: ${book.averageRating}`;

    fetchSimilarBooks(book.categories);
}

displayBook();


// Fake reviews for demonstration
const reviews = [
    { user: "Alice", text: "An emotional journey through time.", type: "user" },
    { user: "Bob (Friend)", text: "Really made me think differently.", type: "friend" },
    { user: "Charlie", text: "Didn't expect to enjoy this so much!", type: "user" },
    { user: "Diana (Friend)", text: "A must-read for everyone.", type: "friend" }
];

// Filter and display reviews
function filterReviews(type) {
    const container = document.getElementById("review-container");
    container.innerHTML = "";

    const filtered = (type === 'all') ? reviews : reviews.filter(r => r.type === 'friend');

    filtered.forEach(review => {
        const div = document.createElement("div");
        div.classList.add("review");
        div.innerHTML = `<strong>${review.user}</strong>: ${review.text}`;
        container.appendChild(div);
    });
}

// Show all reviews by default
filterReviews('all');

// Fetch similar books using category
async function fetchSimilarBooks(categories) {
    const category = categories[0] || "fiction";
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=5`);
    const data = await response.json();

    const container = document.getElementById("suggested-books");
    container.innerHTML = "";

    if (data.items && data.items.length > 0) {
        data.items.forEach(book => {
            const div = document.createElement("div");
            div.className = "suggestion";
            div.innerHTML = `
                <img src="${book.volumeInfo.imageLinks?.thumbnail || "default-book.png"}" alt="${book.volumeInfo.title}">
                <p>${book.volumeInfo.title}</p>
            `;

            div.addEventListener("click", () => {
                window.location.href = `book-page.html?id=${book.id}`;
            });

            container.appendChild(div);
        });
    } else {
        container.innerHTML = "<p>No similar books found.</p>";
    }
}

