<script>
export default {
  name: 'UserCard',
  props: ['userProfile'],
  computed: {
    avatarUrl() {
      return this.userProfile?.avatar_url || this.userProfile?.gravatar_url || ''
    },
    displayName() {
      return this.userProfile?.name || this.userProfile?.login || ''
    },
    joinYear() {
      return new Date(this.userProfile?.created_at).getFullYear()
    },
    friendsCount() {
      return this.userProfile?.followers + this.userProfile?.following
    }
  }
  // Your component's lifecycle hooks go here
}
</script>

<template>
  <div class="ui card">
    <div class="image">
      <img v-bind:src="avatarUrl" />
    </div>
    <div class="content">
      <a class="header" v-bind:href="userProfile.html_url" target="_blank">{{ displayName }}</a>
      <div class="meta">
        <span class="date">Joined in {{ joinYear }}</span>
      </div>
      <div class="description">{{ userProfile.bio }}</div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        {{ friendsCount }} Friends
      </a>
    </div>
  </div>
</template>
