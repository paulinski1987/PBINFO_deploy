<script>
	/**
	 * fullpage.js used for css3 snap effect on scrolling
	 * https://github.com/alvarotrigo/fullPage.js
	 * License: gplv3-license'
	*/
	// import Fullpage from 'svelte-fullpage.js';
	import  ServiceCard  from '../../components/services/ServiceCard.svelte';
	import { services } from '$lib/serviceDesc.json';
	import { onMount } from 'svelte';
	import { navbarVisible } from '../store';



	let Fullpage;

	onMount(async () => {
	if ($navbarVisible == 'display: none;') navbarVisible.set('display: block;');
	
	const module = await import('svelte-fullpage.js');
  Fullpage = module.default;
});

  const  options = {
    licenseKey: 'gplv3-license',
		navigation: true,
		// responsiveWidth: 700,
		loopTop: true, loopBottom: true,
		anchors: ['carpentry', 'fixtures', 'other', 'custom']
	}

</script>
<svelte:head>
	<title>Available Services</title>
</svelte:head>
<!-- 
fullpage.js used for css3 snap effect on scrolling
	 * https://github.com/alvarotrigo/fullPage.js
	 * License: gplv3-license' -->
<svelte:component this={Fullpage} {options} class="FP">
	<div class="section S1 fp-auto-height" data-anchor="carpentry"><div class="SVCard"><ServiceCard SVName={services.carpentry.name} SVList={services.carpentry.SVList} colorChoice={"primary"} up={services.carpentry.up} down={services.carpentry.down} /></div></div>
	<div class="section S2 fp-auto-height" data-anchor="fixtures"><div class="SVCard"><ServiceCard SVName={services.fixtures.name} SVList={services.fixtures.SVList} colorChoice={"primary"} up={services.fixtures.up} down={services.fixtures.down}/></div></div>
	<div class="section S3 fp-auto-height" data-anchor="other"><div class="SVCard "><ServiceCard SVName={services.other.name} SVList={services.other.SVList} colorChoice={"primary"} up={services.other.up} down={services.other.down} /></div></div>
	<div class="section S4 fp-auto-height" data-anchor="custom"><div class="SVCard"><ServiceCard SVName={services.custom.name} SVList={services.custom.SVList} colorChoice={"primary"} up={services.custom.up} down={services.custom.down} /></div></div>
</svelte:component>



<style>

.FP {
    opacity: 0.4;
  }
	.SVCard {
    /* TEST */
		display: block; 
		/* TEST */



		max-width: 900px; 
		/* max-height: 100vh; TEST  */
    /* max-height: 500px; */
    /* min-height: vh !important; */
		margin:auto;
		opacity: 0.7;
		border:1px  solid #f37022;
	}

	.S1, .S2, .S3, .S4{
		/* background-color: black; */
		background-position:center;
    /* filter: brightness(80%); */
    background-size:cover;
    background-repeat: no-repeat;
	}

	.S1 {
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('./img/other.png'); */
    /* background-image: url('./img/other.png'), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)); */
		background-image: url('./img/baseboardsDesktop.png');
	}
	.S2 {
		background-image: url('./img/bath.png');
	}
	.S3 {
    background-image: url('./img/renoVations.png');
	}

	.S4 {
		background-image: url('./img/clay-banks-unsplash.png');
	}



	@media only screen and (max-width:500px) {
  .S1 {
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('./img/other.png'); */
    /* background-image: url('./img/other.png'), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)); */
		background-image: url('./img/mobile/baseboardsMobile.png');
	}
	.S2 {
		background-image: url('./img/mobile/bath.png');
	}
	.S3 {
    background-image: url('./img/mobile/clay-banks-unsplash_mobile.png');
	}

	}
</style>