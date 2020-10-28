'use strict';

document.addEventListener("DOMContentLoaded", function() {

	$.fancybox.defaults.backFocus = false;

	//----------------------SLIDER-hero----------------------
		var mySwiper = new Swiper('.hero__slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			effect: 'fade',
			navigation: {
				nextEl: '.hero__next',
				prevEl: '.hero__prev',
			},
		});

	//----------------------SLIDER-online----------------------
		var mySwiper = new Swiper('.online__slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 15,
			navigation: {
				nextEl: '.online__next',
				prevEl: '.online__prev',
			},
			breakpoints: {
				480: {
					slidesPerView: 1,
					spaceBetween: 15
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 35
				},
				1440: {
					slidesPerView: 3,
					spaceBetween: 30
				}
			}
		});

	//----------------------SLIDER-online----------------------
		var mySwiper = new Swiper('.interest__slider', {
			// loop: true,
			slidesPerView: 1,
			spaceBetween: 15,
			navigation: {
				nextEl: '.interest__next',
				prevEl: '.interest__prev',
			},
			breakpoints: {
				480: {
					slidesPerView: 1,
					spaceBetween: 15
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 35
				},
				1440: {
					slidesPerView: 3,
					spaceBetween: 30
				}
			}
		});

	//----------------------SLIDER-info----------------------
		var mySwiper = new Swiper('.info__slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			effect: 'fade',
			navigation: {
				nextEl: '.info__next',
				prevEl: '.info__prev',
			},
			pagination: {
				el: '.info__pagination',
				type: 'bullets',
				clickable: true,
			},
		});

	//----------------------SLIDER-work----------------------
		var mySwiper = new Swiper('.work__slider', {
			loop: true,
			slidesPerView: 2,
			spaceBetween: 15,
			pagination: {
				el: '.work__pagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				576: {
					slidesPerView: 3,
					spaceBetween: 15
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 15
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 30
				}
			}
		});

	//----------------------FIXED-tabs-----------------------
		const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
			let check = document.querySelector(headerSelector);

			if (check) {
				const header = document.querySelector(headerSelector),
							tab = document.querySelectorAll(tabSelector),
							content = document.querySelectorAll(contentSelector);
			
				function hideTabContent() {
					content.forEach(item => {
						item.style.display = "none";
					});
			
					tab.forEach(item => {
						item.classList.remove(activeClass);
					});
				}
			
				function showTabContent(i = 0) {
					content[i].style.display = "block";
					tab[i].classList.add(activeClass);
				}
			
				hideTabContent();
				showTabContent();
			
				header.addEventListener('click', (e) => {
					const target = e.target;
					if (target && 
						(target.classList.contains(tabSelector.replace(/\./, '')) || 
						target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
						tab.forEach((item, i) => {
							if (target == item || target.parentNode == item) {
								hideTabContent();
								showTabContent(i);
							}
						});
					}
				});
			}
		};
		tabs('.tabs', '.tabs__item', '.tabs__wrap', 'active');

	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
	
			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});
	
		};
		hamburger('.hamburger', '.header__nav', '.header');
	
	//------------------------------acardeon---------------------------
		$(".block__content").slideUp("slow");
		// $(".block").first().addClass('active');
		$(".active .block__content").slideDown("slow");

		$(".block__header").on("click", function(){
			if ($(this).parent().hasClass('active')) {
				$(this).parent().removeClass('active');
				$(".block__content").slideUp("slow");
			}
			else {
				$(".active .block__content").slideUp("slow");
				$(".active").removeClass('active');
				$(this).parent().addClass('active');
				$(".active .block__content").slideDown("slow");
			}
		});


	});
