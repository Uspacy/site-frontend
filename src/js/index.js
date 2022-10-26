const MAX_INDEX = 5;
const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function main() {
	// cookies modal
	// const cookiesModal = document.querySelector('.jsCookiesModal');
	// const closeCookiesModalButton = document.querySelector('.js-cookies-modal-close');
	// const cookiesOverlay = cookiesModal?.querySelector('.js-overlay');

	// function closeCookiesModal(event) {
	// 	event.preventDefault();
	// 	cookiesModal?.classList.remove('active');
	// 	cookiesOverlay?.classList.remove('active');
	// }

	// closeCookiesModalButton?.addEventListener('click', closeCookiesModal);
	// cookiesOverlay?.addEventListener('click', closeCookiesModal);
	// cookiesModal?.querySelector('.js-accept')?.addEventListener('click', closeCookiesModal);

	// modal
	const modalButtons = document.querySelectorAll('.jsOpenModal');
	const closeButton = document.querySelector('.jsModalClose');
	const backButton = document.querySelector('.jsModalBack');
	const modalElem = document.querySelector('.jsModal');
	const overlay = modalElem?.querySelector('.jsOverlay');

	const firstKnow = document.querySelector('.jsModalFirstKnow');
	const modalSuccess = document.querySelector('.jsModalSuccess');

	function showHideModalSuccess() {
		if (firstKnow && modalSuccess) {
			firstKnow.classList.toggle('unvisible');
			modalSuccess.classList.toggle('unvisible');
		}
	}

	function openModal(event) {
		event.preventDefault();
		if (firstKnow && modalSuccess) {
			firstKnow.classList.remove('unvisible');
			modalSuccess.classList.add('unvisible');
		}
		modalElem?.classList.add('active');
		overlay?.classList.add('active');
	}
	function closeModal(e) {
		e.preventDefault();
		modalElem?.classList.remove('active');
		overlay?.classList.remove('active');
		showHideModalSuccess();
	}

	modalButtons?.forEach(function (item) {
		item?.addEventListener('click', openModal);
	});

	closeButton?.addEventListener('click', closeModal);
	overlay?.addEventListener('click', closeModal);
	backButton?.addEventListener('click', closeModal);

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
	const menuContentItems = document.querySelectorAll('.jsMenuContent');
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

	// checkbox
	const consent = document.querySelector('#consent');
	const modalConsent = document.querySelector('#modal-consent');

	function changeCheckbox(event) {
		// eslint-disable-next-line no-invalid-this
		const btnSubmit = this.parentElement.parentElement.querySelector('.btnSubmit');
		// eslint-disable-next-line no-invalid-this
		if (btnSubmit) btnSubmit.disabled = !this.checked;
	}

	consent?.addEventListener('change', changeCheckbox);
	modalConsent?.addEventListener('change', changeCheckbox);

	// form
	const form = document.querySelector('.jsForm');
	const modalForm = document.querySelector('.jsModalForm');
	const successWindow = document.querySelector('.jsSuccessWindow');

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
			const email = this.querySelector('.email');
			if (email?.value.length < 2 || !emailPattern.test(email?.value)) {
				email.classList.add('emailError');
				return;
			}

			const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSePNhSya-JPbAQHCN91X95hJRVfaitw8x25yjfQM5Qs_vH47w/formResponse';
			const formData = new FormData();
			formData.append('entry.568783889', email.value);
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					headers: { 'Content-Type': 'multipart/form-data' },
				},
				body: formData,
			});
			if (response.ok) {
				// eslint-disable-next-line no-invalid-this
				if (this.classList.contains('jsModalForm')) {
					showHideModalSuccess();
				}
				// eslint-disable-next-line no-invalid-this
				if (this.classList.contains('jsForm')) {
					showHideSuccess();
					setTimeout(showHideSuccess, 3000);
				}
			}

			// eslint-disable-next-line no-invalid-this
			this.reset();
		} catch (err) {
			console.log('Виникла помилка при відправці email!');
			console.log(err);
		}
	}

	form?.addEventListener('submit', submit);
	modalForm?.addEventListener('submit', submit);
}

document.addEventListener('DOMContentLoaded', main);
