<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const addText = () => dispatch('addText')

</script>

<section class="w-submenu flex absolute left-0 right-0 bg-gray-600 color-white">
  <div class="text-white p-1 text-center text-sm w-1/2 cursor-pointer">
    <a href='./'>
      <svg class="w-10 m-auto" id="_12-product" data-name="12-product" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="M22.69 9.89a3.2 3.2 0 0 1-6.41 0h-6.4v5.47h2.76V29.1h13.7V15.35h2.76V9.89h-6.41Z"></path></svg>
      Product
    </a>
  </div>
  <div 
    on:click={addText}
    class="text-white p-1 text-center text-sm  w-1/4 cursor-pointer">
    <svg class="w-10 m-auto" id="_13-add-text" data-name="13-add-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="M14.77 29.05v-2.54h3v-14h-3.82v4.08h-2.77V9.93H27.8v6.62H25v-4.08h-3.79v14h3v2.54h-9.44Z"></path></svg>
    Text
  </div>
</section>


<style>
  .w-submenu {
    bottom: -80px;
  }

  .w-submenu svg {
    fill: white;
  }
</style>