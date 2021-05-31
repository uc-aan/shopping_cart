<script>
    import cartItems from './cart-store.js';

    export let id;
    export let title;
    export let price;
    export let image;
    export let quantity;


    let total = price ;

    let selectedItems;

    const unsubscribe = cartItems.subscribe(items => {
      selectedItems = items.find(i => i.id === id );
    });


    function updateTotal() {
        var item = {'id': id, 'quantity': quantity };
        cartItems.updateItem(id);
        if (quantity <=0 ) {
          cartItems.removeItem(id);
        } else {
          console.log(selectedItems.quantity);
          total = price*selectedItems.quantity;
      }
    }
   
    function removeFromCart() {
        cartItems.removeItem(id);
    }

    // onDestroy(() => {
    //     unsubscribe();
    // });
</script>

<div class="product">
  
  <div class="row">

    <!-- <div class="col-lg-3 col-md-3 col-12 ph">
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
    </div> -->

    <div class="col-lg-3 col-md-3 col-12" style="display: inline;">
      <div style="margin-top: 1rem;"><img src="{image}" alt="{title}" width=50 height=50 /></div>
       <p style="
        text-align: center; width: 60%; margin: -3.5rem auto 0 auto; ">{title}</p> 
       <p class="text-danger" 
        on:click="{removeFromCart}"
        style="margin-left: 8rem;">Remove</p>
    </div>
    <div class="col-lg-3 col-md-3 col-12">
      {price}
    </div>
   <div class="col-lg-3 col-md-3 col-12">
      <input type="number" min="0" on:blur="{updateTotal}" bind:value={quantity} />
    </div>
    <div class="col-lg-3 col-md-3 col-12">
      <p>{total}</p>
    </div>
  </div>

  
</div>





<style>
 .product{
    /* background-color: red; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 0.1rem;
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
  /* .ph {
    font-size: 15px;
    font-weight: 500;
    background-color: black;
    border-left: none;
    border-right: none;
    color: white;
    text-transform: uppercase;
  } */
  .text-danger:hover {
    cursor: pointer;
  }
</style>