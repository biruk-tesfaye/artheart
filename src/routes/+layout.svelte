<script>
	import '$lib/assets/styles/app.css';
	import Header from '$lib/components/_shared/header.svelte';
	import Footer from '$lib/components/_shared/footer.svelte';
</script>

<Header />
<slot />
<Footer />
