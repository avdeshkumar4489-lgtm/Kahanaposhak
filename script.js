function buyNow(product){
    alert(product + " selected for purchase!");
}

function scrollToMenProducts(){
    document.getElementById("Men products").scrollIntoView({
        behavior:"smooth"
    });
}

function scrollToWomenProducts(){
    document.getElementById("Women products").scrollIntoView({
        behavior:"smooth"
    });
}

function scrollToKidsProducts(){
    document.getElementById("Kids products").scrollIntoView({
        behavior:"smooth"
    });
}

function scrollTofooter(){
    document.getElementById("footer").scrollIntoView({
        behavior:"smooth"
    });
}

class LuxeuraApp {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('luxeura-cart')) || [];
        this.isDarkMode = localStorage.getItem('luxeura-theme') !== 'light';
        this.init();
    }

    init() {
        this.initLoader();
        this.initCursor();
        this.initNavbar();
        this.initScrollAnimations();
        this.initProductFilters();
        this.initSliders();
        this.initGallery();
        this.initModals();
        this.initForms();
        this.initThemeToggle();
        this.populateProducts();
        this.populateSlider();
        this.populateReviews();
        this.updateCartCount();
    }

    initLoader() {
        const loader = document.querySelector('.loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 2500);
    }
}

let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new LuxeuraApp();
    app.smoothScroll();
});
