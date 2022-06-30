<script>

	import '../app.css';
	import { onMount } from "svelte";
	import { users, quote } from "../store"
	import { getQuote, getUsers } from "../fetch-api"

	/*TODO: Implement tabbed navbar with drawer fallback. 
	Tabs like so "https://linguinecode.com/post/svelte-tabs-component"
	Navbar like so "https://daisyui.com/components/navbar/"
	*/
	
	// Get users
	let usersval;
	users.subscribe(value=> {
		usersval = value;
	});
	onMount(async () => {
		const usersval = await getUsers()
		users.set(usersval)
	});
	
	// Get initial random quote
	let quoteval;
	quote.subscribe(value=> {
		quoteval = value;
	});

	onMount(async () => {
		const quoteval = await getQuote()
		quote.set(quoteval)
	});
	
</script>

<div class="navbar bg-primary-focus">
	<div class="flex-none">
		<label for ="my-drawer" class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		</label>
	</div>
	<div class="flex-1">
	  <a class="btn btn-ghost normal-case text-xl" href="/">🎬 Rprox Dashboard</a>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
		</button>
	</div>
</div>

<div class="drawer h-auto">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div class="mt-10 ml-10 mr-10">
			<slot></slot>
		</div>
	</div>
	<div class="drawer-side">
	  <label for="my-drawer" class="drawer-overlay"></label>
	  <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
		<!-- Sidebar content here -->
		<li><a href="/">🗺️ Overview</a></li>
		<li><a href = "/tasks">📝 Tasks</a></li>
		<li><a href = "/workers">👷 Workers</a></li>
	  </ul>
	</div>
  </div>



