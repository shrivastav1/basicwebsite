const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="img/logo.jpg" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search Products">
                <button class="search-btn">search</button>
            </div>
            <a href="login.html"><img src="img/user.png" alt=""></a>
            <a href="#"><img src="img/wishlist.png" alt=""></a>
            <a href="cart.html"><img src="img/shopping-cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="index.html" class="link">HOME</a></li>
        <li class="link-item"><a href="product.html" class="link">OUR PRODUCT</a></li>
        <li class="link-item"><a href="contact.html" class="link">CONTACT US</a></li>
        <li class="link-item"><a href="about.html" class="link">ABOUT US</a></li>
    </ul>
    `;
}

createNav();