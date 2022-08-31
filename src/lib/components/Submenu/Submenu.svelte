<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const addText = () => dispatch('addText')

</script>

<section class="w-submenu flex absolute left-0 right-0 bg-slate-400 color-white">
  <div class="p-1 text-center text-sm w-1/4">
    <svg class="w-10 m-auto" id="_12-product" data-name="12-product" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="M22.69 9.89a3.2 3.2 0 0 1-6.41 0h-6.4v5.47h2.76V29.1h13.7V15.35h2.76V9.89h-6.41Z"></path></svg>
    Product
  </div>
  <div 
    on:click={addText}
    class="p-1 text-center text-sm  w-1/4">
    <svg class="w-10 m-auto" id="_13-add-text" data-name="13-add-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="M14.77 29.05v-2.54h3v-14h-3.82v4.08h-2.77V9.93H27.8v6.62H25v-4.08h-3.79v14h3v2.54h-9.44Z"></path></svg>
    Text
  </div>
  <div class="p-1 text-center text-sm  w-1/4">
    <svg class="w-10 m-auto" id="_08-add-art" data-name="08-add-art" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><circle class="cls-1" cx="23.47" cy="15.5" r="1.32"></circle><path class="cls-1" d="M28.58 9.86H10.4a.54.54 0 0 0-.54.54v18.18a.54.54 0 0 0 .54.54h18.18a.54.54 0 0 0 .54-.54V10.4a.54.54 0 0 0-.54-.54Zm-1.46 13-2.25-2.25a1 1 0 0 0-1.44 0l-1.67 1.67-4.43-4.43a1 1 0 0 0-1.44 0l-4 4V12a.18.18 0 0 1 .11-.14h14.9a.18.18 0 0 1 .18.18v10.82Z"></path></svg>
    Add Art
  </div>
  <div class="p-1 text-center text-sm w-1/4">
    <svg class="w-10 m-auto" id="_09-names-num" data-name="09-names-num" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="m11.68 11.41-.08-.09v-.62l.13-.13h.85l.13.12v.42h.82v-.7l-.52-.53h-1.7l-.54.55v1.21l.47.48h1.39l.08.08v.66l-.13.13h-.87l-.13-.12v-.42h-.83v.7l.53.52H13l.54-.54v-1.25l-.47-.47h-1.39zM16.28 12.67l-.84-2.79h-1.13v3.79h.75v-2.49l.76 2.49h.87l.76-2.5v2.5h.81V9.88h-1.13l-.85 2.79zM19.02 10.54h.62v2.48h-.62v.65h2.07v-.65h-.62v-2.48h.62v-.66h-2.07v.66zM21.86 10.6h.99v3.07h.83V10.6h.99v-.72h-2.81v.72zM27.4 9.88v1.54h-1.13V9.88h-.83v3.79h.83v-1.49h1.13v1.49h.83V9.88h-.83zM26.83 29.1h-4.72a.68.68 0 0 1-.48-.2l-1-1a.68.68 0 0 1-.2-.48V16.57a.68.68 0 0 1 .2-.48l1-1a.68.68 0 0 1 .48-.2h4.73a.68.68 0 0 1 .48.2l1 1a.68.68 0 0 1 .2.48v10.85a.68.68 0 0 1-.2.48l-1 1a.68.68 0 0 1-.49.2Zm-3.12-2.79h1.51a.5.5 0 0 0 .5-.5v-7.63a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v7.63a.5.5 0 0 0 .5.5ZM16.88 29.1h-4.73a.68.68 0 0 1-.48-.2l-1-1a.68.68 0 0 1-.2-.48V16.57a.68.68 0 0 1 .2-.48l1-1a.68.68 0 0 1 .48-.2h4.73a.68.68 0 0 1 .48.2l1 1a.68.68 0 0 1 .2.48v10.85a.68.68 0 0 1-.2.48l-1 1a.68.68 0 0 1-.48.2Zm-3.12-2.79h1.51a.5.5 0 0 0 .5-.5v-7.63a.5.5 0 0 0-.5-.5h-1.51a.5.5 0 0 0-.5.5v7.63a.5.5 0 0 0 .5.5Z"></path></svg>
    Add Art
  </div>
</section>


<style>
  .w-submenu {
    bottom: -80px;
  }
</style>