<template>
<Head>
    <Title>Post</Title>
</Head>

    <h2>Post page</h2>

    <ul>
        <li>
            <NuxtLink to="/post/1">Uno</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/post/2">Dos</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/post/3">Tres</NuxtLink>
        </li>
    </ul>
</template>
  
<script setup>
useHead({
    title: "Post Page",
})
</script>