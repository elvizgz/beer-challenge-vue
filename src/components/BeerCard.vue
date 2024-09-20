<script setup lang="ts">
import { Beer } from '@/types/beer';
import { defineProps } from 'vue';

interface BeerCardProps {
    beer: Beer;
}
const props = defineProps<BeerCardProps>();
</script>
<template>
    <div class="beer-card">
        <h2>{{ beer.name }}</h2>
    </div>
</template>
<style scoped>
.beer-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>