<script context="module" lang="ts">
	export type ConfirmationCodeEvents = {
		input: string;
	};
</script>

<script lang="ts">
	import OpenedMail from '$lib/assets/icons/opened-mail.svg.svelte';

	export let email = 'robertsmith@gmail.com';
	export let confirmationLink = 'https://linktoconfirmation.com';

	import { createEventDispatcher, tick } from 'svelte';

	const dispatch = createEventDispatcher<ConfirmationCodeEvents>();

	let confirmationCode = ['', '', '', '', '', ''];
	// define inputs array to bind to the inputs
	let inputs: HTMLInputElement[] = Array(6).fill('');
	let continueButton: HTMLButtonElement;

	function handleInput(
		event: Event & { currentTarget: EventTarget & HTMLInputElement },
		index: number
	) {
		let { value } = event.currentTarget;

		if (value.toString().match(/^\d$/) && value.toString()) {
			confirmationCode[index] = value.toString();
		} else {
			confirmationCode[index] = value.toString().slice(0, 1) ?? '';
			inputs[index].value = value.toString().slice(0, 1) ?? '';
		}

		if (index < confirmationCode.length - 1 && value !== '') {
			// Move focus to next input when a value is entered
			focusInput(index + 1);
		}
		// if last input is filled then move focus to continue button
		else if (index === confirmationCode.length - 1 && value !== '') {
			continueButton.focus();
		}

		const confirmationValue = confirmationCode.join('');
		dispatch('input', confirmationValue);
	}

	function handleKeyDown(
		event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement },
		index: number
	) {
		// handle backspace and arrow keys
		if (event.key === 'Backspace' && index > 0 && confirmationCode[index] === '') {
			focusInput(index - 1);
		} else if (event.key === 'Backspace' && index > 0 && confirmationCode[index] !== '') {
			focusInput(index);
		} else if (event.key === 'ArrowLeft' && index !== 0) {
			focusInput(index - 1);
		} else if (event.key === 'ArrowRight' && index < confirmationCode.length - 1) {
			console.log(1);
			focusInput(index + 1);
		}
	}
	async function focusInput(index: number) {
		const input = inputs[index];
		input.focus();
		await tick();
		input.select();
	}
</script>

<div class="flex flex-col gap-8 items-center">
	<!-- icon -->
	<OpenedMail class="" />
	<!-- title -->
	<div class="w-full flex flex-col gap-2">
		<h1 class="text-center text-sys-on-primary text-4xl tracking-[-0.72] font-bold">
			Check your email
		</h1>
		<p class="text-center text-sys-on-surface-variant text-base font-medium">
			Click the link we sent to <a href={confirmationLink} class="text-tertiary">{email}</a> or enter
			a 6-digit code to access your account
		</p>
	</div>
	<!-- inputs -->
	<div class="flex gap-4">
		<!-- inputs  -->
		{#each confirmationCode as code, index}
			<input
				type="number"
				class=" text-center py-4 w-full rounded-md border border-sys-outline-variant bg-sys-surface-variant text-[#E5DEFF] placeholder-[#E5DEFF] placeholder-opacity-50 focus:ring-1 focus:ring-inset focus:ring-primary focus:outline-none text-sm"
				value={code}
				maxlength="1"
				on:input={(event) => handleInput(event, index)}
				on:keydown={(event) => handleKeyDown(event, index)}
				bind:this={inputs[index]}
			/>
		{/each}
	</div>
	<!-- action button -->
	<div class="w-full">
		<button
			bind:this={continueButton}
			class="w-full flex-shrink-0 bg-primary rounded-md px-4 md:px-6 py-[6px] md:py-[10px] text-white transition-all duration-150 ease-linear hover:scale-[0.98]"
		>
			Continue
		</button>
	</div>
</div>

<style>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
