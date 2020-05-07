
var acc = document.getElementsByClassName("accordian");

			var i;
console.log("done")
			for(i = 0; i < acc.length; i++){
                acc[i].style.cursor= "pointer";
				acc[i].addEventListener("click", function() {
				
				this.classList.toggle("active");
console.log("click")
				var bcordian = this.nextElementSibling;
console.log(bcordian)
				if (bcordian.style.maxHeight){
					bcordian.style.maxHeight = null;

				} else {
					bcordian.style.maxHeight = bcordian.scrollHeight + "px";

				}
				});
			}

var aboutmenu = document.getElementsByClassName("aboutmenu");

var j;
    for(j = 0; j < aboutmenu.length; j++){
        aboutmenu[j].style.display = "inline-block";
        
        aboutmenu[j].addEventListener("click", function() {

        this.classList.toggle("active");
        var aboutmenuactualmenu = this.nextElementSibling;
        if (aboutmenuactualmenu.style.maxWidth) {
                aboutmenuactualmenu.style.maxWidth  = null;

           } else {
            
                aboutmenuactualmenu.style.maxWidth = (aboutmenuactualmenu.scrollWidth * 4) + "px";

           }
        if (aboutmenuactualmenu.style.maxHeight) {
                aboutmenuactualmenu.style.maxHeight  = null;

           } else {
            
                aboutmenuactualmenu.style.maxHeight = (aboutmenuactualmenu.scrollHeight) + "px";

           }
                  
    });
}
        
            