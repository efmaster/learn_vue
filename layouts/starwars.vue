<template>
    <div>
        <header class="bg-white shadow-md">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/starwars" class="font-bold"
                    >StarWars Personen</NuxtLink
                >
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot></slot>
        </div>

        <footer class="container mx-auto flex justify-between border-t-2 p-4">
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/starwars">StarWars Personen</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
