<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function goHome() {
    dispatch('goHomePage');
  }
  function goCart() {
    dispatch('goCard')
  }
</script>

<div>
    <ul>
      <li on:click="{goHome}" ><p class="p1">Home</p></li>
      <li><p class="p1">News</p></li>
      <li><p class="p1">Contact</p></li>
      <li style="float:right; margin-right:2rem;" on:click="{goCart}"><i class="fa fa-shopping-cart"></i></li>
      <li style="float:right;"><i class="fa fa-user-o blue-color"></i></li>
    </ul>
</div>

<style>
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    
    li {
      float: left;
    }
    
    li p {
      display: block;
      text-align: center;
      padding: 14px 16px;
    }
    li:hover {
      cursor: pointer;
      color: rgb(113, 252, 113);
    }
    div{
        border: 2px solid black;
    }
    .p1{
        font-weight: bold;
    }
    .fa-user-o {
      color:blue;
      margin-right: 2rem;
      font-size: 25px;
      margin-top: 1rem;
    }
    .fa-shopping-cart {
      margin-right: 2rem;
      font-size: 25px;
      margin-top: 1rem;}
    
    
</style>