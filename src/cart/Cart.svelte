<script>
    import { fade, scale } from 'svelte/transition';
    import Cartitem from './CartItem.svelte';
    import cartItems from './cart-store.js';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function goToShopping(){
        dispatch('goHome');
    }
 
</script>

<h1 transition:fade={{x: 300}} class="message my-5">Your Cart</h1>

<div class="btn_home">
    <button type="button"
        transition:scale
        on:click="{goToShopping}"
        class="btn btn-outline-success"
        >
        Continue Shopping
    </button>
</div>

<div class="section">
    <h1 class="wishlistmsg">Your Wish List</h1>
    <hr />
<div class="product_heading">
    <div class="row">

        <div class="col-lg-3 col-md-3 col-12 ph">
          Product
        </div>
        <div class="col-lg-3 col-md-3 col-12 ph">
          Price
        </div>
        <div class="col-lg-3 col-md-3 col-12 ph">
          Quantity
        </div>
        <div class="col-lg-3 col-md-3 col-12 ph">
          Total
        </div>

      </div>
</div>

    <ul>
        {#each $cartItems as item (item.id) }
            <Cartitem 
                id={item.id} 
                title={item.title} 
                details={item.details}
                price={item.price} 
                image={item.image}
                quantity={item.quantity}
            />
        {:else}
            <p>No item in cart yet</p>
        {/each}
    </ul>
</div>
 

<style>
    .product_heading {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    }
    .row {
    /* background-color: blue; */
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    background-color: rgb(218, 220, 224);
  }
  .col-lg-3 {
    /* background-color: blueviolet; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

    .section {
        width: 100%;
        margin-top: 3rem;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .wishlistmsg {
        font-size: 30px;
        margin-left: 6rem;
    }
    .message {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
    }
    .btn_home {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    p {
        margin-left: 6rem;
    }
    .ph {
    font-size: 15px;
    font-weight: 500;
    background-color: black;
    border-left: none;
    border-right: none;
    color: white;
    text-transform: uppercase;
  }
</style>