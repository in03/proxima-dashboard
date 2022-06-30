<svelte:head>
  <title>Rprox Dash - Overview</title>
</svelte:head>

<script>
  import { BarLoader } from 'svelte-loading-spinners'
  import { onMount } from "svelte";
  
  let users = [];
  onMount(async () => {
    const res = await fetch(`https://random-data-api.com/api/users/random_user?size=10`);     
    users = await res.json();  });
</script>

<div>
  <h1 class="hero font-black text-4xl">Users List</h1>
  <div class="mt-10 grid grid-cols-4 gap-4">
    {#each users as user}
    <div class="card w-auto card-pr shadow-xl scale-95 hover:scale-100 ease-in-out duration-150">
      <figure><img src={user.avatar} alt="user" /></figure>
      <div class="card-body">
        <h2 class="card-title">
          {user.first_name} {user.last_name}
          <div class="badge badge-secondary"> {user.subscription.plan}</div>
        </h2>
        <div class="card-actions justify-end">
          
          <div class="badge badge-outline"> {user.employment.title}</div> 
          <div class="badge badge-outline"> {user.employment.key_skill}</div>
        </div>
      </div>
    </div>
  {:else}
    <!-- this block renders when users.length === 0 -->
    <div class="absolute inset-0 flex justify-center items-center z-10">
      <BarLoader size="200" color="#5014b8" unit="px" duration="1s"></BarLoader>
    </div>
  {/each}
  </div>
</div>
