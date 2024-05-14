<script>
export default {
  data() {
    return {
      user: 'Elvira',
      newItem: '',
      hasNewItemHighPriority: false,
      items: [
        { id: '1', label: 'uno' },
        { id: '2', label: 'dos' },
        { id: '3', label: 'tres' }
      ],
      iceCreamFlavors: []
    }
  }
}
</script>
<template>
  <div class="about">
    <h1>Hola {{ user }}</h1>
    <input v-model.trim.lazy="newItem" type="text" placeholder="Add an item" class="input" />
    <div>
      <input type="checkbox" id="high-priority" v-model="hasNewItemHighPriority" />
      <label for="high-priority">High priority</label>
    </div>
    <p>{{ newItem }} - {{ hasNewItemHighPriority }}</p>
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
    <ul>
      <li v-for="flavor in iceCreamFlavors" :key="flavor">{{ flavor }}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.label }}</li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    /* display: flex; */
    /* align-items: center; */
    margin-top: 20px;
  }

  .input {
    margin: 20px;
  }
}
</style>
