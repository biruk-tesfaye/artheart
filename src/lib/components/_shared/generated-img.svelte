<script>
	export let imgSrc = '';
	import Comments from '$lib/assets/icons/comments.svg.svelte';
	import generated5 from '$lib/assets/images/generated/5.png';
</script>

<div class="relative group overflow-hidden">
	<img
		src={imgSrc}
		alt="img"
		width="283"
		height="397"
		class="cursor-pointer max-w-[283px] w-full object-cover object-center h-auto aspect-[calc(282/397)]"
	/>
	<div
		class="absolute group-hover:bottom-0 -bottom-24 w-full h-auto md:rounded-t-lg p-2
    flex flex-col gap-2 transition-all duration-300
    "
	>
		<div
			class="absolute top-0 left-0 w-full h-full z-0 md:bg-[#1B1B1F] bg-[#1B1B1FCC] backdrop-blur-sm
			md:rounded-t-lg
			"
		/>
		<p class="relative z-10 text-sm text-sys-on-surface font-medium">Diana</p>
		<div class="relative z-10 flex justify-between items-center">
			<div class="flex gap-2">
				<div class="w-6 h-6 bg-red-100 overflow-hidden rounded-full">
					<img src={generated5} width="24" height="24" alt="" />
				</div>
				<p class="text-sm text-sys-on-surface font-medium">John Doe</p>
			</div>
			<div class="flex gap-1">
				<Comments class="w-4 h-4" />
				<span class="text-sys-on-surface text-xs font-medium">3.3k</span>
			</div>
		</div>
	</div>
</div>
