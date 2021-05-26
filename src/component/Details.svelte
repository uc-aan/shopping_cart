<script>
    import { onDestroy, createEventDispatcher } from 'svelte';
    import product from './show-store.js';

    export let id;
    export let title;
    export let price;
    export let quantity;

    $:console.log('detail ',id)

    let selectedProduct;

    const unsubscribe = product.subscribe(items => {
        selectedProduct = items.find(i => i.id === id );
    });

    const dispatch = createEventDispatcher();

    onDestroy(() => {
        unsubscribe();
    });

</script>

<div class="container my-5">
    <div class="row">
      <div class="col-sm-7 image" style="background-image: url({selectedProduct.image});"></div>
      <div class="col-sm-5 p-0">
        <p class="title">{selectedProduct.title}</p>
        <p class="price">₹{selectedProduct.price}</p>
        <p class="detail">{selectedProduct.details}</p>
      </div>
    </div>
    <div class="row rowbtn">
        <div class="col-sm-12 d-flex justify-content-center my-5">
            <button 
                type="button" 
                class="btn btn-primary btnAddcart"
                on:click="{() => {
                    dispatch('addToCart',{ 
                        id: id,
                        title: title,
                        price: price,
                        quantity: quantity
                        })}}">
                Add To Cart
            </button>
        </div>
    </div>
</div>


<style>
    .image {
        height: 400px;
        width: 400px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
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
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btnAddcart {
        font-size: 25px;
        font-weight: 900;
        width: 250px;
        height: 60px;
    }
    
</style>