<script>
	import ArrowDown from '$lib/assets/icons/arrow-down.svg.svelte';
	import UserHeart from '$lib/assets/icons/user-heart.svg.svelte';
	import Photo from '$lib/assets/icons/photo.svg.svelte';
	let isOpen = false;

	let isCharactersChecked = false;
</script>

<div>
	<div
		class="hidden md:flex rounded-lg p-1 gap-1 justify-center items-center border border-[#44474F]"
	>
		<button
			class="bg-[#C9BFFF24] rounded-md flex gap-2 justify-center
		items-center px-4 md:px-6 py-[6px] md:py-[10px] text-[#C7C6CA]
		focus:ring-1 focus:ring-inset focus:ring-[#5D3FE0] focus:outline-none
		"
		>
			<UserHeart />
			<span>Characters</span>
		</button>
		<button
			class=" rounded-md flex gap-2 justify-center items-center
		 px-4 md:px-6 py-[6px] md:py-[10px] text-[#C7C6CA]
		 focus:ring-1 focus:ring-inset focus:ring-[#5D3FE0] focus:outline-none
		 "
		>
			<Photo />
			<span>Artwork</span>
		</button>
	</div>
	<div class="relative block md:hidden">
		<div class="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
			<div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
				<button
					on:click={() => (isOpen = !isOpen)}
					class="bg-[#23262F] rounded-md flex gap-2 justify-between items-center
                px-4 md:px-6 py-[6px] md:py-[10px] text-[#C7C6CA]
                focus:ring-1 focus:ring-inset focus:ring-[#5D3FE0] focus:outline-none
                w-full
                "
				>
					<div class="flex gap-2">
						{#if isCharactersChecked}
							<UserHeart />
							<span>Characters</span>
						{:else}
							<Photo />
							<span>Artwork</span>
						{/if}
					</div>
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
			<button
				on:click={() => {
					isCharactersChecked = true;
					isOpen = false;
				}}
				class="w-full text-left text-gray-900 cursor-default select-none relative p-4 text-sm hover:bg-[#C9BFFF0D] hover:cursor-pointer"
				id="listbox-option-0"
			>
				<div class="flex flex-col text-[#C7C6CA]">Characters</div>
			</button>

			<button
				on:click={() => {
					isCharactersChecked = false;
					isOpen = false;
				}}
				class="text-gray-900 w-full text-left cursor-default select-none relative p-4 text-sm hover:bg-[#C9BFFF0D] hover:cursor-pointer"
				id="listbox-option-0"
			>
				<div class="flex flex-col text-[#C7C6CA]">Artwork</div>
			</button>
		</ul>
	</div>
</div>
