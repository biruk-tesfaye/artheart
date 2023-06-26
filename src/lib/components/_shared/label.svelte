<script>
	export let isActive = false;
</script>

<button
	on:click={() => (isActive = !isActive)}
	class:active={isActive}
	class=" rounded-lg flex gap-2 justify-center items-center
 px-3 py-[6px] text-sys-on-surface
 focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none

 border border-sys-outline-variant transition-all duration-150 ease-linear hover:scale-[0.95]

 {isActive ? 'bg-primary' : 'bg-[#C9BFFF0D]'}
 "
>
	<slot />
</button>
