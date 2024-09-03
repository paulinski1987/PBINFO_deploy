<script>
  import RespNav from '../components/RespNav.svelte';
</script>

<svelte:head>
  <title>Handyman Services</title>
  <meta name='description' content='Handyman services for Calgary, Okotoks, High River, Black Diamond and Turner Valley' />
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