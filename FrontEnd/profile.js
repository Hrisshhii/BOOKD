// profile.js
fetch('/get-user')
  .then(res => res.json())
  .then(user => {
    if (!user || !user.username) {
      alert("You are not logged in!");
      window.location.href = "/login.html";
      return;
    }

    // Fill in the page with user data
    document.getElementById('username').textContent = user.username;
    document.getElementById('user-bio').textContent = user.bio;
    document.getElementById('Profile-pic').src = user.profilePic || "Header-Logos/profile-pic.png";

    const favSection = document.getElementById('favorites-section');
    user.favorites?.forEach(poster => {
      const img = document.createElement('img');
      img.src = poster;
      img.className = "Fav-poster";
      favSection.appendChild(img);
    });

    const currSection = document.getElementById('current-reading');
    user.currentlyReading?.forEach(poster => {
      const img = document.createElement('img');
      img.src = poster;
      img.className = "poster";
      currSection.appendChild(img);
    });

    document.getElementById('read-count').textContent = user.booksRead?.length || 0;
    document.getElementById('readlist-count').textContent = user.readlist?.length || 0;
    document.getElementById('liked-reviews-count').textContent = user.likedReviews?.length || 0;
    document.getElementById('saved-lists-count').textContent = user.savedLists?.length || 0;
    document.getElementById('followers-count').textContent = user.followers || 0;
    document.getElementById('following-count').textContent = user.following || 0;

    user.booksRead?.forEach(book => {
      const p = document.createElement('p');
      p.textContent = book;
      document.getElementById('books-read-section').appendChild(p);
    });

    user.readlist?.forEach(book => {
      const p = document.createElement('p');
      p.textContent = book;
      document.getElementById('readlist-section').appendChild(p);
    });

    user.likedReviews?.forEach(review => {
      const li = document.createElement('li');
      li.textContent = review;
      document.getElementById('liked-reviews').appendChild(li);
    });

    user.savedLists?.forEach(list => {
      const li = document.createElement('li');
      li.textContent = list;
      document.getElementById('saved-lists').appendChild(li);
    });

  })
  .catch(err => {
    console.error("Error loading profile:", err);
  });
