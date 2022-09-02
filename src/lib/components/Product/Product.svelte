<script lang='ts'>
  export let title: string;
  export let id: number;
  export let description: string;
  export let sizes: string;
  export let images: string;

  const sizeList: string[] = JSON.parse(sizes);
  const imageList: string[] = JSON.parse(images);

</script>


<section class="mx-4 my-2">
  <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{title}</h3>
  <!-- <p class="text-gray-900 text-sm">{description}</p> -->
  {#each sizeList as size}
    <div class="mr-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">{size}</div>
  {/each}

  <img class="mt-4" src={imageList[0]} />

  <div class="mt-4">
    <a
      href={`/products/${id}/customize`}
      class="py-4 px-4 w-full block shadow-md text-center no-underline rounded-full font-bold text-sm btn-primary focus:outline-none active:shadow-none mr-2 text-white bg-neutral-600">

      Customize
    </a>
  </div>

  <div class="text-sm text-zinc-500 my-4">
    <p>{description}</p>
  </div>
</section>