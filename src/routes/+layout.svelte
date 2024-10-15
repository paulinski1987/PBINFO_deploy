<script>
  import RespNav from '../components/RespNav.svelte';
  import Seo from 'sk-seo';
</script>

<Seo 
title="Paul Banks - Handyman Services"
description="Handyman services in Okotoks Calgary, Diamond Valley &amp High River providing quality home maintenance renovation &amp and repairs, fully insured with liability and WCB"
keywords="handyman company calgary,calgary handyman company,handyman companies calgary,calgary handyman companies,handyman services calgary,calgary handyman services,handyman,handyman services, handyman company okotoks,okotoks handyman company,handyman companies okotoks,okotoks handyman companies,handyman services okotoks,okotoks handyman services, handyman company high river,high river handyman company,handyman companies high river,high river handyman companies,handyman services high river,high river handyman services, handyman company diamond valley,diamond valley handyman company,handyman companies diamond valley,diamond valley handyman companies,handyman services diamond valley,diamond valley handyman services"
>
<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="Paul Banks - Handyman Services" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="Quality home maintenance, rennovation and repair services in Okotoks, Calgary, &amp the surrounding area." />
		<meta property="og:description" content="Handyman services in Okotoks Calgary, Diamond Valley &amp High River providing quality home maintenance renovation &amp and repairs, fully insured with liability and WCB" />
		<meta property="og:url" content="https://www.paulbanks.info/" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Paul Banks - Handyman Services" />
		<meta name="twitter:description" content="Handyman services in Okotoks Calgary, Diamond Valley &amp High River providing quality home maintenance renovation &amp and repairs, fully insured with liability and WCB" />
</Seo>

<svelte:head>
  <title>PB-HS Welcome!</title>
  <meta name='description' content='Handyman services for Calgary, Okotoks, High River, Black Diamond and Turner Valley' />
  <meta name="google-site-verification" content="1iOv3wgwnaCIsEteH7V_rQx_42h-G38Y2y4v9vMrbeE" />
</svelte:head>
<div>
<div id="RespNav" class="sticky-top">
  <RespNav />
</div>
<slot></slot>
</div>

<style>
  #RespNav {
    /* position:relative;
    top: 0;
    left: 0; */
    overflow: hidden;
    width: 100%;
    z-index:
    999;
  }

</style>