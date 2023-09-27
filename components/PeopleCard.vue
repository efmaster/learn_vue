<template>
    <div class="card text-center">
        <img
            :src="people?.image"
            class="m-auto max-h-32 max-w-[70%]"
            :alt="`Picture of '` + people.name + `'`"
        />
        <p class="m-4 truncate font-bold text-gray-500">{{ people.name }}</p>
        <NuxtLink :to="`/starwars/${people.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { StarWarsPeople } from '@/types/starwars/people'

const props = defineProps<{ people: StarWarsPeople }>()
const { people } = toRefs(props)
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>
