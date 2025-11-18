// This file manages the audio player functionality, allowing users to play samples and full tracks from the music page.

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const stopButton = document.getElementById('stop-button');
    const trackList = document.getElementById('track-list');
    let currentTrack = null;

    // Function to play a selected track
    function playTrack(track) {
        if (currentTrack) {
            currentTrack.pause();
        }
        currentTrack = new Audio(track);
        currentTrack.play();
    }

    // Event listeners for play, pause, and stop buttons
    playButton.addEventListener('click', function() {
        if (currentTrack) {
            currentTrack.play();
        }
    });

    pauseButton.addEventListener('click', function() {
        if (currentTrack) {
            currentTrack.pause();
        }
    });

    stopButton.addEventListener('click', function() {
        if (currentTrack) {
            currentTrack.pause();
            currentTrack.currentTime = 0;
        }
    });

    // Event listener for track selection
    trackList.addEventListener('change', function(event) {
        const selectedTrack = event.target.value;
        if (selectedTrack) {
            playTrack(selectedTrack);
        }
    });
});