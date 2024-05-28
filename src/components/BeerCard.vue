<script>
export default {
  props: {
    beer: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div class="beer-card">
    <h2>{{ beer.name }}</h2>
    <p>{{ beer.description }}</p>
  </div>
</template>

<style>
.beer-card {
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>
