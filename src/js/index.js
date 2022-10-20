function main() {
	const modalButtons = document.querySelectorAll('.js-open-modal');
	const closeButton = document.querySelector('.js-modal-close');
	const backButton = document.querySelector('.js-modal-back');
	const modalElem = document.querySelector('.js-modal');
	const overlay = document.querySelector('.js-overlay');

	function openModal(e) {
		e.preventDefault();
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
}

document.addEventListener('DOMContentLoaded', main);
