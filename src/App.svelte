<script>
  import { createEventDispatcher } from 'svelte';
  import Menubar from './component/menubar.svelte';
  import Product from './component/Product.svelte';
  import Details from './component/Details.svelte';
  import Card from './cart/Card.svelte';

  const dispatch = createEventDispatcher();

  let start = true;
  let goCard = false;
	let pageData = {};
  let id;
  let title;
  let price;
  let quantity;
  let total;
	
  function goHome() {
    document.location.reload();
  }

  function goCart(event) {
    pageData.id = event.detail;
    goCard = true;
    start = false;
  }

  function showDetails(event) {
		start = false;
    goCard = false;
		pageData.id = event.detail;
	}

	function closeDetails() {
		start = true;
		pageData = {};
	}

  function addToCart(event) {
    console.log("add to cart id " + event.detail.id)
    id = event.detail.id;
    title = event.detail.title;
    price = event.detail.price;
    quantity = event.detail.quantity;
  }

</script>

<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<Menubar on:goCard={goCart} on:goHomePage={goHome} />

{#if start}
  <Product on:showDetails={showDetails} />
{:else if goCard}
<!-- id={pageData.id} -->
  <Card {id} {title} {price} {quantity} on:close={closeDetails} />
{:else}
  <Details on:addToCart={addToCart} id={pageData.id} on:close={closeDetails} />
{/if}