<!-- ABOUT PAGE -->
<script>
  import { Image,
    Container,
    Row,
    Col
  } from '@sveltestrap/sveltestrap';
import Logo from '$lib/img/logo.png';

</script>
<Container xxl>
  <Row>
    <Col>
      <h2 class="text-center mt-3">About Info</h2>
      <hr />
    </Col>
  </Row>
  <Row>
    <Col sm="12" md="6">
      <Image fluid  id="profileImg" src={Logo} style=" border: 4px solid #f37022; border-radius: 1em; max-width: 300px;"/>
    </Col>

    <Col sm="12" md="6">
      <p class="lead">Home improvement, repair and carpentry have always been passions of mine. </p>

      <p class="text-left">Growing up I was always eager to help my father and grandfather build, fix and renovate in a variety of projects, developing a proficient set of skills along the way.</p>

      <p class="text-left">Since graduating in 2006, I have worked on residential and commercial projects as a carpenter, glazier, roofer and cabinet installer.</p>

      <p class="text-left">When it comes to my work as a handyman I bring diverse skills appropriate for many of the projects a homeowner would like.</p>

      <p class="text-left">As a sidenote I also do a bit of web development and built this website myself, so should you ever require a website give me a call!</p>
    </Col>
  </Row>
  <hr class="mt-4"/>
  <Row>
    <Col>
      <h2 class=text-center>Customer Reviews</h2>
      <hr />
      <p class="text-center h4" style="color: #f37022;">Coming Soon!</p>
    </Col>
  </Row>
  <!-- {#each reviews as rv}
  <Row>
      <Quote alignment={rv.alignment} review={rv.review} client={rv.client} />
  </Row>
    {/each} -->


    
</Container>

<style>
  hr {
    max-width: 600px;
    margin: auto;
    margin-bottom: 1em;
    text-align: center;
    /* color: #f37022; */
  }


  h2 {
  color: #f37022;
}



</style>