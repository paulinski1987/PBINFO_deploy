<script>
  export let alignment = "";
  export let review = "";
  export let client = "";

  let overflowHidden = true;
  let trunValClass = 'trunicatedText collapse widthFix';
  let moreLessValue = '+Show more...'

  function moreLess(){
    if (overflowHidden){
      trunValClass = 'fullText collapse';
      moreLessValue = '-Show less';
      overflowHidden = false;
    } else {
      trunValClass = 'trunicatedText collapse';
      moreLessValue = '+Show more...';
      overflowHidden = true;
    }

  }

  
  </script>
  
  <figure class={alignment} id='quoteContainer'>
    <blockquote class="blockquote quoteBody">
      <p class={trunValClass} id='collapse'>
        {review}
      </p>
      <button class="moreLess" on:click={moreLess}>{ moreLessValue }</button>
    </blockquote>
  
    <figcaption class="blockquote-footer">
      {client}
    </figcaption>
  </figure>
  
  
  <style>
    .quoteBody {
      font-size: 1rem;
      line-height: 1.5;
    }
    .trunicatedText {
      display: block;
      height: 3rem;
      overflow: hidden;
    }

    .fullText {
      display: block;
      overflow: auto;
        }
  .moreLess {
    border: none;
    background: none;
  }

  #quoteContainer {
    max-width: 800px;
    margin: auto;
  }

  </style>