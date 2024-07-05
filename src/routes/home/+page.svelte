<!-- Homepage -->
<script>
  import AppBody from "../../components/AppBody.svelte";
  import { content } from '$lib/content.json';
  import { navbarVisible } from "../store";
  import { onMount } from "svelte";
  onMount(() => {
  if ($navbarVisible == 'display: none;') navbarVisible.set('display: block;');
});
</script>

<AppBody content={content.home} />
