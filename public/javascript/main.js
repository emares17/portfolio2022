const body = document.body
// const button = document.getElementById('sendButton')
const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)


const validateForm = (event) => {
    event.preventDefault(); 

    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('e-mail').value;
    const message = document.getElementById('message').value;
	const messageDiv = document.getElementById('message-div');

    
    if (!firstName || !lastName || !email || !message) {
      
    //   const messageDiv = document.getElementById('message-div');
      messageDiv.textContent = 'Please fill in all fields.';

	  setTimeout(() => {
		messageDiv.textContent = '';
	  }, 5000);

      return; 
    } 

    event.target.submit();

	messageDiv.textContent = 'Message Sent!';

	setTimeout(() => {
		messageDiv.textContent = '';
	}, 5000);

  }

let animationInterval;
let titles = ['🎵 Baby come back 🎵', '🎵 Baby come back. 🎵', '🎵 Baby come back.. 🎵', '🎵 Baby come back... 🎵'];
let currentIndex = 0;

const startAnimation = () => {
	animationInterval = setInterval(() => {
		document.title = titles[currentIndex];
		currentIndex = (currentIndex + 1) % titles.length;
	}, 5000)
};

const stopAnimation = () => {
	clearInterval(animationInterval);
	document.title = 'Esteban Mares';
};

window.addEventListener('focus', () => {
	stopAnimation();
});

window.addEventListener('blur', () => {
	startAnimation();
});


 