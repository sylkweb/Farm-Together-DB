<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content("guides", params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page,
    };
  },
  data() {
    return {
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        rootMargin: '0px 0px -60% 0px',
        threshold: 1.0,
      },
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document
      .querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]")
      .forEach((section) => {
        this.observer.observe(section);
      });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id;
    },
  },
};
</script>

<template>
  <div class="flex flex-col">
    <div class="relative h-48 md:h-64">
        <img :src="page.image" :alt="page.alt" class="absolute w-full h-full object-cover"/>
        <div class="absolute w-full bottom-0 backdrop-blur-md"> 
            <h1 class="font-bold ml-2 my-3 text-2xl md:text-4xl">{{page.title}}</h1>
        </div>
    </div>
    <div class="grid grid-cols-9 mt-10 gap-5 md:mt-8">
      <!-- Sticky Side Table of Contents-->
      <aside class="hidden col-span-2 md:block">
        <div class="sticky top-16">
          <h2 class="uppercase font-medium text-xl lg:mt-12 tracking-wider">
            Table of contents
          </h2>
          <nav class="mt-4">
            <ul>
              <li
                @click="tableOfContentsHeadingClick(link)"
                :class="{ 'pl-4': link.depth === 3 }"
                class="toc-list"
                v-for="link of page.toc"
                :key="link.id"
              >
                <a
                  :class="{
                    'text-red-500 hover:text-red-600':
                      link.id === currentlyActiveToc,
                    'text-black hover:gray-900': link.id !== currentlyActiveToc,
                  }"
                  role="button"
                  class="transition-colors duration-75 text-base mb-2 block"
                  href="#"
                  v-scroll-to="`#${link.id}`"
                >
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <!-- Main Article -->
      <article class="prose prose-sm col-span-9 md:col-span-7 md:prose-base lg:mt-12 xl:prose-lg">
        <nuxt-content :document="page" />
      </article>
    </div>
  </div>
</template>