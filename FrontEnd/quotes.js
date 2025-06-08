const quotes = [
    {
      text: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      author: "J.K. Rowling",
      book: "Harry Potter and the Chamber of Secrets"
    },
    {
      text: "It is nothing to die. It is frightful not to live.",
      author: "Victor Hugo",
      book: "Les Misérables"
    },
    {
      text: "I am no bird; and no net ensnares me.",
      author: "Charlotte Brontë",
      book: "Jane Eyre"
    },
    {
      text: "All animals are equal, but some animals are more equal than others.",
      author: "George Orwell",
      book: "Animal Farm"
    },
    {
      text: "So it goes.",
      author: "Kurt Vonnegut",
      book: "Slaughterhouse-Five"
    },
    {
      text: "Time moves slowly, but passes quickly.",
      author: "Alice Walker",
      book: "The Color Purple"
    },
    {
      text: "There is no greater agony than bearing an untold story inside you.",
      author: "Maya Angelou",
      book: "I Know Why the Caged Bird Sings"
    },
    {
        text: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
      },
      {
        text: "We accept the love we think we deserve.",
        author: "Stephen Chbosky",
        book: "The Perks of Being a Wallflower"
      },
      {
        text: "It’s the possibility of having a dream come true that makes life interesting.",
        author: "Paulo Coelho",
        book: "The Alchemist"
      },
      {
        text: "Real courage is when you know you're licked before you begin, but you begin anyway and see it through no matter what.",
        author: "Harper Lee",
        book: "To Kill a Mockingbird"
      },
      {
        text: "There is some good in this world, and it’s worth fighting for.",
        author: "J.R.R. Tolkien",
        book: "The Two Towers"
      },
      {
        text: "That's the thing about pain. It demands to be felt.",
        author: "John Green",
        book: "The Fault in Our Stars"
      },
      {
        text: "You forget what you want to remember, and you remember what you want to forget.",
        author: "Cormac McCarthy",
        book: "The Road"
      },
      {
        text: "War is peace. Freedom is slavery. Ignorance is strength.",
        author: "George Orwell",
        book: "1984"
      },
      {
        text: "The world breaks everyone, and afterward, many are strong at the broken places.",
        author: "Ernest Hemingway",
        book: "A Farewell to Arms"
      },
      {
        text: "Memories warm you up from the inside. But they also tear you apart.",
        author: "Haruki Murakami",
        book: "Kafka on the Shore"
      },
      {
        text: "You don’t know what it’s like to love someone who doesn’t love you back.",
        author: "Cassandra Clare",
        book: "City of Bones"
      },
      {
        text: "I wish I could show you when you are lonely or in darkness the astonishing light of your own being.",
        author: "Hafez",
        book: "The Gift"
      },
      {
        text: "So it’s true, when all is said and done, grief is the price we pay for love.",
        author: "E.A. Bucchianeri",
        book: "Brushstrokes of a Gadfly"
      },
      {
        text: "It is nothing to die; it is dreadful not to live.",
        author: "Victor Hugo",
        book: "Les Misérables"
      },
      {
        text: "I cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It is too long ago. I was in the middle before I knew that I had begun.",
        author: "Jane Austen",
        book: "Pride and Prejudice"
      },
      {
        text: "You gave me a forever within the numbered days.",
        author: "John Green",
        book: "The Fault in Our Stars"
      },
      {
        text: "The loneliest moment in someone’s life is when they are watching their whole world fall apart, and all they can do is stare blankly.",
        author: "F. Scott Fitzgerald",
        book: "The Great Gatsby"
      },
      {
        text: "I used to dream about escaping my ordinary life, but my life was never ordinary. I had simply failed to notice how extraordinary it was.",
        author: "Ransom Riggs",
        book: "Miss Peregrine’s Home for Peculiar Children"
      },
      {
        text: "He wanted to cry quietly but not for himself: for the words, so beautiful and sad, like music.",
        author: "James Joyce",
        book: "A Portrait of the Artist as a Young Man"
      },
      {
        text: "The heart dies a slow death, shedding each hope like leaves until one day there are none. No hopes. Nothing remains.",
        author: "Arthur Golden",
        book: "Memoirs of a Geisha"
      },
      {
        text: "I rebel; therefore I exist.",
        author: "Albert Camus",
        book: "The Rebel"
      },
      {
        text: "Life has no meaning the moment you lose the illusion of being eternal.",
        author: "Jean-Paul Sartre",
        book: "Nausea"
      },
      {
        text: "I am a forest, and a night of dark trees: but he who is not afraid of my darkness, will find banks full of roses under my cypresses.",
        author: "Friedrich Nietzsche",
        book: "Thus Spoke Zarathustra"
      },
      {
        text: "I am alone again and I want to be so; alone with the pure sky and open sea.",
        author: "Virginia Woolf",
        book: "The Waves"
      },
      {
        text: "What if everything in the world were a misunderstanding, what if laughter were really tears?",
        author: "Søren Kierkegaard",
        book: "Either/Or"
      },
      {
        text: "Sometimes I can hear my bones straining under the weight of all the lives I’m not living.",
        author: "Jonathan Safran Foer",
        book: "Extremely Loud and Incredibly Close"
      },
      {
        text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
        author: "Albert Camus",
        book: "The Myth of Sisyphus"
      },
      {
        text: "It is not death that a man should fear, but he should fear never beginning to live.",
        author: "Marcus Aurelius",
        book: "Meditations"
      },
      {
        text: "We live, as we dream — alone.",
        author: "Joseph Conrad",
        book: "Heart of Darkness"
      },
      {
        text: "I took a deep breath and listened to the old brag of my heart: I am, I am, I am.",
        author: "Sylvia Plath",
        book: "The Bell Jar"
      },
      {
        text: "I am a sick man... I am a spiteful man. I am an unattractive man.",
        author: "Fyodor Dostoevsky",
        book: "Notes from Underground"
      },
      {
        text: "Man only likes to count his troubles; he doesn't calculate his happiness.",
        author: "Fyodor Dostoevsky",
        book: "Notes from Underground"
      },
      {
        text: "The darker the night, the brighter the stars, the deeper the grief, the closer is God!",
        author: "Fyodor Dostoevsky",
        book: "Crime and Punishment"
      },
      {
        text: "I say let the world go to hell, but I should always have my tea.",
        author: "Fyodor Dostoevsky",
        book: "Notes from Underground"
      },
      {
        text: "I am free and that is why I am lost.",
        author: "Franz Kafka",
        book: "The Trial"
      },
      {
        text: "They’re talking of me, and they’re judging me. And I can’t understand a word of it.",
        author: "Franz Kafka",
        book: "The Trial"
      },
      {
        text: "I can prove at any time that my education tried to make another person out of me than the one I became.",
        author: "Franz Kafka",
        book: "Letter to His Father"
      },
      {
        text: "In man’s struggle against the world, bet on the world.",
        author: "Franz Kafka",
        book: "The Zürau Aphorisms"
      },
      {
        text: "A book must be the axe for the frozen sea within us.",
        author: "Franz Kafka",
        book: "Letter to Oskar Pollak"
      },
      {
        text: "The soul is healed by being with children.",
        author: "Fyodor Dostoevsky",
        book: "The Idiot"
      }               
  ];
  
  function showRandomQuote() {
    const quoteBox = document.getElementById("book-quote");
    const quoteText = quoteBox.querySelector(".quote-text");
    const quoteAuthor = quoteBox.querySelector(".quote-author");
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    quoteText.textContent = `“${quote.text}”`;
    quoteAuthor.textContent = `– ${quote.author}, *${quote.book}*`;
  }
  
  window.addEventListener("DOMContentLoaded", showRandomQuote);
  