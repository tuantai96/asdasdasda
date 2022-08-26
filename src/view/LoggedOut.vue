<template>
  <div class="flex justify-content-center align-items-center flex-column h-screen">
    <h2>
        <span class="block">Bạn đã đăng xuất!</span>
    </h2>
    <h4>
        Bạn đang chuyển đến trang đăng nhập sau
        {{ countdown }}
        giây,
        <router-link to="/Login">Đăng nhập lại</router-link>
    </h4>
  </div>
</template>

<script>
  export default {
    name: "loggedOut",

    data(){
      return{
        countdown: 3
      }
    },
    mounted() {
      this.interval = setInterval( () => {
        if (!this.countdown){
          this.$router.push({
            name: 'Login'
          });
          clearInterval(this.interval);
          return;
        }
        this.countdown--;
      }, 1000);
    },
    beforeUnmount() {
      clearInterval(this.interval);
    }
  }
</script>
 <style scoped>

 </style>