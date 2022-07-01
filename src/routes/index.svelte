<svelte:head>
  <title>Rprox Dash - Overview</title>
</svelte:head>

<script>

  import { Jellyfish } from 'svelte-loading-spinners';
  import { users } from '../js/store';
  import ImageLoader from '../components/image/ImageLoader.svelte';
  
  // Get users
  let usersval;
  users.subscribe(value=> {
		usersval = value;
	});
  
</script>

<div>
  {#if usersval.length !== 0}
    <h1 class="hero font-black text-4xl">Users List</h1>
    <div class="mt-10 grid grid-cols-4 gap-4">
      {#each usersval as user}
      <div class="card w-auto card-pr shadow-xl scale-95 hover:scale-100 ease-in-out duration-150">
        <figure><ImageLoader src={user.avatar} alt="Randomly-generated robot face"></ImageLoader></figure>
        <div class="card-body">
          <h2 class="card-title">
            {user.first_name} {user.last_name}
            <div class="badge badge-secondary truncate hover:animate-pulse"> {user.subscription.plan}</div>
          </h2>
          <div class="card-actions justify-end">
            
            <div class="badge badge-outline truncate"> {user.employment.title}</div> 
            <div class="badge badge-outline truncate"> {user.employment.key_skill}</div>
          </div>
        </div>
      </div>
      {/each}
    </div>
    {:else}
      <!-- this block renders when users.length === 0 -->
      <div class="absolute inset-0 flex justify-center items-center z-10">
        <Jellyfish size="200" color="#5014b8" unit="px" duration="1s"></Jellyfish>
      </div>
    {/if}
</div>
