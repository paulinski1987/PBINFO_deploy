<!-- Homepage -->
<script>
  import AppBody from "../components/AppBody.svelte";
  import { content } from '$lib/content.json';
  import Wallet from '../components/Wallet.svelte';
</script>

<AppBody content={content.home} />

<Wallet --position="absolute" --alignBottom="5px" --alignLeft="1rem" />
