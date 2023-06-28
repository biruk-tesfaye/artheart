<script>
	import { browser } from '$app/environment';

	let y = 0;
	$: showMobilePopup = false;

	function closeMobilePopup() {
		showMobilePopup = false;
		localStorage.setItem('showMobilePopup', 'true');
	}

	$: {
		if (browser) {
			const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
			const hasSeenPopup = localStorage.getItem('showMobilePopup') === 'true';

			if (isMobile && y > 100 && !hasSeenPopup) {
				showMobilePopup = true;
			}
		}
	}
</script>

<svelte:window bind:scrollY={y} />
{#if showMobilePopup}
	<div
		class=" fixed z-10 top-0 left-0 bg-sys-dark/70 backdrop-blur-lg flex flex-col items-center justify-center w-full h-full"
	>
		<div class="w-[312px] relative z-20 flex flex-col rounded-xl shadow-sm bg-sys-surface-variant">
			<div class="p-6 flex flex-col gap-1 self-stretch items-center">
				<h1 class="text-sys-on-surface text-center text-2xl font-bold">Download App</h1>
				<p class="text-sm text-center text-sys-on-surface-variant">
					Use ArtHeart mobile app for optimal mobile experience
				</p>
			</div>
			<div class="p-6 pt-0 flex flex-col gap-3">
				<div class="flex flex-col gap-3 items-center self-stretch">
					<button
						class="flex-shrink-0 bg-primary rounded-md px-4 md:px-6 py-[6px] md:py-[10px] text-white transition-all duration-150 ease-linear hover:scale-[0.95]"
					>
						App Store
					</button>

					<button
						class="flex-shrink-0 bg-primary rounded-md px-4 md:px-6 py-[6px] md:py-[10px] text-white transition-all duration-150 ease-linear hover:scale-[0.95]"
					>
						Google Play
					</button>
				</div>
				<button
					on:click={closeMobilePopup}
					class="py-[10px] rounded-md text-sys-on-primary text-center">Continue in browser</button
				>
			</div>
		</div>
	</div>
{/if}
