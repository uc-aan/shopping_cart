<script>
    import { fade, fly } from 'svelte/transition';
    import product from './show-store.js';
    import cartItems from '../cart/cart-store.js';
    import Products from './Product.svelte';

    export let id;

    // let title = '';
    // let details = '';
    // let price = '';
    // let image = '';
    // let quantity = '';

//     function addToCart(){
//     if (id) {
// 		const unsubscribe = product.subscribe(items => {
// 			products = items.find(i => i.id === id);
// 			title = products.title;
// 			details = products.details;
// 			price = products.price;
// 			image = products.image;
// 			quantity = products.quantity;
// 		});
// 		unsubscribe();
// 	}
// }



    let products;
    const unsubscribe = product.subscribe(prods => {
            products = prods.find(p => p.id === id);
    });
    
    // unsubscribe();

    function addToCart(){
        if (products.id === id) {
            // $cartItems = {...products};
            // console.log(newItem);
            // console.log(Object.entries(products));

            cartItems.addItem({ 
            id: products.id, 
            title: products.title, 
            details: products.details, 
            price: products.price, 
            image: products.image, 
            quantity: products.quantity 
        });
        }
    }

    let goPro = true;

    function goHome() {
        goPro = false;
    }

    unsubscribe();

</script>


{#if products.id === id && goPro === true}
<div class="container my-5">

    <div class="row">
      <div in:fly="{{ y: 200, duration: 200 }}" out:fade class="col-sm-7 image" style="background-image: url({products.image});"></div>
      <div class="col-sm-5 p-0">
        <p in:fly="{{ y: 200, duration: 500 }}" out:fade class="title">{products.title}</p>
        <p in:fly="{{ y: 200, duration: 500 }}" out:fade class="price">₹{products.price}</p>
        <p in:fly="{{ y: 200, duration: 500 }}" out:fade class="detail">{products.details}</p>
      </div>
    </div>

    <div class="row rowbtn">
        <div class="col-sm-6 d-flex justify-content-center my-5">
            <button 
            in:fly="{{ y: 200, duration: 200 }}" out:fade
                type="button" 
                class="btn btn-primary btnAddcart"
                on:click="{addToCart}"
                >
                Add To Cart
            </button>
        </div>
        <div class="col-sm-6 d-flex justify-content-center my-5">
            <button 
            in:fly="{{ y: 200, duration: 200 }}" out:fade
                type="button" 
                class="btn btn-primary btnProduct"
                on:click="{goHome}"
                >
                Products
            </button>
        </div>
    </div>

</div>

{:else}

<Products />

{/if}

 
<style>
    .image {
        height: 400px;
        width: 400px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transition: transform .2s;
    }
    .image:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    .title {
        font-size: 30px;
        line-height: 100%;
        padding: 1rem 0 1rem 0;
        width: 100%;
        font-weight: 500;
        text-transform: capitalize;
    }
    .price{
        font-size: 20px;
        width: 100%;
        font-weight: 500;
        text-transform: capitalize;
        margin-top: auto;
    }
    .detail{
        font-size: 20px;
        width: 100%;
        font-weight: 500;
        text-transform: capitalize;
        margin-top: auto;
    }
    .rowbtn{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btnAddcart {
        font-size: 25px;
        font-weight: 900;
        width: 250px;
        height: 60px;
        margin-left: 6.5rem;
    }
    .btnProduct {
        font-size: 25px;
        font-weight: 900;
        width: 250px;
        height: 60px;
        margin-right: 13rem;
    }
    
</style>