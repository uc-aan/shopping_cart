<script>
    import product from '../component/show-store';
    import { createEventDispatcher } from 'svelte';
    import Cart from './Cart.svelte';

    const dispatch = createEventDispatcher();

    export let id;
    export let title;
    export let price;
    export let quantity;

    let products;

    const unsubscribe = product.subscribe(items => {
        products = items.find(i => i.id === id );
    });


</script>

<div class="card_item mt-5">
    <h1>Your Cart</h1>
    <div class="continue">
        <button type="button" class="btn btn-outline-primary mt-5" on:click={() => dispatch('close') } >Continue Shopping</button>
    </div>
    <div class="cartitemlist">
        <Cart {id} {title} {price} {quantity} />
    </div>
</div>

<style>
    .card_item{
        width: 100%;
        height: 80vh;
        background-color: blanchedalmond;
    }
    h1 {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .continue{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cartitemlist{
        border: 2px solid red;
        width: 100%;
        height: 40vh;
        margin-top: 9rem;
        overflow: auto;
    }
</style>