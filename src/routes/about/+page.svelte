<!-- ABOUT PAGE -->
<script>
  import { Image,
    Container,
    Row,
    Col
  } from '@sveltestrap/sveltestrap';
// import AppBody from '../../components/AppBody.svelte';
// import { content } from '$lib/content.json';
// import Quote from '../../components/about/Quote.svelte';
// import { reviews } from '$lib/Reviews.json';
import Profile from '$lib/img/profile.png';
import  Wallet  from '../../components/Wallet.svelte';



</script>
<Container fluid>
  <Row>
    <Col>
      <h2 class="text-center mt-3">About Info</h2>
      <hr />
    </Col>
  </Row>
  <Row>
    <Col sm="12" md="6">
      <Image fluid  id="profileImg" src={Profile} style=" border: 4px solid #f37022; border-radius: 1em;"/>
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
  <Row>
  <Col>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Viverra justo nec ultrices dui sapien. Ornare arcu dui vivamus arcu. Morbi leo urna molestie at elementum eu. Tincidunt id aliquet risus feugiat in ante metus dictum at. Dolor magna eget est lorem ipsum dolor. Volutpat est velit egestas dui id ornare arcu odio. Nunc sed id semper risus. Massa sapien faucibus et molestie ac feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Rhoncus aenean vel elit scelerisque.

    Purus in massa tempor nec feugiat. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed viverra tellus in hac habitasse. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Quis risus sed vulputate odio ut enim blandit. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Venenatis lectus magna fringilla urna porttitor rhoncus. Lacinia quis vel eros donec ac odio tempor orci dapibus. Morbi blandit cursus risus at ultrices mi. Arcu non sodales neque sodales ut etiam. Malesuada fames ac turpis egestas. Vulputate odio ut enim blandit volutpat maecenas volutpat. Etiam sit amet nisl purus in mollis. Nibh tortor id aliquet lectus proin nibh nisl. Feugiat nisl pretium fusce id velit ut.
    
    Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Viverra vitae congue eu consequat. Tristique senectus et netus et malesuada. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Eleifend donec pretium vulputate sapien nec. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Felis donec et odio pellentesque diam volutpat commodo. Nec feugiat nisl pretium fusce id velit. Congue nisi vitae suscipit tellus mauris a. Eget nullam non nisi est sit amet facilisis magna etiam. Varius morbi enim nunc faucibus. Viverra nibh cras pulvinar mattis nunc sed. Urna id volutpat lacus laoreet non curabitur. Tortor consequat id porta nibh venenatis.
    
    Venenatis lectus magna fringilla urna porttitor rhoncus. Purus sit amet luctus venenatis lectus magna fringilla. Fermentum posuere urna nec tincidunt praesent. Aliquam sem fringilla ut morbi tincidunt augue. Malesuada fames ac turpis egestas integer eget aliquet nibh. Morbi blandit cursus risus at ultrices mi. Proin sagittis nisl rhoncus mattis. Et netus et malesuada fames ac turpis. Suscipit tellus mauris a diam maecenas. Vitae sapien pellentesque habitant morbi tristique senectus et. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Commodo viverra maecenas accumsan lacus vel. Pellentesque dignissim enim sit amet. Aliquam ultrices sagittis orci a. Adipiscing commodo elit at imperdiet dui. Neque gravida in fermentum et. Massa tincidunt dui ut ornare lectus sit amet.
    
    Sapien et ligula ullamcorper malesuada. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Morbi blandit cursus risus at ultrices mi. Fusce ut placerat orci nulla pellentesque dignissim enim. Volutpat est velit egestas dui id ornare. Fermentum et sollicitudin ac orci phasellus. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Amet aliquam id diam maecenas ultricies. Egestas dui id ornare arcu odio ut sem. Pharetra vel turpis nunc eget lorem dolor sed viverra. Malesuada fames ac turpis egestas sed tempus urna et. Sed blandit libero volutpat sed cras ornare arcu dui. Sed id semper risus in hendrerit gravida rutrum. Ut etiam sit amet nisl purus in mollis nunc. Ut venenatis tellus in metus vulputate eu scelerisque felis. Enim diam vulputate ut pharetra sit amet.
    
  </Col>
    </Row>
  <!-- {#each reviews as rv}
  <Row>
      <Quote alignment={rv.alignment} review={rv.review} client={rv.client} />
  </Row>
    {/each} -->


    
</Container>
<Wallet --position="sticky" --alignBottom="5px" --alignLeft="50px" />
<!-- <Col>

</Col> -->
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