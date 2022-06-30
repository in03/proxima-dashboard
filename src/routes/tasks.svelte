<svelte:head>
  <title>Rprox Dash - Tasks</title>
</svelte:head>

<script>

  import { getQuote } from "../get-quote";
  import { quote } from "../store";
  
  let quoteval;

	quote.subscribe(value=> {
		quoteval = value;
	});

	async function updateQuote() {
    const quoteval = await getQuote()
    quote.set(quoteval)
  };

</script>

<div class="flex items-center justify-center">
  <div class="card w-96 bg-primary-focus shadow-xl">
    <figure class="px-10 pt-10">
      <img src="https://api.lorem.space/image/face?w=200&h=200" alt="face" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title mt-0.5 mb-1">Quote of the Day</h2>
      <p class="mb-5 italic">"{quoteval}"</p>
      <div class="card-actions items-center text-center">
        <button class="btn btn-primary" on:click={updateQuote}>Refresh</button>
      </div>
    </div>
  </div>  
</div>
