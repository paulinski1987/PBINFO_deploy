<script lang='ts'>
	/**
	 * fullpage.js used for css3 snap effect on scrolling
	 * https://github.com/alvarotrigo/fullPage.js
	 * License: gplv3-license'
	*/
	// import Fullpage from 'svelte-fullpage.js';
	import  ServiceCard  from '../../components/services/ServiceCard.svelte';
	import {services} from '$lib/serviceDesc.json';
	import { onMount } from 'svelte';

	let Fullpage;

	onMount(async () => {
	const module = await import('svelte-fullpage.js');
  Fullpage = module.default;
});

  const  options = {
    licenseKey: 'gplv3-license',
		navigation: true,
		// responsiveWidth: 700,
		loopTop: true, loopBottom: true,
		anchors: ['reno', 'fixture', 'fence', 'deck', 'washroom', 'more']
	}

</script>
<!-- 
fullpage.js used for css3 snap effect on scrolling
	 * https://github.com/alvarotrigo/fullPage.js
	 * License: gplv3-license' -->
<svelte:component this={Fullpage} {options} class="FP">
	<div class="section S3 fp-auto-height" data-anchor="reno"><div class="SVCard"><ServiceCard SVName={services.reno.name} SVList={services.reno.SVList} colorChoice={"primary"} up={services.reno.up} down={services.reno.down} /></div></div>
	<div class="section S4 fp-auto-height" data-anchor="fixture"><div class="SVCard"><ServiceCard SVName={services.fixtures.name} SVList={services.fixtures.SVList} colorChoice={"primary"} up={services.fixtures.up} down={services.fixtures.down}/></div></div>
	<div class="section S1 fp-auto-height" data-anchor="fence"><div class="SVCard "><ServiceCard SVName={services.fence.name} SVList={services.fence.SVList} colorChoice={"primary"} up={services.fence.up} down={services.fence.down} /></div></div>
	<div class="section S2 fp-auto-height" data-anchor="deck"><div class="SVCard"><ServiceCard SVName={services.deck.name} SVList={services.deck.SVList} colorChoice={"primary"} up={services.deck.up} down={services.deck.down} /></div></div>
	<div class="section S5 fp-auto-height" data-anchor="washroom"><div class="SVCard"><ServiceCard SVName={services.washroom.name} SVList={services.washroom.SVList} colorChoice={"primary"} up={services.washroom.up} down={services.washroom.down} /></div></div>
	<div class="section S6 fp-auto-height" data-anchor="more"><div class="SVCard"><ServiceCard SVName={services.more.name} SVP1={services.more.p1} SVList={services.more.SVList} colorChoice={"primary"} up={services.more.up} down={services.more.down} /></div></div>
</svelte:component>

<style>
/* 
fullpage.js used for css3 snap effect on scrolling
	 * https://github.com/alvarotrigo/fullPage.js
	 * License: gplv3-license' */
.FP {
    opacity: 0.4;
  }
	.SVCard {
    display: block;
		max-width: 800px;
    /* max-height: 500px; */
    /* height: 12em; */
		margin:auto;
		opacity: 0.8;
		border:1px  solid #f37022;
	}

	.S1, .S2, .S3, .S4, .S5, .S6 {
		/* background-color: black; */
		background-position:center;
    /* filter: brightness(80%); */
    background-size:cover;
    background-repeat: no-repeat;
	}

	.S1 {
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('./img/fence.png'); */
    /* background-image: url('./img/fence.png'), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)); */
		background-image: url('./img/fence.png');
	}
	.S2 {
		background-image: url('./img/deckwrailing.png');
	}
	.S3 {
    background-image: url('./img/renoVations.png');
	}

	.S4 {
		background-image: url('./img/clay-banks-unsplash.png');
	}
	.S5 {
		background-image: url('./img/point3d-commercial-imaging-ltd_washroom3-unsplash.png');
	}
	.S6 {
		background-image: url('./img/paulBalcony.png');
	}



	@media only screen and (max-width:500px) {
  .S1 {
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('./img/fence.png'); */
    /* background-image: url('./img/fence.png'), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)); */
		background-image: url('./img/mobile/fence_mobile.png');
	}
	.S2 {
		background-image: url('./img/mobile/deckwrailing_mobile.png');
	}
	.S3 {
    background-image: url('./img/mobile/renoVations_mobile.png');
	}

	.S4 {
		background-image: url('./img/mobile/clay-banks-unsplash_mobile.png');
	}
	.S5 {
		background-image: url('./img/mobile/point3d-commercial-imaging-ltd_washroom3-unsplash_mobile.png');
	}
	.S6 {
		background-image: url('./img/mobile/paulBalcony_mobile.png');
	}

	}
</style>