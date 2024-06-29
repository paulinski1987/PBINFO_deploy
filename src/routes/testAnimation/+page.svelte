<script>
  import Letterize from 'letterizejs';
  import anime from 'animejs';
  import { onMount } from 'svelte';

onMount(() => {
  const test = new Letterize({
        targets: ".animate-me"
      });


  const animation = anime.timeline({
    targets: test.listAll,
    delay: anime.stagger(150, {
      grid: [test.list[0].length, test.list.length],
      from: "center"
    }),
    loop: true
  });

  animation
    .add({
      scale: 0.5
    })
    .add({
      letterSpacing: "20px"
      
    })
    .add({
      translateY: -40
    })
    
    .add({
      scale: 1
    })
    .add({
      translateY: 0
    })
    .add({
      letterSpacing: "6px",
      translateY: "0px"
    })
  
    .add({
      opacity: 0.3
    });
  });

</script>
<div class="bodySub">
  <div>
    <div class="animate-me">
      letterize.js&anime.js
    </div>
    <div class="animate-me">
      anime.js&letterize.js
    </div>
    <div class="animate-me">
      letterize.js&anime.js
    </div>
    <div class="animate-me">
      anime.js&letterize.js
    </div>
    <div class="animate-me">
      letterize.js&anime.js
    </div>
    <div class="animate-me">
      anime.js&letterize.js
    </div>
    <div class="animate-me">
      letterize.js&anime.js
    </div>
    <div class="animate-me">
      anime.js&letterize.js
    </div>
    <div class="animate-me">
      letterize.js&anime.js
    </div>
    <div class="animate-me">
      anime.js&letterize.js
    </div>
    <div class="animate-me">
      letterize.js&anime.js
    </div>
    <div class="animate-me">
      anime.js&letterize.js
    </div>
    <div class="animate-me">
      letterize.js&anime.js
    </div>
    <div class="animate-me">
      anime.js&letterize.js
    </div>
  </div>
</div>


<style>
  .bodySub {
        background-color: #222;
        color: #f37022;
        font-weight: 400;
        font-size: 2vw;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-transform: uppercase;
        font-family: "Khula", sans-serif;
        height: 100vh;
        box-sizing: border-box;
        letter-spacing: 6px;
        margin: 0;
        line-height: 1.2;
      }

      span {
        display: inline-block;
      }
</style>