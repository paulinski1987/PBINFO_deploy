<script>
  import RespNav from '../components/RespNav.svelte';
</script>

<div id="RespNav" class="sticky-top">
  <RespNav />
</div>
<slot></slot>

<style>
  #RespNav {
    /* position:relative;
    top: 0;
    left: 0; */
    width: 100%;
    z-index: 999;
  }
</style>