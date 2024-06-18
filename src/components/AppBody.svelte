<script>
import { Container } from '@sveltestrap/sveltestrap';
export let content;
</script>

<Container fluid>
  <h2 class="text-center mt-3" >{content.h2}</h2>
  <h5 class="text-center">
    <small class="text-body-secondary">{content.sub || ""}</small>
  </h5>
  <hr />
  <p class='text-center'>{content.body || ""}</p>
</Container>

<style>
  h2 {
    color: #f37022;
  }
  hr {
    max-width: 600px;
    margin: auto;
    margin-bottom: 1em;
    text-align: center;
    /* color: #f37022; */
  }
</style>
