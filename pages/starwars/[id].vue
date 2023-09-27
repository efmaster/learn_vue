<template>
    <div>
        <PeopleCardDetails :people="people" />
    </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import type { StarWarsPeople } from '@/types/starwars/people'

definePageMeta({
    layout: 'starwars',
})

const { id } = useRoute().params
const uri = `https://akabab.github.io/starwars-api/api/id/${id}.json`

// fetch the product
const { data } = await useFetch<StarWarsPeople>(uri, { key: `id` })
let people: StarWarsPeople
if (data.value) people = data.value
</script>

<style scoped></style>
