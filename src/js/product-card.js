const $productCards = document.querySelectorAll(".product-card");
$productCards.forEach(($productCard) => {
    const $btnEye = $productCard.querySelector(".product-card__img-control--eye");
    const $btnFavourites = $productCard.querySelector(".product-card__img-control--favourites");
    const $btnCompare = $productCard.querySelector(".product-card__img-control--compare");

    $btnEye.addEventListener("click", () => $btnEye.classList.toggle("product-card__img-control--active"));
    $btnFavourites.addEventListener("click", () => $btnFavourites.classList.toggle("product-card__img-control--active"));
    $btnCompare.addEventListener("click", () => $btnCompare.classList.toggle("product-card__img-control--active"));

    const $addToCartBtn = $productCard.querySelector('.product-card__cart-add');
    $addToCartBtn.addEventListener('click', () => {
        const $cart = $productCard.querySelector('.product-card__cart');
        $cart.classList.add('product-card__cart--active');
    });

});
