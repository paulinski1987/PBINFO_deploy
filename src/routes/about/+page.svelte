<!-- ABOUT PAGE -->
<script>
  import { Image,
    Container,
    Row,
    Col
  } from '@sveltestrap/sveltestrap';
  import  Quote  from '../../components/about/Quote.svelte';
  import { reviews } from '$lib/Reviews.json';
import Logo from '$lib/img/logo.png';
import Self from '$lib/img/march2025.png';
import githubIcon from '$lib/img/githubLogo.png';
import { navbarVisible } from '../store';
import { onMount } from 'svelte';

onMount(() => {
  if ($navbarVisible == 'display: none;') navbarVisible.set('display: block;');
});

</script>
<Container xxl>
  <Row>
    <Col>
      <h2 class="text-center mt-3">About Info</h2>
      <hr />
    </Col>
  </Row>
  <Row>
    <Col sm="12" md="4">
      <!-- <Image fluid  id="profileImg" src={Logo} style=" border: 4px solid #f37022; border-radius: 1em; max-width: 300px; margin-bottom: 2em;"/> -->
      <Image fluid  id="profileImg" src={Self} style=" border: 2px solid #f37022; border-radius: 1em; max-width: 300px; margin-bottom: 2em;"/>
    </Col>

    <Col sm="12" md="8">
      <p class="firstParagraph">Home improvement, repair, and carpentry have been my passions of mine since I was a child.</p>

      <p class="text-left">From a young age, I eagerly assisted my father and grandfather with building, fixing, and renovating projects, gaining hands-on experience and developing a strong foundation of skills along the way.</p>

      <p class="text-left">Since graduating in 2006, I have worked on a variety of residential and commercial projects, specializing as a carpenter, glazier, roofer, and cabinet installer.</p>

      <p class="text-left">As a handyman, I bring a diverse skill set tailored to meet the needs of homeowners, ensuring high-quality workmanship across a wide range of projects.</p>

    </Col>
  </Row>
  <hr class="mt-4"/>
  <Row>
    <Col>
      <h2 class=text-center>Testimonials</h2>
      <hr />
    </Col>
  </Row>
  {#each reviews as rv}
  <Row>
      <Quote alignment={rv.alignment} review={rv.review} client={rv.client} />
  </Row>
    <hr />
    {/each}

  <div class="github text-end">
    <small class='text-center'>If you like the website check out my GitHub profile:</small>
    <a href="https://github.com/paulinski1987"><img class="link" src={githubIcon}  alt="github icon link to profile"/></a>
  </div>
        



    
</Container>

<style>
  hr {
    max-width: 600px;
    margin: auto;
    margin-bottom: 1em;
    text-align: center;
    color: #f37022;
    opacity: 1;
  }


  h2 {
  color: #f37022;
  font-weight:bolder;
}

.github {
  /* position: relative; */
  position: relative;
  bottom: 0;
  right: 0;
}
.link {
  width: 32px; height: 32px;
  margin: 'auto';
}
.link:hover {
  opacity: 0.8;
}
p {
    font-size: 1.2rem;
  }

  .firstParagraph {
    text-indent: 3em;
  }

</style>