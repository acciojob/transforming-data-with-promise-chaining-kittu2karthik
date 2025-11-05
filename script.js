const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
}

async function print(num) {
  output.innerHTML = '';
  await delay(2);
  const p = document.createElement('p');
  p.textContent = `Result: ${num}`;
  output.appendChild(p);
	
  await delay(1);
  num *= 2;
  p.textContent = `Result: ${num}`;
	
  await delay(1);
  num -= 3;
  p.textContent = `Result: ${num}`;

  await delay(1);
  num /= 2;
  p.textContent = `Result: ${num}`;

  await delay(1);
  num += 10;
  p.textContent = `Final Result: ${num}`; 
}

btn.addEventListener('click', () => {
  const number = parseFloat(document.querySelector('#ip').value);
  if (isNaN(number)) {
    alert('Please enter a valid number!');
    return;
  }
  print(number);
});