<script>
  import baseboards from "$lib/carosel/baseboards.png";
  import cupboards from "$lib/carosel/cupboards.png";
  import deckRail from "$lib/carosel/deckRail.png";
  import deckRefurb from "$lib/carosel/deckRefurb.png";
  import gate from "$lib/carosel/gate.png";
  import handrail from "$lib/carosel/handrail.png";
  import easelExt from "$lib/carosel/easelExt.png";
  import easels from "$lib/carosel/easels.png";
  import LVP from "$lib/carosel/LVP.png";
  import shiplap from "$lib/carosel/shiplap.png";
  import vassal from "$lib/carosel/vassal.png";


  // import function to register Swiper custom elements
  import { register } from 'swiper/element/bundle';
  // register Swiper custom elements
  register();
</script>


<div class="text-center mt-2" style="max-width: 650px; margin: 0 auto">
  <swiper-container navigation="true" scrollbar="true" loop="true" effect="cube" keyboard-control="true"
  style="--swiper-scrollbar-drag-bg-color: rgba(243, 112, 34, 0.5); --swiper-scrollbar-bg-color: rgba(243, 112, 34, 0.1); --swiper-navigation-color:rgba(243, 112, 34, 1); --swiper-navigation-sides-offset: -45px;"
  >

    <swiper-slide>
      <figure class="figure">
        <img src={cupboards} class="figure-img img-fluid rounded" alt="refinished cupboards">
        <figcaption class="h6">Cupboards refinshed in black rustic style</figcaption>
      </figure>
    </swiper-slide>

    <swiper-slide>
      <figure class="figure">
        <img src={baseboards} class="figure-img img-fluid rounded" alt="New baseboards in 1960s era home">
        <figcaption class="h6">New baseboards in 1960s era home</figcaption>
      </figure>
    </swiper-slide>

      <swiper-slide>
        <figure class="figure">
          <img src={deckRail} class="figure-img img-fluid rounded" alt="New deck railing in Okotoks">
          <figcaption class="h6">New deck railing in Okotoks</figcaption>
        </figure>
      </swiper-slide>

        <swiper-slide>
          <figure class="figure">
            <img src={deckRefurb} class="figure-img img-fluid rounded" alt="Refinished and restored deck">
            <figcaption class="h6">Refinished and restored deck</figcaption>
          </figure>
        </swiper-slide>

          <swiper-slide>
            <figure class="figure">
              <img src={gate} class="figure-img img-fluid rounded" alt="Decorative Japanese gate for gutter">
              <figcaption class="h6">Decorative Japanese gate for gutter</figcaption>
            </figure>
          </swiper-slide>

            <swiper-slide>
              <figure class="figure">
                <img src={handrail} class="figure-img img-fluid rounded" alt="Custom pine handrail">
                <figcaption class="h6">Custom pine handrail</figcaption>
              </figure>
            </swiper-slide>

            <swiper-slide>
              <figure class="figure">
                <img src={easelExt} class="figure-img img-fluid rounded" alt="Custom hardwood extension for painter's easel">
                <figcaption class="h6">Custom hardwood extension for painter's easel</figcaption>
              </figure>
            </swiper-slide>

            <swiper-slide>
              <figure class="figure">
                <img src={easels} class="figure-img img-fluid rounded" alt="Custom hardwood easel extensions for local painter">
                <figcaption class="h6">Custom hardwood easel extensions for local painter</figcaption>
              </figure>
            </swiper-slide>

            <swiper-slide>
              <figure class="figure">
                <img src={LVP} class="figure-img img-fluid rounded" alt="New LVP floor">
                <figcaption class="h6">New LVP floor</figcaption>
              </figure>
            </swiper-slide>

            <swiper-slide>
              <figure class="figure">
                <img src={shiplap} class="figure-img img-fluid rounded" alt="Home renovation including shiplap, new lighting, trim and baseboards">
                <figcaption class="h6">Home renovation including shiplap, new lighting, trim and baseboards</figcaption>
              </figure>
            </swiper-slide>

            <swiper-slide>
              <figure class="figure">
                <img src={vassal} class="figure-img img-fluid rounded" alt="Brand new vassal sink and countertop">
                <figcaption class="h6">Brand new vassal sink and countertop</figcaption>
              </figure>
            </swiper-slide>

    
  </swiper-container>
</div>


<!-- <style>
  {--swiper-scrollbar-bg-color: rgba(243, 112, 34, 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(243, 112, 34, 0.5);}
</style> -->