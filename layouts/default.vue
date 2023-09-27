<template>
    <div>
        <header class="bg-white shadow-sm">
            <nav class="container mx-auto flex justify-between p-4">
                <NuxtLink to="/" class="font-bold">Home</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/starwars" class="btn"
                            >StarWars Personen</NuxtLink
                        >
                    </li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
