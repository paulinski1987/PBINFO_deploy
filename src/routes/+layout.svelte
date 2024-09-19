<script>
  import RespNav from '../components/RespNav.svelte';
</script>

<svelte:head>
  <title>Handyman Services</title>
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