<template>
    <div>
        <Navbar />

        <main>
            <slot></slot>
        </main>

        <footer>&copy; Test - {{ currentYear }}</footer>
    </div>
</template>

<script setup>


useHead({
    titleTemplate:"Mi primer nuxt - %s",
    link: [{
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
        crossorigin: "anonymous"
    }
    ],
    script: [{
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    },
    {
        src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    }]
})
const currentYear = new Date().getUTCFullYear()
</script>