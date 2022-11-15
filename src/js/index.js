const MAX_INDEX = 5;
const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function main() {
	// modal
	const modalButtons = document.querySelectorAll('.jsOpenModal');
	const closeButton = document.querySelector('.jsModalClose');
	const backButton = document.querySelector('.jsModalBack');
	const closeWord = document.querySelector('.jsCloseWord');
	const modalElem = document.querySelector('.jsModal');
	const overlay = modalElem?.querySelector('.jsOverlay');

	const firstKnow = document.querySelector('.jsModalFirstKnow');
	const modalSuccess = document.querySelector('.jsModalSuccess');

	function showHideModalSuccess() {
		if (firstKnow && modalSuccess) {
			firstKnow.classList.toggle('unvisible');
			modalSuccess.classList.toggle('unvisible');
			closeWord?.classList?.remove('unvisible');
			backButton.classList.add('unvisible');
		}
	}

	function openModal(event) {
		event.preventDefault();
		if (modalEmail?.value) {
			modalEmail.value = ' ' + modalEmail.value;
			modalEmail.value = modalEmail.value.trim();
		}

		if (firstKnow && modalSuccess) {
			firstKnow.classList.remove('unvisible');
			modalSuccess.classList.add('unvisible');
		}

		modalElem?.classList.add('active');
		overlay?.classList.add('active');
		closeWord?.classList?.add('unvisible');
		backButton.classList.remove('unvisible');
	}
	function closeModal(e) {
		e.preventDefault();
		modalElem?.classList.remove('active');
		overlay?.classList.remove('active');
	}

	modalButtons?.forEach(function (item) {
		item?.addEventListener('click', openModal);
	});

	closeButton?.addEventListener('click', closeModal);
	overlay?.addEventListener('click', closeModal);
	backButton?.addEventListener('click', closeModal);
	closeWord?.addEventListener('click', closeModal);

	document.body.addEventListener(
		'keyup',
		function (event) {
			if (event.code == 'Escape') {
				document.querySelector('.modal.active')?.classList.remove('active');
				document.querySelector('.overlay.active')?.classList.remove('active');
				// cookiesModal?.classList.remove('active');
				// cookiesOverlay?.classList.remove('.active');
			}
		},
		false,
	);

	// menu
	const menuLinks = document.querySelectorAll('.jsMenuLink');
	const menuContentItems = document.querySelectorAll('.jsMenuContentItem');
	const leftArrow = document.querySelector('.jsLeftArrow');
	const rightArrow = document.querySelector('.jsRightArrow');
	const digit = document.querySelector('.jsDigit');

	function clickMenuLink(event) {
		event.preventDefault();
		const activeLink = [...menuLinks].find((link) => link.classList.contains('active'));
		activeLink?.classList.remove('active');
		// eslint-disable-next-line no-invalid-this
		const linkName = this.dataset.menu;
		menuContentItems?.forEach((elem, index) => {
			if (elem.dataset?.menu === linkName) {
				elem?.classList.add('active');
				digit.innerHTML = index + 1;
				if (index > 0) leftArrow.classList.remove('jsDisable');
				if (index === 0) leftArrow.classList.add('jsDisable');
				if (index < MAX_INDEX) rightArrow.classList.remove('jsDisable');
				if (index === MAX_INDEX) rightArrow.classList.add('jsDisable');
			} else elem?.classList.contains('active') ? elem.classList.remove('active') : null;
			// eslint-disable-next-line no-invalid-this
			this.classList.add('active');
		});
	}

	menuLinks?.forEach((link) => {
		link.addEventListener('click', clickMenuLink);
	});

	function clickLeftArrow(event) {
		event.preventDefault();

		if (event.currentTarget.classList.contains('jsDisable')) return;
		menuContentItems?.forEach((elem, index) => {
			if (elem?.classList.contains('active') && index > 0) {
				digit.innerHTML = index;
				elem.classList.remove('active');
				menuContentItems?.[index - 1].classList.add('active');
				menuLinks?.[index].classList.remove('active');
				menuLinks?.[index - 1].classList.add('active');
				if (index === 1) leftArrow.classList.add('jsDisable');
				if (index === MAX_INDEX) rightArrow.classList.remove('jsDisable');
			}
		});
	}

	function clickRigthArrow(event) {
		event.preventDefault();
		if (event.currentTarget.classList.contains('jsDisable')) return;
		let activeIndex = null;
		menuContentItems?.forEach((elem, index) => {
			if (elem?.classList.contains('active') && index < MAX_INDEX) {
				activeIndex = index + 1;
				elem.classList.remove('active');
				menuLinks?.[index].classList.remove('active');
				if (index === MAX_INDEX - 1) rightArrow.classList.add('jsDisable');
				if (index === 0) leftArrow.classList.remove('jsDisable');
			}
		});
		if (activeIndex) {
			menuContentItems?.[activeIndex].classList.add('active');
			menuLinks?.[activeIndex].classList.add('active');
			digit.innerHTML = activeIndex + 1;
		}
	}

	leftArrow?.addEventListener('click', clickLeftArrow);
	rightArrow?.addEventListener('click', clickRigthArrow);

	// touch move
	const menuContent = document.querySelector('.menuContent');
	let xStart = null;
	let yStart = null;

	function swipeRigth() {
		if (rightArrow.classList.contains('jsDisable')) return;
		let activeIndex = null;
		menuContentItems?.forEach((elem, index) => {
			if (elem?.classList.contains('active') && index < MAX_INDEX) {
				activeIndex = index + 1;
				elem.classList.remove('active');
				menuLinks?.[index].classList.remove('active');
				if (index === MAX_INDEX - 1) rightArrow.classList.add('jsDisable');
				if (index === 0) leftArrow.classList.remove('jsDisable');
			}
		});
		if (activeIndex) {
			menuContentItems?.[activeIndex].classList.add('active');
			menuLinks?.[activeIndex].classList.add('active');
			digit.innerHTML = activeIndex + 1;
		}
	}

	function swipeLeft() {
		if (leftArrow.classList.contains('jsDisable')) return;
		menuContentItems?.forEach((elem, index) => {
			if (elem?.classList.contains('active') && index > 0) {
				digit.innerHTML = index;
				elem.classList.remove('active');
				menuContentItems?.[index - 1].classList.add('active');
				menuLinks?.[index].classList.remove('active');
				menuLinks?.[index - 1].classList.add('active');
				if (index === 1) leftArrow.classList.add('jsDisable');
				if (index === MAX_INDEX) rightArrow.classList.remove('jsDisable');
			}
		});
	}

	function touchStartHandler(event) {
		const firstTouch = event.touches[0];
		xStart = firstTouch.clientX;
		yStart = firstTouch.clientY;
	}

	function touchEndHandler(event) {
		const xEnd = event.changedTouches[0].clientX;
		const yEnd = event.changedTouches[0].clientY;

		const xDiff = xEnd - xStart;
		const yDiff = yEnd - yStart;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xStart < xEnd) {
				swipeLeft();
			}
			if (xStart > xEnd) {
				swipeRigth();
			}
		}

		xStart = null;
	}

	menuContent?.addEventListener('touchstart', touchStartHandler);
	menuContent?.addEventListener('touchend', touchEndHandler);

	// checkbox
	const consent = document.querySelector('#consent');
	const modalConsent = document.querySelector('#modal-consent');

	const form = document.querySelector('.jsForm');
	const modalForm = document.querySelector('.jsModalForm');
	const successWindow = document.querySelector('.jsSuccessWindow');
	const email = form?.querySelector('.email');
	const modalEmail = modalForm?.querySelector('.email');

	function changeCheckboxEmail(event) {
		// eslint-disable-next-line no-invalid-this
		const btnSubmit = this.parentElement.parentElement.parentElement.querySelector('.btnSubmit');
		if (emailPattern.test(email?.value)) email?.classList?.remove('emailError');
		else email?.classList?.add('emailError');
		// eslint-disable-next-line no-invalid-this
		if (btnSubmit) btnSubmit.disabled = !this.checked || !emailPattern.test(email?.value);
	}

	function changeCheckboxModalEmail(event) {
		// eslint-disable-next-line no-invalid-this
		const btnSubmit = this.parentElement.parentElement.parentElement.querySelector('.btnSubmit');
		if (emailPattern.test(modalEmail?.value)) modalEmail?.classList?.remove('emailError');
		else modalEmail?.classList?.add('emailError');
		// eslint-disable-next-line no-invalid-this
		if (btnSubmit) btnSubmit.disabled = !this.checked || !emailPattern.test(modalEmail?.value);
	}

	consent?.addEventListener('change', changeCheckboxEmail);
	modalConsent?.addEventListener('change', changeCheckboxModalEmail);

	// form
	const debounce = (fn, delay = 500) => {
		let timeoutId;
		return (...args) => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(() => {
				// eslint-disable-next-line prefer-spread
				fn.apply(null, args);
			}, delay);
		};
	};

	email?.addEventListener('focusout', () => {
		if (emailPattern.test(email?.value)) {
			email?.classList.add('blurSucces');
		} else {
			email.classList.add('emailError');
		}
	});

	email?.addEventListener('focus', () => email?.classList.remove('blurSucces'));

	email?.addEventListener(
		'input',
		debounce(() => {
			const btn = form.querySelector('.btnSubmit');

			if (emailPattern.test(email?.value)) email.classList.remove('emailError');
			else email.classList.add('emailError');

			if (consent.checked) consent.classList.remove('error');
			else consent.classList.add('error');

			if (btn && emailPattern.test(email?.value) && consent.checked) {
				btn.disabled = false;
			} else {
				btn.disabled = true;
			}
		}),
	);

	modalEmail?.addEventListener('focusout', () => {
		if (emailPattern.test(modalEmail?.value)) {
			modalEmail?.classList.add('blurSucces');
		} else {
			modalEmail.classList.add('emailError');
		}
	});

	modalEmail?.addEventListener('focus', () => modalEmail?.classList.remove('blurSucces'));

	modalEmail?.addEventListener(
		'input',
		debounce(() => {
			const btn = modalForm.querySelector('.btnSubmit');

			if (emailPattern.test(modalEmail?.value)) modalEmail.classList.remove('emailError');
			else modalEmail.classList.add('emailError');

			if (modalConsent.checked) modalConsent.classList.remove('error');
			else modalConsent.classList.add('error');

			if (btn && emailPattern.test(modalEmail?.value) && modalConsent.checked) {
				btn.disabled = false;
			} else {
				btn.disabled = true;
			}
		}),
	);

	function showHideSuccess() {
		successWindow?.classList.toggle('unvisible');
		form?.classList.toggle('unvisible');
	}

	document.querySelectorAll('.email').forEach((emailItem) =>
		emailItem.addEventListener('change', (event) => {
			emailItem.classList.remove('emailError');
		}),
	);

	async function submit(event) {
		try {
			event.preventDefault();
			// eslint-disable-next-line no-invalid-this
			const emailElement = this.querySelector('.email');
			if (emailElement?.value.length < 2 || !emailPattern.test(emailElement?.value)) {
				emailElement.classList.add('emailError');
				return;
			}

			const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSePNhSya-JPbAQHCN91X95hJRVfaitw8x25yjfQM5Qs_vH47w/formResponse?&submit=Submit';
			const formData = new FormData();
			formData.append('entry.568783889', emailElement?.value);
			const response = await fetch(url, {
				method: 'POST',
				body: formData,
				mode: 'no-cors',
			});
			if (response) {
				// eslint-disable-next-line no-invalid-this
				if (this.classList.contains('jsModalForm')) {
					showHideModalSuccess();
					modalConsent.classList.remove('error');
				}
				// eslint-disable-next-line no-invalid-this
				if (this.classList.contains('jsForm')) {
					showHideSuccess();
					consent.classList.remove('error');
					setTimeout(showHideSuccess, 3000);
				}
			}

			// eslint-disable-next-line no-invalid-this
			this.reset();
		} catch (err) {
			// eslint-disable-next-line
			console.log('Виникла помилка при відправці email!');
			// eslint-disable-next-line
			console.log(err);
		}
	}

	form?.addEventListener('submit', submit);
	modalForm?.addEventListener('submit', submit);
}

document.addEventListener('DOMContentLoaded', main);
