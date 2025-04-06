function focused() {
    const divElement = document.querySelectorAll('input');
    divElement.forEach((el) => el.addEventListener('focus', focusMous));
    divElement.forEach((el) => el.addEventListener("blur", removeFocus));
    

    function focusMous(e){
        e.target.parentElement.classList.add('focused');

    }
    function removeFocus(e){
        e.target.parentElement.classList.remove('focused');

    }
}