<script>
    import Cartitem from './CartItem.svelte';
    import cartItems from './cart-store.js';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function goToShopping(){
        dispatch('goHome');
    }

</script>

<h1 class="message my-5">Your Cart</h1>

<div class="btn_home">
    <button type="button" 
        on:click="{goToShopping}"
        class="btn btn-outline-success"
        >
        Continue Shopping
    </button>
</div>

<div class="section">
    <h1 class="wishlistmsg">Your Wish List</h1>
    <hr />
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
</style>