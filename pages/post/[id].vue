<template>
    <Head>
        <Title>Post {{ id }}</Title>
    </Head>

    <h2>Es el Post num. {{ id }}</h2>
</template>


<script setup>
const { id } = useRoute().params;

definePageMeta({
    validate: async (route) => {
        const nuxtApp = useNuxtApp();
        return /^\d+$/.test(route.params.id);
    }
})
</script>