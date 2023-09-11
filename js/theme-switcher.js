function switchThemeHandler(event) {
    let link = document.querySelector('#theme');
    if(this.type==='checkbox' && this.checked) {
        if(link.getAttribute('href') !== 'css/colorful.css') {
            link.setAttribute('href', 'css/colorful.css');
            localStorage.setItem("theme-switcher",  'checked');
        }
    }
    else {
        link.setAttribute('href', 'css/light.css');
        localStorage.setItem("theme-switcher",  'unchecked');
    }
}
export {switchThemeHandler}