import Accordion from './accordion';

class Navigation {
    constructor() {
        let main = document.getElementById('MainNav'),
            mobile = document.getElementById('MobileMenu'),
            openBtn = main.querySelector('.js-open'),
            closeBtn = mobile.querySelector('.js-close')
        
        openBtn.onclick = (e) => {
            mobile.dataset.state = 'entering-from'
            requestAnimationFrame(() => mobile.dataset.state = 'entering-to')
        }
        closeBtn.onclick = (e) => {
            mobile.dataset.state = 'leaving-from'
            requestAnimationFrame(() => mobile.dataset.state = 'leaving-to')
            setTimeout(() => mobile.dataset.state = 'closed', 200)
        }

    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    Accordion.initAll()

    new Navigation()
})