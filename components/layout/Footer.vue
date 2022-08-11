<!-- 
Global Footer
Author : Eric Weng
//-->

<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="footer items-center p-4 bg-neutral text-neutral-content">
    <!-- Copyright -->
    <div class="grid-flow-col items-center justify-self-center md:justify-self-start">
      <p>
        © 2022 - Made with ❤️ by
        <a class="hover:text-secondary-focus" href="https://github.com/Eric-Weng">Eric Weng</a>
      </p>
    </div>
    <!-- Social Icons -->
    <div class="grid-flow-col gap-4 justify-self-center items-center md:place-self-center md:justify-self-end">
      <a href="https://www.buymeacoffee.com/EricWeng">
        <div class="text-2xl transition-transform hover:scale-125">🍕</div>
      </a>
      <a href="/">
        <font-awesome-icon
          class="text-2xl text-discord transition-transform hover:scale-125"
          :icon="['fab', 'discord']"
        />
      </a>
      <a href="https://github.com/sylkweb/farm-together-db">
        <font-awesome-icon
          class="text-2xl transition-transform hover:scale-125"
          :icon="['fab', 'github']"
        />
      </a>
    </div>
  </footer>
</template>