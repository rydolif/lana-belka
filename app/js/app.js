'use strict';

document.addEventListener("DOMContentLoaded", function() {

	$.fancybox.defaults.backFocus = false;

	//----------------------SCROLL-----------------------
		const scrollTo = (scrollTo) => {
			let list = document.querySelector(scrollTo);
			
			if (list) {
				list = '.' + list.classList[0]  + ' a[href^="#"';
				document.querySelectorAll(list).forEach(link => {
					link.addEventListener('click', function(e) {
						e.preventDefault();
						const scrollMenu = document.querySelector(scrollTo);

						let href = this.getAttribute('href').substring(1);

						const scrollTarget = document.getElementById(href);

						// const topOffset = scrollMenu.offsetHeight;
						const topOffset = 70;
						const elementPosition = scrollTarget.getBoundingClientRect().top;
						const offsetPosition = elementPosition - topOffset;

						window.scrollBy({
								top: offsetPosition,
								behavior: 'smooth'
						});

						
						let button = document.querySelector('.hamburger'),
								nav = document.querySelector('.header__nav'),
								header = document.querySelector('.header');

						button.classList.remove('hamburger--active');
						nav.classList.remove('header__nav--active');
						header.classList.remove('header--menu');
					});
				});
			}

		};
		scrollTo('.header__nav');

	//----------------------SLIDER-hero----------------------
		var mySwiper = new Swiper('.hero__slider', {
			// loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: {
				delay: 3000,
			},
			effect: 'fade',
			navigation: {
				nextEl: '.hero__next',
				prevEl: '.hero__prev',
			},
		});

	//----------------------SLIDER-online----------------------
		var mySwiper = new Swiper('.online__slider', {
			// loop: true,
			slidesPerView: 1,
			spaceBetween: 15,
			navigation: {
				nextEl: '.online__next',
				prevEl: '.online__prev',
			},
			breakpoints: {
				480: {
					slidesPerView: 1,
					spaceBetween: 15,
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
			autoplay: {
				delay: 5000,
			},
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
				1200: {
					slidesPerView: 4,
					spaceBetween: 30
				}
			}
		});

	//----------------------SLIDER-book----------------------
		var mySwiper = new Swiper('.book__slider', {
			loop: true,
			slidesPerView: 2,
			spaceBetween: 15,
			pagination: {
				el: '.book__pagination',
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
				1200: {
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
	
	//------------------------------more---------------------------
		$(".more").on("click", function(){
			event.preventDefault();

			if ($(".action__more").hasClass('action__more--active')) {
				$(".more").html('ЧИТАТЬ ДАЛЕЕ');
				$(".action__more--active").removeClass('action__more--active');
				$(".action__more").addClass('action__more');
				$(".action__more").css({height: '300px'});
			}
			else {
				$(".action__more").css({height: 'calc(100% - 45px)'});
				$(".more").html('Скрыть текст');
				$(".action__more").addClass('action__more--active');
			}
		});

	//----------------------MODAL-----------------------
		const modals = (modalSelector) => {
			const	modal = document.querySelectorAll(modalSelector);

			if (modal) {
				let i = 1;

				modal.forEach(item => {
					const wrap = item.id;
					const link = document.querySelector('.' + wrap);
					let close = item.querySelector('.close');

					if (link) {
						link.addEventListener('click', (e) => {
							if (e.target) {
								e.preventDefault();
							}
							item.style.display = 'flex';
							document.body.classList.add('modal--open')
						});
					}

					close.addEventListener('click', () => {
						item.style.display = 'none';
						document.body.classList.remove('modal--open');
					});

					item.addEventListener('click', (e) => {
						if (e.target === item) {
							item.style.display = 'none';
							document.body.classList.remove('modal--open');
						}
					});
				});
			}

		};
		modals('.modal');

	//----------------------FORM-----------------------
		const forms = (formsSelector) => {
			const form = document.querySelectorAll(formsSelector);
			let i = 1;
			let img = 1;
			let lebel = 1;
			let prev = 1;

			form.forEach(item => {
				const elem = 'form--' + i++;
				item.classList.add(elem);

				let formId = item.id = (elem);
				let formParent = document.querySelector('#' + formId);

				formParent.addEventListener('submit', formSend);

				async function formSend(e) {
					e.preventDefault();
			
					let error = formValidate(item);
			
					let formData = new FormData(item);
					formData.append('image', formImageAdd.files[0]);

					if (error === 0) {
						item.classList.add('_sending');
						let response = await fetch('sendmail.php', {
							method: 'POST',
							body: formData
						});
			
						if (response.ok) {
							let modalThanks = document.querySelector('#modal--thanks');
							formParent.parentNode.style.display = 'none';

							modalThanks.style.display = 'flex';
							document.body.classList.add('modal--open');
							formPreview.innerHTML = '';
							item.reset();
							item.classList.remove('_sending');
						} else {
							alert('Ошибка при отправке');
							item.classList.remove('_sending');
						}
			
					}
				}
			
				function formValidate(item) {
					let error = 0;
					let formReq = formParent.querySelectorAll('._req');

					for (let index = 0; index < formReq.length; index++) {
						const input = formReq[index];
						// formRemoveError(input);
			
						if (input.classList.contains('_email')) {
							if(emailTest(input)) {
								formAddErrorEmail(input);
								error++;
							}
						} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
							formAddErrorCheck(input);
							error++;
						} else {
							if (input.value === '') {
								formAddError(input);
								error++;
							}
						}
					}
					return error;
				}

				const formImgFile = formParent.querySelectorAll('.formImgFile');
				// console.log(formImgFile);

				formImgFile.forEach(item => { 
					const elem = 'formImgFile--' + i++;
	
					let formId = item.id = (elem);
					let formParent = document.querySelector('#' + formId);

					const formImage = formParent.querySelector('.formImage');
					const formLebel = formParent.querySelector('.formLebel');
					const formPreview = formParent.querySelector('.formPreview');

					//картинка в форме
					let formImageNumber = 'formImage--' + img++;
					let formPreviewNumber = 'formPreview--' + prev++;
					
					formImage.id = (formImageNumber);
					formLebel.htmlFor = ('formImage--' + lebel++);
					formPreview.id = (formPreviewNumber);
					console.log(formPreview);
					const formImageAdd = document.querySelector('#' + formImageNumber);

					// изменения в инпуте файл
					formImageAdd.addEventListener('change', () =>  {
						uploadFile(formImage.files[0]);
					});

					function uploadFile(file) {
				
						if (!['image/jpeg', 'image/png', 'image/gif', 'image/ico', 'application/pdf'].includes(file.type)) {
							alert('Только изображения');
							formImage.value = '';
							return;
						}
				
						if (file.size > 2 * 1024 * 1024) {
							alert('Размер менее 2 мб.');
							return;
						}
				
						var reader = new FileReader();
						reader.onload = function (e) {
							if(['application/pdf'].includes(file.type)) {
								formPreview.innerHTML = `Файл выбран`;
							}else{
								formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
							}
							
						};
						reader.onerror = function (e) {
							alert('Ошибка');
						};
						reader.readAsDataURL(file);
					}
				})

			
				function formAddError(input) {
					let div = document.createElement('div');
					div.classList.add("form__error");
					div.innerHTML = "Введите данные в поле";

					input.parentElement.append(div);
					input.parentElement.classList.add('_error');
					input.classList.add('_error');
				}
			
				function formAddErrorEmail(input) {
					let div = document.createElement('div');
					div.classList.add("form__error");
					div.innerHTML = "Введите свою почту";

					input.parentElement.append(div);
					input.parentElement.classList.add('_error');
					input.classList.add('_error');
				}
			
				function formAddErrorCheck(input) {
					let div = document.createElement('div');
					div.classList.add("form__error");
					div.innerHTML = "Согласие на обработку персональных данных";

					input.parentElement.append(div);
					input.parentElement.classList.add('_error');
					input.classList.add('_error');
				}
			
				function emailTest(input) {
					return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/. test(input.value);
				}

			});
		};
		forms('.form');

	//----------------------ADD-INPUT-----------------------
		const adminAdd = (adminAddInput) => {
			const inputAdd = document.querySelectorAll(adminAddInput);
			let i = 1;

			inputAdd.forEach(item => {
				const elem = 'admin__add--' + i++;
				item.classList.add(elem);

				let inputId = item.id = (elem);
				let inputParent = document.querySelector('#' + inputId);
				let inputButton = inputParent.querySelector('button');

				let inputDelete = inputParent.querySelector('.admin__nav_button a');

				inputButton.addEventListener('click', (e) => {
					e.preventDefault();
					let parent = document.querySelector('#' + inputId);
					let elem = inputParent.querySelector('.admin__add_elem');
					let clone = elem.cloneNode(true);
					parent.append(clone);
				});

				function myFunc(inputDelete){
					inputDelete.parentElement.parentElement.remove();
				}

			});
		};
		adminAdd('.admin__add');

		
});
