<script lang="ts">
	import type { Page } from '@types/page';
	import Navbar from '$components/nav/Navbar.svelte';
	import Sidebar from '$components/nav/Sidebar.svelte';
	import BsGear from 'svelte-icons-pack/bs/BsGear';
	import BsHouse from 'svelte-icons-pack/bs/BsHouse';

	import '../app.css';

	let pages: Page[] = [
		{ label: 'Home', href: '/', icon: BsHouse },
	];

	let adminPages: Page[] = [
	];

	let showSidebar: boolean = false;
</script>

<body>
	<div class="flex grow h-screen">
		<Sidebar bind:open={showSidebar} {pages} {adminPages} />
		<div class="flex flex-col grow">
			<Navbar bind:sidebar={showSidebar} {pages} />

			<main class="grow overflow-y-auto">
				<slot />
			</main>
		</div>
	</div>
</body>
