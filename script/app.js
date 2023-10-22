let menuBtn = document.getElementById('MenuBtn')

menuBtn.addEventListener('click', e => {
	document.querySelector('body').classList.toggle('mobile-nav-active')
	e.target.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input', {
	strings: ['Front-End Developer!', 'Freelancer!', 'Web-Designer!'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 2000,
	loop: true,
})

// get all link in header nav
let links = document.querySelectorAll('nav ul li a')
// get all sections
let sections = document.querySelectorAll('section')
window.addEventListener('scroll', function () {
	const scrollPos = this.window.scrollY
	sections.forEach(sec => {
		if (
			scrollPos > sec.offsetTop &&
			scrollPos < sec.offsetTop + sec.offsetHeight
		) {
			links.forEach(link => {
				link.classList.remove('active')
				if (sec.getAttribute('id') === link.getAttribute('href').substring(1)) {
					link.classList.add('active')
				}
			})
		}
	})
})

const form = document.getElementById('form')

form.addEventListener('submit', formSend)
async function formSend(e) {
	e.preventDefault()
	let formData = new FormData(form)

	let response = await fetch('sendMail.php', {
		method: 'POST',
		body: formData,
	})
	if (response.ok) {
		form.reset()
	} else {
		alert('ошибка')
	}
}
