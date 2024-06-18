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
    useColorMode
 
  } from "@sveltestrap/sveltestrap";

let modeText = $colorMode == 'light'? "Dark" : "Light";
  let isOpen = false;
  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  const closeMenu = () => { isOpen = false; };

  function DarkModeSwitch () {
    if ($colorMode == 'light') {
      modeText = "Dark";
      useColorMode('dark');
    } else {
      modeText = "Light";
      useColorMode('light');
    }
    closeMenu();

    // $colorMode == 'light'? useColorMode('dark') : useColorMode('light');
    
  }


</script>

<!-- fixed-top fixes pushing but fucks everything else -->
<!-- <div class="navBar bg-dark" data-bs-theme="dark"> -->
  
  <Navbar id="navBar" expand="md" container="fluid" class="navBar bg-primary" data-bs-theme="dark"> 
    <NavbarBrand href="/" class="me-auto text-left"><span id="navBrand">paulbanks.info</span></NavbarBrand>
    <NavbarToggler id="navBarToggler" on:click={() => isOpen = !isOpen} />
      <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
          <NavItem>
              <NavLink href="/" on:click={closeMenu}><span class="navlink">Home</span></NavLink>
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
          <!-- <Button color="primary" on:click={DarkModeSwitch}><Icon name="circle-half"/></Button> -->
            <button on:click={DarkModeSwitch}><Icon name="circle-half"/></button>
          </NavItem>
      </Nav>
    </Collapse>
  </Navbar>

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
} 

</style>