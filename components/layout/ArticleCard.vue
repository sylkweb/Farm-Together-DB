<!-- 
Homepage Article Card
Author : Eric Weng
//-->

<script>
export default {
  name: "ArticleCard",
};
</script>

<template>
    <div class="flex flex-row ">
        <!-- Image Component -->
        <div class="w-160 h-96 overflow-hidden rounded-md z-10">
            <img src="https://i.imgur.com/EIwOwvr.jpeg" alt="" class="transition-transform ease-in-out duration-300 hover:scale-110">
        </div>
        <!-- Article Info -->
        <div class="w-124 h-96 rounded-md bg-red-300 outline outline-1 outline-neutral -translate-x-6 translate-y-6">
            <h2 class="my-6 mx-10 text-3xl">A Title Goes Here</h2>
            <h3 class="my-6 mx-10 text-xl">A Subtitle Goes Here That Might Be Longer</h3>
            <p class="my-6 mx-10"/>Lorem Ipsum My dipsum the Lump Sum of Rump Stumps innit With a COol Title and A cool Thing</p>
        </div>
    </div>
</template>