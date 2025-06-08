const apiKey = '4a843981e9ab4f5d8715296cea1d7ac9';
const newsItemsContainer = document.getElementById('news-items-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Function to shuffle the array of articles
function shuffleArticles(articles) {
    for (let i = articles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [articles[i], articles[j]] = [articles[j], articles[i]];
    }
    return articles;
}

// Function to fetch book news with randomization to ensure fresh results
async function fetchBookNews() {
    const timestamp = new Date().getTime();  // Get the current timestamp to avoid cached responses
    const url = `https://newsapi.org/v2/everything?q=books&apiKey=${apiKey}&pageSize=5&${timestamp}`; // Add timestamp to ensure fresh news

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
            // Shuffle articles before adding to the DOM
            const shuffledArticles = shuffleArticles(data.articles);

            shuffledArticles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                // Insert the article content into the news item
                newsItem.innerHTML = `
                    <img class="poster" src="${article.urlToImage || 'default-image.jpg'}" alt="News Image">
                    <div class="news-content">
                        <p class="news-headline">${article.title}</p>
                        <a href="${article.url}" class="news-link" target="_blank">Read More</a>
                    </div>
                `;
                
                // Append news item to the container
                newsItemsContainer.appendChild(newsItem);
            });
        } else {
            const noNewsItem = document.createElement('div');
            noNewsItem.classList.add('news-item');
            noNewsItem.innerHTML = '<p>No news available at the moment.</p>';
            newsItemsContainer.appendChild(noNewsItem);
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Call the function when the page loads
fetchBookNews();

// Arrow functionality for scrolling
let currentScrollIndex = 0;

function scrollNews(direction) {
    const containerWidth = newsItemsContainer.clientWidth;
    const totalItems = newsItemsContainer.children.length;
    const maxIndex = totalItems - 1;

    if (direction === 'left' && currentScrollIndex > 0) {
        currentScrollIndex -= 1;
        newsItemsContainer.scrollLeft = currentScrollIndex * containerWidth;
    } else if (direction === 'right' && currentScrollIndex < maxIndex) {
        currentScrollIndex += 1;
        newsItemsContainer.scrollLeft = currentScrollIndex * containerWidth;
    }
}

// Add event listeners to arrows
leftArrow.addEventListener('click', () => scrollNews('left'));
rightArrow.addEventListener('click', () => scrollNews('right'));
