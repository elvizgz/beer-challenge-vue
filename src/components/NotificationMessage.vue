<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    header: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    onClose() {
      this.visible = false
    }
  }
}
</script>
<template>
  <div class="ui message" :class="type" v-if="visible">
    <i class="close icon" @click="onClose"></i>
    <div class="header">{{ header }}</div>
    <slot></slot>
  </div>
</template>
