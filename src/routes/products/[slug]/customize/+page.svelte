<script lang="ts">
  import type { PageData } from './$types';
  import { fade } from 'svelte/transition'
  import Moveable from "svelte-moveable";
  import Submenu from '$lib/components/Submenu/Submenu.svelte';

  export let data: PageData;

  let textOnShirt: string;
  let frame = {
    translate: [0,0],
    rotate: 0,
    transformOrigin: "50% 50%",
  };

  let target: any;
  let isShowingOptions: boolean = false;
  const toggleIsShowingOptions = () => isShowingOptions = !isShowingOptions
  const images: string[] = JSON.parse(data.images)
  let selectedImage: string = images[0]
  const changeSelectedImage = (newSelectedImage: string) => selectedImage = newSelectedImage

  const addText = () => {
    textOnShirt = 'España';
  }

</script>

<section class="relative">
  <div
    on:click={toggleIsShowingOptions}
  >
    <div 
      class="w-button p-2 absolute top-1 right-1 z-1 bg-slate-300">
        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.688 20.667C20.98 19.864 24 17.725 24 15c0-1.653-1.122-3.109-3.005-4.176a1 1 0 0 0-.986 1.74C21.326 13.311 22 14.184 22 15c0 1.481-2.221 3.054-5.68 3.701a1 1 0 0 0 .368 1.966zM4.371 11.2a1 1 0 0 1-.377 1.362C2.674 13.31 2 14.184 2 15c0 1.566 2.434 3.164 6 3.758v-1.55a.5.5 0 0 1 .854-.354l2.792 2.792a.5.5 0 0 1 0 .708l-2.792 2.792A.5.5 0 0 1 8 22.793v-2.01c-4.61-.68-8-2.898-8-5.783 0-1.654 1.123-3.11 3.008-4.178a1 1 0 0 1 1.363.378zM9 2a1 1 0 0 1 1 1 2 2 0 1 0 4 0l.007-.117A1 1 0 0 1 15 2h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v6.5a1 1 0 0 1-2 0V9a2 2 0 0 1 2-2h2V4h-4.126a4.002 4.002 0 0 1-7.748 0H4v3h2a2 2 0 0 1 2 2v6.5a1 1 0 0 1-2 0V9H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#222020" fill-rule="evenodd"></path></svg>
    </div>
    {#if isShowingOptions}
      <div transition:fade class="w-submenu p-2 absolute top-10 right-1 bg-white border">
        <div 
          on:click={() => changeSelectedImage(images[0])}
          class="flex align-middle items-center">
          <img class="w-10" src={images[0]} />
          <div class="m-1">Front</div>
        </div>
        <div 
          on:click={() => changeSelectedImage(images[1])}
          class="flex align-middle items-center">
          <img class="w-10" src={images[1]} />
          <div class="m-1">Back</div>
        </div>
        <div 
          on:click={() => changeSelectedImage(images[2])}
          class="flex align-middle items-center">
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