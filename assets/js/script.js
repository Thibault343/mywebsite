/* ---------------------------------------------------------------------------------------- */
/*      ** Live **         */
/* ---------------------------------------------------------------------------------------- */

const lives = [
    {
        id: 1,
        name: "lofi hip hop radio 📚 beats to relax/study to",
        url: "https://www.youtube.com/embed/jfKfPfyJRdk", 
        genre: "Lo-fi Hip Hop",
        duration: "Live"
    },
    {
        id: 2,
        name: "synthwave radio 🌌 chill/game to",
        url: "https://www.youtube.com/embed/4xDzrJKXOOY",
        genre: "Synthwave",
        duration: "Live"
    },
    {
        id: 3,
        name: "jazz lofi radio 🎷 beats to chill/study to",
        url: "https://www.youtube.com/embed/HuFYqnbVbzY",
        genre: "Jazz Lo-fi",
        duration: "Live"
    },
    {
        id: 4,
        name: "lofi hip hop radio 🌙 beats to sleep/chill to",
        url: "https://www.youtube.com/embed/28KRPhVzCus",
        genre: "Lo-fi Hip Hop",
        duration: "Live"
    },
    {
        id: 5,
        name: "POV: It's Tuesday and you have an essay due tomorrow",
        url: "https://www.youtube.com/embed/uFlzUaisbig",
        genre: "Lo-fi",
        duration: "Live"
    },
    {
        id: 6,
        name: "asian lofi radio 🎋 beats to relax/study to",
        url: "https://www.youtube.com/embed/Na0w3Mz46GA",
        genre: "Asian Lo-fi",
        duration: "Live"
    }
];
let actualLive = 0;

const btnNext = document.getElementById('btnnext');
const btnPrev = document.getElementById('btnprev');
const video = document.getElementById('video');
const songTitle = document.getElementById('song-title');
const liveCategory = document.getElementById('category');



// Scrapping 



// init
songTitle.innerText = lives[actualLive].name;
liveCategory.innerText = lives[actualLive].genre;


btnNext.addEventListener("click", () => {
    if (actualLive < 5) {
        console.log(btnNext);
        
        actualLive += 1;
        console.log(actualLive);
        songTitle.innerText = lives[actualLive].name;
        liveCategory.innerText = lives[actualLive].genre;
        let newUrl = lives[actualLive].url;
        video.src = `${newUrl}`;
    } 
    
});

btnPrev.addEventListener("click", () => {
    if (actualLive > 0) {

        actualLive -= 1;
        console.log(actualLive);
        liveCategory.innerText = lives[actualLive].genre;
        songTitle.innerText = lives[actualLive].name;
        let newUrl = lives[actualLive].url;
        video.src = `${newUrl}`;
    } 

});


