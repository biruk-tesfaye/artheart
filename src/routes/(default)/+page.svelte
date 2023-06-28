<script>
	import Search from '$lib/assets/icons/search.svg.svelte';
	import Label from '$lib/components/_shared/label.svelte';
	import GeneratedImg from '$lib/components/_shared/generated-img.svelte';
	import generated1 from '$lib/assets/images/generated/1.png';
	import generated2 from '$lib/assets/images/generated/2.png';
	import generated3 from '$lib/assets/images/generated/3.png';
	import generated4 from '$lib/assets/images/generated/4.png';
	import generated5 from '$lib/assets/images/generated/5.png';

	import Dropdown from '$lib/components/_shared/dropdown.svelte';
	import TypeDropdown from '$lib/components/_shared/type-dropdown.svelte';

	import DownloadApp from '$lib/components/download-app/download-app.svelte';
</script>

<svelte:head>
	<title>ArtHeart | Ai Generator</title>
</svelte:head>

<!-- Show DownloadApp component after some scroll for mobile devices -->
<DownloadApp />

<div class="px-4">
	<!-- search bar and text -->
	<div class="pt-8 pb-3 max-w-5xl mx-auto flex flex-col gap-4">
		<h2 class="hidden md:block text-center text-4xl font-bold text-sys-on-primary font-serif">
			Who is in your heart?
		</h2>
		<div class="relative">
			<span class="absolute inset-y-0 left-0 pl-3 flex items-center">
				<Search class="w-5 h-5 text-sys-on-surface" />
			</span>
			<input
				type="text"
				class="pl-10 pr-4 py-2 w-full rounded-md border border-sys-outline-variant
				 bg-sys-surface-variant text-sys-on-surface-variant placeholder-sys-on-surface-variant placeholder-opacity-50
				 focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none
				 text-sm
				 "
				placeholder="Describe your perfect match..."
			/>
		</div>
	</div>
	<!-- search bar filters and categories -->
	<div class="max-w-5xl mx-auto flex flex-col gap-3">
		<div class="flex self-stretch justify-between items-start">
			<div>
				<TypeDropdown />
			</div>

			<div>
				<Dropdown />
			</div>
		</div>
		<div class="flex gap-2 snap-x overflow-x-scroll container-snap">
			<Label isActive={true}>Featured</Label>
			<Label>Celebrity</Label>
			<Label>Anime</Label>
			<Label>Celebrity</Label>
			<Label>Anime</Label>
			<Label>Celebrity</Label>
			<Label>Anime</Label>
			<Label>Celebrity</Label>
			<Label>Anime</Label>
			<Label>Celebrity</Label>
			<Label>Anime</Label>
			<Label>Celebrity</Label>
			<Label>Anime</Label>
			<Label>Celebrity</Label>
			<Label>Anime</Label>
			<Label>Celebrity</Label>
			<Label>Anime</Label>
		</div>
	</div>

	<!-- search results -->
	<div class="py-6 px-2 max-w-7xl mx-auto">
		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 w-full">
			<GeneratedImg imgSrc={generated1} />
			<GeneratedImg imgSrc={generated2} />
			<GeneratedImg imgSrc={generated3} />
			<GeneratedImg imgSrc={generated4} />
			<GeneratedImg imgSrc={generated5} />
			<GeneratedImg imgSrc={generated1} />
			<GeneratedImg imgSrc={generated2} />
			<GeneratedImg imgSrc={generated3} />
			<GeneratedImg imgSrc={generated4} />
			<GeneratedImg imgSrc={generated5} />
			<GeneratedImg imgSrc={generated1} />
			<GeneratedImg imgSrc={generated2} />
			<GeneratedImg imgSrc={generated3} />
			<GeneratedImg imgSrc={generated4} />
			<GeneratedImg imgSrc={generated5} />
			<GeneratedImg imgSrc={generated1} />
			<GeneratedImg imgSrc={generated2} />
			<GeneratedImg imgSrc={generated3} />
			<GeneratedImg imgSrc={generated4} />
			<GeneratedImg imgSrc={generated5} />
		</div>

		<div class="pt-8 pb-6 flex justify-center w-full">
			<button
				class=" rounded-lg flex gap-2 justify-center items-center
 px-3 py-[6px] text-sys-on-surface
 focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none

 border border-sys-outline-variant
 bg-[#C9BFFF0D]
 transition-all duration-150 ease-linear hover:scale-[0.95]
 "
			>
				Loading More
			</button>
		</div>
	</div>
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.container-snap::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.container-snap {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		scroll-behavior: smooth;
	}
</style>
