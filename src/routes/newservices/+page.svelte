<!-- New services page -->
<script>
  import { onMount } from "svelte";
  import { navbarVisible } from "../store";
  import SectionList from "../../components/services/SectionList.svelte";
  import { services } from '$lib/services/services.json';
  import drill from "$lib/img/icons/drill.svg";
  import grinder from "$lib/img/icons/grinder.svg";
  import hammer from "$lib/img/icons/hammer.svg";
  import shovel from "$lib/img/icons/shovel.svg";
  import wrench from "$lib/img/icons/wrench.svg";


  onMount(() => {
    if ($navbarVisible == "display: none;")
      navbarVisible.set("display: block;");
  });
</script>

<section class="services mt-5">
  <div class="container">
    <div class="row g-4">
      <div class="col-md-6">
        <SectionList section={services.indoor.bathroom} listName="Bathroom" icon={drill}/>
      </div>
      <div class="col-md-6">
        <SectionList section={services.indoor.kitchen} listName="Kitchen" icon={grinder}/>
      </div>



      <div class="col-md-6">
        <SectionList section={services.indoor.generalRenos} listName="General Renovations" icon={hammer}/>
      </div>
      <div class="col-md-6">
        <SectionList section={services.indoor.custom} listName="Custom" icon={wrench}/>
      </div>



      <div class="col-md-6 offset-md-3">
        <SectionList section={services.outdoor.deckAndFence} listName="Exterior and Maintenance" icon={shovel}/>
      </div>

  </div>


</section>


