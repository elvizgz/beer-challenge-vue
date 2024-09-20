<script setup lang="ts">
import BeerCard from '@/components/BeerCard.vue';
import { Beer } from '@/types/beer';
import { ref } from 'vue';

const beers: Beer[] = [
    { name: 'Beer 1' },
    { name: 'Beer 2' },
    { name: 'Beer 3' }];
const loading = ref(false);
</script>

<template>
    <div v-if="loading">
        Loading beers...
    </div>
    <div v-else>
        <BeerCard v-for="beer in beers" :key="beer.name" :beer="beer" />
        </div> 
</template>