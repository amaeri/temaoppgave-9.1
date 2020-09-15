(() => {
	// const delay = 2000;
	const headlines = document.querySelectorAll('header h1');

	// [...headlines].forEach((headline, index) => {
	// 	setTimeout(() => {
	// 		headline.dataset.moveLeft = true;
	// 	}, delay * index)
	// })

	setTimeout(() => {
		headlines[0].dataset.moveLeft = true;
	}, 5500)

	setTimeout(() => {
		headlines[1].dataset.moveRight = true;
	}, 7000)

	setTimeout(() => {
		headlines[2].dataset.moveLeft = true;
	}, 1000)

	setTimeout(() => {
		headlines[3].dataset.moveRight = true;
	}, 4000)

	setTimeout(() => {
		headlines[4].dataset.moveLeft = true;
	}, 9500)

})();
