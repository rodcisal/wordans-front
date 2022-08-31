<script lang="ts">
  import Product from '$lib/components/Product/Product.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Product {...data} />