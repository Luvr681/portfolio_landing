$(function() {

	const body = $('body')
	const buttonForCloseModalWindow = $('.modal__close')
	const modalWindow = $('.modal')
	const whiteOverside = $('.modal__dialog')
	const firstModalWindow = $('#one')
	const secondModalWindow = $('#two')
	const thirdModalWindow = $('#three')

	function openModalWindow(event, modalWindow){
		event.preventDefault();
		body.css('overflow', 'hidden')
		modalWindow.toggleClass('modal--show')
	}

	function closeModalWindow(event){
		event.preventDefault();
		body.css('overflow', 'auto')
		firstModalWindow.removeClass('modal--show')
		secondModalWindow.removeClass('modal--show')
		thirdModalWindow.removeClass('modal--show')
	}

	for(let i = 1; i <= 4; i++){
		$(`#resume${i}`).on('click', function(event) {
			openModalWindow(event, secondModalWindow)
		})
	}
	for(let i = 1; i <= 4; i++){
		$(`#hireMe${i}`).on('click', function(event) {
			openModalWindow(event, thirdModalWindow)
		})
	}
	for(let i = 1; i <= 12; i++){
		$(`#readMore${i}`).on('click', function(event) {
			openModalWindow(event, firstModalWindow)
		})
	}

	buttonForCloseModalWindow.on('click', function(event) {
		closeModalWindow(event)
	})
	modalWindow.on('click', function(event) {
		closeModalWindow(event)
	})
	whiteOverside.on('click', function(event) {
		event.stopPropagation();
	})

	let header = $('#header');
	let intro = $('#home');
	let headerInner = $('.header__inner')
	let scrollPosition = $(window).scrollTop();

	$(window).on('scroll load resize', () => {
		let introHeight = intro.innerHeight();
		scrollPosition = $(this).scrollTop();
		if(scrollPosition > introHeight){
			header.addClass('fixed');
			headerInner.addClass('fixed') 
		}
		else{
			header.removeClass('fixed')
			headerInner.removeClass('fixed')
		}
	})


	$("[data-scroll]").on('click', function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$('html, body').animate({
			scrollTop: elementOffset
		});

	})

})