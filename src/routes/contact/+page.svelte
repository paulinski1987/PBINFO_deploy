<!-- CONTACT PAGE -->

<script>
import { onMount } from "svelte";
import AppBody from "../../components/AppBody.svelte";
import { content } from '$lib/content.json';
import axios from 'axios';
const _log = console.log;
let validated = false;


// form data
let NAME = '';
let PHONE = '';
let EMAIL = '';
let DESC = '';
let warning = '';
let success = '';

</script>

<h2 class="text-center mt-3">Contact Me</h2>
<hr />

  <div class="container-fluid">
    <div class="row">
      <div class="col text-center">
        <p>To inquire about your project please email me at <a
            href="mailto:mathewp9876@protonmail.com">mathewp9876@protonmail.com</a>, give me a call at <a
            href="tel:18257338381">1-825-733-8381</a>, or <s>fill out the contact form below</s> and I will get back to you.</p>
            <AppBody content={content.contact} />
      </div>
    </div>
    <form id="contact" method="POST">
        <div class="text-center" style="color: #F00; min-width:4em;">{warning}</div>
        <div class="text-center" style="color: #0F0; min-width:4em;">{success}</div>
      <div class="row">
        <div class="col-sm text-left">
          <div>
            <label for="name">Name:</label>
            <input disabled bind:value={NAME} class="form-control inputColor mb-2" type="text" id="name" required>
          </div>
        </div>

        <div class="col-sm text-left">
          <div>
            <label for="phone">Phone:</label>
            <input disabled bind:value={PHONE} class="form-control inputColor mb-2" type="text" id="phone" required>
          </div>

        </div>
        <div class="col-sm text-left">
          <div>
            <label for="email">Email:</label>
            <input disabled bind:value={EMAIL} class="form-control inputColor mb-2" type="text" id="email" required>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-sm text-center">
          <div>
            <label for="description">How may we help you?</label>
            <textarea disabled bind:value={DESC} class="form-control inputColor" name="description" id="description" cols="30" rows="10" required></textarea>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <button disabled id="submit" class="btn btn-primary" on:click={async (e) => {
            e.preventDefault();

            const data = {
              "name": NAME,
              "phone": PHONE,
              "email": EMAIL,
              "description": DESC
            };
            const response = await axios.post('http://127.0.0.1:8080/', data).then((res) => {
              _log(res);

              NAME = '';
              PHONE = '';
              EMAIL = '';
              DESC = '';
            });
            
              _log('TADA'); //debug
          }}
          >Submit</button>
        </div>
      </div>
    </form>
  </div>

<style>
  h2 {
  color: #f37022;
}



hr {
    max-width: 600px;
    margin: auto;
    margin-bottom: 1em;
    text-align: center;
    color: #f37022;
  }

input[type='text'] {
    border-radius: 0.75rem;
    background-color:#eee;
    border: 2px solid rgba(0,0,0,0);
    border-radius: 0.75em;
  } 
  input[type='text']:focus {
    background-color:#fff;
    border: 2px solid #00F;
    border-radius: 0.75rem;
  }

label {
  background-color: rgba(f,f,f,1);
}
</style>