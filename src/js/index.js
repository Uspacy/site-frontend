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

	function clickMenuLink(event) {
		event.preventDefault();
		const activeLink = [...menuLinks].find((link) => link.classList.contains('active'));
		activeLink?.classList.remove('active');
		// eslint-disable-next-line no-invalid-this
		const linkName = this.dataset.menu;
		const menuContentItems = document.querySelectorAll('.js-menu-content');
		menuContentItems?.forEach((elem) => {
			if (elem.dataset.menu === linkName) elem.classList.add('active');
			else elem.classList.contains('active') ? elem.classList.remove('active') : null;
			// eslint-disable-next-line no-invalid-this
			this.classList.add('active');
		});
	}

	menuLinks?.forEach((link) => {
		link.addEventListener('click', clickMenuLink);
	});
}

document.addEventListener('DOMContentLoaded', main);
