document.addEventListener("DOMContentLoaded", () => {
  // Fetch data from Google Books API
const fetchGoogleBooksData = async () => {
    const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=top&maxResults=15';
    try {
        const response = await fetch(googleBooksAPI);
        const data = await response.json();
        
        console.log('Google Books Data:', data.items); // Log the entire response to see structure
        
        const googleBooks = data.items.map(book => ({
            title: book.volumeInfo.title,
            img: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'default.jpg',
            rating: book.volumeInfo.averageRating || 'N/A',
            id: book.id
        }));

        const popularSection = document.getElementById("top-month-section");
        googleBooks.forEach(book => {
            const bookCard = createBookCard(book);
            popularSection.appendChild(bookCard);
        });
    } catch (error) {
        console.error('Error fetching Google Books:', error);
    }
};

const fetchNYTBooksData = async () => {
    const nyTimesAPI = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=xx7F75qROXPOBmMPy1HAESctZ5wuGPdw';
    try {
        const response = await fetch(nyTimesAPI);
        const data = await response.json();
        
        console.log('NYT Books Data:', data.results.books); // Log the entire response to see structure
        
        const nytBooks = data.results.books.map(book => ({
            title: book.title,
            img: book.book_image,
            rating: book.rank || 'N/A',
            id: book.primary_isbn13 || 'no-id' // Ensure valid ID
        }));

        const topRatedSection = document.getElementById("top-rated-section");
        nytBooks.forEach(book => {
            const bookCard = createBookCard(book);
            topRatedSection.appendChild(bookCard);
        });
    } catch (error) {
        console.error('Error fetching NYT Books:', error);
    }
};


  // Create Book Card Element
  const createBookCard = (book) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');

      const img = document.createElement('img');
      img.classList.add('poster');
      img.src = book.img;
      img.alt = book.title;

      const title = document.createElement('h4');
      title.textContent = book.title;

      const rating = document.createElement('p');
      rating.classList.add('ratings');
      rating.textContent = `⭐⭐⭐⭐⭐ ${book.rating}`;

      const bookLink = document.createElement('a');
      bookLink.href = `Book-page.html?id=${book.id}`;
      bookLink.classList.add('search-result-item');
      bookLink.appendChild(img);
      bookLink.appendChild(title);
      bookLink.appendChild(rating);

      bookDiv.appendChild(bookLink);
      return bookDiv;
  };

  // Fetch the data for both Google Books and NYT books
  fetchGoogleBooksData();
  fetchNYTBooksData();
});
