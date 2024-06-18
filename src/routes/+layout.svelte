<script lang="ts">
  import {Modal} from '@sveltestrap/sveltestrap';
  import RespNav from '../components/RespNav.svelte';
  import BTC from '$lib/img/btc.png';
import ETH from '$lib/img/eth.png';
import SOL from '$lib/img/sol.png';
let open = false;
const toggle = () => (open = !open);
</script>
<div>
<div id="RespNav" class="sticky-top">
  <RespNav />
</div>
<slot></slot>
</div>

<div class="wallet sticky-bottom">
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
  #RespNav {
    /* position:relative;
    top: 0;
    left: 0; */
    width: 100%;
    z-index:
    999;
  }

.cryptoLogo {
  max-width: 2em;
}
.wallet {
  position: absolute;
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