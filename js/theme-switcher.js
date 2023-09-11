function switchThemeHandler(event) {
    let link = document.querySelector('#theme');
    if(this.type==='checkbox' && this.checked) {
        if(link.getAttribute('href') !== 'colorful.css') {
            link.setAttribute('href', 'colorful.css');
        }
    }
    else {
        link.setAttribute('href', 'light.css');
    }
}
export {switchThemeHandler}