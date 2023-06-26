<script>
	export let isActive = false;
</script>

<button
	on:click={() => (isActive = !isActive)}
	class=" rounded-lg flex gap-2 justify-center items-center
 px-3 py-[6px] text-[#C7C6CA]
 focus:ring-1 focus:ring-inset focus:ring-[#5D3FE0] focus:outline-none

 border border-[#44474F] transition-colors duration-150

 {isActive ? 'bg-[#5D3FE0]' : 'bg-[#C9BFFF0D]'}
 "
>
	<slot />
</button>
