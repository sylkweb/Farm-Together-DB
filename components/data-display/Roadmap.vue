<!-- 
Site Roadmap
Author : Eric Weng
//-->

<script>
export default {
  name: "Roadmap",

};
</script>

<template>
    <ol class="relative border-l border-neutral list-none">                  
        <li class="mb-10 ml-6">            
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary rounded-full ring-8 ring-primary-focus ">
                <font-awesome-icon class="text-primary-content" :icon="['fa', 'check']"/>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-primary">🎉FarmTogetherDB Initial Release</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-neutral">Released on August 27th, 2022</time>
            <p class="mb-4 text-base font-normal text-neutral">Initial release of FarmTogetherDB. Includes: Home, About, Navigation, Guide/Article Templating.</p>
        </li>
        <li class="mb-10 ml-6">            
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary rounded-full ring-8 ring-primary-focus ">
                <font-awesome-icon class="text-primary-content" :icon="['fa', 'hammer']"/>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-primary">🌾Crop Profit and XP Calculator</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-neutral">Planned For September 3rd, 2022</time>
            <p class="mb-4 text-base font-normal text-neutral">A calculator/table that provides detailed information on crop xp and profit per hour.</p>
        </li>
        <li class="mb-10 ml-6">            
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary rounded-full ring-8 ring-primary-focus ">
                <font-awesome-icon class="text-primary-content" :icon="['fa', 'hammer']"/>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-primary">🌳Tree Profit and XP Calculator 📖Crop Profit Guide Release</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-neutral">Planned For September 7th, 2022</time>
            <p class="mb-4 text-base font-normal text-neutral">A calculator/table that provides detailed information on tree xp and profit per hour and number of harvests until profitability. Release of "Most Profitable Farm Together Crops" guide.</p>
        </li>
        <li class="mb-10 ml-6">            
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary rounded-full ring-8 ring-primary-focus ">
                <font-awesome-icon class="text-primary-content" :icon="['fa', 'hammer']"/>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-primary">🌼Flower Profit and XP Calculator 📖Tree Profit Guide Release</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-neutral">Planned For September 10th, 2022</time>
            <p class="mb-4 text-base font-normal text-neutral">A calculator/table that provides detailed information on flower xp and profit per hour and number of harvests until profitability. Release of "Most Profitable Farm Together Trees" guide.</p>
        </li>
    </ol>
</template>