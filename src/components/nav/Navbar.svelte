<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BsList from 'svelte-icons-pack/bs/BsList';
	import type { Page } from '@types/page';
	export let sidebar: boolean;
	export let pages: Page[];
</script>

<div class="flex justify-between bg-neutral-800 items-center">
	<nav class="flex">
		<button
			class="p-2 text-neutral-300 hover:text-neutral-100"
			on:click={() => (sidebar = !sidebar)}
		>
			<Icon size="32" src={BsList} />
		</button>
	</nav>
	<div class="flex">
		{#each pages as page}
			<div class="p-2 text-primary-400 hover:bg-neutral-700 rounded-lg">
				<a href={page.href}>{page.label}</a>
			</div>
		{/each}
	</div>
</div>
