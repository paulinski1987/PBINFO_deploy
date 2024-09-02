<script>
  export let alignment = "";
  export let review = "";
  export let client = "";

  let overflowHidden = true;
  let trunValClass = "trunicatedText collapse widthFix";
  let moreLessValue = "+Show more...";

  function moreLess() {
    if (overflowHidden) {
      if (review.length > 40) {
        trunValClass = "fullText collapse";
        moreLessValue = "-Show less";
        overflowHidden = false;
      }
    } else {
      if (review.length > 40) {
        trunValClass = "trunicatedText collapse";
        moreLessValue = "+Show more...";
        overflowHidden = true;
      }
    }
  }
</script>

<div id="quoteContainer">
  <figure id="quote">
    <blockquote class="blockquote quoteBody">
      <p class={trunValClass} id="collapse">
        {review}
      </p>
      {#if review.length >= 70}
        <button class="moreLess text-end" on:click={moreLess}
          >{moreLessValue}</button
        >
      {/if}
    </blockquote>
    <!-- <figcaption class="blockquote-footer">
      <span class="client primary">{client}</span>
    </figcaption> -->
    <p>{client}</p>
  </figure>
</div>

<style>
  .quoteBody {
    font-size: 1rem;
    line-height: 1.75;
  }
  .trunicatedText {
    display: block;
    height: 1.5rem;
    overflow: hidden;
  }

  .fullText {
    display: block;
    overflow: auto;
  }
  .moreLess {
    border: none;
    background: none;
    /* width: 100%; */
  }

  #quoteContainer {
    /* max-width: 600px; */
    width: 100%;
    margin: auto;
  }

  #quote {
    max-width: 800px;
    margin: auto;
  }

  p {
    font-size: 1.2rem;
  }

  .client {
    /* font-weight:bolder; */
  }
</style>
