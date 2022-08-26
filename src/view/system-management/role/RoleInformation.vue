<template>
  <div class="role-information card">
    <h5>
      <slot name="title">{{ this.$t("role.name") }}</slot>
    </h5>
    <div class="p-fluid">
      <div class="formgrid grid">
          <div class="field col">
            <label for="roleCode">{{ this.$t("role.properties.roleCode") }}</label>
            <inputText id="roleCode" type="text"/>
          </div>
          <div class="field col">
            <label for="roleName">{{ this.$t("role.properties.roleName") }}</label>
            <inputText id="roleName" type="text"/>
          </div>
      </div>
      <div class="formgrid grid">
        <div class="field col">
          <label for="roleType">{{ this.$t("role.properties.roleType") }}</label>
          <Dropdown
              id="roleType"
              name="roleType"
              v-model="roleOption"
              optionLabel="roleType"
              :options="roleOptions"
              :placeholder="t('select')"></Dropdown>
        </div>
        <div class="field col">
          <label for="active">{{ this.$t("role.properties.active") }}</label>
          <Dropdown
              id="active"
              name="active"
              v-model="statusOption"
              optionLabel="status"
              :options="statusOptions"
              :placeholder="t('select')"></Dropdown>
        </div>
      </div>
    </div>
    <div class="grid justify-content-center mt-5">
      <Button type="button" class="p-button-outlined p-button-plain mr-3" :label="t('cancel')" icon="pi pi-times"/>
      <Button type="button" class="ml-3" :label="t('save')" icon="pi pi-save"/>
    </div>
  </div>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {

  setup() {
    const {t} = useI18n();
    return {t}
  },
  data() {
    return {
      statusOption:null,
      roleOption: null,

      statusOptions: [
        {status: 'Đang hoạt động', code: '1'},
        {status: 'Không hoạt động', code: '2'},
      ],
      roleOptions: [
        {roleType: 'Mặc định', code: '1'},
        {roleType: 'Tổ chức', code: '2'}
      ]
    }
  },
}

</script>

<style scoped lang="scss">
@import "src/assets/styles_Demo/createUser";
</style>