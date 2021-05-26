<script>

    export let id;
    export let title;
    export let price;
    export let quantity;

</script>

<div class="section">
    <h1>Your Wish List</h1>

    <table class="table table-striped table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{price}</td>
            <td>{quantity}</td>
          </tr>
        </tbody>
      </table>
    <!-- <ul>
        {#each $cartItems as item (item.id) }
            <Cartitem id={item.id} title={item.title} price={item.price} quantity={item.quantity} />
        {:else}
            <p>No item in cart yet</p>
        {/each}
    </ul> -->
</div>

<style>
    .section {
        width: 100%;
    }
    h1{
        font-size: 30px;
        border-bottom: 2px solid rgb(109, 104, 104);
        padding-bottom: 2rem;
    }
    /* ul {
        list-style: none;
        margin: 0;
        padding: 0;
    } */
</style>