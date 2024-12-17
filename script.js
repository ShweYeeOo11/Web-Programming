// Example Music Data Organized by Emotion (10 Songs Per Emotion with YouTube Links)
const musicData = {
    happy: [
        { title: "Aju Nice", artist: "Seventeen", image: "img/ajunice.jpg", link: "https://tinyurl.com/4ksy2zdx" },
        { title: "Hey Hey", artist: "TWS", image: "img/hey.jpeg", link: "https://tinyurl.com/2xyrdvd6" },
        { title: "Wanna Be (My Baby)", artist: "Wanna One", image: "img/wanna.jpeg", link: "https://tinyurl.com/madmy9v6" },
        { title: "GO!", artist: "DK", image: "img/go.jpeg", link: "https://tinyurl.com/y7j562vj" },
        { title: "Energetic", artist: "Wanna One", image: "img/energetic.jpeg", link: "https://tinyurl.com/yvs8ym99" },
        { title: "Only one for me", artist: "BTOB", image: "img/only.jpeg", link: "https://shorturl.at/RJNpS" },
        { title: "Holiday", artist: "Seventeen", image: "img/holiday.jpeg", link: "https://tinyurl.com/yfn35bt8" },
        { title: "파이팅 해야지", artist: "BSS", image: "img/fighting.jpeg", link: "https://shorturl.at/3zGLG" },
        { title: "Plot Twist", artist: "TWS", image: "img/plottwist.jpeg", link: "https://shorturl.at/lbxLG" },
        { title: "God Of Music", artist: "Seventeen", image: "img/godofmusic.jpeg", link: "https://shorturl.at/T4hYT" },
    ],
    sad: [
        { title: "Kness", artist: "IU", image: "img/knees.jpeg", link: "https://tinyurl.com/5xjf4ztw" },
        { title: "Yawn", artist: "Seventeen", image: "img/yawn.jpeg", link: "https://tinyurl.com/y6hnvk4r" },
        { title: "Beautiful Goodbye", artist: "Chen", image: "img/goodbye.jpeg", link: "https://tinyurl.com/4djj46fp" },
        { title: "Let Me In", artist: "EXO", image: "img/letmein.jpeg", link: "https://tinyurl.com/24st5xws" },
        { title: "If You", artist: "BIGBANG", image: "img/ifyou.jpeg", link: "https://tinyurl.com/bde34uhh" },
        { title: "Time Lapse", artist: "Taeyeon", image: "img/timelapse.jpeg", link: "https://tinyurl.com/4fjcfv6t" },
        { title: "Hurt Road", artist: "DAY6", image: "img/hurtroad.jpeg", link: "https://tinyurl.com/bdvzrbr8" },
        { title: "Me After You", artist: "Paul Kim", image: "img/meafteryou.jpeg", link: "https://tinyurl.com/yykamvzs" },
        { title: "All of my life", artist: "Park Won", image: "img/allofmylife.jpeg", link: "https://tinyurl.com/55vktp8v" },
        { title: "Us,Again", artist: "Seventeen", image: "img/usagain.jpeg", link: "https://tinyurl.com/tp3fw83p" },
    ],
    energetic: [
        { title: "Super", artist: "Seventeen", image: "img/super.jpeg", link: "https://tinyurl.com/bddzw83b" },
        { title: "Hit", artist: "Seventeen", image: "img/hit.jpeg", link: "https://tinyurl.com/56ejw8t3" },
        { title: "TOMBOY", artist: "(G)I-DLE", image: "img/tomboy.jpeg", link: "https://www.youtube.com/watch?v=ALj5MKjy2BU" },
        { title: "Bang Bang Bang", artist: "BIGBANG", image: "img/bang.jpeg", link: "https://www.youtube.com/watch?v=2ips2mM7Zqw" },
        { title: "Boom Boom", artist: "Seventeen", image: "img/boom.jpeg", link: "https://tinyurl.com/4k2mjyyr" },
        { title: "Back Door", artist: "Stray Kids", image: "img/backdoor.jpeg", link: "https://www.youtube.com/watch?v=c7rCyll5AeY" },
        { title: "God's Menu", artist: "Stray Kids", image: "img/menu.jpeg", link: "https://tinyurl.com/4ejvawe4" },
        { title: "Shut Down", artist: "Black Pink", image: "img/shutdown.jpeg", link: "https://www.youtube.com/watch?v=XGdbaEDVWp0" },
        { title: "Kick It", artist: "NCT 127", image: "img/kickit.jpeg", link: "https://www.youtube.com/watch?v=2OvyA3q8Ruk" },
        { title: "JIKJIN", artist: "Treasure", image: "img/jikjin.jpeg", link: "https://www.youtube.com/watch?v=j7_lSP8Vc3o" },
    ],
    relaxed: [
        { title: "Beautiful Monster", artist: "Yoon Jeonghan", image: "img/beautifulmonster.jpg", link: "https://tinyurl.com/yc8x2392" },
        { title: "DINOSAUR", artist: "AKMU", image: "img/dinosaur.jpeg", link: "https://www.youtube.com/watch?v=iw7N-zzd2z0" },
        { title: "COSMIC", artist: "Red Velvet", image: "img/cosmic.jpeg", link: "https://www.youtube.com/watch?v=MoFH9NBybpY" },
        { title: "LOVE,MONEY,FAME", artist: "Seventeen", image: "img/LMF.jpeg", link: "https://tinyurl.com/44w7cb23" },
        { title: "Ready to love", artist: "Seventeen", image: "img/readytolove.jpeg", link: "https://tinyurl.com/34bnpb37" },
        { title: "Beautiful", artist: "Crush", image: "img/beautiful.jpeg", link: "https://www.youtube.com/watch?v=A4l44mvL4j8" },
        { title: "To You", artist: "Sevneteen", image: "img/toyou.jpeg", link: "https://tinyurl.com/bd276pd2" },
        { title: "Love Poem", artist: "IU", image: "img/lovepoem.jpeg", link: "https://www.youtube.com/watch?v=wb0vb6j_tyU" },
        { title: "Please stay", artist: "BTOB", image: "img/pleasestay.jpeg", link: "https://www.youtube.com/watch?v=6gdVvZbTiio" },
        { title: "World", artist: "Seveteen", image: "img/world.jpeg", link: "https://tinyurl.com/y89axzmf" },
    ],
};


