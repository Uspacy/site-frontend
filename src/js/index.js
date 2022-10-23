const MAX_INDEX = 5;

function main() {
	// modal
	const modalButtons = document.querySelectorAll('.js-open-modal');
	const closeButton = document.querySelector('.js-modal-close');
	const backButton = document.querySelector('.js-modal-back');
	const modalElem = document.querySelector('.js-modal');
	const overlay = document.querySelector('.js-overlay');

	function openModal(event) {
		event.preventDefault();
		modalElem?.classList.add('active');
		overlay?.classList.add('active');
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

	document.body.addEventListener(
		'keyup',
		function (event) {
			if (event.code == 'Escape') {
				document.querySelector('.modal.active')?.classList.remove('active');
				document.querySelector('.overlay')?.classList.remove('active');
			}
		},
		false,
	);

	// menu
	const menuLinks = document.querySelectorAll('.js-menu-link');
	const menuContentItems = document.querySelectorAll('.js-menu-content');
	const leftArrow = document.querySelector('.js-left-arrow');
	const rightArrow = document.querySelector('.js-right-arrow');
	const digit = document.querySelector('.js-digit');

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
				if (index > 0) leftArrow.classList.remove('js-disable');
				if (index === 0) leftArrow.classList.add('js-disable');
				if (index < MAX_INDEX) rightArrow.classList.remove('js-disable');
				if (index === MAX_INDEX) rightArrow.classList.add('js-disable');
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

		if (event.currentTarget.classList.contains('js-disable')) return;
		menuContentItems?.forEach((elem, index) => {
			if (elem?.classList.contains('active') && index > 0) {
				digit.innerHTML = index;
				elem.classList.remove('active');
				menuContentItems?.[index - 1].classList.add('active');
				menuLinks?.[index].classList.remove('active');
				menuLinks?.[index - 1].classList.add('active');
				if (index === 1) leftArrow.classList.add('js-disable');
				if (index === MAX_INDEX) rightArrow.classList.remove('js-disable');
			}
		});
	}

	function clickRigthArrow(event) {
		event.preventDefault();
		if (event.currentTarget.classList.contains('js-disable')) return;
		let activeIndex = null;
		menuContentItems?.forEach((elem, index) => {
			if (elem?.classList.contains('active') && index < MAX_INDEX) {
				activeIndex = index + 1;
				elem.classList.remove('active');
				menuLinks?.[index].classList.remove('active');
				if (index === MAX_INDEX - 1) rightArrow.classList.add('js-disable');
				if (index === 0) leftArrow.classList.remove('js-disable');
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
	const modalConsent = document.querySelector('#modalConsent');
	console.log('modalConsent:', modalConsent);
	console.log('consent:', consent);

	function changeCheckbox(event) {
		const btnSubmit = this.parentElement.parentElement.querySelector('.btnSubmit');
		btnSubmit.disabled = !this.checked;
		console.log('btnSubmit:', btnSubmit);
	}

	consent?.addEventListener('change', changeCheckbox);
	modalConsent?.addEventListener('change', changeCheckbox);
}

document.addEventListener('DOMContentLoaded', main);
