<script>
import { Container } from '@sveltestrap/sveltestrap';
export let content;
</script>

<Container fluid>
  <h2 class="text-center mt-3" >{content.h2}</h2>
  <hr />
  <p class='text-center'>{content.body}</p>
</Container>

<style>
  h2 {
    color: #f37022;
  }
</style>