// Save user data to localStorage
function saveUserData(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;

    // Store data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("birthdate", birthdate);

    alert("Welcome, " + name + "!");
    window.location.href = "index.html"; // Redirect to main page
}

document.addEventListener("DOMContentLoaded", () => {
    // Load all music sections
    generateMusicList("happy", "happy-music");
    generateMusicList("sad", "sad-music");
    generateMusicList("energetic", "energetic-music");
    generateMusicList("relaxed", "relaxed-music");
    displayPlaylist();
});

// Generate Music List
function generateMusicList(emotion, containerId) {
    const container = document.getElementById(containerId);
    const musicList = document.createElement("div");
    musicList.className = "music-list";

    musicData[emotion].forEach((music) => {
        const musicItem = document.createElement("div");
        musicItem.className = "music-list-item";

        // Add Image
        const musicImage = document.createElement("img");
        musicImage.className = "music-list-item-img";
        musicImage.src = music.image;
        musicImage.alt = music.title;

        // Add Title
        const musicTitle = document.createElement("a");
        musicTitle.className = "music-list-item-title";
        musicTitle.href = music.link;
        musicTitle.target = "_blank";
        musicTitle.textContent = music.title;

        // Add Artist
        const musicArtist = document.createElement("p");
        musicArtist.className = "music-list-item-desc";
        musicArtist.textContent = music.artist;

        // Add Button
        const addButton = document.createElement("button");
        addButton.textContent = "+ Add to Playlist";
        addButton.onclick = () => addToPlaylist(music);

        musicItem.appendChild(musicImage);
        musicItem.appendChild(musicTitle);
        musicItem.appendChild(musicArtist);
        musicItem.appendChild(addButton);

        musicList.appendChild(musicItem);
    });

    container.appendChild(musicList);
}


// Playlist Logic
let playlist = JSON.parse(localStorage.getItem("playlist")) || [];

// Function to add a song to the playlist
function addToPlaylist(song) {
    playlist.push(song);
    localStorage.setItem("playlist", JSON.stringify(playlist));
    alert(song.title + " added to your playlist!");
    displayPlaylist(); // Refresh playlist
}

// Function to display the playlist
function displayPlaylist() {
    const playlistContainer = document.getElementById("playlist-container");
    playlistContainer.innerHTML = ""; // Clear previous playlist

    if (playlist.length === 0) {
        playlistContainer.innerHTML = "<p>Your playlist is empty!</p>";
        return;
    }

    playlist.forEach((song, index) => {
        const songItem = document.createElement("div");
        songItem.className = "playlist-item";

        // Song Title
        const songTitle = document.createElement("p");
        songTitle.textContent = `${song.title} by ${song.artist}`;

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = () => deleteFromPlaylist(index);

        // Append to playlist container
        songItem.appendChild(songTitle);
        songItem.appendChild(deleteButton);
        playlistContainer.appendChild(songItem);
    });
}

// Function to delete a song from the playlist
function deleteFromPlaylist(index) {
    playlist.splice(index, 1); // Remove song from playlist
    localStorage.setItem("playlist", JSON.stringify(playlist)); // Update localStorage
    displayPlaylist(); // Refresh playlist
}


// Search Functionality
function filterSongs() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const songs = document.querySelectorAll(".music-list-item");

    songs.forEach((song) => {
        const title = song.querySelector(".music-list-item-title").textContent.toLowerCase();
        const artist = song.querySelector(".music-list-item-desc").textContent.toLowerCase();

        if (title.includes(query) || artist.includes(query)) {
            song.style.display = "block";
        } else {
            song.style.display = "none";
        }
    });
}
