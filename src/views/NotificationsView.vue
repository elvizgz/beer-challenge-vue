<script>
import NotificationMessage from '@/components/NotificationMessage.vue'

export default {
  components: {
    NotificationMessage
  }
}
</script>
<template>
  <div id="app" class="ui container">
    <h1>Notification Center</h1>

    <NotificationMessage type="info" header="Notification 1"
      ><div>This is the content of the first notification</div></NotificationMessage
    >
    <NotificationMessage type="warning" header="Notification 2"
      ><div>This is the content of the second notification</div></NotificationMessage
    >
    <NotificationMessage type="error" header="Notification 3"
      ><div>This is the content of the third notification</div></NotificationMessage
    >
    <NotificationMessage type="success" header="Notification 4"
      ><div>This is the content of the fourth notification</div></NotificationMessage
    >
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
  padding: 20px
}
</style>