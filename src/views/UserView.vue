<script>
import UserCard from '@/components/UserCard.vue'

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
  components: {
    UserCard
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
    <UserCard :userProfile="userProfile" />
  </div>
  <div v-else>User not found</div>
</template>
