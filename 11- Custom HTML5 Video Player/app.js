/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); // any elements that has data-skip attribute
const ranges = player.querySelectorAll('.player__slider');
const btnFullScreen = player.querySelector('#btnFullScreen');
/* Build our functions */

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    /* does the same thing */
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function makeFullScreen() {
    if (isFullScreen) {
        document.exitFullscreen();
        isFullScreen = false;
    }
    else {
        player.requestFullscreen();
        isFullScreen = true;
    }
}

/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mouseDown', () => mouseDown = true);
progress.addEventListener('mouseUp', () => mouseDown = false);


let isFullScreen = false;
btnFullScreen.addEventListener('click', makeFullScreen);

fullScreenButton.addEventListener("click", function() {
    
    });