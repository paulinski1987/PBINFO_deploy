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
  import { content } from '$lib/content.json';
let validated = false;
</script>
<AppBody content={content.contact} />


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

  
    
  