<!-- New services page -->
<script>
  import { onMount } from "svelte";
  import { navbarVisible } from "../store";
  import SectionList from "../../components/services/SectionList.svelte";
  import { services } from '$lib/services/services.json';

  onMount(() => {
    if ($navbarVisible == "display: none;")
      navbarVisible.set("display: block;");
  });
</script>

<section class="services mt-5">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <SectionList section={services.indoor.bathroom} listName="Bathroom" />
      </div>
      <div class="col-md-6">
        <SectionList section={services.indoor.kitchen} listName="Kitchen" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <SectionList section={services.indoor.generalRenos} listName="General Renovations" />
      </div>
      <div class="col-md-6">
        <SectionList section={services.indoor.custom} listName="Custom" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <SectionList section={services.outdoor.deckAndFence} listName="Exterior and Maintenance" />
      </div>
    </div>
  </div>


</section>


