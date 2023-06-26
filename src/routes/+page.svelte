<script>
	import Search from '$lib/assets/icons/search.svg.svelte';
	import UserHeart from '$lib/assets/icons/user-heart.svg.svelte';
	import Photo from '$lib/assets/icons/photo.svg.svelte';
	import TrendingUpArrow from '$lib/assets/icons/trending-up-arrow.svg.svelte';
	import ArrowDown from '$lib/assets/icons/arrow-down.svg.svelte';
	import Label from '$lib/components/_shared/label.svelte';
	import GeneratedImg from '$lib/components/_shared/generated-img.svelte';

	import generated1 from '$lib/assets/images/generated/1.png';
	import generated2 from '$lib/assets/images/generated/2.png';
	import generated3 from '$lib/assets/images/generated/3.png';
	import generated4 from '$lib/assets/images/generated/4.png';
	import generated5 from '$lib/assets/images/generated/5.png';

	import Dropdown from '$lib/components/_shared/dropdown.svelte';
	import CheckBoxDropdown from '$lib/components/_shared/check-box-dropdown.svelte';
</script>

<svelte:head>
	<title>ArtHeart | Ai Generator</title>
</svelte:head>
<div class="px-4">
	<!-- search bar and text -->
	<div class="pt-8 pb-3 max-w-5xl mx-auto flex flex-col gap-4">
		<h2 class="hidden md:block text-center text-4xl font-bold text-[#E5DEFF] font-serif">
			Who is in your heart?
		</h2>
		<div class="relative">
			<span class="absolute inset-y-0 left-0 pl-3 flex items-center">
				<Search class="w-5 h-5 text-[#E5DEFF]" />
			</span>
			<input
				type="text"
				class="pl-10 pr-4 py-2 w-full rounded-md border border-[#44474F]
				 bg-[#23262F] text-[#E5DEFF] placeholder-[#E5DEFF] placeholder-opacity-50
				 focus:ring-1 focus:ring-inset focus:ring-[#5D3FE0] focus:outline-none
				 text-sm
				 "
				placeholder="Describe your perfect match..."
			/>
		</div>
	</div>
	<!-- search bar filters and categories -->
	<div class="max-w-5xl mx-auto flex flex-col gap-3">
		<div class="flex self-stretch justify-between items-start">
			<div class="block md:hidden">
				<CheckBoxDropdown />
			</div>
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
 px-3 py-[6px] text-[#C7C6CA]
 focus:ring-1 focus:ring-inset focus:ring-[#5D3FE0] focus:outline-none

 border border-[#44474F]
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
