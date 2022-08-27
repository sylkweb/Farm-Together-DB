<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>

<template>
  <div>
    <div v-if="error.statusCode === 404">
      <div class="flex flex-col justify-center align-center text-center">
        <h1 class="mb-2 font-bold text-3xl text-primary md:text-8xl">404</h1>
        <h2 class="font-medium text-xl md:text-3xl">
          Uh Oh. Seems like you stumbled onto the wrong farm!
        </h2>
        <img
          class="max-w-screen mx-auto my-10"
          src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/32023457/c2e78d37724ce58216740c9cd8cb7d959d10a504.gif"
          alt="404 chickens"
        />
        <h3 class="text-lg md:text-2xl">⛽ Fill up your tractor and</h3>
        <NuxtLink class="my-6" to="/">
            <button class="btn btn-lg btn-outline btn-primary">Head Home!</button>
        </NuxtLink>
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col justify-center align-center text-center">
        <h1 class="mb-2 font-bold text-3xl text-primary md:text-8xl">Oops!</h1>
        <h2 class="font-medium text-xl md:text-3xl">
          Something went wrong! Well at least it's peaceful here. Unfortunately, not much farming to do here...
        </h2>
        <img
          class="max-w-screen mx-auto my-10"
          src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/32023457/67bbf5ebd5f974d4fa7553518faae2b0b8944835.gif"
          alt="404 chickens"
        />
        <h3 class="text-lg md:text-2xl">Back to the lettuce fields!</h3>
        <NuxtLink class="my-6" to="/">
            <button class="btn btn-lg btn-outline btn-primary">Head Home!</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>