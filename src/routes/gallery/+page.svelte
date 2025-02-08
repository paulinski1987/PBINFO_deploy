<script>
  import { onMount } from 'svelte';
  import { navbarVisible } from '../store';

onMount(() => {
  if ($navbarVisible == 'display: none;') navbarVisible.set('display: block;');
});

  import SlideShow from '../../components/swiper/SlideShow.svelte';
</script>

<div class="container">
  <div class="row">
    <div class="col">
      <h2 class="text-center mt-3">Gallery</h2>
      <hr />
    </div>
  </div>
  <div class="row">
    <div class="col slideShow">
      <SlideShow />
    </div>
  </div>
</div>

<style>
  * {
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .slideShow {
    /* max-width: 500px !important; */
  }

  hr {
    max-width: 600px;
    margin: auto;
    margin-bottom: 2em;
    text-align: center;
    color: #f37022;
    opacity: 1;
  }


  h2 {
  color: #f37022;
  font-weight:bolder;
}
</style>