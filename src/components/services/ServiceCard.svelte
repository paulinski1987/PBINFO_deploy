<script>
  import {
    Icon,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle
  } from '@sveltestrap/sveltestrap';

  export let SVName = undefined;
  export let SVP1 = "";
  export let SVP2 = "";
  export let colorChoice = undefined;
  export let SVList = ["", ""];
  export let up;
  export let down;


</script>
<Card body color={colorChoice || "default"} inverse class="text-center">
  <CardHeader>
    <CardTitle class="fullWidth "><h2><b>{SVName}</b></h2></CardTitle>
  </CardHeader>
  <CardBody>
    <CardText>{SVP1}</CardText>
    <CardText>{SVP2}</CardText>
    <ul>
      {#each SVList as SV}
      <li><b>{SV}</b></li>
      {/each}
    </ul>
    <a href={up[1] || "#"} class='up'><Icon name={up[0] || ""}/></a><a href={down[1] || "#"} class='down'><Icon name={down[0] || ""}/></a>
  </CardBody>
</Card>


<style>

  ul {
    /* display: block; */
    height: calc(100vh - 105px - 17px - 17px - 16px);
  }
li {
  list-style-type: none;
  padding: 0.5rem;
}
h2 b {
  color: #f37022;
  border-bottom: 1px solid #f37022;
}
.up {
  position: absolute;
  left: 10px;
  top: 0%;
  color: #f37022;
  font-size: 3em;
}
.up:hover {
  color: #fff;
}
.down {
  position: absolute;
  right: 10px;
  top: 0;
  color: #f37022;
  font-size: 3em;
}

.down:hover {
  color: #fff;
}
p {
  font-size: 1.2rem;
}

@media screen and (max-width: 768px){
  ul {
    height: calc(100vh - 100px - 17px - 17px - 17px);
  }
}
</style>