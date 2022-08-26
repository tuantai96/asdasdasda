<template>
  <avatar v-if="this.getAvatarURL" :image="this.getAvatarURL" shape="circle" size="large"
          class="ml-3"
          @click="getAvatarURL"/>
  <button v-else class="p-link layout-topbar-button" @click="toggleAvatarMenu">
      <i class="pi pi-user"></i>
  </button>

</template>

<script>
  export default {
    name: 'AppAvatar',
    props: {
      toggleAvatarMenu: {},
      getAvatarURL: String
    }
  }
</script>

<style>

</style>