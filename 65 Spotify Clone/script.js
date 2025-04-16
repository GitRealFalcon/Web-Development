// Univerval Variables
let currentSong = new Audio();
let playBtn = document.querySelector(".play");
let list;
let path;
let src;
let folder;
let songList;


//Fetch All folder in dir========================>
async function getAlbums() {
    let music = "music";
    let musicData = await fetch(music);
    let musicFolder = await musicData.text();
    let albumDiv = document.createElement("div");
    albumDiv.innerHTML = musicFolder;
    let album_a = albumDiv.getElementsByTagName("a");
    let album = [];
    for (const element of album_a) {

        if (element.innerText === "../") {

        } else {
            album.push(element.innerText);
        }
    }
    return album;
}

// Fetch files in folder=====================>
async function getSong() {

    let dir = await fetch(folder);

    let fetchList = await dir.text()
    let div = document.createElement("div");
    div.innerHTML = fetchList;
    let arr = div.getElementsByTagName("a");
    let song = [];

    for (const track of arr) {
        if (track.innerText.endsWith(".flac") || track.innerText.endsWith(".mp3") || track.innerText.endsWith(".wav")) {
            song.push(track.innerText)
        }
    }

    return song;
}

// Play Song Function=========================>
const playMusic = (track) => {
    list.style.removeProperty('background'); //Reset Song Tile Background Color
    currentSong.src = folder + track; // Update Current Song

    currentSong.play();
    document.querySelector(".trackName").innerText = currentSong.src.replace(path, '').replaceAll("%20", " "); //Update track name in player tile
    src = currentSong.src.replace(path, '').replaceAll("%20", " "); //update song name in src variable
    //condition for play and pause buttons in player
    if (currentSong.paused) {
        playBtn.querySelector("IMG").attributes.src.value = "play-stroke-rounded.svg";
    } else {
        playBtn.querySelector("IMG").attributes.src.value = "pause-stroke-rounded.svg"
    }

    //select current song div in library section for backgroun change
    Array.from(document.querySelector(".trackList").querySelectorAll(".track")).forEach((e) => {

        if (e.querySelector(".trackInfo").querySelector("div").innerText == src) {
            list = e;


        }
    })

    list.style.background = "rgb(11, 158, 11"; // Change Background current song

}

//List update ===============================>
async function updateSongList() {
    document.querySelector(".trackList").innerHTML = "";
    // Getting Song List
    songList = await getSong();
    // Push Track List in HTML
    for (const track of songList) {
        let div = document.createElement("div")
        div.innerHTML = `<div class="track">
                    <div class="trackInfo">
                        <div class="trackText">${track}</div>
                        <span>Atif Aslam</span>
                    </div>
                    <div class="playNow">
                        <span>Play Now</span>
                        <img src="play.svg" alt="">
                    </div>
                </div>`;
        document.querySelector(".trackList").append(div); // append all song list in Library section

        //Update First song from list
        list = document.querySelector(".trackList").querySelector(".track"); // Get frist div from song library
        list.style.background = "rgb(11, 158, 11"; //update background color
        currentSong.src = folder + document.querySelector(".trackInfo").querySelector("div").innerText; //Load song in player
        let Name = document.querySelector(".trackInfo").querySelector("div").innerText; //Get inner Text from frist div
        path = currentSong.src.replaceAll("%20", " ").replace(Name, ""); // Get path of file memory after remove song name
        path = path.replaceAll(" ", "%20");
        src = Name; //update song name in src variable
        document.querySelector(".trackName").innerText = src; //Update Song Name in player tile

    }

    // AddeventListener each song in library section!!!!!!!!!
    Array.from(document.querySelector(".trackList").querySelectorAll(".track")).forEach((e) => {

        e.addEventListener("click", () => {
            playMusic(e.querySelector(".trackText").innerText)

        })
    })
}




