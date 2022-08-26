<template>
  <div class="user-detail">
    <div class="card flex flex-column sm:flex-column lg:flex-row">
      <div class="col-12 lg:col-3 sm:col-12">

        <div id="sub-menu">
          <Button :label="t('back')" class="p-button-text p-button-secondary" icon="pi pi-chevron-left" iconPos="left"
                  @click="this.$router.back()"/>
          <Divider/>
          <div class="flex flex-wrap flex-row sm:flex-row lg:flex-column">
            <div v-for="item in userDetails" :key="item.view">
              <Button :label="item.name" class="text-left w-full p-button-text"
                      :class="currentView === item.view ? 'p-button-primary' : 'p-button-secondary'"
                      @click="changeView(item.view)"/>
            </div>
          </div>

        </div>
      </div>

      <div class="col-12 lg:col-9 sm:col-12">
        <div class="user-detail-view" v-if="!loading">
          <UserInformation
              v-if="currentView === 'UserInformation'" :user="user"/>
<!--          <ChangePassword-->
<!--              v-if="currentView === 'ChangePassword'" :user="user"/>-->
<!--          <RoleAndOrganization-->
<!--              v-if="currentView === 'RoleAndOrganization'" :user="user"/>-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {useI18n} from 'vue-i18n';
// import ChangePassword from "./ChangePassword.vue";
import UserInformation from "./UserInformation.vue";
// import RoleAndOrganization from './RoleAndOrganization.vue';
// import {getUserInfo} from '/src/api/admin/userApi';

export default {
  components: {UserInformation, ChangePassword, RoleAndOrganization},

  data() {
    return {
      userDetails: [
        {name: this.$t("userDetail.userInformation"), view: "UserInformation", onclick: ''},
        // {name: this.$t("userDetail.changePassword"), view: "ChangePassword", onclick: ''},
        // {name: this.$t("userDetail.roleAndOrganization"), view: "RoleAndOrganization", onclick: ''}
      ],
      user: {},
      currentView: "UserInformation",
      loading: true
    }
  },

  setup() {
    const {t} = useI18n();
    return {t};
  },

  async created() {
    this.loading = true;
    const response = await getUserInfo({userId: this.$route.params.userId});
    if (response) {
      const {birthday} = response;
      if (birthday) {
        response.birthday = new Date(birthday);
      }
      this.user = {...response};
      this.loading = false;
    }
  },

  methods: {
    changeView(view) {
      this.currentView = view === '' ? this.userDetails[0].view : view;
    },
  },
}
</script>

<style scoped>

</style>