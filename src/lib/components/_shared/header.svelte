<script>
	import logo from '$lib/assets/images/logo.png';
	import Discord from '$lib/assets/icons/social/discord.svg.svelte';
</script>

<div
	class="bg-[#1B1B1F] max-w-7xl mx-auto w-full px-4 py-2 md:px-8 md:py-4 flex justify-between items-center self-stretch"
>
	<div class="flex items-center gap-6">
		<a href="/" class="flex gap-1 items-center justify-center">
			<img src={logo} alt="logo" class="max-w-[42px] h-8 aspect-[calc(42/32)]" />
			<span class="hidden md:inline text-2xl font-bold text-white align-middle">ArtHeart</span>
		</a>
		<div class="hidden md:block w-[1px] self-stretch bg-sys-outline-variant" />
	</div>
	<div class="flex gap-4 items-center">
		<a href="https://discord.com" target="_blank" class="p-1 border border-[#8E9099] rounded-md">
			<Discord class="w-6 h-6" />
		</a>
		<a
			href="/signup"
			class="bg-primary rounded-md px-4 md:px-6 py-[6px] md:py-[10px] text-white transition-all duration-150 ease-linear hover:scale-[0.95]"
		>
			Get Started
		</a>
	</div>
</div>
<div class="w-full h-[1px] bg-sys-outline-variant" />
