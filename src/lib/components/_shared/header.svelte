<script>
	import discordLogo from '$lib/assets/images/discord.png';
	import logo from '$lib/assets/images/logo.png';
	import Discord from '$lib/assets/icons/discord.svg.svelte';
</script>

<div
	class="bg-[#1B1B1F] max-w-7xl mx-auto w-full px-4 py-2 md:px-8 md:py-4 flex justify-between items-center self-stretch"
>
	<div class="flex items-center gap-6">
		<a href="/" class="flex gap-1 items-center justify-center">
			<img src={logo} alt="logo" class="max-w-[42px] h-8 aspect-[calc(42/32)]" />
			<span class="hidden md:inline text-2xl font-bold text-white align-middle">ArtHeart</span>
		</a>
		<div class="hidden md:block w-[1px] self-stretch bg-[#44474F]" />
	</div>
	<div class="flex gap-4 items-center">
		<a href="https://discord.com" target="_blank" class="p-1 border border-[#8E9099] rounded-md">
			<!-- <img src={discordLogo} alt="discord" class="w-6 h-6" /> -->
			<Discord class="w-6 h-6" />
		</a>
		<button class="bg-[#5D3FE0] rounded-md px-4 md:px-6 py-[6px] md:py-[10px] text-white">
			Get Started
		</button>
	</div>
</div>
<div class="w-full h-[1px] bg-[#44474F]" />
