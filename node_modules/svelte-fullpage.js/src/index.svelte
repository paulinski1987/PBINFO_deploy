<div bind:this={fullpageEl}>
  <slot />
</div>

<script>
import { onMount, onDestroy, createEventDispatcher } from 'svelte';
import Fullpage from 'fullpage.js/dist/fullpage.extensions.min';
import * as constants from './constant.js';

// Options props & skip init
export let options, skipInit = false;

// Fullpage api
let api;

// HTML fullpage element
let fullpageEl;

// Events
const events = constants.EVENTS.reduce((eventsHandlers, event) => {
  return {
    ...eventsHandlers,
    [event]: (...args) => {
        emitEvent(event, args)
      }
    }
  },
{});

// Prepare the component
onMount(async () => {
  !skipInit && init()
})

// Clean destroy
onDestroy(() => {
  if (typeof api !== 'undefined' && typeof api.destroy !== 'undefined') {
    api.destroy('all');
  }
})

// Init function
function init() {
  api = new Fullpage(fullpageEl, options);
}

// Event emitter
function emitEvent(name, args) {
  // Emit the event
  emit(camelToKebab(name), ...args);

  // Run the event handler
  if (options.hasOwnProperty(name)) {
    options[name].apply(null, args);
  }
}

// Convert camel string to kebab
function camelToKebab (string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

</script>