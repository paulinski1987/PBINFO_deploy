<script>
  import {
    Icon,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    colorMode, 
    useColorMode, 
    Button
  } from "@sveltestrap/sveltestrap";
  import Wallet from "./Wallet.svelte";
  import { navbarVisible } from '../routes/store.js';

let modeText = $colorMode == 'light'? "Dark" : "Light";
  let isOpen = false;
  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  const closeMenu = () => { isOpen = false; };

  let lightbulb = "lightbulb-off";

  function DarkModeSwitch () {
    if ($colorMode == 'light') {
      modeText = "Dark";
      useColorMode('dark');
      lightbulb = "lightbulb-off";
    } else {
      modeText = "Light";
      useColorMode('light');
      lightbulb = "lightbulb-fill";
    }
    closeMenu(); 
  }


</script>

<!-- fixed-top fixes pushing but fucks everything else -->
<!-- <div class="navBar bg-dark" data-bs-theme="dark"> -->
  
<div class="navContainer"  style={$navbarVisible}>
  <Navbar id="navBar" expand="md" container="fluid" class="navBar bg-primary" data-bs-theme="dark"> 
    <NavbarBrand href="/" class="me-auto text-left" on:click={closeMenu}><span id="navBrand">paulbanks.info</span></NavbarBrand>
    <NavbarToggler id="navBarToggler" on:click={() => isOpen = !isOpen} />
      <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
          <NavItem>
              <NavLink href="/home" on:click={closeMenu}><span class="navlink">Home</span></NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/services" on:click={closeMenu}><span class="navlink">Services</span></NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/about" on:click={closeMenu}><span class="navlink">About</span></NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/contact" on:click={closeMenu}><span class="navlink">Contact</span></NavLink>
          </NavItem>
          <NavItem>
              <Button style="margin: 0;" outline color="white"  on:click={DarkModeSwitch}><Icon name={lightbulb}/></Button>
          </NavItem>
          <NavItem>
            <Wallet --position="absolute" --alignBottom="5px" --alignRight="5px" />
          </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>

  <div class="underline" id="underline"></div>

<style>
  /* :root { 
  Color Schema Variables 
  Orange Text
  --ot: #f37022;
  --ob: #f37022;
  --bg: #231f20;
  --txt: #f9f9f9;
} */


#navBrand { color: #f37022 !important; } #navBrand:hover { color: #f9f9f9 !important; }

#navBar {
  border-bottom: 2px solid #f37022 !important;
  border-color: #f37022 !important;
  overflow: hidden;
  display: none !important;
}


.navlink {
  color: #f9f9f9 !important;
}
.navlink:hover {
  color: #f37022 !important;
}

.underline {
  width:100%;
  height: 1px;
  color: #f37022;
  background: #f37022;

}

.toggleSwitch {
  color: #f37022 !important;
  background-color: #f37022 !important;
}

#toggleBtn {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
} 



</style>