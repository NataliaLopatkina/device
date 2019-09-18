console.log("I'm Device");

// Toggle submenu

class Submenu {
    constructor() {
        this.submenu = document.querySelector('.submenu');
        this.buttonSubmenu = document.querySelector('.nav-site__button');

        this.addHandler();
    }

    toggleSubmenu() {
        this.submenu.classList.toggle('active');
    }

    addHandler() {
        this.buttonSubmenu.addEventListener('click', ()=> {
            if(this.buttonSubmenu.classList.contains('nav-site__button--closed')) {
                this.buttonSubmenu.classList.remove('nav-site__button--closed');
            } else {
                this.buttonSubmenu.classList.add('nav-site__button--closed');
            }

            this.toggleSubmenu();
        })
    }
}

const submenu = new Submenu();
