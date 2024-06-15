<script>
  import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle,
    ListGroup,
    ListGroupItem
  } from '@sveltestrap/sveltestrap';

  export let SVName = undefined;
  export let SVP1 = "";
  export let SVP2 = "";
  export let colorChoice = undefined;
  export let SVList = undefined;

</script>

<Card body color={colorChoice || "default"} inverse class="text-center">
  <CardHeader>
    <CardTitle class="fullWidth"><h2><b>{SVName}</b></h2></CardTitle>
  </CardHeader>
  <CardBody>
    <CardText>{SVP1}</CardText>
    <CardText>{SVP2}</CardText>
    <ul>
      {#each SVList as SV}
      <li><b>{SV}</b></li>
      {/each}
    </ul>
  </CardBody>
</Card>

<style>
li {
  list-style-type: none;
  padding: 0.5rem;
}
h2 b {
  color: #f37022;
  border-bottom: 1px solid #f37022;
}
</style>