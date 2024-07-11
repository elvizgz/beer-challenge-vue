<script>
export default {
  data() {
    return {
      userName: '',
      userProfile: null
    }
  },
  methods: {
    getUser() {
      this.userProfile = null
      fetch(`https://api.github.com/users/${this.userName}`)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((data) => {
          this.userProfile = data
        })
    }
  },
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
}
</script>

<template>
  <h1>GitHub Profiles</h1>
  <github-user-card username="danielkellyio"></github-user-card>
  <div>
    <div class="ui action input">
      <input
        type="text"
        v-model="userName"
        placeholder="Enter github username"
        data-form-type="query"
      />
      <button @click="getUser" class="ui primary button">Get user</button>
    </div>
  </div>
  <div v-if="userProfile">
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
  </div>
  <div v-else>User not found</div>
</template>
