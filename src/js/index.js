function main() {
	const modalButtons = document.querySelectorAll('.js-open-modal');
	const closeButton = document.querySelector('.js-modal-close');
	// eslint-disable-next-line no-console
	console.log('modalButtons:', modalButtons);

	modalButtons.forEach(function (item) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			const modalElem = document.querySelector('.js-modal');
			const overlay = document.querySelector('.js-overlay');
			modalElem.classList.add('active');
			overlay.classList.add('active');
		});
	});

	if (closeButton) {
		alert(closeButton);
	}
}
document.addEventListener('DOMContentLoaded', main);
