document.addEventListener("DOMContentLoaded", () => {
    const categories = [
      "fiction",
      "drama",
      "romance",
      "mystery",
      "crime",
      "hindi",
      "mythology",
      "history",
      "nonfiction"
    ];
  
    const createBookCard = (book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");
  
      const img = document.createElement("img");
      img.src = book.img || "default.jpg";
      img.alt = book.title;
  
      const title = document.createElement("div");
      title.classList.add("book-title");
      title.textContent = book.title;
  
      bookDiv.appendChild(img);
      bookDiv.appendChild(title);
  
      return bookDiv;
    };
  
    const createListBlock = (category, books) => {
      const listDiv = document.createElement("div");
      listDiv.classList.add("book-list");
  
      listDiv.innerHTML = `
        <div class="list-header">
          <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <img src="Header-Logos/bookmark-icon.png" alt="Save List" class="bookmark-icon" title="Save List">
        </div>
        <div class="books"></div>
      `;
  
      books.forEach(book => {
        listDiv.querySelector(".books").appendChild(createBookCard(book));
      });
  
      // Save list action
      listDiv.querySelector(".bookmark-icon").addEventListener("click", () => {
        alert("Please create an account to save this list.");
      });
  
      document.getElementById("category-lists").appendChild(listDiv);
    };
  
    const fetchBooksByCategory = async (category) => {
      const api = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&orderBy=relevance&maxResults=10`;
      try {
        const res = await fetch(api);
        const data = await res.json();
        const books = data.items.map(item => ({
          title: item.volumeInfo.title,
          img: item.volumeInfo.imageLinks?.thumbnail
        }));
        createListBlock(category, books);
      } catch (error) {
        console.error(`Error fetching books for ${category}:`, error);
      }
    };
  
    categories.forEach(category => fetchBooksByCategory(category));
  
    // "Create Your Own List" button alert
    document.querySelector(".create-list-btn").addEventListener("click", () => {
      alert("Please create an account to create your own list.");
    });
  });
  