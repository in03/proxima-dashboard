<svelte:head>
  <title>Rprox Dash - Tasks</title>
</svelte:head>

<script>

  import { getQuote } from "../js/fetch-api";
  import { quote } from "../js/store";
  import { Jellyfish } from "svelte-loading-spinners";
  import { fade, fly } from 'svelte/transition';
  
  let quoteval;

	quote.subscribe(value=> {
		quoteval = value;
	});

	async function updateQuote() {
    const quoteval = await getQuote()
    quote.set(quoteval)
  };

  let imageLoaded = false

</script>

{#if quoteval}
<div class="flex items-center justify-center" transition:fly={{ y: -30 }}>
  <div class="card w-96 bg-primary-focus shadow-xl">
      <figure class="px-10 pt-10">
        {#key imageLoaded}
        <img src="https://api.lorem.space/image/face?w=200&h=200"
             alt="face" 
             class="rounded-xl opacity-0"
             class:opacity-100={imageLoaded}
             on:load="{() => imageLoaded = true}"
             in:fade
        />
        {/key}
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title mt-0.5 mb-1">Quote of the Day</h2>
        {#key quoteval}
        <p class="mb-5 italic" in:fly={{ y: -30}}>"{quoteval}"</p>
        {/key}
        <div class="card-actions items-center text-center">
          <button class="btn btn-primary" on:click={updateQuote}>Refresh</button>
        </div>
      </div>
    </div>  
  </div>
  {:else}
    <!-- this block renders when string is still empty -->
    <div class="absolute inset-0 flex justify-center items-center z-10">
      <Jellyfish size="200" color="#5014b8" unit="px" duration="1s"></Jellyfish>
    </div>
  {/if}
