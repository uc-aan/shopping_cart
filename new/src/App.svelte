<script>
  import Menubar from './component/menubar.svelte';
  import Product from './component/Product.svelte';
  import Cart from './cart/Cart.svelte';
  import Aboutpage from './component/Aboutpage.svelte';
  import Contact from './component/Contact.svelte';
  import Details from './component/Details.svelte';

  let start = true;
  let goCartsec = false;
	let about = false;
  let contact = false;
  // let detailPage = false;

  function goHome() {
    start = true;
  }

  function goAbout() {
    about = true;
    start = false;
    goCartsec = false;
  }

  function contactPage() {
    contact = true;
    start = false;
    goCartsec = false;
	  about = false;
  }

  function goCart() {
    goCartsec = true;
    start = false;
  }

  function backHome() {
    start = true;
    goCartsec = false;
  }

  function handleMessage(event) {
		alert(event.detail.text);
	}
  
</script>

<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<Menubar
  on:goCard={goCart} 
  on:goHomePage={goHome} 
  on:GoAbout={goAbout}
  on:goContact={contactPage}
  />

{#if start}
  <Product />
{:else if goCartsec}
  <Cart on:goHome={backHome} />
{:else if about}
  <Aboutpage />
{:else if contact}
  <Contact />
{/if}