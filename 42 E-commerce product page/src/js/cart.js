
const cartElem = document.querySelector("#cart-form"),
    cartLink = document.querySelector(".cart-link"),
    hideCartBtn = document.querySelector("#hide-cart"),
    cartBackground = document.querySelector("#cart-form-bg"),
    emptyMsg = cartElem.querySelector(".is-empty"),

    cartItemsElem = cartElem.querySelector(".cart-items"),
    cartItems = [],

    cartCheckoutButton = document.querySelector(".checkout"),

    incrButton = document.querySelector("#increment-amount"),
    decrButton = document.querySelector("#decrement-amount"),
    orderAmount = document.querySelector("#order-amount"),
    addCartButton = document.querySelector("#add-cart-submit");


const body = document.body;

responsepopup.hidden = true;

/// 
cartBackground.addEventListener("click", function(event) {
    if (event.target === this) hideCart(event)
});

/// for accessibility, a button to leave cart
hideCartBtn.addEventListener("click", function(event) {event.preventDefault(); hideCart(event)})

function showCart(event) {
    cartElem.hidden = false;
    emptyMsg.hidden = true;
    cartItemsElem.hidden = false;
    if (cartItems.length === 0) {
        emptyMsg.hidden = false;
        cartItemsElem.hidden = true;
    }
    cartLink.removeEventListener("click", showCart);
    cartLink.addEventListener("click", hideCart);
    cartLink.setAttribute("aria-expanded", "true");
    console.log("cart is here");
    cartBackground.hidden = false;
    document.body.style.paddingRight = window.innerWidth - document.body.offsetWidth + "px"
    document.body.style.overflowY = "hidden";
}

function hideCart(event) {
    cartElem.hidden = true;
    cartLink.removeEventListener("click", hideCart)
    cartLink.addEventListener("click", showCart)
    cartLink.setAttribute("aria-expanded", "false");
    cartBackground.hidden = true;
    document.body.style.overflowY = "unset";
    document.body.style.paddingRight = "0";
}
cartLink.addEventListener("click", showCart)

function restoreCart() {
    if (localStorage.getItem("my-cart")) {
        cartItems.push(...JSON.parse(localStorage.getItem("my-cart")))    }
    renderCart()
}

restoreCart()

function saveCart() {
    localStorage.setItem("my-cart",
        JSON.stringify(cartItems))
}

function renderCart() {
    emptyMsg.hidden = true;
    cartItemsElem.hidden = false;
    if ( cartItems.length === 0 ) {
        emptyMsg.hidden = false;
        cartItemsElem.hidden = true;
    }
    cartItemsElem.innerHTML = '<button type="submit" class="checkout" aria-label="Checkout">Checkout</button>'
    for (let item of cartItems.values()) {
        cartItemsElem.lastElementChild.remove()
        cartItemsElem.innerHTML += 
        (`<li class="cart-item" id="cart-item${item.productId}">
            <a href="${item.url}" class="cart-item-thumbnail" tabindex="-1" id="cart-item${item.productId}-thumbnail" aria-labelledby="cart-item${1}-name">
            <img src="${item.imgUrl}" alt="">
            </a>
            <div class="wrapper">
            <a class="cart-item-name" href="${'url'}">
                <p  id="cart-item${item.productId}-name">${item.name}</p>
            </a>
            <p class="cart-item-info">
                <span class="cart-item-price" id="cart-item${item.productId}-price">&dollar;${item.price}.00</span> x
                <span class="cart-item-amount" id="cart-item${item.productId}-amount">${item.amount}</span>
                <span class="cart-item-total-price" id="cart-item${item.productId}-total-price">&dollar;${item.total}.00</span>
            </p>
            </div>
            <button class="cart-item-delete" id="cart-item${item.productId}-delete">
            <img src="./images/icon-delete.svg" alt="Delete">
            </button>
        </li>
        <button type="submit" class="checkout" aria-label="Checkout">Checkout</button>
        `);
        document.querySelector(`#cart-item${item.productId}-delete`).addEventListener('click', function(event) {
            deleteItem(item.productId)
        })
    }
}

function deleteItem(id) {
    cartItems.splice(id-1,1)
    saveCart()
    renderCart()
}

// // RESPONSE LOGIC
// 
// function responseClickAway(event) {
// 
//   if (responsepopup.hidden) {
// 
//   } else {
// 
//     console.log('need to click away')
// 
//   }
// 
// }
// 
// function showResponse() {
//   // rendering response
//   responsepopup.hidden = false;
// 
//   body.addEventListener('click', responseClickAway)
// }
// 
// function hideResponse() {
// 
//     responsepopup.hidden = true;
// }

function addToCart(item) {

    item.total = item.price*item.amount;
    item.productId = cartItems.length;

    if (!cartItems.every( el => el.name !== item.name)) {
        let old = cartItems.find(el => el.name === item.name)
        old.amount += item.amount;
        old.total += item.total;
    } else {
        cartItems.push(item);   
    }
    saveCart()
    renderCart()
    // showCart()
}

addCartButton.addEventListener('click', function(event) {
    if (orderAmount.value > 0) {
        event.preventDefault()
        /// submit and add to cart
        let product = document.querySelector(".product")
        let item = {
            name: product.querySelector(".product-name").innerHTML,
            amount: +orderAmount.value,
            price: +product.querySelector(".current-price").innerHTML.slice(1),
            url: location.toString(),
            imgUrl: product.querySelector(".thumbnail").firstElementChild.src,
        }
        addToCart(item)

        showCart()
        window.scroll(0, 0)

        // showResponse()
    }

})
incrButton.addEventListener('click', function(event) {
    event.preventDefault()
    orderAmount.value++
})
decrButton.addEventListener('click', function(event) {
    event.preventDefault()
    if (+orderAmount.value !== 0) {
        orderAmount.value--
    }
})
