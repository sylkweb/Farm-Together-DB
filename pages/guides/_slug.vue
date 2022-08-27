<template>
    <article class="prose">
        <a href="#" v-scroll-to="'#update-a-publication'">Jump to the part of the page with the “anchor-name” id </a>
        <nuxt-content :document="page" />
    </article>
</template>

<script>
export default {
    name: 'Test',
    async asyncData({ $content, params, error }) {

        const page = await $content('guides', params.slug)
            .fetch()
            .catch(err => {
            error({ statusCode: 404, message: "Page not found" });
            });

        return {
            page
        };
    }
}
</script>