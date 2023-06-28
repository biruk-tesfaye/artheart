<script>
	import SignupBanner from '$lib/assets/images/signup-banner.png';
	import Close from '$lib/assets/icons/close.svg.svelte';
	import Logo from '$lib/assets/icons/logo.svg.svelte';

	import Google from '$lib/assets/icons/social/google.svg.svelte';
	import Twitter from '$lib/assets/icons/social/twitter.svg.svelte';
	import Facebook from '$lib/assets/icons/social/facebook.svg.svelte';
	import Discord from '$lib/assets/icons/social/discord.svg.svelte';
</script>

<section class="w-full h-screen bg-sys-dark flex justify-start items-start">
	<div class="flex w-[640px] bg-yellow-300">
		<img
			src={SignupBanner}
			alt="signup banner"
			width="640"
			height="1024"
			class="max-h-screen h-full max-w-[100%] object-contain object-center"
		/>
	</div>

	<div class="flex-1 relative flex justify-center items-center h-full">
		<button class="absolute right-12 top-12 flex h-10 w-10 items-center justify-center">
			<Close class="w-10 h-10" />
		</button>
		<div
			class="my-auto flex flex-col items-center h-full justify-between content-between gap-6 px-6 py-16 md:px-16 text-white"
		>
			<div class="flex gap-2">
				<Logo />
				<span class="text-2xl text-white font-serif">ArtHeart</span>
			</div>
			<!-- main form -->
			<div class="flex flex-1">
				<div
					class="flex self-center justify-center flex-col gap-8 items-center w-full max-w-[560px]"
				>
					<!-- title -->
					<div class="w-full">
						<h1
							class="w-full tracking-[-0.72px] leading-[44px] text-center text-4xl font-bold font-serif text-sys-on-primary"
						>
							Create an account to start chatting with Jane
						</h1>
						<p class="text-base font-medium text-sys-on-surface-variant text-center">
							Already have an account? <a href="/login" class="text-tertiary">Sign in</a>
						</p>
					</div>
					<!-- Form inputs -->
					<div class="flex flex-col gap-6 w-full">
						<input
							type="text"
							class=" px-3 py-2 w-full rounded-md border border-sys-outline-variant
				bg-sys-surface-variant text-[#E5DEFF] placeholder-[#E5DEFF] placeholder-opacity-50
				focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none
				text-sm"
							placeholder="Display Name"
						/>
						<input
							type="email"
							class=" px-3 py-2 w-full rounded-md border border-sys-outline-variant
				bg-sys-surface-variant text-[#E5DEFF] placeholder-[#E5DEFF] placeholder-opacity-50
				focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none text-sm"
							placeholder="Email"
						/>
						<input
							type="password"
							class=" px-3 py-2 w-full rounded-md border border-sys-outline-variant
				bg-sys-surface-variant text-[#E5DEFF] placeholder-[#E5DEFF] placeholder-opacity-50
				focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none
				text-sm"
							placeholder="Password"
						/>
						<button
							class="flex-shrink-0 bg-primary rounded-md px-4 md:px-6 py-[6px] md:py-[10px] text-white transition-all duration-150 ease-linear hover:scale-[0.98]"
						>
							Create an account
						</button>
					</div>

					<!-- Other methods -->
					<div class="w-full flex flex-col gap-6">
						<p class="text-center text-sm text-sys-on-background">or continue with</p>
						<div class="flex gap-4 justify-center">
							<button
								class=" rounded-lg flex gap-2 justify-center items-center
				pl-4 pr-6 py-[10px] text-sys-on-surface
				focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none
				border border-sys-outline transition-all duration-150 ease-linear hover:scale-[0.98]
				bg-[#C9BFFF0D]"
							>
								<Google class="w-5 h-5" />
								<span class="text-sm font-medium text-sys-on-background">Google</span>
							</button>
							<button
								class=" rounded-lg flex gap-2 justify-center items-center
				pl-4 pr-6 py-[10px] text-sys-on-surface
				focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none
				border border-sys-outline transition-all duration-150 ease-linear hover:scale-[0.98]
				bg-[#C9BFFF0D]"
							>
								<Discord class="w-5 h-5" />
								<span class="text-sm font-medium text-sys-on-background">Discord</span>
							</button>
							<button
								class=" rounded-lg flex gap-2 justify-center items-center
					pl-4 pr-6 py-[10px] text-sys-on-surface
					focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none
					border border-sys-outline transition-all duration-150 ease-linear hover:scale-[0.98]
					bg-[#C9BFFF0D]"
							>
								<Twitter class="w-5 h-5" />
								<span class="text-sm font-medium text-sys-on-background">Twitter</span>
							</button>
							<button
								class=" rounded-lg flex gap-2 justify-center items-center
				pl-4 pr-6 py-[10px] text-sys-on-surface
				focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none
				border border-sys-outline transition-all duration-150 ease-linear hover:scale-[0.98]
				bg-[#C9BFFF0D]"
							>
								<Facebook class="w-5 h-5" />
								<span class="text-sm font-medium text-sys-on-background">Facebook</span>
							</button>
						</div>
					</div>

					<!--  -->
					<div>
						<p class="text-center text-sm text-sys-on-surface-variant">
							By continuing you confirm that you have read and agree to our
							<a href="/tos" class="text-tertiary"> Terms of Service</a>,
							<a href="/privacy" class="text-tertiary">Privacy Policy</a> and to receive emails and updates
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
