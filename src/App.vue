<script setup lang="ts">
import { computed, ref } from 'vue'

interface Item {
  id: string
  label: string
  isHighPriority: boolean
}

const header = ref('Shopping list APP')
const items = ref<Item[]>([])
const newItem = ref('')
const isNewItemHighPriority = ref(false)

const addItem = () => {
  items.value.push({
    id: (items.value.length + 1).toString(),
    label: newItem.value,
    isHighPriority: isNewItemHighPriority.value
  })
  newItem.value = ''
  isNewItemHighPriority.value = false
}

const characterCount = computed(() => newItem.value.length)
</script>

<template>
  <h1>{{ header }}</h1>
  <input type="text" placeholder="Add an item" v-model="newItem" v-on:keyup.enter="addItem" />
  <span>{{ characterCount }} characters</span>
  <label>
    <input type="checkbox" v-model="isNewItemHighPriority" />
    High priority
  </label>
  <input type="button" value="Add" v-on:click="addItem" class="btn bnt-primary" />

  <div v-if="!items.length">There are no items. Start adding one</div>

  <div v-for="item in items" :key="item.id">
    {{ item.label }}
  </div>
</template>

<style scoped></style>
