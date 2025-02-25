const color = document.getElementById('hex-color');
const colorBtn = document.getElementById('color-btn');

const hexData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

colorBtn.addEventListener('click', () => {
    let hexColor = '#';

    //loop 6 times to create hex color digits
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * 15);
        hexColor += hexData[index];
    }

    color.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
});
