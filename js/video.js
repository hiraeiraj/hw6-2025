var video;

// Q1 Initialize the video element and turn off autoplay and turn off looping.

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=this.document.querySelector("#player1")
	video.autoplay=false;
	video.autoplay=false;

});


// Q2 Play the video and update the volume information. 

window.addEventListener("DOMContentLoaded", function(){
	play=this.document.querySelector("#play")
	video=this.document.querySelector("#player1")
	volume=this.document.querySelector("#volume")

	play.addEventListener("click", function() {
		video.play()
		console.log("Video Playing")
		volume.textContent = +video.volume*100 +"%";

	})
})


// Q3 Pause the video.

window.addEventListener("DOMContentLoaded", function(){
	pause=this.document.querySelector("#pause")
	video=this.document.querySelector("#player1")

	pause.addEventListener("click", function() {
		video.pause()
		console.log("Video Paused")
	})
})

// Q4 Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  

window.addEventListener("DOMContentLoaded", function(){
	slower=this.document.querySelector("#slower")
	video=this.document.querySelector("#player1")

	slower.addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("The new speed is =" +video.playbackRate)

	})
})

// Q5 Increase the current video speed each time the button is clicked and log the new speed to the console

window.addEventListener("DOMContentLoaded", function(){
	faster=this.document.querySelector("#faster")
	video=this.document.querySelector("#player1")

	faster.addEventListener("click", function() {
		video.playbackRate *= 1.111;
		console.log("The new speed is =" +video.playbackRate)

	})
})


//Q6 Skip Ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.


window.addEventListener("DOMContentLoaded", function(){
	skip=this.document.querySelector("#skip")
	video=this.document.querySelector("#player1")

	skip.addEventListener("click", function() {
		if (video.currentTime + 10 < video.duration) {
			video.currentTime += 10;
		} else {
			video.currentTime = 0
		}
	console.log("The video is at" +video.currentTime)

	})
})


//Q7 Mute/unmute the video and update the text in the button.
window.addEventListener("DOMContentLoaded", function(){
	mute=this.document.querySelector("#mute")
	video=this.document.querySelector("#player1")

	mute.addEventListener("click", function() {
		video.muted = !video.muted
		console.log("Video Playing")

		if (video.muted) {
			volume.textContent = "Muted";
			mute.textContent = "Unmute"
		} else {
			volume.textContent = video.volume*100 +"%";
			mute.textContent = "Mute"
		}
	})
})

// Q8 Change the volume based on the slider and update the volume information.

window.addEventListener("DOMContentLoaded", function(){
	slider=this.document.querySelector("#slider")
	video=this.document.querySelector("#player1")

	slider.addEventListener("input", function() {
		video.volume = slider.value / 100
		if (video.muted) {
			volume.textContent = "Muted";
		} else {
			volume.textContent = video.volume*100 +"%";
		}
	})
})

// Q9 Utilize the existing oldSchool class on the video element

window.addEventListener("DOMContentLoaded", function(){
	oldSchool = this.document.querySelector("#vintage")
	video=this.document.querySelector("#player1")

	oldSchool.addEventListener("click", function() {
		video.classList.add("oldSchool");
	})
})

// Q10 Remove the oldSchool class from the video.

window.addEventListener("DOMContentLoaded", function(){
	original = this.document.querySelector("#orig")
	video=this.document.querySelector("#player1")

	original.addEventListener("click", function() {
		video.classList.remove("oldSchool");
	})
})