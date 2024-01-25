let menuBtn = document.getElementById('MenuBtn')

menuBtn.addEventListener('click', e => {
	document.querySelector('body').classList.toggle('mobile-nav-active')
	e.target.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input', {
	strings: ['Фронтенд-Разработчик', 'Фрилансер!'],
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

//const form = document.getElementById('form')

// form.addEventListener('submit', formSend)
// async function formSend(e) {
// 	e.preventDefault()
// 	let formData = new FormData(form)
// 	console.log(formData)

// 	let response = await fetch('sendMail.php', {
// 		method: 'POST',
// 		body: formData,
// 	})
// 	if (response.ok) {
// 		form.reset()
// 	} else {
// 		alert('ошибка')
// 	}
// }

//console.log(msg, name, mail)

// var email = $('#contact #email').val();
// var message = $('#contact textarea').val();
// console.log(
// 	'mailto:mihailkalacev9@gmail.com?subject=The message from portfolio  - ' +
// 		name +
// 		' (' +
// 		mail +
// 		')' +
// 		'&body=' +
// 		msg
// )

// const btnClick = document.getElementById('btn_click')

// btnClick.addEventListener('click', event => {
// 	event.preventDefault()
// 	const name = document.getElementById('name').value,
// 		mail = document.getElementById('mail').value,
// 		msg = document.getElementById('msg').value
// 	window.location.href =
// 		'mailto:mihailkalacev9@gmail.com?subject=The message from portfolio  - ' +
// 		name +
// 		' (' +
// 		mail +
// 		')' +
// 		'&body=' +
// 		msg
// })
