function solve() {

    let menuToElement = document.getElementById('selectMenuTo');
    let numberInput = document.getElementById('input');
    let resultElement = document.getElementById('result');

    let buttonElement = document.getElementsByTagName('button')[0];

    let binaryMenuElement = document.createElement('option');
    binaryMenuElement.textContent = 'Binary';
    binaryMenuElement.value = 'binary';
    menuToElement.appendChild(binaryMenuElement);

    let hexadecimalMenuElement = document.createElement('option');
    hexadecimalMenuElement.textContent = 'Hexadecimal';
    hexadecimalMenuElement.value = 'hexadecimal';
    menuToElement.appendChild(hexadecimalMenuElement);

    buttonElement.addEventListener('click', () => {
      
        let number = Number(numberInput.value);

        if(menuToElement.value === 'binary'){

            resultElement.value = number.toString(2);

        }else if(menuToElement.value === 'hexadecimal'){
            resultElement.value = number.toString(16).toUpperCase();
        }
    });
}