// 감정별 음악 데이터
const songs = {
    happy: [
        { title: "Happy Song 1", artist: "Artist A" },
        { title: "Happy Song 2", artist: "Artist B" }
    ],
    sad: [
        { title: "Sad Song 1", artist: "Artist C" },
        { title: "Sad Song 2", artist: "Artist D" }
    ],
    energetic: [
        { title: "Energetic Song 1", artist: "Artist E" },
        { title: "Energetic Song 2", artist: "Artist F" }
    ],
    relaxed: [
        { title: "Relaxed Song 1", artist: "Artist G" },
        { title: "Relaxed Song 2", artist: "Artist H" }
    ]
};

// 감정 선택 버튼 클릭 이벤트
document.querySelectorAll(".emotion").forEach(button => {
    button.addEventListener("click", () => {
        const emotion = button.getAttribute("data-emotion"); // 버튼의 data-emotion 값 가져오기
        const selectedSongs = songs[emotion]; // 선택된 감정에 해당하는 노래 목록
        displaySongs(selectedSongs); // 노래 목록 표시
    });
});

// 노래 목록을 동적으로 표시
function displaySongs(songList) {
    const songsDiv = document.getElementById("songs");
    songsDiv.innerHTML = ""; // 기존 목록 초기화

    songList.forEach(song => {
        const songDiv = document.createElement("div");
        songDiv.className = "song";
        songDiv.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        `;
        songsDiv.appendChild(songDiv);
    });
}
