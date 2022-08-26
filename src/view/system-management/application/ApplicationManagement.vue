<template>
  <div class="card">
    <h5>{{ t('application.title') }}</h5>
    <form ref="form">
      <div class="grid">
        <div class="col-3 h-full text-center">
          <h6>Logo</h6>
          <AvatarUpload icon="pi-image" shape="rectangle" class="m-auto"></AvatarUpload>
        </div>
        <div class="col-9">
          <div class="field col">
            <label for="appName">{{ t("application.appName") }}</label>
            <InputText id="appName" name="appName" type="text" class="w-full"/>
          </div>
          <div class="field col">
            <label for="appTitle">{{ t("application.appTitle") }}</label>
            <InputText id="appTitle" name="appTitle" type="text" class="w-full"/>
          </div>
          <div class="field col">
            <label for="appFooter">{{ t("application.appFooter") }}</label>
            <InputText id="appFooter" name="appFooter" type="text" class="w-full"/>
          </div>
        </div>
      </div>
      <div class="grid md:justify-content-center mt-5">
        <Button :label="t('cancel')" icon="pi pi-times" class="p-button-outlined p-button-plain mr-3" type="submit"></Button>
        <Button :label="t('save')" icon="pi pi-save" class="ml-3" type="submit"></Button>
      </div>
    </form>

  </div>
</template>

<script>
import {useI18n} from "vue-i18n";
import AvatarUpload from "../user/AvatarUpload.vue";
// import EventBus from "../../../commons/EventBus";
// import {getAppInfo, saveAppInfo} from "../../../api/admin/appApi";
// import {GATEWAY_URL} from "../../../api/configService";
// import {toastError, toastSuccess} from "../../../commons/ToastCustomService";

export default {
  // name: "ApplicationManagement",
  // data() {
  //   return {
  //     appName: null,
  //     appTitle: null,
  //     appFooter: null,
  //     appLogo: null,
  //     loaded: false
  //   };
  // },
  components: {AvatarUpload},
  // methods: {
  //   getLogoUrl(logo) {
  //     return logo ? GATEWAY_URL + `/files/preview/${logo}`
  //         .replaceAll('\\', '/')
  //         .replaceAll('\/\/', '/') : '';
  //   },
  //   saveAppInfo() {
  //     const form = this.$refs.form;
  //     saveAppInfo(new FormData(form))
  //         .then(data => {
  //           EventBus.dispatch('updateAppInfo', data);
  //           toastSuccess({});
  //         })
  //         .catch(e => toastError({}));
  //   }
  // },
  setup() {
    const {t} = useI18n();
    return {t};
  },
  // async created() {
  //   getAppInfo().then(data => {
  //         this.appName = data.appName;
  //         this.appTitle = data.appTitle;
  //         this.appFooter = data.appFooter;
  //         this.appLogo = this.getLogoUrl(data.appLogo);
  //         this.loaded = true;
  //       }
  //   );
  // }
};
</script>

<style scoped>
.field label {
  display: block;
}
</style>
