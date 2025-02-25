<!-- Homepage -->
<script>
  import { navbarVisible } from "../store";
  import { onMount } from "svelte";
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

    <h3 class="text-center">Quality Handyman Services You Can Trust</h3>

    <p class="firstParagraph">
      I specialize in a wide range of interior and exterior maintenance, repair, and renovation services, delivering both functionality and aesthetics with every project. With a strong commitment to quality craftsmanship, I take pride in providing reliable, high-standard work tailored to your needs.
    </p>

    <p>
      As a fully insured professional, I uphold honesty, fairness, and dependability in every job. My goal is to complete projects efficiently while ensuring top-tier results.
    </p>

    <p>
      Explore the <a href="/gallery">Gallery</a> page to see examples of past work, and visit the <a href="/services">Services</a> section for a comprehensive list of what I offer. If you don’t see what you need, feel free to submit a request via the <a href="/contact">Contact</a> page—I strive to respond to inquiries the same day, often within a few hours.
    </p>

    <p>
      Learn more about my background and hear from satisfied clients in the <a href="/about">About</a> section.
    </p>

    <p>
      Thank you for considering my services—I look forward to helping with your next project!
    </p>

    <p class="text-end">- Paul Banks</p>
  </div>
</div>

<style>
  h2 {
    color: #f37022;
    font-weight:bolder;
  }

  h3 {
    color: #f37022;
    margin-top: 1em;
  }
  hr {
    max-width: 600px;
    margin: auto;
    margin-bottom: 1em;
    text-align: center;
    color: #f37022;
    opacity: 1;
  }


  p {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: #f37022;
    font-weight: bolder;
  }

  .firstParagraph {
    text-indent: 3em;
  }
</style>
