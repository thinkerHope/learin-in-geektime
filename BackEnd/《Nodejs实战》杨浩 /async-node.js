// 本demo通过一个面试的场景来展示node中的异步编程
function interview(round) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve('success');
			} else {
				const err = new Error('fail');
				err.round = round;
				reject(err);
			}
		}, 500)
	})
}

// Promise
const promise = interview(1)
			.then(() => {
				return interview(2)
			})
			.then(() => {
				return interview(3)
			})
			.then(() => {
				console.log('simle');
			})
			.catch(err => {
				console.log(`cry at ${err.round} round`);	
			})


// async/await
// async/await的特别之处可以通过try/catch捕获异步抛出的error
(async () => {
	try {
		await interview(1)
		await interview(2)
		await interview(3)
	} catch(err) {
		console.log(`cry at ${e.round} round`);
	}
})();
