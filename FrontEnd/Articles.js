const topArticles = [
    {
        id: 1,
        title: "The Magic of Murakami",
        summary: "Discover why Haruki Murakami’s books are dreamy rabbit holes of realism.",
        author: "Rina Kapoor",
        date: "March 25, 2025"
    },
    {
        id: 2,
        title: "Dostoevsky Still Matters",
        summary: "A dive into guilt, genius, and existentialism through his classics.",
        author: "Ayaan Deshmukh",
        date: "March 22, 2025"
    },
    {
        id: 3,
        title: "Why We Love Jane Austen",
        summary: "An exploration of timeless wit, love, and class in Austen's world.",
        author: "Meera Chauhan",
        date: "March 18, 2025"
    },
    {
        id: 4,
        title: "The Power of Book Clubs",
        summary: "How shared reading can create deep human bonds and foster meaningful conversations.",
        author: "Liam D’Silva",
        date: "March 15, 2025"
    },
    {
        id: 5,
        title: "The Rise of Audiobooks",
        summary: "Is listening the same as reading? The neuroscience and nuance of audiobook consumption.",
        author: "Aanya Joseph",
        date: "March 10, 2025"
    },
    {
        id: 6,
        title: "The Language of Silence in Hemingway",
        summary: "Minimalism, masculinity, and the spaces between words in Hemingway’s prose.",
        author: "Devika Pillai",
        date: "March 5, 2025"
    },
    {
        id: 7,
        title: "Octavia Butler’s Vision of Tomorrow",
        summary: "How science fiction became a tool for justice, identity, and hope.",
        author: "Rohan Vaidya",
        date: "February 28, 2025"
    },
    {
        id: 8,
        title: "Poetry for People Who Hate Poetry",
        summary: "Accessible, fun, and even funny — poems that will change your mind.",
        author: "Neha Pradhan",
        date: "February 24, 2025"
    },
    {
        id: 9,
        title: "The Literary Genius of Toni Morrison",
        summary: "Race, memory, and motherhood in Morrison's powerful narratives.",
        author: "Arjun Menon",
        date: "February 21, 2025"
    },
    {
        id: 10,
        title: "Books That Predicted the Future",
        summary: "From Orwell to Atwood, authors who saw the world coming.",
        author: "Sanya Bhatt",
        date: "February 18, 2025"
    }
];

const newArticles = [
    {
        id: 11,
        title: "Kafka's Surreal Mind",
        summary: "Understanding absurdity and anxiety in Kafka's nightmarish worlds.",
        author: "Aniket Rao",
        date: "April 11, 2025"
    },
    {
        id: 12,
        title: "Books That Broke the Internet",
        summary: "5 books that went viral on BookTok and why readers can’t get enough.",
        author: "Tara Singh",
        date: "April 10, 2025"
    },
    {
        id: 13,
        title: "Reading as Resistance",
        summary: "Why banned books are more important than ever in today’s political climate.",
        author: "Zoya Fernandes",
        date: "April 8, 2025"
    },
    {
        id: 14,
        title: "How to Start Annotating Books",
        summary: "Color-coding, sticky notes, and marginalia: a guide to more active reading.",
        author: "Nikhil Kapoor",
        date: "April 6, 2025"
    },
    {
        id: 15,
        title: "From Page to Screen: Adaptations that Worked",
        summary: "Not all book-to-movie projects fail. Here's a list of the ones that nailed it.",
        author: "Shruti Mehta",
        date: "April 3, 2025"
    },
    {
        id: 16,
        title: "How to Read More Without Forcing It",
        summary: "Tired of setting unrealistic Goodreads goals? Here’s a gentler approach.",
        author: "Tanvi Suresh",
        date: "April 1, 2025"
    },
    {
        id: 17,
        title: "Dark Academia: Why It’s More Than Just Aesthetic",
        summary: "Exploring the roots of the obsession with moody libraries and tragic heroes.",
        author: "Vikram Shetty",
        date: "March 30, 2025"
    },
    {
        id: 18,
        title: "Comics Are Literature Too",
        summary: "Why graphic novels deserve a seat at the literary table.",
        author: "Sara Poonawala",
        date: "March 28, 2025"
    },
    {
        id: 19,
        title: "Books to Break a Reading Slump",
        summary: "Short, gripping, and bingeable — perfect to get you back on track.",
        author: "Karan Mistry",
        date: "March 26, 2025"
    },
    {
        id: 20,
        title: "Literature of the Partition",
        summary: "Stories of pain, loss, and hope across India, Pakistan, and Bangladesh.",
        author: "Rehana Ahmed",
        date: "February 4, 2025"
    }
];

// Shuffling function (Fisher-Yates shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function renderArticles(containerId, articles) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const shuffled = shuffleArray(articles).slice(0, 3);

    shuffled.forEach(article => {
        const card = document.createElement('a');
        card.href = `article.html?id=${article.id}`;
        card.className = 'article-card';
        card.innerHTML = `
            <p class="Article-title"><strong>${article.title}</strong></p>
            <p class="Article-meta">by ${article.author} • ${article.date}</p>
            <p class="Article-body">${article.summary}</p>
            <p class="read-more">Click to read more</p>
        `;
        container.appendChild(card);
    });
}

// Inject only 3 shuffled articles into each section
renderArticles('top-articles', topArticles);
renderArticles('new-articles', newArticles);