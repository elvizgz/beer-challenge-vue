<script>
import BeerCard from '@/components/BeerCard.vue'

export default {
  data() {
    return {
      beers: [
        { id: '1', name: 'Beer 1', description: 'This is beer 1' },
        { id: '2', name: 'Beer 2', description: 'This is beer 2' },
        { id: '3', name: 'Beer 3', description: 'This is beer 3' },
        { id: '4', name: 'Beer 4', description: 'This is beer 4' },
        { id: '5', name: 'Beer 5', description: 'This is beer 5' },
        { id: '6', name: 'Beer 6', description: 'This is beer 6' }
      ],
      selectedBeer: null
    }
  },
  components: {
    BeerCard
  },
  methods: {
    handleBeerClick(beer) {
      this.selectedBeer = beer
    }
  }
}
</script>
<template>
  <h1>Our beers</h1>
  <div class="layout">
    <div class="column">
      <p v-if="beers.length === 0">There are no beers at this moment</p>
      <div class="beers">
        <BeerCard
          v-for="beer in beers"
          :key="beer.id"
          :beer="beer"
          @click="handleBeerClick(beer)"
        />
      </div>
    </div>
    <div class="column beer-detail">
      <div v-if="selectedBeer">
        <div class="beer-info">
          <h2>{{ selectedBeer.name }}</h2>
          <p>{{ selectedBeer.description }}</p>
        </div>
      </div>
      <div v-else>
        <p>Select a beer to see its details</p>
      </div>
    </div>
  </div>
</template>
<style>
.layout {
  display: flex;
  justify-items: space-between;
  gap: 1rem;
}
.column {
  width: 50%;
}
.beers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 10px;
}
.beer-detail {
  padding: 1rem;
}
</style>
