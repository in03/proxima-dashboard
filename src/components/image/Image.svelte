<script>
    export let src
    export let alt
    import { onMount } from 'svelte'
    let loaded = false
    let thisImage
    onMount(() => {
      thisImage.onload = () => {
        loaded = true
      }
    }) 
  </script>
  
  <style>
    img {
      height: 200px;
      opacity: 0;
      transition: opacity 1200ms ease-out;
    }
    img.loaded {
      opacity: 1;
    }
  </style>
  
  <img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />