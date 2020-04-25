		

		document.querySelector(".navbar-toggler").addEventListener("click", iconchange);
		function iconchange(){
		    document.querySelector(".none_click").style.display="none"
		    document.querySelector(".visible_click").style.display="block"
		    var btn = document.querySelector(".navbar-toggler");
		    btn.removeEventListener("click", iconchange);
		    document.querySelector(".navbar-toggler").addEventListener("click", iconchange_retrn);
		}
		function iconchange_retrn(){
		    document.querySelector(".none_click").style.display="block"
		    document.querySelector(".visible_click").style.display="none"
		    var btn = document.querySelector(".navbar-toggler");
		    btn.removeEventListener("click", iconchange_retrn);
		    document.querySelector(".navbar-toggler").addEventListener("click", iconchange);
		}

		// var header = document.getElementById("mymenu");
		// var btns = header.getElementsByClassName("cool-link");
		// for (var i = 0; i < btns.length; i++) {
		//   btns[i].addEventListener("click", function() {
		//   var current = document.getElementsByClassName("active");
		//   current[0].className = current[0].className.replace(" active", "");
		//   this.className += " active";
		//   });
		// }

		// document.querySelector(".actives").addEventListener("mouseover", removeProperty);
		//  function removeProperty() { 
  //           element = document.querySelector('.actives'); 
  //           element.style.setProperty('border-top', 'none'); 
  //           document.querySelector(".actives").addEventListener("mouseout", addProperty);
  //       } 
  //       function addProperty() { 
  //           element = document.querySelector('.actives'); 
  //           element.style.setProperty('border-top', '2px solid #fcb62f'); 
  //       } 