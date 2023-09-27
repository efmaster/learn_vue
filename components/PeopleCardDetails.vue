<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img
                    :src="`${people.image}`"
                    class="mx-auto my-7"
                    :alt="`Picture of '` + people.name + `'`"
                />
            </div>
            <div class="p-7">
                <h2 class="my-7 text-4xl">{{ people.name }}</h2>
                <p class="my-7 text-xl">Gender - {{ people.gender }}</p>
                <h3 class="mb-4 border-b-2 pb-2 font-bold">Wiki Link:</h3>
                <p class="mb-7">{{ people.wiki }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { StarWarsPeople } from '@/types/starwars/people'

const props = defineProps<{ people: StarWarsPeople }>()

const { people } = toRefs(props)
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>
