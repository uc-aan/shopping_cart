<script>
    import product from './show-store.js';
    import cartItems from '../cart/cart-store.js';

    export let id;

    let products;

    const unsubscribe = product.subscribe(prods => {
            products = prods.find(p => p.id === id);
        });
    unsubscribe();

    function addToCart(){
        if (products.id === id) {
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

</script>


{#if products.id === id}
<div class="container my-5">
    <div class="row">
      <div class="col-sm-7 image" style="background-image: url({products.image});"></div>
      <div class="col-sm-5 p-0">
        <p class="title">{products.title}</p>
        <p class="price">₹{products.price}</p>
        <p class="detail">{products.details}</p>
      </div>
    </div>
    <div class="row rowbtn">
        <div class="col-sm-12 d-flex justify-content-center my-5">
            <button 
                type="button" 
                class="btn btn-primary btnAddcart"
                on:click="{addToCart}">
                Add To Cart
            </button>
        </div>
    </div>
</div>
{/if}

 
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