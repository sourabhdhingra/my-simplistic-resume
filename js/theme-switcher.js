function switchThemeHandler(event) {
    let link = document.querySelector('#theme');
    if(this.type==='checkbox' && this.checked) {
        if(link.getAttribute('href') !== 'colorful.css') {
            link.setAttribute('href', 'colorful.css');
            localStorage.setItem("theme-switcher",  'checked');
        }
    }
    else {
        link.setAttribute('href', 'light.css');
        localStorage.setItem("theme-switcher",  'unchecked');
    }
}
export {switchThemeHandler}