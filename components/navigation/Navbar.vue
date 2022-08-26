<!-- 
Global Navigation Bar 
Author : Eric Weng
//-->

<script>
export default {
  name: 'Navbar'
}
</script>

<template>
  <nav>
    <div class="navbar bg-base-100">
      <!-- Navbar Start -->
      <div class="navbar-start">
        <!-- Hamburger Menu -->
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="
              menu menu-compact
              dropdown-content
              mt-3
              p-2
              shadow
              bg-base-100
              rounded-box
              w-52
            "
          >
            <li><a>Tools</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Tools
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                  />
                </svg>
              </a>
              <ul class="bg-base-100 ml-3 p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
        </div>
        <!-- Title/Logo -->
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl font-medium md:text-2xl"><span class="text-primary">FarmTogether</span>DB</NuxtLink>
      </div>
      <!-- Navbar End -->
      <div class="navbar-end">
        <!-- Navigation Items -->
        <div class="hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a>
                Tools
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  />
                </svg>
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
        </div>
        <!-- Social Icons -->
        <div class="menu menu-horizontal">
            <a href="https://www.buymeacoffee.com/EricWeng" aria-label="Link to the Developer's Donation Page">
                <div class="text-2xl p-1 transition-transform hover:scale-125">🍕</div>
            </a>
            <a href="https://discord.com/invite/79yn8nrFNA" aria-label="Link to FarmTogetherDB Discord">
                <font-awesome-icon class="text-2xl p-2 text-discord transition-transform hover:scale-125" :icon="['fab', 'discord']"/>
            </a>
            <a href="https://github.com/sylkweb/farm-together-db" aria-label="Link to FarmTogetherDB Github">
                <font-awesome-icon class="hidden text-2xl p-2 transition-transform lg:block hover:scale-125" :icon="['fab', 'github']"/>
            </a>
        </div>
      </div>
    </div>
  </nav>
</template>
