<script>
export default {
  data() {
    return {
      user: 'Elvira',
      newItem: '',
      editing: false,
      hasNewItemHighPriority: false,
      items: [
        { id: '1', label: 'uno', purchased: false },
        { id: '2', label: 'dos', purchased: true },
        { id: '3', label: 'tres', purchased: false }
      ],
      iceCreamFlavors: []
    }
  },
  computed: {
    pendingItems() {
      return this.items.filter((item) => !item.purchased).length
    }
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.items.length + 1,
        label: this.newItem,
        purchased: false
      })
      this.newItem = ''
    },
    toggleEditing() {
      console.log('editing', this.editing)
      this.editing = !this.editing
      this.newItem = ''
    }
  }
}
</script>
<template>
  <div class="about">
    <div class="header">
      <h1>Hola {{ user }}</h1>
      <p>You have {{ pendingItems }} to buy</p>
      <button v-if="editing" @click="toggleEditing">Cancel</button>
      <button v-if="!editing" @click="toggleEditing">Add item</button>
    </div>

    <div v-if="editing">
      <input
        v-model.trim="newItem"
        type="text"
        placeholder="Add an item"
        class="input"
        @keyup.enter="addItem"
      />
      <input type="checkbox" id="high-priority" v-model="hasNewItemHighPriority" />
      <label for="high-priority">High priority</label>
      <button class="btn btn-primary" @click="addItem" v-bind:disabled="!newItem.length">
        Save item
      </button>
    </div>
    <p>{{ newItem }} - {{ hasNewItemHighPriority }}</p>
    <a v-bind:href="newItem">Link</a>
    <div>
      <div>
        <input type="checkbox" id="chocolate" v-model="iceCreamFlavors" value="chocolate" />
        <label for="chocolate">Chocolate</label>
      </div>
      <div>
        <input type="checkbox" id="strawberry" v-model="iceCreamFlavors" value="strawberry" />
        <label for="chocolate">Strawberry</label>
      </div>
      <div>
        <input type="checkbox" id="vanilla" v-model="iceCreamFlavors" value="vanilla" />
        <label for="chocolate">Vanilla</label>
      </div>
    </div>
    <hr />
    <p v-if="!items.length">Nothing to buy</p>
    <ul>
      <li v-for="flavor in iceCreamFlavors" :key="flavor">
        {{ flavor }}
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="item in items" :key="item.id" :class="{ strikeout: item.purchased }">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    margin-top: 20px;
  }

  .input {
    margin: 20px;
  }

  .strikeout {
    text-decoration: line-through;
  }
}
</style>
