<!-- CONTACT PAGE -->

<script>
  import { Badge, 
  Button, 
  Form, 
  FormGroup, 
  Input,
  Container,
  Row,
  Col 
} from '@sveltestrap/sveltestrap';
import AppBody from "../../components/AppBody.svelte";
import Wallet from '../../components/Wallet.svelte';
  import { content } from '$lib/content.json';
let validated = false;
</script>

<h2 class="text-center mt-3">Contact Me</h2>
<hr />

  <div class="container-fluid">
    <div class="row">
      <div class="col text-center">
        <p>To inquire about your project please email me at <a
            href="mailto:mathewp9876@protonmail.com">mathewp9876@protonmail.com</a>, give me a call at <a
            href="tel:18257338381">1-825-733-8381</a>, or fill out the contact form below and I will get back to you.</p>
            <AppBody content={content.contact} />
      </div>
    </div>
    <form id="contact">
      <div class="row">
        <div class="col-sm text-left">
          <div class="form-floating">
            <input disabled class="form-control" type="text" id="name">
            <label for="name">Name:</label>
          </div>
        </div>

        <div class="col-sm text-left">
          <div class="form-floating">
            <input disabled class="form-control" type="text" id="phone">
            <label for="phone">Phone:</label>
          </div>

        </div>
        <div class="col-sm text-left">
          <div class="form-floating">
            <input disabled class="form-control" type="text" id="email">
            <label for="email">Email:</label>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-sm text-center">
          <div class="form-floating">
            <textarea disabled class="form-control" name="description" id="description" cols="30" rows="10"></textarea>
            <label for="description">How may we help you?</label>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <button disabled id="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
  <Wallet --position="sticky" --alignBottom="5px" --alignLeft="1rem" />
<!-- <Col></Col>
<Container fluid>
  <Form {validated} on:submit={(e) => e.preventDefault()}>
    <Row>
      <Col sm="12" md="6">
        <FormGroup floating>
          <Input placeholder="Enter email name" type="text" required feedback="Please enter your name" color="info"/>
          <div slot="label">
            <Badge>Name:</Badge>
          </div>
        </FormGroup>
      </Col>
      <Col sm="12" md="6">
        <FormGroup floating>
          <Input placeholder="Enter email address" type="email" required feedback="Email required e.g john.doe@email.ca"/>
          <div slot="label">
            <Badge>Email:</Badge>
          </div>
        </FormGroup>
      </Col>
    </Row>

    <Row>
      <Col>
        <Button type="submit" on:click={() => (validated = true)}>Fake Submit</Button>
      </Col>
    </Row>
  </Form>
</Container>

   -->

  
    
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