<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-if="pending">Loading ....</div>
            <div v-for="people in peoples" v-else :key="people.id">
                <PeopleCard :people="people" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import type { StarWarsPeople } from '@/types/starwars/people'

definePageMeta({
    layout: 'starwars',
})

// fetch the products
const { data, pending } = await useFetch<StarWarsPeople[]>(
    'https://akabab.github.io/starwars-api/api/all.json'
)
const peoples = data.value
</script>

<style scoped></style>
