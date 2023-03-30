var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	// initialize the video element 
	video = document.getElementById("player1");
	// disable autoplay
	video.autoplay = false;
	// disable loop
	video.loop = false;
	// load video
	video.load;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// play the video 
	video.play();
	// define volume variable
	let volume = document.getElementById("#slider").value;
	// update the volume information
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	document.getElementById("volume").innerHTML = volume + '%';

});

document.querySelector('#pause').addEventListener('click', function() {
	console.log("Pause Video");
	// pause video
	video.pause();
});

document.querySelector('#slower').addEventListener('click', function(){
	// decrease speed by 10 percent
	video.playbackRate *= .9;
	console.log(video.playbackRate);
});

document.querySelector('#faster').addEventListener('click', function() {
	// increase speed by 10 percent
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
});

document.querySelector('#skip').addEventListener('click', function() {
	// advance the current video by 10 seconds
	video.currentTime += 10;
	// enable loop
	video.loop = true;
	console.log(video.currentTime);
});

document.querySelector('#mute').addEventListener('click', function() {
	// mute video if currently not muted
	if (video.muted == false) {
		video.muted = true;
		// change button option to Unmute
		document.getElementById('mute').innerText = 'Unmute';
		console.log("Video muted");
	}
	// unmute video if currently muted
	else {
		video.muted = false;
		// change button option to Mute
		document.getElementById('mute').innerText = 'Mute';
		console.log("Video unmuted");
	}
});

document.querySelector('#slider').addEventListener('click', function() {
	// change the volume based on the slider
	video.volume = this.value / 100;
	// update the volume information.
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	console.log(video.volume);
});

document.querySelector('#vintage').addEventListener('click', function() {
	// apply existing oldSchool class on the video element
	video.classList.add("oldSchool");
	console.log("Styled Old School");
});

document.querySelector('#orig').addEventListener('click', function() {
	// remove  oldSchool class from the video element
	video.classList.remove("oldSchool");
	console.log("Removed Old School");
});