<template>
  <div class="is-loaded is-boxed has-animations ">
    <div class="body-wrap boxed-container">
      <header class="site-header">
        <div class="container">
          <div class="site-header-inner">
            <div class="brand header-brand">
              <h1 class="m-0">
                <a href="#">
                  <img class="header-logo-image asset-light" src="../assets/images/logo-light.svg" alt="Logo">
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title mt-0">Xin chao Admin</h1>
                <p class="hero-paragraph">Our landing page template works on all devices, so you only have to set it up
                  once, and get beautiful results forever.</p>
                <div class="hero-cta">
                  <a class="button button-primary" href="#">tuyệt</a>
                  <div class="lights-toggle">
<!--                    <input id="lights-toggle" type="checkbox" name="lights-toggle" class="switch"-->
<!--                           :checked="!this.theme.darkTheme" @change="changeTheme">-->
<!--                    <label for="lights-toggle">-->
<!--                      <span></span>-->
<!--                    </label>-->
                  </div>
                </div>
              </div>
              <div class="hero-media">
                <div class="header-illustration">
                  <img class="header-illustration-image asset-light"
                       src="../assets/images/header-illustration-light.svg"
                       alt="Header illustration">
                  <img class="header-illustration-image asset-dark" src="../assets/images/header-illustration-dark.svg"
                       alt="Header illustration">
                </div>
                <div class="hero-media-illustration">
                  <img class="hero-media-illustration-image asset-light"
                       src="../assets/images/hero-media-illustration-light.svg" alt="Hero media illustration">
                  <img class="hero-media-illustration-image asset-dark"
                       src="../assets/images/hero-media-illustration-dark.svg" alt="Hero media illustration">
                </div>
                <div class="hero-media-container">
                  <img class="hero-media-image asset-light" src="../assets/images/hero-media-light.svg"
                       alt="Hero media">
                  <img class="hero-media-image asset-dark" src="../assets/images/hero-media-dark.svg" alt="Hero media">
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  </div>

</template>

<script>
  export default {
    name: "Dashboard",
    computed: {

    }

  }
</script>
<style scoped lang="scss">
@import 'src/assets/styles_Demo/dashboard.scss';
</style>