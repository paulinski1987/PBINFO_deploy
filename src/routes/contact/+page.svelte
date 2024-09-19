<!-- CONTACT PAGE -->

<script>
  import { onMount } from "svelte";
  import AppBody from "../../components/AppBody.svelte";
  import { content } from '$lib/content.json';
  import axios from 'axios';
  import { navbarVisible } from "../store";
  const _log = console.log;
  let validated = false;
  
  onMount(() => {
    if ($navbarVisible == 'display: none;') navbarVisible.set('display: block;');
  });
  
  
  // form data
  let NAME = '';
  let PHONE = '';
  let EMAIL = '';
  let DESC = '';
  let warning = '';
  let success = '';
  
  </script>
  
  <h2 class="text-center mt-3">Service Requests</h2>
  <hr />
  
    <div class="container-fluid">
      <div class="row">
        <div class="col text-center">
          <p>To inquire about your project please <a
              href="mailto:handyman@protonmail.com">send me an email</a>, call me at <a
              href="tel:18257338381">1-825-733-8381</a>, or fill out the form below and I will respond within 24 hours.</p>
        </div>
      </div>
      <form id="contact" method="POST">
          <div class="text-center" style="color: #F00; min-width:4em;">{warning}</div>
          <div class="text-center" style="color: #0F0; min-width:4em;">{success}</div>
        <div class="row">
          <div class="col-sm col-md-6 text-left">
            <div>
              <label for="name">Name:</label>
              <input  bind:value={NAME} class="form-control inputColor mb-2"  type="text" id="name" required>
            </div>
          </div>
  
          <div class="col-sm col-md-6 text-left">
            <div>
              <label for="phone">Phone:</label>
              <input  bind:value={PHONE} class="form-control inputColor mb-2" type="text" id="phone" required>
            </div>
  
          </div>
          <div class="col-sm col-md-6 text-left">
            <div>
              <label for="email">Email:</label>
              <input  bind:value={EMAIL} class="form-control inputColor mb-2" type="text" id="email" required>
            </div>
          </div>

          <div class="col-sm col-md-6 text-center">
            <div>
              <label for="description">What can I do for you?</label>
              <textarea  bind:value={DESC} class="form-control inputColor mb-2" name="description" id="description" cols="30" rows="10" required></textarea>
            </div>
          </div>
        </div>
  
  

        <div class="row mt-5">
          <div class="col text-center">
            <button  id="submit" class="btn btn-primary" on:click={async (e) => {
              e.preventDefault();
  
              const data = {
                "name": NAME,
                "phone": PHONE,
                "email": EMAIL,
                "description": DESC,
                "destination": "paul"
                };
              
            const response = await axios.post('https://emailapi-ta2v.onrender.com/', data).then((res) => {
                _log(res);
  
                NAME = '';
                PHONE = '';
                EMAIL = '';
                DESC = '';
              });
              
                // _log('TADA'); //debug
            }}

            
            >Submit</button>
          </div>
        </div>
      </form>
    </div>
  
  <style>
    h2 {
    color: #f37022;
    font-weight: bolder;
  }
  
  
  
  hr {
      max-width: 600px;
      margin: auto;
      margin-bottom: 1em;
      text-align: center;
      color: #f37022;
    }
  
  input[type='text'] {
      background-color:#eee;
      /* border: 2px solid rgba(0,0,0,0); */
      border: 1px solid #000;
      border-radius: 0.75em;
    } 
    input[type='text']:focus {
      background-color:#fff;
      border: 3px solid #00F;
      border-radius: 0.75rem;
    }

    textarea {
      background-color:#eee;
      /* border: 2px solid rgba(0,0,0,0); */
      border: 1px solid #000;
      border-radius: 0.75em;
    } 
    textarea:focus {
      background-color:#fff;
      border: 3px solid #00F;
      border-radius: 0.75rem;
    }
  
  label {
    background-color: rgba(f,f,f,1);
  }
  p {
    font-size: 1.2rem;
  }
  </style>