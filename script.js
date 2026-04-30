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

function scrollTofooter(){
    document.getElementById("footer").scrollIntoView({
        behavior:"smooth"
    });
}