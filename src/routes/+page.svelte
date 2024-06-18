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
  import {Modal} from '@sveltestrap/sveltestrap';
  import AppBody from "../components/AppBody.svelte";
  import { content } from '$lib/content.json';
  import BTC from '$lib/img/btc.png';
import ETH from '$lib/img/eth.png';
import SOL from '$lib/img/sol.png';
let open = false;
const toggle = () => (open = !open);
</script>

<AppBody content={content.home} />

<div class="wallet">
  <button id='crypto' on:click={toggle}  disabled>
    <img src={BTC} alt="BTC logo" class='cryptoLogo'/>
    <img src={ETH} alt="ETH logo" class='cryptoLogo'/>
    <img src={SOL} alt="SOL logo" class='cryptoLogo'/>
  </button>
    <Modal body header="Addresses" isOpen={open} {toggle}>
      <span class="addy"><b>Bitcoin:</b> addy </span>
      <span class="addy"><b>Etherium:</b> addy</span>
      <span class="addy"><b>Solana:</b> addy</span>
  </Modal>
</div>

<style>
  .cryptoLogo {
  max-width: 2em;
}
.wallet {
  display: block;
  position: absolute !important;
  bottom:0;
  right:1rem;
}

.addy {
  display: block;
}

#crypto {
  background: none;
  border: none;
}

#crypto:hover {
  border: 1px solid rgba(0,0,255,0.1);
  border-radius: 0.5rem;
  transform:scale(1.01);
}
</style>