// =============================================>
// Main Functtion
async function main() {

    //Getting Album List
    let albumList = await getAlbums();
    // Push Albums in HTML
    for (const element of albumList) {
        let albumDiv = document.createElement("div");
        albumDiv.innerHTML = `<div class="card">
                        <div class="greenPlay">
                            <img src="play.svg" alt="play">
                        </div>
                        <div class="image">
                            <img src="card.jpeg" alt="card">
                        </div>
                        <div class="info">
                            <div class="name">${element}</div>
                            <div class="detail">Mithoon Ankit Tiwari Jeet Gannguli</div>
                        </div>
                    </div>`;

        document.querySelector(".cards").append(albumDiv);
    }

    //Update song list first time
    folder = "/music/" + document.querySelector(".card").querySelector(".name").innerText;
    await updateSongList();

    // AddeventListener on Albums

    Array.from(document.querySelectorAll(".card")).forEach((e) => {
        e.addEventListener('click', async () => {
            folder = "/music/" + e.querySelector(".name").innerText;
            // getSong();
            updateSongList();
        })
    })

    //function for play and pause functionality
    function playPause() {
        if (currentSong.paused) {
            currentSong.play();
            playBtn.querySelector("IMG").attributes.src.value = "pause-stroke-rounded.svg"; // change img for paused
        } else {
            currentSong.pause()
            playBtn.querySelector("IMG").attributes.src.value = "play-stroke-rounded.svg"; // change img for play

        }
    }

    // AddeventListener Previous button
    let previousBtn = document.querySelector(".previous");
    previousBtn.addEventListener('click', () => {

        for (let i = 0; i < songList.length; i++) {
            if (src === songList[i] && src !== songList[0]) { //check current song in librrary 
                i--; // -1 in i value for previous song

                playMusic(songList[i]); // call play function with previous song

            }

        }
    })

    // AddeventListener Play & Pause button
    playBtn.addEventListener("click", () => {
        playPause(); // call PlayPause Function
    })

    // AddeventListener Next button
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener('click', () => {

        for (let i = 0; i < songList.length; i++) {
            let length = songList.length - 1; //get total No of songs in list

            if (src === songList[i] && src !== songList[length]) { // check current song in list with not last song
                i++;
                playMusic(songList[i]);
            } else if (src === songList[length]) {
                playMusic(songList[0]); // Current Song is last song reset the list as index 0
            }

        }
    })



    // function cunvert duration and current time 00:00/00:00 this formate
    function secondsToMinutes(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = Math.floor(seconds % 60);

        // Pad the seconds with a leading zero if it's less than 10
        remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        return minutes + ':' + remainingSeconds;
    }

    // AddeventListener on currentSong for fetch currentTime and duration
    let timer = document.querySelector(".timer");
    let pointer = document.querySelector("#point");
    currentSong.addEventListener('timeupdate', () => {

        timer.innerText = `${secondsToMinutes(currentSong.currentTime)}/${secondsToMinutes(currentSong.duration)}`; // Update Current time and Duretion in Player
        pointer.style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"; //Update Seekbar Pointer

        if ((currentSong.currentTime / currentSong.duration) * 100 == 100) { // Condition for next song if song is finish
            for (let i = 0; i < songList.length; i++) {
                let length = songList.length - 1;

                if (src === songList[i] && src !== songList[length]) { // check current song in list with not last song
                    i++;
                    playMusic(songList[i]);
                } else if (src === songList[length]) { // Current Song is last song reset the list as index 0
                    playMusic(songList[0]);
                    playPause();
                }
            }
        }
    })

    // AddeventListener on Seekbar
    let Seekbar = document.querySelector(".seekBar");
    Seekbar.addEventListener('click', (e) => {

        pointer.style.left = (e.offsetX / e.target.getBoundingClientRect().width) * 100 + "%"; // Move ponter on Seekbar After Click
        currentSong.currentTime = (currentSong.duration / 100) * (e.offsetX / e.target.getBoundingClientRect().width) * 100; // Update CurrentTime After Click
    })

    // AddeventListener on VolumeBar
    let VolumeBar = document.querySelector(".slider") //Volume slider
    let mute = document.querySelector(".mute"); // Volume img
    VolumeBar.addEventListener('change', (e) => {
        currentSong.volume = (e.target.value / 100); // Update Volume CurrentSong
        if (VolumeBar.value > 0) {
            mute.src = "volume-high-stroke-rounded.svg"; // Change Volume img is Volume greater then 0
        } else {
            mute.src = "volume-mute-02-stroke-rounded.svg"; // Change Volume img is Volume Equal to 0
        }
    })

    // AddeventListener on Volume IMG
    mute.addEventListener('click', () => {

        if (currentSong.muted == true) {
            currentSong.muted = false;
            VolumeBar.value = 20;
            mute.src = "volume-high-stroke-rounded.svg";
        } else {
            currentSong.muted = true;
            VolumeBar.value = 0;
            mute.src = "volume-mute-02-stroke-rounded.svg";
        }
    })

    // AddeventListener on MENU img
    let menu = document.querySelector(".menu");
    let leftContainer = document.querySelector('.leftContainer');
    menu.addEventListener('click', () => {
        leftContainer.style.left = "0";
    })
    // AddeventListener on CLOSE img
    let cros = document.querySelector(".cros");
    cros.addEventListener('click', () => {
        leftContainer.style.left = "-100%";
    })




}

main();

