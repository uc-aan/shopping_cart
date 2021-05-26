<script>
    import cartItems from './cart-store.js';
    import products from '../component/show-store.js';

    export let id;
    export let title;
    export let price;
    export let image;
    export let quantity;

    let total = 0;
    let qty = 0;

    $: if( quantity <= 0 ){
        cartItems.removeItem(id);
    }else if( quantity == 1 ){
        total = price*quantity;
    }else {
        total = price*quantity;
    }
 
    function removeFromCart() {
        cartItems.removeItem(id);
    }
</script>

<div class="product">
    <table class="table table-striped">
        <thead class="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th colspan="2" scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{id}</th>
            <td><img src="{image}" alt="{title}" width=50 height=50 /> </td>
            <td>{title}<p class="text-danger" on:click="{removeFromCart}">Remove</p></td>
            <td>{price}</td>
            <td> <input type="number" bind:value={quantity} /> </td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
</div>





<style>
    .text-danger:hover{
        cursor: pointer;
    }
</style>