<script>
  import { onMount } from 'svelte'; 
import {
  Modal,
  Icon,
  Popover
} from '@sveltestrap/sveltestrap';
import BTC from '$lib/img/btc.png';
import ETH from '$lib/img/eth.png';
import SOL from '$lib/img/sol.png';
import {publicKeys} from '$lib/cryptoPubKeys.json';

let open = false;
const toggle = () => (open = !!!open);

const copyKey = (coin) => {
  navigator.clipboard.writeText(coin.key);
  // toggle();
};
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
      <span class="addy"><b>{publicKeys.BTC.name}: </b>{publicKeys.BTC.key} <button class="clipboard" on:click={() => copyKey(publicKeys.BTC)}><Icon  id="BTC" name="clipboard-check"/></button></span>
      <span class="addy"><b>{publicKeys.ETH.name}: </b>{publicKeys.ETH.key} <button class="clipboard" on:click={() => copyKey(publicKeys.ETH)}><Icon id="ETH" name="clipboard-check"/></button></span>
      <span class="addy"><b>{publicKeys.SOL.name}: </b>{publicKeys.SOL.key} <button class="clipboard" on:click={() => copyKey(publicKeys.SOL)}><Icon id="SOL" name="clipboard-check"/></button></span>

      <Popover 
      target="BTC" 
      placement="top" 
      dismissible
      hideOnOutsideClick>BTC copied to clipboard!</Popover>

      <Popover 
      target="ETH" 
      placement="top" 
      dismissible
      hideOnOutsideClick>ETH copied to clipboard!</Popover>

      <Popover 
      target="SOL" 
      placement="top" 
      dismissible
      hideOnOutsideClick>SOL copied to clipboard!</Popover>
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

.clipboard {
  border: none;
  background: none;
  size: 1em;
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