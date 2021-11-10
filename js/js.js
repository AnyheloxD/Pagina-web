menu = document.getElementById("myNav");

window.onScroll = function(){

	var scroll = document.documentElement.scrollTop;
	if (scroll > 100) {
		menu.style.backgroundColor = "red";
	} else if(scroll < 100){
		menu.style.backgroundColor = "transparent";
	}


}