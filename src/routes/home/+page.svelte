<!-- Homepage -->
<script>
  // import AppBody from "../../components/AppBody.svelte";
  import { content } from '$lib/content.json';
  import { navbarVisible } from "../store";
  import { onMount } from "svelte";
  // import { Container } from '@sveltestrap/sveltestrap';
  onMount(() => {
  if ($navbarVisible == 'display: none;') navbarVisible.set('display: block;');
});
</script>

<!-- <AppBody content={content.home} /> -->


<div class="container">
  <h2 class="text-center mt-3" >Paul Banks Handyman Services</h2>
  <h5 class="text-center">
    <small class="text-body-secondary">Calgary, Okotoks, High River, Diamond Valley</small>
  </h5>
  <hr />
  <div class="content">

    <p>I'm not a fan of long introductions so let's get to what's important for a homeowner.</p>

    <p>I provide a wide range of interior and exterior maintenance, repair and renovation services. Aesthetics are just as important as functionality and take a lot of pride in the quality of my work.</p>

    <p>I am fully insured, fulfill my commitments, fairness and honesty are important to me. </p>

    <p>For an overview of some of the work I do (plus some nifty images) see the <a href="/services">Services</a> section. If you can't find what you need the Contact page has a convenient service request form. I do my best to respond to all requests the same day they are made, preferably within a few hours.</p>

    <p>The <a href="/about">About</a> section has some testimonials from my valued clients and a small section about myself. </p>

    <p>Thank you for considering my services. I hope to hear from you soon!</p>

    <p class="text-end">- Paul Banks</p>
  </div>
</div>

<style>
  h2 {
    color: #f37022;
    font-weight:bolder;
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

  p {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: #f37022;
    font-weight: bolder;
  }
</style>
