<script>
export default {
  name: "Guides",
};
</script>

<template>
  <div>
    <!-- Title and Description -->
    <div class="my-6">
      <h1 class="mx-auto text-center text-8xl font-semibold">Guides</h1>
      <h2 class="mx-auto mt-4 text-center text-lg">
        A collection of Guides from the developers of Farm Together DB
      </h2>
    </div>

    <!-- Guide Category -->
    <div>
      <h2>Section Title</h2>
      <div class="grid grid-cols-3 gap-4">
        <div class="justify-between h-32 bg-base-100 border-secondary-focus border-2 rounded-md transition-all hover:drop-shadow-lg hover:-translate-y-1">
          <div class="flex flex-row w-full h-full">
            <!-- Article Info -->
            <div class="flex flex-col">
              <h3 class="font-semibold text-primary text-xl">
                This 
              </h3>
              <p>This is</p>
            </div>
            <!-- Article Image -->
            <div class="my-auto mx-auto">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-32 bg-red-500"></div>
        <div class="h-32 bg-red-500"></div>
      </div>
    </div>
  </div>
</template>
