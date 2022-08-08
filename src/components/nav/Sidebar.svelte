<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BsList from 'svelte-icons-pack/bs/BsList';
	import { fly } from 'svelte/transition';
	import type { Page } from '@types/page';

	export let open: boolean;
	export let pages: Page[];
	export let adminPages: Page[] = [];
</script>

{#if open}
	<aside
		class="absolute h-screen w-screen md:w-64 bg-neutral-700"
		transition:fly={{ x: -200, duration: 300 }}
	>
		<div class="">
			<button
				class="p-2 text-neutral-300 hover:text-neutral-100 space-y-2"
				on:click={() => (open = !open)}
			>
				<Icon size="32" src={BsList} />
			</button>
			<div class="">
				<nav class="p-2 space-y-2">
					{#each pages as page}
						<a href={page.href} class={'link'}>
							<Icon src={page.icon} />
							<span class="ml-3">{page.label}</span>
						</a>
					{/each}
				</nav>
				{#if adminPages}
					<nav class="p-2 space-y-2 border-t border-neutral-600">
						{#each adminPages as page}
							<a href={page.href} class={'link'}>
								<Icon src={page.icon} />
								<span class="ml-3">{page.label}</span>
							</a>
						{/each}
					</nav>
				{/if}
			</div>
		</div>
	</aside>
{/if}

<style>
	.link {
		@apply flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-neutral-800 hover:text-primary-400;
	}
</style>
