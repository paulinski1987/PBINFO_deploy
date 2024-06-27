const _log = console.log;
/* Form data comes in the following format:
* {
*  "name",
*  "phone",
*  "email",
* "description"
* }
*/
/**
 * LIBRARIES:
 * validator.js
 * purify.js (DOMPurify)
 */
import axios  from 'axios';
import DOMPurifypurify from 'dompurify';
import validator from 'validator';


const NAME = '';
const PHONE = '';
const EMAIL = '';
const DESCRIPTION = '';
const SUBMIT = document.getElementById('submit');

function validateForm(NAME, PHONE, EMAIL, DESCRIPTION){
  const PHONEREGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (NAME.length == 0 || NAME.length > 30){
    alert('Please enter name');
    return false;
  }
  if (!PHONE.value.match(PHONEREGEX)){
    alert('Please enter valid phone number');
    return false;
  }
  if (!validator.isEmail(EMAIL)){
    alert('Please enter valid email');
    return false;
  }
  if (DESCRIPTION.value == 0){
    alert('Please include a brief description of your project');
    return false;
  }
  return true;
  
}


export function submitForm(NAME, PHONE, EMAIL, DESCRIPTION){
  if (!validateForm(NAME, PHONE, EMAIL, DESCRIPTION)){
    return;
  }
  _log(NAME);
  _log(PHONE);
  _log(EMAIL);
  _log(DESCRIPTION);

// send to email


  alert(`Thank you ${NAME}. A representative will contact you shortly`);
  NAME = "";
  PHONE = "";
  EMAIL = "";
  DESCRIPTION = "";
}



