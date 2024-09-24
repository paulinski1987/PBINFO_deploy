<script>
  import {
    Icon,
    Popover,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    colorMode,
    useColorMode,
    Button,
  } from "@sveltestrap/sveltestrap";
  import { onMount } from "svelte";
  import Wallet from "./Wallet.svelte";
  import { navbarVisible } from "../routes/store.js";

  let modeText = $colorMode == "light" ? "Dark" : "Light";
  let isOpen = false;
  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  const closeMenu = () => {
    isOpen = false;
  };

  let lightbulb = "lightbulb-off";

  function DarkModeSwitch() {
    if ($colorMode == "light") {
      modeText = "Dark";
      useColorMode("dark");
      lightbulb = "lightbulb-off";
    } else {
      modeText = "Light";
      useColorMode("light");
      lightbulb = "lightbulb-fill";
    }
    closeMenu();
  }
</script>

<!-- fixed-top fixes pushing but fucks everything else -->
<!-- <div class="navBar bg-dark" data-bs-theme="dark"> -->

<div class="navContainer" style={$navbarVisible}>
  <Navbar
    id="navBar"
    expand="md"
    container="fluid"
    class="navBar bg-primary"
    data-bs-theme="dark"
  >
    <NavbarBrand href="/" class="me-auto text-left" on:click={closeMenu}
      ><span id="navBrand">paulbanks.info</span></NavbarBrand
    >
    <NavbarToggler id="navBarToggler" on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink href="/home" on:click={closeMenu}
            ><span class="navlink">Home</span></NavLink
          >
        </NavItem>
        <NavItem>
          <NavLink href="/services" on:click={closeMenu}
            ><span class="navlink">Services</span></NavLink
          >
        </NavItem>
        <NavItem>
          <NavLink href="/about" on:click={closeMenu}
            ><span class="navlink">About</span></NavLink
          >
        </NavItem>
        <NavItem>
          <NavLink href="/contact" on:click={closeMenu}
            ><span class="navlink">Contact</span></NavLink
          >
        </NavItem>
        <!-- <NavItem>
          <NavLink href="/gallery" on:click={closeMenu}
            ><span class="navlink">Gallery</span></NavLink
          >
        </NavItem> -->
        <NavItem>
          <Button
            style="margin: 0;"
            outline
            color="white"
            on:click={DarkModeSwitch}
          >
            {#if $colorMode == "light"}
              <span id="modeSelectBit" style="display: block; width: 2em;">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="#FFFF00"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 12.0354 16.9865 13.8341 15.4366 14.9189C15.7888 15.3497 16 15.9002 16 16.5C16 17.7099 15.1405 18.7191 13.9988 18.9502C13.9996 18.9667 14 18.9833 14 19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19C10 18.9833 10.0004 18.9667 10.0012 18.9502C8.85949 18.7191 8 17.7099 8 16.5C8 15.9002 8.21123 15.3497 8.56337 14.9189C7.0135 13.8341 6 12.0354 6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10ZM16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10ZM11.9146 16H12H12.0854H13.5C13.7761 16 14 16.2239 14 16.5C14 16.7761 13.7761 17 13.5 17H12.0854H11.9146H10.5C10.2239 17 10 16.7761 10 16.5C10 16.2239 10.2239 16 10.5 16H11.9146Z"
                  />
                </svg>
              </span>
              <Popover 
            target="modeSelectBit"
            animation={true}
            dismissible={true}
            placement="bottom"
            trigger="hover"
            >
            Toggle dark mode
          </Popover>
            {:else}
              <span id="modeSelectBit" style="display: block; width: 2em;">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="#FFF"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 12.0354 16.9865 13.8341 15.4366 14.9189C15.7888 15.3497 16 15.9002 16 16.5C16 17.7099 15.1405 18.7191 13.9988 18.9502C13.9996 18.9667 14 18.9833 14 19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19C10 18.9833 10.0004 18.9667 10.0012 18.9502C8.85949 18.7191 8 17.7099 8 16.5C8 15.9002 8.21123 15.3497 8.56337 14.9189C7.0135 13.8341 6 12.0354 6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10ZM16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10ZM11.9146 16H12H12.0854H13.5C13.7761 16 14 16.2239 14 16.5C14 16.7761 13.7761 17 13.5 17H12.0854H11.9146H10.5C10.2239 17 10 16.7761 10 16.5C10 16.2239 10.2239 16 10.5 16H11.9146Z"
                  />
                </svg>
              </span>
              <Popover 
            target="modeSelectBit"
            animation={true}
            dismissible={true}
            placement="bottom"
            trigger="hover"
            >
            Toggle light mode
          </Popover>
            {/if}
          </Button>
        </NavItem>
        <NavItem>
          <Wallet
            --position="absolute"
            --alignBottom="5px"
            --alignRight="5px"
          />
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

  #navBrand {
    color: #f37022 !important;
  }
  #navBrand:hover {
    color: #f9f9f9 !important;
  }

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
    width: 100%;
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
