<!-- Homepage -->
<script>
  // import AppBody from "../../components/AppBody.svelte";
  import { content } from '$lib/content.json';
  import { navbarVisible } from "../store";
  import { onMount } from "svelte";
  import { Container } from '@sveltestrap/sveltestrap';
  onMount(() => {
  if ($navbarVisible == 'display: none;') navbarVisible.set('display: block;');
});
</script>

<!-- <AppBody content={content.home} /> -->


<Container fluid>
  <h2 class="text-center mt-3" >Paul Banks Handyman Services</h2>
  <h5 class="text-center">
    <small class="text-body-secondary">Calgary, Okotoks, High River, Diamond Valley</small>
  </h5>
  <hr />
  <div class="content text-center">
    <p>Welcome to Paul Banks Handyman Services. I am still working on finishing up the website but for now you can:</p>
    <ul>
      <li>
        Take a look at many of the services I offer on the <a href="/services">Services</a> page.
      </li>
      <li>
        Read a little bit about me or read some client reviews on the <a href="/about">About</a> page.
      </li>
      <li>
        Get my phone number, email, or submit a service request on the <a href="/contact">Contact page.</a>
      </li>
    </ul>
  </div>
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

  .content ul  {
    display: inline-block;
  }

  .content ul li {
    text-align: left;
  }

  .content ul li a {
    color: #f37022;
    text-decoration: none;
  }
</style>
