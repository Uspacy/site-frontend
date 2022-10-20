function main() {
	const modalButtons = document.querySelectorAll('.js-open-modal');
	const closeButton = document.querySelector('.js-modal-close');
	const modalElem = document.querySelector('.js-modal');
	const overlay = document.querySelector('.js-overlay');

	modalButtons.forEach(function (item) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			modalElem.classList.add('active');
			overlay.classList.add('active');
		});
	});

	closeButton.addEventListener('click', function (e) {
		modalElem.classList.remove('active');
		overlay.classList.remove('active');
	});
}

document.addEventListener('DOMContentLoaded', main);
