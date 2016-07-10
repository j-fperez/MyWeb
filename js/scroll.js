// SMOOTH SCROLL
var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++){
	navbarItems[i].addEventListener('click', function(evt){	

		deleteActiveClass();

		if (Modernizr.classList) {
			this.classList.add('active');
		} else {
			this.classList += ' active';
		}

		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		
		if(sectionToGo.length > 1) {
			evt.preventDefault();
			var goTo = sectionToGo[sectionToGo.length - 1];
			getElementByIdAndScroll(goTo);
		}
	});
}

function getElementByIdAndScroll(name) {
	var elem;
	if (name == '') {
		elem = document.getElementsByClassName('header')[0];
	} else {
		elem = document.getElementById(name);
	}

	scrollToElement(elem);
}

function scrollToElement(element) {
	var jump = parseInt(element.getBoundingClientRect().top * .3);
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout(function() {
			scrollToElement(element);
		}, "60");

	} else {
		element.lastJump = null;
	}
}

function deleteActiveClass() {
	for(var i = 0; i < navbarItems.length; i++){
		if (Modernizr.classList) {
			navbarItems[i].classList.remove('active');
			navbarItems[i].classList.remove('active-reverse');
		} else {
			navbarItems[i].className = 'navbar-item';
		}
	}
}


// CHANGE ACTIVE ITEM
var cumulativeOffset = function(element) {
	var top = 0;
    do {
        top += element.offsetTop  || 0;
        element = element.offsetParent;
    } while(element);

    return top;
};

var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 50;
var offsetEstudios = cumulativeOffset(document.getElementById('estudios')) - 50;
var offsetExperiencia = cumulativeOffset(document.getElementById('experiencia')) - 50;
var offsetSobreMi = cumulativeOffset(document.getElementById('sobre-mi')) - 50;
var offsetContacto = cumulativeOffset(document.getElementById('contacto')) - 50;


var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(evt){
	var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy) {
		if(!previous) {
			previous = 1;
		} else if (previous == 1) {
			return false;
		}

		navbar.style.backgroundColor = '247,247,247';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href="#"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href="#"]').parentNode.className += " active";
		}
	} else if (window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetEstudios){
		if(!previous) {
			previous = 2;
		} else if (previous == 2) {
			return false;
		}
		navbar.style.backgroundColor = '#A4A4A4';
		deleteActiveClass()
		if (Modernizr.classList) {
			document.querySelector('a[href$="quien-soy"]').parentNode.classList.add("active-reverse");
		} else { 
			document.querySelector('a[href$="quien-soy"]').parentNode.className += " active-reverse";
		}
	} else if (window.pageYOffset >= offsetEstudios && window.pageYOffset < offsetExperiencia){
		if(!previous) {
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		navbar.style.backgroundColor = '247,247,247';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="equipo"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href$="equipo"]').parentNode.className += " active";
		}
	}
}

function deleteActiveClass() {
	for(var i = 0; i < navbarItems.length; i++){
		if (Modernizr.classList) {
			navbarItems[i].classList.remove('active');
			navbarItems[i].classList.remove('active-reverse');
		} else {
			navbarItems[i].className = 'navbar-item';
		}
	}
}
