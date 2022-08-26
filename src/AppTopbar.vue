<template>
  <div class="layout-topbar">
<!--    ten, logo-->
    <router-link to="/" class="layout-topbar-logo">
      <img alt="Logo" :src="topbarImage()" />
      <span>ZLANTAN_IBRAHIMOVIC</span>
    </router-link>
<!--    menu-->
    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
      <i class="pi pi-bars"></i>
    </button>

    <button class="p-link layout-topbar-menu-button layout-topbar-button">
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <span class="p-buttonset">
              <Button value="vn"
                      @click.prevent="callSetLangActions('vi')"
                      name="vi"
                      class="w-3rem justify-content-center"
                      label="VI"/>
              <Button value="en"
                      @click.prevent="callSetLangActions('en')"
                      name="en"
                      class="w-3rem justify-content-center"
                      label="EN"/>
    </span>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <span class="avatar-fullname">
            Admin
        </span>
        <AppAvatar :toggle-avatar-menu="toggleAvatarMenu" :get-avatar-url="getAvatarURL" ></AppAvatar>
        <Menu class="mt-3" ref="avatar-menu" :mode="avatarMenu" :popup="true"></Menu>
      </li>
    </ul>
  </div>
</template>

<script>
import AppAvatar from "./AppAvatar.vue";

export default {
  components: {AppAvatar},
  methods: {
    callSetLangActions(locale) {
      // this.$store.dispatch("language/setLang", locale);
      this.$i18n.locale = locale;
    },
    onMenuToggle(event) {
      this.$emit('menu-toggle', event);
    },
    onTopbarMenuToggle(event) {
      this.$emit('topbar-menu-toggle', event);
    },
    topbarImage() {
      return this.$appState.darkTheme ? 'images/Icon.jfif' : 'images/Icon.jfif' ;
    }
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  }
}
</script>