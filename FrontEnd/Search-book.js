// Variable to store the next page token for infinite scrolling
let nextPageToken = '';

// Function to fetch books from Google Books API
function fetchBooks(query) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&pageToken=${nextPageToken}`;
    
    // Fetching data from the Google Books API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        nextPageToken = data.nextPageToken; // Save the next page token for scrolling
        // Call function to display results
        displayBooks(data.items);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
}

// Function to display books in the search results
function displayBooks(books) {
    const resultsContainer = document.getElementById("search-results");

    if (books && books.length > 0) {
        books.forEach(book => {
            const bookInfo = book.volumeInfo;

            // Create anchor tag that redirects to Book Page
            const bookLink = document.createElement('a');
            bookLink.href = `Book-Page.html?id=${book.id}`;
            bookLink.classList.add('search-result-item');

            const bookTitle = document.createElement('h4');
            bookTitle.textContent = bookInfo.title;

            const bookAuthor = document.createElement('p');
            bookAuthor.textContent = `Author: ${bookInfo.authors ? bookInfo.authors.join(", ") : "N/A"}`;

            const bookThumbnail = document.createElement('img');
            bookThumbnail.src = bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'default-thumbnail.jpg';
            bookThumbnail.alt = bookInfo.title;

            bookLink.appendChild(bookThumbnail);
            bookLink.appendChild(bookTitle);
            bookLink.appendChild(bookAuthor);

            resultsContainer.appendChild(bookLink);
        });
    } else {
        resultsContainer.innerHTML = 'No results found.';
    }
}


// Event listener for search input with debounce
let debounceTimer;
document.getElementById("search-bar").addEventListener("input", function (e) {
    const query = e.target.value;
    
    // Clear the previous debounce timer
    clearTimeout(debounceTimer);
    
    if (query.length > 2) {
        debounceTimer = setTimeout(() => {
            fetchBooks(query);  // Trigger the API call after a pause
        }, 300);  // Adjust the delay as needed
    } else {
        document.getElementById("search-results").innerHTML = ''; // Clear results if input is empty
    }
});

// Infinite scroll logic to fetch more books as user scrolls
window.onscroll = function() {
    const resultsContainer = document.getElementById("search-results");
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
        if (nextPageToken) {
            fetchBooks(document.getElementById("search-bar").value);  // Fetch next set of books
        }
    }
};

