<script>
    import { createEventDispatcher } from 'svelte';
    import product from './show-store.js';
    import {onDestroy} from 'svelte';

    const dispatch = createEventDispatcher();

    let products;

    const unsubscribe = product.subscribe(items => {
        products = items;
    });
    

</script>

<div class="product_list my-5">
    {#each products as product}
        <div class="product_box" on:click="{() => dispatch('showDetails', product.id)}" >
        <div class="image" style="background-image: url({product.image});"></div>
        <div class="title"><h5>{product.title}</h5></div>
        <p>₹{product.price}</p>
        </div>
    {/each}
</div>

<style>
    .product_list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .product_box {
        display: inline;
        justify-content: center;
        align-items: center;
    }
    .image {
        height: 150px;
        width: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .title {
        width: 70%;
        text-align: center;
        margin: auto;
    }
    p {
        width: 100%;
        text-align: center;
    }
</style>