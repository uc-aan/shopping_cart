<script>
  import Menubar from './component/menubar.svelte';
  import Product from './component/Product.svelte';
  import Cart from './cart/Cart.svelte';

  let start = true;
  let goCartsec = false;
	
  function goHome() {
    document.location.reload();
  }

  function goCart() {
    goCartsec = true;
    start = false;
  }

  function backHome() {
    start = true;
    goCartsec = false;
  }

  
</script>

<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<Menubar on:goCard={goCart} on:goHomePage={goHome} />

{#if start}
  <Product />
{:else if goCartsec}
  <Cart on:goHome={backHome} />
{/if}