<script lang="ts">
  import type { PageData } from './$types';
  import { fade } from 'svelte/transition'
  import Moveable from "svelte-moveable";
  import Submenu from '$lib/components/Submenu/Submenu.svelte';

  export let data: PageData;
  console.log(data)

  let textOnShirt: string;
  let frame = {
    translate: [0,0],
    rotate: 0,
    transformOrigin: "50% 50%",
  };

  let isAddingText: boolean = false;
  let isTextSavedSuccessfully: boolean = false;

  let target: any;
  let isShowingOptions: boolean = false;
  const toggleIsShowingOptions = () => isShowingOptions = !isShowingOptions
  const images: string[] = JSON.parse(data.images)
  let selectedImage: string = images[0]
  const changeSelectedImage = (newSelectedImage: string) => {
    selectedImage = newSelectedImage
    isShowingOptions = false
  }

  const addText = () => {
    isAddingText = true
  }

  const saveCustomizedProduct = async () => {
    if (!textOnShirt) {
      return;
    }
    const response = await fetch(`https://frozen-shelf-22540.herokuapp.com/products/${data.product.id}/custom_products/`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_id: data.product.id,
        right_sleeve: textOnShirt,
        front_sleeve: textOnShirt,
        front: textOnShirt,
        back: textOnShirt,
        size: 'L',
        quantity: 1,
        color: 'white'
      })
    })
    console.log(response)
    if (response.status === 200) {
      isTextSavedSuccessfully = true
      textOnShirt = ''
    }
  }

  let input: any;

  const submitText = () => {
    textOnShirt = input.value
    isAddingText = false
  }

</script>

<section class="relative">
  <div
  >
    <div 
      on:click={toggleIsShowingOptions}
      class="w-button p-2 absolute top-1 right-1 z-1 bg-slate-300">
        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.688 20.667C20.98 19.864 24 17.725 24 15c0-1.653-1.122-3.109-3.005-4.176a1 1 0 0 0-.986 1.74C21.326 13.311 22 14.184 22 15c0 1.481-2.221 3.054-5.68 3.701a1 1 0 0 0 .368 1.966zM4.371 11.2a1 1 0 0 1-.377 1.362C2.674 13.31 2 14.184 2 15c0 1.566 2.434 3.164 6 3.758v-1.55a.5.5 0 0 1 .854-.354l2.792 2.792a.5.5 0 0 1 0 .708l-2.792 2.792A.5.5 0 0 1 8 22.793v-2.01c-4.61-.68-8-2.898-8-5.783 0-1.654 1.123-3.11 3.008-4.178a1 1 0 0 1 1.363.378zM9 2a1 1 0 0 1 1 1 2 2 0 1 0 4 0l.007-.117A1 1 0 0 1 15 2h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v6.5a1 1 0 0 1-2 0V9a2 2 0 0 1 2-2h2V4h-4.126a4.002 4.002 0 0 1-7.748 0H4v3h2a2 2 0 0 1 2 2v6.5a1 1 0 0 1-2 0V9H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#222020" fill-rule="evenodd"></path></svg>
    </div>
    {#if isAddingText}
      <div class="absolute h-full top-0 left-0 bg-white w-full p-4">
        <h2 class="text-bold">Add Text</h2>
        <input bind:this={input} class="border-slate-400 border rounded my-2 font-1 p-1" type="text" />
        <div>
          <button 
            on:click={submitText}
            class="border-yellow-400 bg-yellow-400 cursor-pointer py-2 px-10 rounded">
            Add
          </button>
        </div>
      </div>
    {/if}
    {#if isTextSavedSuccessfully}
      <div class="absolute h-full top-0 left-0 bg-white w-full p-4">
        <h2 class="text-xl">Custom Product Created Successfully! ✅</h2>
      </div>
    {/if}

    {#if isShowingOptions}
      <div transition:fade class="w-submenu p-2 absolute top-10 right-1 bg-white border">
        <div 
          on:click={() => changeSelectedImage(images[0])}
          class="flex align-middle items-center cursor-pointer">
          <img class="w-10" src={images[0]} />
          <div class="m-1">Front</div>
        </div>
        <div 
          on:click={() => changeSelectedImage(images[1])}
          class="flex align-middle items-center cursor-pointer">
          <img class="w-10" src={images[1]} />
          <div class="m-1">Back</div>
        </div>
        <div 
          on:click={() => changeSelectedImage(images[2])}
          class="flex align-middle items-center cursor-pointer">
          <img class="w-10" src={images[2]} />
          <div class="m-1">Sleeve</div>
        </div>
      </div>
    {/if}

    {#if textOnShirt}
      <div class="target absolute top-0.5 text-2xl" bind:this={target}>{textOnShirt}</div>
    {/if}
  </div>

  <img src={selectedImage} />

  <div>
    <button 
      on:click={saveCustomizedProduct} 
      class="w-full border-yellow-400 bg-yellow-400 cursor-pointer py-4 flex items-center justify-center">
      <svg class="w-4 ml-2" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24" xml:space="preserve"><path d="M17.5 2.5c-.2-.2-.6-.4-.9-.4H4.1c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7.7c0-.3-.2-.7-.4-.9l-4.2-4.3zm-7.4 1.7h3v4h-3v-4zm6 16h-8v-4h8v4zm4 0h-2v-5c0-.5-.4-1-1-1h-10c-.6 0-1 .4-1 1v5h-2v-16h2v5c0 .5.4 1 1 1h7c.6 0 1-.4 1-1v-5h1.2L20.1 8v12.2z"></path></svg>
      <div class="ml-1">Save</div>
    </button>
  </div>


</section>

<Submenu on:addText={addText} />
<Moveable
  target={target}
  originDraggable={true}
  originRelative={true}
  draggable={true}
  throttleDrag={0}
  startDragRotate={0}
  throttleDragRotate={0}
  zoom={1}
  origin={true}
  padding={{"left":0,"top":0,"right":0,"bottom":0}}
  rotatable={true}
  throttleRotate={0}
  rotationPosition={"top"}
  on:dragOriginStart={({ detail: e }) => {
      e.dragStart && e.dragStart.set(frame.translate);
  }}
  on:dragOrigin={({ detail: e }) => {
      frame.translate = e.drag.beforeTranslate;
      frame.transformOrigin = e.transformOrigin;
  }}
  on:dragStart={({ detail: e }) => {
      e.set(frame.translate);
  }}
  on:drag={({ detail: e }) => {
      frame.translate = e.beforeTranslate;
  }}
  on:rotateStart={({ detail: e }) => {
      e.set(frame.rotate);
  }}
  on:rotate={({ detail: e }) => {
      frame.rotate = e.beforeRotate;
  }}
  on:render={({ detail: e }) => {
      const { translate, rotate, transformOrigin } = frame;
      e.target.style.transformOrigin = transformOrigin;
      e.target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`
          +  ` rotate(${rotate}deg)`;
  }}
/>


<style>
  .w-button {
    border-radius: 50%;
  }
</style>