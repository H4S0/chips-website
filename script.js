window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});

function prikazimenu() {
  let topNav = document.getElementById('navbar-list');
	if (topNav.className === "navbar-list") {
		topNav.className = 'active';
	} else {
		topNav.className = "navbar-list";
	}
}
