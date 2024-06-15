<!-- <svelte:head> -->
  <!-- <link rel="stylesheet" href="https://bootswatch.com/5/cyborg/bootstrap.min.css" /> cyborg-->
  <!-- <link rel="stylesheet" href="https://bootswatch.com/5/vapor/bootstrap.min.css"> purple -->
  <!-- <link rel="stylesheet" href="https://bootswatch.com/5/lux/bootstrap.min.css"> -->
  <!-- <link rel="stylesheet" href="https://bootswatch.com/5/slate/bootstrap.min.css"> -->
  <!-- <link rel="stylesheet" href="%sveltekit.assets%/bootstrap.css">
</svelte:head>
<script lang="ts">
  // import "./globalStyles.scss";
  import RespNav from "../components/RespNav.svelte";
</script>

<div id="RespNav">
  <RespNav />
</div>

text

<style>
  #RespNav {
    opacity:1;
  }
</style> -->




<script>
  import AppBody from "../components/AppBody.svelte";
  import { content } from '$lib/content.json';
</script>

<AppBody content={content.home} />



