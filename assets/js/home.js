// Fade Out Arrow Upon Scrolling Down
var windowHeight = (window.innerHeight)/3
var scrollPosition;
var percentScrolled;
var arrow = document.querySelector("#arrow");
var body = document.querySelector("body");

window.onscroll = function(){
	// Chrome || Firefox
	scrollPosition = document.body.scrollTop || window.pageYOffset || 0;
	percentScrolled = scrollPosition/windowHeight;

	console.log(scrollPosition);

	if(percentScrolled <= 1){
		var percentFade = 1-percentScrolled;
		arrow.style.opacity = percentFade;
	}
	else{
		arrow.style.opacity = "0";
	}
};

// Add Gradient and Text Over Page Icons On Hover and Focus
var pageIcons = document.querySelectorAll(".circle a");

for(var i=0; i < pageIcons.length; i++){
	pageIcons[i].addEventListener("mouseover", function(){
		if(this.classList.contains("bioPic")){
			this.classList.add("bioPicHover");
			this.classList.remove("bioPic");
			this.textContent = "Bio";
		}
		else if(this.classList.contains("portfolioPic")){
			this.classList.add("portfolioPicHover");
			this.classList.remove("portfolioPic");
			this.textContent = "Portfolio";
		}
		else if(this.classList.contains("resumePic")){
			this.classList.add("resumePicHover");
			this.classList.remove("resumePic");
			this.textContent = "Resume";
		}
		else if(this.classList.contains("contactPic")){
			this.classList.add("contactPicHover");
			this.classList.remove("contactPic");
			this.textContent = "Contact!";
		}
	});
	pageIcons[i].addEventListener("mouseout", function(){
		if(this.classList.contains("bioPicHover")){
			this.classList.add("bioPic");
			this.classList.remove("bioPicHover");
			this.textContent = "";
		}
		else if(this.classList.contains("portfolioPicHover")){
			this.classList.add("portfolioPic");
			this.classList.remove("portfolioPicHover");
			this.textContent = "";
		}
		else if(this.classList.contains("resumePicHover")){
			this.classList.add("resumePic");
			this.classList.remove("resumePicHover");
			this.textContent = "";
		}
		else if(this.classList.contains("contactPicHover")){
			this.classList.add("contactPic");
			this.classList.remove("contactPicHover");
			this.textContent = "";
		}
	});
}

// OLD ARROW FADING WITH jQUERY
// var windowHeight = $(window).height()/3;
// $(window).on("scroll", function(){
// 	scrollPosition = $(window).scrollTop();
// 	percentScrolled = scrollPosition/windowHeight;

// 	if(percentScrolled <= 1){
// 		 $("#arrow").fadeTo(0, 1-percentScrolled);
// 	}
// 	else{
// 		$("#arrow").fadeOut(100);
// 	}
// });
