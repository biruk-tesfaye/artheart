<script>
	import logo from '$lib/assets/images/logo.png';
	import Twitter from '$lib/assets/icons/twitter.svg.svelte';
	import Discord from '$lib/assets/icons/discord.svg.svelte';
</script>

<div class="w-full h-[1px] bg-[#44474F]" />
<div class="py-8 px-4 max-w-5xl w-full mx-auto flex flex-col gap-10 items-start">
	<div
		class="flex flex-col gap-6 md:gap-0 md:flex-row justify-center items-center md:justify-between w-full"
	>
		<div class="flex flex-col gap-4 justify-center">
			<a href="/" class="flex gap-1 justify-center md:justify-start">
				<img src={logo} alt="logo" class="max-w-[42px] h-8 aspect-[calc(42/32)]" />
				<span class=" text-2xl font-bold text-white align-middle">ArtHeart</span>
			</a>
			<p class="text-base md:text-2xl text-[#C7C6CA] text-center md:text-left">
				Bring your heart’s desire to life..
			</p>
		</div>
		<div class="flex gap-4 flex-col self-stretch md:self-auto">
			<p class="text-[#C7C6CA] text-base font-medium w-full text-center md:text-left">
				Join newsletter
			</p>
			<div class="flex flex-col md:flex-row gap-3 w-full">
				<input
					type="text"
					class=" px-3 py-2 w-full md:max-w-[200px] rounded-md border border-[#44474F]
				 bg-[#23262F] text-[#E5DEFF] placeholder-[#E5DEFF] placeholder-opacity-50
				 focus:ring-1 focus:ring-inset focus:ring-[#5D3FE0] focus:outline-none
				 text-sm min-w-[225px]
				 "
					placeholder="Email"
				/>
				<button
					class="flex-shrink-0 bg-[#5D3FE0] rounded-md px-4 md:px-6 py-[6px] md:py-[10px] text-white transition-all duration-150 ease-linear hover:scale-[0.95]"
				>
					Subscribe
				</button>
			</div>
		</div>
	</div>

	<div class="w-full flex flex-col gap-8">
		<div class="w-full h-[1px] bg-[#44474F]" />

		<div
			class="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-center md:justify-between w-full"
		>
			<p class="text-[#C7C6CA] text-base font-medium text-center">
				2023 Copyright ©ArtHeart.ai. All rights reserved
			</p>
			<div class="flex gap-6 justify-center">
				<a href="https://twitter.com" target="_blank"> <Twitter class="w-6 h-6" /></a>
				<a href="https://discord.com" target="_blank"><Discord class="w-6 h-6" /></a>
			</div>
		</div>
	</div>
</div>
