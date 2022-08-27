<script>
export default {
  name: "Construction",
};
</script>

<template>
  <div class="flex flex-col justify-center align-center text-center">
    <h1 class="mb-2 font-bold text-2xl text-primary md:text-6xl">
      Coming Soon!
    </h1>
    <h2 class="font-medium text-xl md:text-2xl">
      This page is under construction! Check for updates on the
      <a
        href="https://discord.com/invite/79yn8nrFNA"
        aria-label="Link to FarmTogetherDB Discord"
        class="text-error underline hover:text-error-content"
      >Discord</a>
      or find the latest
      <a
        href="https://www.buymeacoffee.com/EricWeng"
        aria-label="Link to the Developer's Donation Page"
        class="text-error underline hover:text-error-content"
      >
        🗺️ Release Roadmap Here!
      </a>
    </h2>
    <img
      class="max-w-screen mx-auto my-10"
      src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/32023457/614b353ac7ecc5354eeddea30be7548987106918.gif"
      alt="404 chickens"
    />
    <h3 class="text-lg md:text-2xl">Check back again soon!</h3>
    <NuxtLink class="my-6" to="/">
      <button class="btn btn-lg btn-outline btn-primary">Head Home!</button>
    </NuxtLink>
  </div>
</template>