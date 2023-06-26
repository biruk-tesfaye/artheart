<script>
	import TrendingUpArrow from '$lib/assets/icons/trending-up-arrow.svg.svelte';
	import ArrowDown from '$lib/assets/icons/arrow-down.svg.svelte';

	let isOpen = false;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div>
	<label id="listbox-label" class="sr-only"> Change published status </label>
	<div class="relative">
		<div class="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
			<div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
				<button
					on:click={() => (isOpen = !isOpen)}
					class="bg-[#23262F] rounded-md flex gap-2 justify-center items-center
                px-4 md:px-6 py-[6px] md:py-[10px] text-[#C7C6CA]
                focus:ring-1 focus:ring-inset focus:ring-[#5D3FE0] focus:outline-none
                "
				>
					<TrendingUpArrow />
					<span class="w-24 text-left">Trending</span>
					<span class="sr-only">Change published status</span>
					<ArrowDown />
				</button>
			</div>
		</div>
		<ul
			class="{isOpen
				? 'block'
				: 'hidden'} origin-top-right absolute z-10 right-0 mt-2 w-full rounded-md shadow-lg overflow-hidden bg-[#23262F] ring-1 ring-black ring-opacity-5 focus:outline-none"
			tabindex="-1"
			role="listbox"
			aria-labelledby="listbox-label"
			aria-activedescendant="listbox-option-0"
		>
			<li
				class="text-gray-900 cursor-default select-none relative p-4 text-sm hover:bg-[#C9BFFF0D] hover:cursor-pointer"
				id="listbox-option-0"
				role="option"
			>
				<div class="flex flex-col text-[#C7C6CA]">Test item</div>
			</li>
			<li
				class="text-gray-900 cursor-default select-none relative p-4 text-sm hover:bg-[#C9BFFF0D] hover:cursor-pointer"
				id="listbox-option-0"
				role="option"
			>
				<div class="flex flex-col text-[#C7C6CA]">Test item</div>
			</li>
		</ul>
	</div>
</div>
