<script lang="ts">
import type { PageData } from './$types';
import { fade } from 'svelte/transition'
import Moveable from "svelte-moveable";

    let textOnShirt: string;

    let frame = {
      translate: [0,0],
      rotate: 0,
      transformOrigin: "50% 50%",
    };

    export let data: PageData;
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

<section class="flex absolute bottom-0 left-0 right-0 bg-slate-400 color-white">
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