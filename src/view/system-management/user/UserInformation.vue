<template>
  <form @submit.prevent="saveUser" ref="uform" class="user-information">
    <h5>
      <slot name="title">
        {{ this.$t("user.name") }}
      </slot>
    </h5>
    <div class="p-fluid">
      <div class="formgrid grid flex-column-reverse xl:flex-row">
        <div class="col-12 xl:col-8 mt-5 xl:mt-0">
          <div class="field col">
            <label for="fullname">{{ this.$t("user.properties.fullname") }}</label>
            <inputText id="fullname"
                       :class="{ error: error.status, success: success.status}"
                       v-model="user.fullName"
                       type="text"/>
            <p class="error-text" v-if="error.status">{{ error.text }}</p>
            <p class="success-text" v-if="success.status">{{ success.text }}</p>
          </div>
          <div class="field col">
            <label for="username">{{ this.$t("user.properties.username") }}</label>
            <inputText id="username" v-model="user.userName" type="text"/>
          </div>
          <div class="field col">
            <label for="email">{{ this.$t("user.properties.email") }}</label>
            <inputText id="email" v-model="user.email" type="text"/>
          </div>
          <div class="grid col mt-0 flex-column xl:flex-row">
            <div class="field col">
              <label for="gender">{{ this.$t("user.properties.gender") }}</label>
              <Dropdown
                  id="gender"
                  name="gender"
                  v-model="genderOption"
                  optionLabel="gender"
                  :options="genderOptions"
                  :placeholder="t('select')"></Dropdown>
            </div>
            <div class="field col">
              <label for="birthday">{{ this.$t("user.properties.birthday") }}</label>
              <Calendar
                  id="birthday"
                  name="birthday"
                  :show-icon="true"
                  :show-button-bar="true"
                  v-model="calendarValue"
              ></Calendar>
            </div>
          </div>
          <div class="grid col mt-0 flex-column xl:flex-row">
            <div class="field col">
              <label for="telephone">{{ this.$t("user.properties.telephone") }}</label>
              <inputText id="telephone" v-model="user.telephone" type="text"/>
            </div>
            <div class="field col">
              <label for="status">{{ this.$t("user.properties.status") }}</label>
              <Dropdown
                  id="status"
                  name="status"
                  v-model="statusOption"
                  optionLabel="status"
                  :options="statusOptions"
                  :placeholder="t('select')"></Dropdown>
            </div>
          </div>
        </div>
        <div class="col-12 xl:col-4">
          <AvatarUpload/>
        </div>
      </div>
    </div>
    <div class="grid justify-content-center mt-5">
      <Button type="submit" class="p-button-outlined p-button-plain mr-3" :label="t('cancel')" icon="pi pi-times"/>
      <Button type="button" class="ml-3" :label="t('save')" icon="pi pi-save" @click="saveUser"/>
    </div>
  </form>
</template>

<script>
import AvatarUpload from "./AvatarUpload.vue";
import {useI18n} from 'vue-i18n';

export default {
  components: {AvatarUpload},

  setup() {
    const {t} = useI18n();
    return {t}
  },

  data() {
    return {
      genderOption: null,
      statusOption: null,

      genderOptions: [
        {gender: 'Nam', code: '1'},
        {gender: 'Nữ', code: '2'},
        {gender: 'Khác', code: '3'}
      ],
      calendarValue: null,
      statusOptions: [
        {status: 'Đang hoạt động', code: '1'},
        {status: 'Không hoạt động', code: '2'},
      ],
      user: {
        fullName: "",
        userName: "",
        email: "",
        telephone: "",
        gender: [],
      },
      error: {
        text: "",
        status:false,
      },
      success: {
        text: "",
        status:false,
      }
    }
  },
  methods: {
    saveUser() {
      console.log(this.user);
      if (this.user.fullName.length < 6 || this.user.fullName.length >20 ) {
        this.error = {
          text: "Tên chỉ có từ 6 đến 20 kí tự!",
          status: true,
        }
      } else if (this.user.fullName.length >5 && this.user.fullName.length <21 ) {
        this.success = {
          text: "look great!",
          status:true,
        }
      } else {
        this.error = {
          text: "",
          status:false,
        }
      }
    }
  }
}

</script>

<style scoped lang="scss">
@import "src/assets/styles_Demo/createUser";
</style>