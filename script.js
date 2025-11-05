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
  const p1 = document.createElement('p');
  p1.textContent = `Result: ${num}`;
  output.appendChild(p1);
  await delay(3);
  num *= 2;
  const p2 = document.createElement('p');
  p2.textContent = `Result: ${num}`;
  output.appendChild(p2);
  await delay(4);
  num -= 3;
  const p3 = document.createElement('p');
  p3.textContent = `Result: ${num}`;
  output.appendChild(p3);
  await delay(5);
  num /= 2;
  const p4 = document.createElement('p');
  p4.textContent = `Result: ${num}`;
  output.appendChild(p4);
  await delay(6);
  num += 10;
  const p5 = document.createElement('p');
  p5.textContent = `Final Result: ${num}`;
  output.appendChild(p5);
}

btn.addEventListener('click', () => {
  const number = parseFloat(document.querySelector('#ip').value);
  if (isNaN(number)) {
    return;
  }
  print(number);
});