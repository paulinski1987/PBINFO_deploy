<script>
	import Fullpage from 'svelte-fullpage.js';
	import  ServiceCard  from '../../components/services/ServiceCard.svelte';
	import {services} from '../../components/services/serviceDesc.json';

  const  options = {
    licenseKey: 'gplv3-license',
		navigation: true,
		// responsiveWidth: 700,
		// anchors: ['Renovations', 'Outdoors', 'Kitchen&Bath', 'Windows'],
		// onLeave: function(origin, destination, direction){
		// 	console.log("Leaving section" + origin.index);
		// }
	}

</script>

<Fullpage {options} class="FP">
	<div class="section S1 fp-auto-height"><div class="SVCard "><ServiceCard SVName={services.fence.name} SVList={services.fence.SVList} colorChoice={"primary"} /></div></div>
	<div class="section S2 fp-auto-height"><div class="SVCard"><ServiceCard SVName={services.deck.name} SVList={services.deck.SVList} colorChoice={"primary"} /></div></div>
	<div class="section S3 fp-auto-height"><div class="SVCard"><ServiceCard SVName={services.reno.name} SVList={services.reno.SVList} colorChoice={"primary"} /></div></div>
	<div class="section S4 fp-auto-height"><div class="SVCard"><ServiceCard SVName={services.fixtures.name} SVList={services.fixtures.SVList} colorChoice={"primary"} /></div></div>
	<div class="section S5 fp-auto-height"><div class="SVCard"><ServiceCard SVName={services.washroom.name} SVList={services.washroom.SVList} colorChoice={"primary"} /></div></div>
	<div class="section S6 fp-auto-height"><div class="SVCard"><ServiceCard SVName={services.more.name} SVP1={services.more.p1} SVList={services.more.SVList} colorChoice={"primary"} /></div></div>
</Fullpage>

<style>
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