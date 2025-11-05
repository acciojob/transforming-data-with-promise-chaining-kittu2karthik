const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
}



btn.addEventListener('click', () => {
	let number = parseFloat(document.querySelector('#ip').value);
  if (isNaN(number)) {
    return;
  }
	const p = document.createElement('p');
	output.appendChild(p);

	delay(2)
	.then((res) => {
		p.textContent = `Result: ${number}`;
		return delay(2);
	})
	.then((res) => {
		number *= 2;
		p.textContent = `Result: ${number}`;
		return delay(1);
	})
	.then((res) => {
		number -= 3;
		p.textContent = `Result: ${number}`;
		return delay(1);
	})
	.then((res) => {
		number /= 2;
		p.textContent = `Result: ${number}`;
		return delay(1);
	})
	.then((res) => {
		number += 10;
		p.textContent = `Final Result: ${number}`;
	})

});