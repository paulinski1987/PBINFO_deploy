<script>
import {Modal} from '@sveltestrap/sveltestrap';
import BTC from '$lib/img/btc.png';
import ETH from '$lib/img/eth.png';
import SOL from '$lib/img/sol.png';

let open = false;
const toggle = () => (open = !!!open);

// export let alignBottom = "0px";
// export let alignRight = "1rem";
</script>

<div class="wallet">
  <button id='crypto' on:click={toggle}  >
    <img src={BTC} alt="BTC logo" class='cryptoLogo'/>
    <img src={ETH} alt="ETH logo" class='cryptoLogo'/>
    <img src={SOL} alt="SOL logo" class='cryptoLogo'/>
  </button>
    <Modal 
    backdrop 
    body 
    fade
    centered
    keyboard
    header="Addresses" 
    isOpen={open} 
    {toggle}>
      <div class="addressText">
      <span class="addy"><b>Bitcoin:</b> bc1q2l3mgedme0gvt9pe0m66td8p8xgz385kvahr6c </span>
      <span class="addy"><b>Etherium:</b> 0xDF7D512f7A3dF248C9CFBDe821c31A7AD72262a7</span>
      <span class="addy"><b>Solana:</b> 0xDF7D512f7A3dF248C9CFBDe821c31A7AD72262a7</span>
      </div>
  </Modal>
</div>

<style lang='scss'>
  
.cryptoLogo {
  max-width: 2em;
}
.wallet {
  display: block;
  position: var(--position) !important;
  bottom: var(--alignBottom);
  left: var(--alignLeft) !important;
}
.addressText {
  word-wrap: break-word !important;
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
  transform:scale(1.15);
}
</style>