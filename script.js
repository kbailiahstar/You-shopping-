let cart = 0;

function addToCart(productName) {
    cart++;
    alert(productName + " added to cart!\n\nItems in cart: " + cart);
}

document.querySelectorAll(".card button").forEach((button) => {
    button.addEventListener("click", function () {
        const product = this.parentElement.querySelector("h3").innerText;
        addToCart(product);
    });
});
